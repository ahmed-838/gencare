const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// إضافة زر تسجيل الخروج ديناميكياً
function addLogoutButton() {
  const logoutButton = document.createElement('button');
  logoutButton.className = 'logout-button';
  logoutButton.textContent = 'تسجيل الخروج';
  document.body.appendChild(logoutButton);

  logoutButton.addEventListener('click', async () => {
    // مسح بيانات الجلسة
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userSession');
    
    // مسح كوكيز جوجل
    document.cookie = 'user_info=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    try {
      // إرسال طلب لإنهاء الجلسة في الخادم
      await fetch('/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('خطأ في تسجيل الخروج:', error);
    }

    // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    window.location.href = '/auth/login';
  });
}

// التحقق من حالة تسجيل الدخول عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  const userSession = localStorage.getItem('userSession');
  
  if (token || userSession) {
    addLogoutButton();
  }
});
