document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('navMenu');

    burgerMenu.addEventListener('click', (event) => {
        event.stopPropagation();
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});