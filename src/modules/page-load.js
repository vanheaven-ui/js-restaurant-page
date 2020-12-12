import header from './nav.js';
import { renderHomePage } from './home.js';
import renderMenuPage from './menu.js';


const pageLoad = () => {
  console.log('This is the page load');
}

header();
renderHomePage();
renderMenuPage();



export { pageLoad };
