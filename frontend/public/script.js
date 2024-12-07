class AuthService {
    static getToken() {
        return localStorage.getItem('token');
    }

    static setToken(token) {
        localStorage.setItem('token', token);
    }

    static removeToken() {
        localStorage.removeItem('token');
    }

    static async verifyToken() {
        const token = this.getToken();
        if (!token) return null;

        try {
            const response = await fetch('/api/check-auth/check-status', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (!response.ok) {
                this.removeToken();
                return null;
            }

            return await response.json();
        } catch (error) {
            console.error('Token verification error:', error);
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
        
        this.hideAllButtons();
        this.init();
    }

    hideAllButtons() {
        this.elements.management.style.display = 'none';
        this.elements.authButtons.style.display = 'none';
        this.elements.logoutButton.style.display = 'none';
    }

    async init() {
        await this.updateNavbarState();
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.elements.logoutButton?.addEventListener('click', () => this.handleLogout());
    }

    async updateNavbarState() {
        try {
            const authData = await AuthService.verifyToken();
            
            this.hideAllButtons();
            
            if (!authData?.success) {
                this.showGuestView();
                return;
            }

            this.showAuthenticatedView(authData.user);
        } catch (error) {
            console.error('Error updating navbar state:', error);
            this.showGuestView();
        }
    }

    showGuestView() {
        this.hideAllButtons();
        
        setTimeout(() => {
            this.elements.authButtons.style.display = 'flex';
        }, 0);
    }

    showAuthenticatedView(user) {
        this.hideAllButtons();
        
        setTimeout(() => {
            if (user.role === 'admin') {
                this.elements.management.style.display = 'block';
            }
            this.elements.logoutButton.style.display = 'block';
        }, 0);
    }

    async handleLogout() {
        try {
            this.hideAllButtons();
            AuthService.removeToken();
            this.showGuestView();
            window.location.href = '/';
        } catch (error) {
            console.error('Logout error:', error);
        }
    }
}
    
document.addEventListener('DOMContentLoaded', () => {
    const navbarManager = new NavbarManager();
    
    const seeMoreBtn = document.querySelector('.seemoreBtn');
    const seeLessBtn = document.querySelector('.seelessBtn');
    
    seeMoreBtn?.addEventListener('click', () => {
        toggleLetters(true);
    });
    
    seeLessBtn?.addEventListener('click', () => {
        toggleLetters(false);
    });
});

handleClick = (ele)=>{
    var navlist = document.getElementsByClassName("nav-link")
    for(let i = 0 ; i < navlist.length ; i++){
        navlist[i].classList.remove("active")
    }
    ele.classList.add("active")
}
var nav = document.getElementById('nav')
window.addEventListener('scroll' , ()=>{
    if(document.documentElement.scrollTop>0){
        nav.classList.add("nav-scroll")

    }else{
        nav.classList.remove('nav-scroll')
    }
})
document.addEventListener("DOMContentLoaded", function() {
    // Function to add animation class to the active slide's h1
    function addAnimationToActiveSlide() {
        // Remove the animation class from all h1 elements first
        document.querySelectorAll('.carousel-item h1').forEach(h1 => {
            h1.classList.remove('animate__animated', 'animate__fadeInDown','opacity-100');
        });
        
        // Find the active carousel item and add the class to its h1
        const activeSlide = document.querySelector('.carousel-inner .carousel-item.active');
        if (activeSlide) {
            const h1 = activeSlide.querySelector('.card-body h1');
            if (h1) {
                h1.classList.add('animate__animated', 'animate__fadeInDown','opacity-100');
            }
        }
    }

    // Initialize the animation for the first active slide
    addAnimationToActiveSlide();

    // Listen for the Bootstrap carousel slide event and call the function
    document.getElementById('carouselExample').addEventListener('slid.bs.carousel', addAnimationToActiveSlide);
});

revealFunction = (ele) =>{
    const rect = ele.getBoundingClientRect();
    return(
        rect.bottom > 0 &&
        rect.top < (window.innerHeight - 50)
    )
}

var h2 = document.querySelectorAll('h2')
console.log(h2)
var cardArticle = document.querySelectorAll('#articles .card,#aiModel .card')
document.addEventListener('scroll' , ()=>{
    for(let i = 1 ; i < h2.length ; i++  ){
        if(revealFunction(h2[i])){
            h2[i].classList.add('animate__animated','animate__fadeInLeft','opacity-100')
            h2[i].classList.remove('opacity-0')
        }
    }
    for(let i = 0 ; i < cardArticle.length ; i++){
        if(revealFunction(cardArticle[i])){
            cardArticle[i].classList.add('animate__animated','animate__fadeInRight','opacity-100')
            cardArticle[i].classList.remove('opacity-0')
        }
    }
})