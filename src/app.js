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


document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = slider.children;
    const dots = document.querySelectorAll(".dots");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    let currentIndex = 0;
    let slideInterval;

    function scrollToSlide(index) {
        const width = slider.clientWidth;
        slider.scrollLeft = width * index;
        currentIndex = index;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("bg-gray-500", index === currentIndex); // Change the color to indicate active dot
        });
    }

    function startSlideShow() {
        slideInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % slides.length;
            scrollToSlide(nextIndex);
        }, 3000); // Change slide every 3 seconds
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => scrollToSlide(index));
    });

    prevArrow.addEventListener("click", () => {
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        scrollToSlide(prevIndex);
    });

    nextArrow.addEventListener("click", () => {
        let nextIndex = (currentIndex + 1) % slides.length;
        scrollToSlide(nextIndex);
    });

    startSlideShow();

    // Pause the slideshow on hover
    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", startSlideShow);
});

// Open Accordions on click
const accordions = document.querySelector('.accordions');

accordions.addEventListener('click', (e) => {
    if (e.target.classList.contains('accordion')) {
        e.target.classList.toggle('active');
    }
    const acoordioItems = accordions.querySelectorAll('.accordion');
    acoordioItems.forEach((item) => {
        if (item !== e.target) {
            item.classList.remove('active');
        }
    });
});