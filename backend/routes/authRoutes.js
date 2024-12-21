const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const cors = require('cors');
dotenv.config();

router.get('/login', (req, res) => {
    res.render('pages/auth-pages/authpages', { page: 'login' });
});

router.get('/register', (req, res) => {
    res.render('pages/auth-pages/authpages', { page: 'register' });
});

router.post('/login', async (req, res) => {
    try {
        console.log('بيانات الطلب:', req.body);
        const { identifier, password } = req.body;

        // التحقق من وجود معرف المستخدم وكلمة المرور
        if (!identifier || !password) {
            return res.status(400).json({ message: 'يرجى إدخال رقم الهاتف/البريد الإلكتروني وكلمة المرور' });
        }

        // البحث عن المستخدم باستخدام رقم الهاتف أو البريد الإلكتروني
        const user = await User.findOne({
            $or: [
                { email: identifier.toLowerCase() },
                { phone: identifier }
            ]
        });

        if (!user) {
            return res.status(401).json({ message: 'رقم الهاتف/البريد الإلكتروني غير موجود' });
        }

        // التحقق من صحة كلمة المرور
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'كلمة المرور غير صحيحة' });
        }

        // إنشاء توكن للمستخدم مع إضافة الصلاحية
        const token = jwt.sign(
            { 
                userId: user._id,
                email: user.email,
                phone: user.phone,
                role: user.role  // إضافة الصلاحية للتوكن
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: 'تم تسجيل الدخول بنجاح',
            token,
            user: {
                id: user._id,
                email: user.email,
                phone: user.phone,
                role: user.role  // إضافة الصلاحية للبيانات المرجعة
            }
        });

    } catch (error) {
        console.error('خطأ في تسجيل الدخول:', error);
        res.status(500).json({ 
            message: 'حدث خطأ في تسجيل الدخول',
            error: process.env.NODE_ENV === 'development' ? error.message : 'خطأ في الخادم'
        });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;

        // التحقق من وجود جميع البيانات المطلوبة
        if (!username || !email || !password || !phone) {
            return res.status(400).json({ message: 'جميع الحقول مطلوبة' });
        }

        // التحقق من صحة البريد الإلكتروني
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'البريد الإلكتروني غير صالح' });
        }

        // التحقق من قوة كلمة المرور
        if (password.length < 8) {
            return res.status(400).json({ message: 'يجب أن تكون كلمة المرور 8 أحرف على الأقل' });
        }

        // التحقق من صحة رقم الهاتف
        const phoneRegex = /^[0-9]{11}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ message: 'رقم الهاتف غير صالح' });
        }

        // التحقق من عدم وجود مستخدم بنفس البريد الإلكتروني
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'البريد الإلكتروني مستخدم بالفعل' });
        }

        // التحقق من عدم وجود مستخدم بنفس رقم الهاتف
        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return res.status(400).json({ message: 'رقم الهاتف مستخدم بالفعل' });
        }

        // تشفير كلمة المرور
        const hashedPassword = await bcrypt.hash(password, 12);

        // إنشاء مستخدم جديد
        const user = new User({
            username: username.trim(),
            email: email.toLowerCase(),
            password: hashedPassword,
            phone
        });

        await user.save();

        // إنشاء توكن للمستخدم الجديد
        const token = jwt.sign(
            { 
                userId: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            message: 'تم التسجيل بنجاح',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.error('خطأ في التسجيل:', error);
        res.status(500).json({ 
            message: 'حدث خطأ في التسجيل',
            error: process.env.NODE_ENV === 'development' ? error.message : 'خطأ في الخادم'
        });
    }
});

router.get('/reset-password', (req, res) => {
    res.render('pages/auth-pages/forgot-password');

});

router.post('/reset-password', async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'البريد الإلكتروني غير موجود' });
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000); // رمز تحقق واحد

    router.use(
        cors({
            credentials: true,
            origin: "http://localhost:3000"
        })
    );

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return res.status(500).json({ message: 'يرجى التحقق من إعدادات البريد الإلكتروني' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'رمز التحقق',
        text: `رمز التحقق الخاص بك هو: ${verificationCode}`,
    };

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.error('خطأ في إرسال البريد الإلكتروني:', error);
            return res.status(500).json({ message: 'حدث خطأ أثناء إرسال البريد الإلكتروني', error: error.message });
        }

        // تخزين رمز التحقق في قاعدة البيانات مع معرف المستخدم
        user.verificationCode = verificationCode; // تأكد من وجود حقل verificationCode في نموذج المستخدم
        await user.save();

        res.status(200).json({ message: 'تم إرسال رمز التحقق إلى بريدك الإلكتروني' });
    });
});

module.exports = router;
