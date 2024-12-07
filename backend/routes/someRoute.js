const express = require('express');
const router = express.Router();
const { verifyToken, allowAll, isAuthenticated, isAdmin, isAdminOrUser } = require('../middleware/auth');

// صفحات يمكن للجميع مشاهدتها
router.get('/public-page', allowAll, (req, res) => {
    // your code here
});

// صفحات للمستخدمين المسجلين فقط
router.get('/user-page', verifyToken, isAuthenticated, (req, res) => {
    // your code here
});

// صفحات للأدمن فقط
router.get('/admin-page', verifyToken, isAdmin, (req, res) => {
    // your code here
});

// صفحات مشتركة بين الأدمن والمستخدمين
router.get('/user-admin-page', verifyToken, isAdminOrUser, (req, res) => {
    // your code here
}); 