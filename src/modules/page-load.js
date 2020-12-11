import { header, mainContent } from './home.js';

const pageLoad = () => {
  console.log('This is the page load');
}

header();
mainContent();

export { pageLoad };
