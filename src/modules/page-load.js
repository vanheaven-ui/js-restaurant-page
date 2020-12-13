import header from './nav.js';
import { renderHomePage } from './home.js';
import renderMenuPage from './menu.js';
import renderContactPage from './contact.js'
import helperModule from './helpers.js';

// this function is used to toggle the tabs to load the different pages
const pageLoad = () => {
  helperModule.appendTag(helperModule.wrapperDiv(), header());
  helperModule.appendTag(helperModule.wrapperDiv(), renderHomePage());
  const navBtns = document.getElementsByClassName('nav-button');

  // Remove active class from the buttons
  const clearActive = () => {
    Array.from(navBtns).forEach((btn) => {
      btn.classList.remove('active');
    });
  }

 const nodes = helperModule.wrapperDiv().childNodes;

 nodes.forEach((n, index) => {
  console.log(n);
 });

  const resetDom = () => {
    // helperModule.wrapperDiv.removeChild('renderHomePage()');
    // helperModule.wrapperDiv.removeChild('renderMenuPage()');
    // helperModule.wrapperDiv.removeChild('renderContactPage()');
  }
 

  Array.from(navBtns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      clearActive();
      if (e.target.textContent === 'HOME') {
        helperModule.appendTag(helperModule.wrapperDiv(), renderHomePage());
        btn.classList.add('active');
      } else if (e.target.textContent === 'MENU') {
        helperModule.appendTag(helperModule.wrapperDiv(), renderMenuPage());
        btn.classList.add('active');
      } else if ( e.target.textContent === 'CONTACT') {
        helperModule.appendTag(helperModule.wrapperDiv(), renderContactPage());
        btn.classList.add('active');
      }
    });
  });
}

export { pageLoad };
