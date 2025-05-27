document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.getElementById('logo').addEventListener('click', function (event) {
    event.preventDefault();

    document.documentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});