class AuthService {
    static getToken() {
        return localStorage.getItem('token') || localStorage.getItem('googleToken');
    }

    static setToken(token, isGoogle = false) {
        console.log('Setting token:', { token, isGoogle });
        if (isGoogle) {
            localStorage.setItem('googleToken', token);
            localStorage.setItem('isGoogleUser', 'true');
        } else {
            localStorage.setItem('token', token);
        }
    }

    static removeToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('googleToken');
        localStorage.removeItem('isGoogleUser');
    }

    static isGoogleUser() {
        return localStorage.getItem('isGoogleUser') === 'true';
    }

    // إضافة دالة التحقق من التوكن
    static async verifyToken() {
        const token = this.getToken();
        if (!token) return null;

        try {
            const response = await fetch('/api/check-auth/check-status', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            
            if (!response.ok) {
                this.removeToken();
                return null;
            }

            const data = await response.json();
            return {
                success: true,
                user: data.user,
                isGoogle: this.isGoogleUser()
            };
        } catch (error) {
            console.error('خطأ في التحقق من التوكن:', error);
            this.removeToken();
            return null;
        }
    }
}

class NavbarManager {
    constructor() {
        this.elements = {
            management: document.querySelector('.management-item'),
            authButtons: document.querySelector('.auth-buttons'),
            logoutButton: document.querySelector('.logout-btn')
        };
        this.init();
    }

    async init() {
        await this.updateNavbarState();
        this.elements.logoutButton?.addEventListener('click', () => this.handleLogout());
    }

    async updateNavbarState() {
        const token = AuthService.getToken();
        console.log('التوكن الحالي:', token);

        // إخفاء جميع العناصر أولاً
        Object.values(this.elements).forEach(element => {
            if (element) element.style.display = 'none';
        });

        if (token) {
            const authData = await AuthService.verifyToken();
            if (authData?.success) {
                console.log('المستخدم مسجل الدخول');
                if (this.elements.logoutButton) {
                    this.elements.logoutButton.style.display = 'block';
                }
                if (authData.user?.role === 'admin' && this.elements.management) {
                    this.elements.management.style.display = 'block';
                }
            } else {
                console.log('فشل التحقق من التوكن');
                if (this.elements.authButtons) {
                    this.elements.authButtons.style.display = 'flex';
                }
            }
        } else {
            console.log('المستخدم غير مسجل الدخول');
            if (this.elements.authButtons) {
                this.elements.authButtons.style.display = 'flex';
            }
        }
    }

    async handleLogout() {
        if (AuthService.isGoogleUser()) {
            try {
                if (window.google) {
                    await google.accounts.oauth2.revoke(AuthService.getToken());
                }
            } catch (error) {
                console.error('خطأ في تسجيل الخروج من جوجل:', error);
            }
        }
        AuthService.removeToken();
        window.location.href = '/';
    }
}

// تنفيذ الكود عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const googleAuth = urlParams.get('google_auth');
        
        console.log('URL Parameters:', { token, googleAuth });

        if (token && googleAuth === 'success') {
            console.log('Found Google auth token');
            console.log('Token is valid, setting in localStorage');
            AuthService.setToken(token, true);
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    } catch (error) {
        console.error('Error processing auth:', error);
    }

    new NavbarManager();
});