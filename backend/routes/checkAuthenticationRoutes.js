const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');

// راوت للتحقق من حالة المصادقة للمستخدم
router.get('/check-status', verifyToken, (req, res) => {
    try {
        // إضافة سجل للتتبع
        console.log('بيانات المستخدم:', req.user);
        
        if (!req.user) {
            // إضافة سجل عند فشل المصادقة
            console.log('فشل المصادقة: المستخدم غير موجود');
            return res.status(401).json({
                success: false,
                message: 'المستخدم غير مصرح له بالوصول',
                isAuthenticated: false,
                user: null
            });
        }

        // إرجاع بيانات المستخدم في حالة نجاح المصادقة
        res.json({
            success: true,
            message: 'تم المصادقة بنجاح',
            isAuthenticated: true,
            user: req.user
        });
    } catch (error) {
        console.error('خطأ في التحقق من المصادقة:', error);
        res.status(500).json({
            success: false,
            message: 'حدث خطأ أثناء التحقق من المصادقة',
            isAuthenticated: false,
            error: error.message
        });
    }
});

module.exports = router; 