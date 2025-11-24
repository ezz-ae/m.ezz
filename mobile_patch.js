// Toggle body scrolling on menu open
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;
menuToggle?.addEventListener('click', () => {
  body.classList.toggle('menu-open');
});