const jwt = require('jsonwebtoken');

class AuthMiddleware {
    static verifyToken(req, res, next) {
        try {
            const token = AuthMiddleware.extractToken(req);
            if (!token) {
                return AuthMiddleware.sendUnauthorized(res, 'توكن المصادقة مطلوب');
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            if (error.name === 'JsonWebTokenError') {
                return AuthMiddleware.sendUnauthorized(res, 'توكن غير صالح');
            }
            if (error.name === 'TokenExpiredError') {
                return AuthMiddleware.sendUnauthorized(res, 'انتهت صلاحية التوكن');
            }
            return AuthMiddleware.sendServerError(res);
        }
    }

    static extractToken(req) {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith('Bearer ')) return null;
        return authHeader.split(' ')[1];
    }

    static isAdmin(req, res, next) {
        if (AuthMiddleware.checkAuthentication(req, res)) {
            if (req.user.role !== 'admin') {
                return AuthMiddleware.sendForbidden(res);
            }
            next();
        }
    }

    static isUser(req, res, next) {
        if (AuthMiddleware.checkAuthentication(req, res)) {
            if (req.user.role !== 'user') {
                return AuthMiddleware.sendForbidden(res);
            }
            next();
        }
    }

    static isAuthenticated(req, res, next) {
        if (!req.user) {
            return AuthMiddleware.sendUnauthorized(res, 'يجب تسجيل الدخول أولاً');
        }
        next();
    }

    static sendUnauthorized(res, message) {
        return res.status(401).json({
            success: false,
            message,
            user: null
        });
    }

    static sendForbidden(res) {
        return res.status(403).json({
            success: false,
            message: 'غير مصرح لك بالوصول لهذه الصفحة'
        });
    }

    static sendServerError(res) {
        return res.status(500).json({
            success: false,
            message: 'حدث خطأ في الخادم. الرجاء المحاولة مرة أخرى',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
            user: null
        });
    }

    static checkAuthentication(req, res) {
        if (!req.user) {
            AuthMiddleware.sendUnauthorized(res, 'يجب تسجيل الدخول أولاً');
            return false;
        }
        return true;
    }
}

module.exports = AuthMiddleware; 