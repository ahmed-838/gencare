document.addEventListener('DOMContentLoaded', function() {
    function showCookieConsent() {
        const cookieConsent = document.createElement('div');
        cookieConsent.innerHTML = `
            <div class="cookie-consent" style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: #f1f1f1;
                padding: 20px;
                text-align: center;
                box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
                z-index: 9999;
            ">
                <p style="margin: 0 0 10px;">
                    نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بالمتابعة، أنت توافق على استخدامنا لملفات تعريف الارتباط.
                </p>
                <button onclick="acceptCookies()" style="
                    padding: 8px 20px;
                    background: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                ">موافق</button>
            </div>
        `;
        document.body.appendChild(cookieConsent);
    }

    window.acceptCookies = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.querySelector('.cookie-consent').style.display = 'none';
    }

    // التحقق من موافقة المستخدم
    if (!localStorage.getItem('cookiesAccepted')) {
        showCookieConsent();
    }
}); 