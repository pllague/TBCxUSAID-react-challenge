// Convert X/burger on click
const menuBurger = document.querySelector('.mobile-hamburger');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menuBurger.classList.toggle('-rotate-45');
    menuBurger.classList.toggle('h-[33.23px]');
    menuBurger.classList.toggle('w-[33.23px]');
    document.body.classList.toggle('overflow-hidden');
});

const mobileOverlay = document.querySelector('.mobile-overlay');
// If user clicks outside the menu, close it
window.addEventListener('click', (e) => {
    if (e.target == mobileOverlay) {
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
                header.style.transform = 'translateY(0)';
            } else {
                header.style.transform = 'translateY(-100%)';
            }
            lastScrollPosition = currentScroll;
        }
    });

});


document.addEventListener("DOMContentLoaded", () => {
    const sliderSection = document.querySelector(".section-slider");
    const slider = document.querySelector(".slider");
    const slides = Array.from(slider.children);
    const dots = document.querySelectorAll(".dots");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    let currentIndex = 1; //first slide is dublicated
    let slideInterval;

    // Duplicate first and last slides to slide correct direction
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[slides.length - 1].cloneNode(true);
    slider.insertBefore(lastSlide, slides[0]);
    slider.appendChild(firstSlide);

    const doubledSlides = Array.from(slider.children);

    function scrollToSlide(index) {
        if (window.innerWidth < 1024) {
            const width = slider.clientWidth;
            slider.scrollTo({
                left: width * index,
                behavior: 'smooth'
            });
            currentIndex = index;
            updateDots();
        } else {
            const width = slider.clientWidth;
            setTimeout(() => {
                slider.scrollLeft = width * index;
                currentIndex = index;
                updateDots();
            }, 700);
            // remove active class from all slides
            slides.forEach((slide) => {
                slide.classList.remove('active');
            });
            // make slide as active 
            setTimeout(() => {
                if (index == 1) {
                    doubledSlides[1].classList.add('active');
                    doubledSlides[4].classList.add('active');
                } else if (index == 3) {
                    doubledSlides[3].classList.add('active');
                    doubledSlides[0].classList.add('active');
                } else if (index == 2) {
                    doubledSlides[2].classList.add('active');
                } else if (index == 4) {
                    doubledSlides[4].classList.add('active');
                    doubledSlides[1].classList.add('active');
                } else if (index == 0) {
                    doubledSlides[0].classList.add('active');
                    doubledSlides[3].classList.add('active');
                }
            }, 700);
        }
    }

    // Make dod as active to the coresponding slide
    function updateDots() {
        let adjustedIndex = currentIndex - 1;
        if (adjustedIndex < 0) {
            adjustedIndex = dots.length - 1; // Make last dot as active
        } else if (adjustedIndex >= dots.length) {
            adjustedIndex = 0; //Make first dot as active
        }
        // Update the active state of dots
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === adjustedIndex);
        });
    }

    //Start the slideshow
    function startSlideShow() {
        slideInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % (slides.length + 2);
            scrollToSlide(nextIndex);

            // Move to the first slide when we are at the last slide
            if (nextIndex === slides.length + 1) {
                setTimeout(() => {
                    slider.scrollTo({
                        left: slider.clientWidth,
                        behavior: 'auto'
                    });
                    currentIndex = 1;
                }, 500);
            }
        }, 4000);
    }

    // Use dots as pagination
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            let adjustedIndex = index + 1;

            if (index == 0 && dots[2].classList.contains('active')) {
                scrollToSlide(4);
                setTimeout(() => {
                    slider.scrollTo({
                        left: slider.clientWidth,
                        behavior: 'auto'
                    });
                    currentIndex = 1;
                }, 500);
            } else if (index == 2 && dots[0].classList.contains('active')) {
                scrollToSlide(0);
                setTimeout(() => {
                    slider.scrollTo({
                        left: slider.clientWidth * slides.length,
                        behavior: 'auto'
                    });
                    currentIndex = slides.length;
                }, 500);
            } else {
                scrollToSlide(adjustedIndex);
            }
        });
    });

    // Use arrows as navigation buttons
    prevArrow.addEventListener("click", () => {
        let prevIndex = (currentIndex - 1 + slides.length + 2) % (slides.length + 2);
        scrollToSlide(prevIndex);

        // Move to the last slide if we're at the first
        if (prevIndex === 0) {
            setTimeout(() => {
                slider.scrollTo({
                    left: slider.clientWidth * slides.length,
                    behavior: 'auto'
                });
                currentIndex = slides.length;
            }, 500);
        }
    });

   
    nextArrow.addEventListener("click", () => {
        let nextIndex = (currentIndex + 1) % (slides.length + 2);
        scrollToSlide(nextIndex);

        if (nextIndex === slides.length + 1) {
            setTimeout(() => {
                slider.scrollTo({
                    left: slider.clientWidth,
                    behavior: 'auto'
                });
                currentIndex = 1;
            }, 500);
        }
    });

    // Start slidshow from the first original slide
    scrollToSlide(1);
    startSlideShow();

    // Pause the slideshow on hover
    sliderSection.addEventListener("mouseenter", () => clearInterval(slideInterval));
    sliderSection.addEventListener("mouseleave", startSlideShow);
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

// Privacy
const privacy = document.querySelectorAll('.open-privacy');
const privacyDetails = document.querySelector('.privacy-details');
const privacyDetailsChild = document.querySelector('.privacy-details-child');

privacy.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        privacyDetails.classList.toggle('active');
        setTimeout(() => {
            privacyDetailsChild.classList.toggle('active');
        }, 300);
    });
});

const closePrivacyButtons = document.querySelectorAll('.close-privacy-window');

closePrivacyButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        privacyDetailsChild.classList.toggle('active');
        setTimeout(() => {
            privacyDetails.classList.toggle('active');
        }, 300);
    });
});

const privacyDetailsChildOutside = document.querySelectorAll('.privacy-details-child');

document.addEventListener('click', function (event) {
    // Check if the click is outside privacyDetailsChild
    let isClickInside = Array.from(privacyDetailsChildOutside).some(child => child.contains(event.target));

    if (!isClickInside && privacyDetailsChildOutside[0].classList.contains('active')) {
        // Close privacyDetailsChild
        privacyDetailsChildOutside.forEach(child => {
            child.classList.remove('active');
        });

        // Wait 0.3s then close privacyDetails
        setTimeout(() => {
            privacyDetails.classList.remove('active');
        }, 300);
    }
});

// Close when user press escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && privacyDetails.classList.contains('active')) {
        privacyDetailsChild.classList.toggle('active');
        setTimeout(() => {
            privacyDetails.classList.toggle('active');
        }, 300);
    }
});