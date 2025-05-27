document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен');
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('navMenu');

    burgerMenu.addEventListener('click', () => {
        console.log('Бургер-меню нажато');
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            console.log('Клик вне меню');
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
