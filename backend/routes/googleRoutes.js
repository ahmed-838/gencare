const express = require('express');
const router = express.Router();
const passport = require('passport');
const { generateToken } = require('../config/google-passport');
const jwt = require('jsonwebtoken');

// مسار تسجيل الدخول باستخدام Google
router.get('/',
  passport.authenticate('google', { 
    scope: ['profile', 'email'] 
  })
);

// مسار callback لـ Google
router.get('/callback', 
    passport.authenticate('google', { session: false }),
    (req, res) => {
        try {
            // تأكد من وجود بيانات المستخدم
            if (!req.user) {
                console.error('لا يوجد بيانات مستخدم');
                return res.redirect('/?error=no_user_data');
            }

            // إنشاء التوكن
            const token = jwt.sign(
                { 
                    userId: req.user._id,
                    email: req.user.email,
                    role: req.user.role || 'user'
                },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            console.log('Generated Token for Google Auth:', token);
            console.log('User Data:', req.user);

            // تشفير التوكن في URL
            const encodedToken = encodeURIComponent(token);
            const redirectUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}?token=${encodedToken}&google_auth=success`;
            
            console.log('Redirecting to:', redirectUrl);
            res.redirect(redirectUrl);
        } catch (error) {
            console.error('Error in Google callback:', error);
            res.redirect('/?error=auth_failed');
        }
    }
);

// إضافة مسار التحقق من التوكن
router.get('/check-google-token', (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ valid: true, user: decoded });
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ valid: false, message: 'Invalid token' });
    }
});

module.exports = router;