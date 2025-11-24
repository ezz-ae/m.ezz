// Toggle body scrolling and menu overlay
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;
menuToggle?.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});