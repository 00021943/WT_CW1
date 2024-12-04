document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    burgerMenu.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Закрытие мобильного меню при клике вне его области
    mobileMenu.addEventListener('click', (event) => {
        if (event.target === mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });

    // Закрытие мобильного меню при клике по ссылке
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-item a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});