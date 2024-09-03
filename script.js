const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuOverlay = document.querySelector('.menu-overlay');

hamburgerMenu.addEventListener('click', () => {
    menuOverlay.classList.toggle('show-menu');
});
