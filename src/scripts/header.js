const icons = document.querySelectorAll('.svg');
const mobileMenu = document.querySelector('.toggle_menu');
const header = document.querySelector('header');

const toggleNav = () => {
  icons[0].classList.toggle('hidden');
  icons[1].style.color = 'var(--white)';
  icons[1].classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
  header.classList.toggle('sticky');
};

icons.forEach((icon) => icon.addEventListener('click', toggleNav));
