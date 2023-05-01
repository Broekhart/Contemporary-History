const icons = document.querySelectorAll('.svg');
const hamburger = icons[0];
const mixer = icons[1];
const logo = document.querySelector('.logo');
const mobileMenu = document.querySelector('.toggle_menu');
const header = document.querySelector('header');

const toggleNav = () => {
  hamburger.classList.toggle('hidden');
  logo.classList.toggle('white');
  mixer.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
  header.classList.toggle('sticky');
};

icons.forEach((icon) => icon.addEventListener('click', toggleNav));
