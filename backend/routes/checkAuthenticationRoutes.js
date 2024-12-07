const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');

// راوت للتحقق من حالة المستخدم
router.get('/check-status', verifyToken, (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'غير مصرح',
                user: null
            });
        }

        res.json({
            success: true,
            user: req.user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'خطأ في الخادم',
            error: error.message
        });
    }
});

module.exports = router; 