import header from './nav.js';
import { renderHomePage } from './home.js';
import renderMenuPage from './menu.js';
import renderContactPage from './contact.js'

// this function is used to toggle the tabs to load the different pages
const pageLoad = () => {
  header();
  renderHomePage();
  renderMenuPage();
  renderContactPage();
}


export { pageLoad };
