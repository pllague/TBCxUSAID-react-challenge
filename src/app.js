// Convert X/burger on click
const menuBurger = document.querySelector('.mobile-hamburger');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menuBurger.classList.toggle('-rotate-45');
    menuBurger.classList.toggle('h-[33.23px]');
    menuBurger.classList.toggle('w-[33.23px]');
    document.body.classList.toggle('overflow-hidden');
});

// If user clicks outside the menu, close it
window.addEventListener('click', (e) => {
    if (e.target !== menuBurger && !menuBurger.contains(e.target) && menuBurger.classList.contains('active')) {
        menuBurger.classList.toggle('active');
        menuBurger.classList.toggle('-rotate-45');
        menuBurger.classList.toggle('h-[33.23px]');
        menuBurger.classList.toggle('w-[33.23px]'); 
        document.body.classList.toggle('overflow-hidden');
    }
});

// Hide/Appear header while scrolling on mobile version
const header = document.querySelector('header');
let lastScrollPosition = 0;

// window on load
window.addEventListener('load', () => {
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY; // Get current scroll position

        // Set data position based on scroll
        if (currentScroll > 0) {
            header.dataset.position = 'center';
        } else {
            header.dataset.position = 'top';
        }

        // Check if user is scrolling up or down
        if (window.innerWidth < 1024) {
            if (lastScrollPosition > currentScroll && currentScroll > 0) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScrollPosition = currentScroll;
        }
    });

});