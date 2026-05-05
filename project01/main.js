const burger = document.getElementById('navBurger');
const menu   = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});

menu.querySelectorAll('.navbar-item').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('is-active');
    menu.classList.remove('is-active');
  });
});