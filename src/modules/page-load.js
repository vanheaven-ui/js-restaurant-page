import header from './nav';
import renderHomePage from './home';
import renderMenuPage from './menu';
import renderContactPage from './contact';
import helperModule from './helpers';

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
  };

  const resetDom = () => {
    const nodes = helperModule.wrapperDiv().childNodes;
    for (let i = 1; i < nodes.length; i += 1) {
      nodes[i].remove();
    };
  };
  
  Array.from(navBtns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      clearActive();
      resetDom();
      if (e.target.textContent === 'HOME') {
        helperModule.appendTag(helperModule.wrapperDiv(), renderHomePage());
        btn.classList.add('active');
      }else if (e.target.textContent === 'MENU') {
        helperModule.appendTag(helperModule.wrapperDiv(), renderMenuPage());
        btn.classList.add('active');
      }else if ( e.target.textContent === 'CONTACT') {
        helperModule.appendTag(helperModule.wrapperDiv(), renderContactPage());
        btn.classList.add('active');
      }
    });
  });
}

export default pageLoad;