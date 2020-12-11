import { header, mainContent } from './home.js';

const pageLoad = () => {
  console.log('This is the page load');
}

header();
mainContent();

const buttons = document.getElementsByClassName('nav-button');
console.log(buttons);
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
});


export { pageLoad };
