// Convert X/burger on click
const menuBurger = document.querySelector('.mobile-hamburger');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menuBurger.classList.toggle('-rotate-45');
    menuBurger.classList.toggle('h-[33.23px]');
    menuBurger.classList.toggle('w-[33.23px]');
});
