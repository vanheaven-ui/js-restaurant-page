import { header, mainContent } from './home.js';

const pageLoad = () => {
  console.log('This is the page load');
}

header();
mainContent();

const clicked = document.getElementById('nav-bar');
clicked.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-button')) {
    e.target.classList.add('active');
  }
});

export { pageLoad };
