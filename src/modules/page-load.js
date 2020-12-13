import header from './nav.js';
import { renderHomePage } from './home.js';
import renderMenuPage from './menu.js';
import renderContactPage from './contact.js'


const pageLoad = () => {
  console.log('This is the page load');
}

header();
renderHomePage();
renderMenuPage();
renderContactPage()



export { pageLoad };
