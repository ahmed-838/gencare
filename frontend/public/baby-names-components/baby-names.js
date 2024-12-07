document.addEventListener('DOMContentLoaded', function() {
    const lettersContainer = document.querySelector('.letters-container');
    const seeMoreBtn = document.querySelector('.seemoreBtn');
    const seeLessBtn = document.querySelector('.seelessBtn');
    
    if (seeMoreBtn && seeLessBtn) {
        seeMoreBtn.addEventListener('click', () => {
            lettersContainer.classList.add('expanded');
            seeMoreBtn.classList.add('d-none');
            seeLessBtn.classList.remove('d-none');
            
            // تمرير سلس إلى المحتوى الجديد
            window.scrollTo({
                top: window.scrollY + 200,
                behavior: 'smooth'
            });
        });
        
        seeLessBtn.addEventListener('click', () => {
            lettersContainer.classList.remove('expanded');
            seeLessBtn.classList.add('d-none');
            seeMoreBtn.classList.remove('d-none');
            
            // تمرير سلس إلى أعلى القسم
            lettersContainer.scrollIntoView({ behavior: 'smooth' });
        });
    }
}); 