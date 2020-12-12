import header from './nav.js';
import { mainContent } from './home.js';
import renderMenuPage from './menu.js';


const pageLoad = () => {
  console.log('This is the page load');
}

header();
mainContent();
renderMenuPage();



export { pageLoad };
