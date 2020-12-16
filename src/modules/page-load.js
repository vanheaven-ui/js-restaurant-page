import header from "./nav";
import renderHomePage from "./home";
import renderMenuPage from "./menu";
import renderContactPage from "./contact";
import helperModule from "./helpers";

// this function is used to toggle the tabs to load the different pages
const pageLoad = () => {
  helperModule.appendTag(helperModule.wrapperDiv(), header());
  helperModule.appendTag(helperModule.wrapperDiv(), renderHomePage());
  const navBtns = document.getElementsByClassName("nav-button");

  // Remove active class from the buttons
  const clearActive = () => {
    Array.from(navBtns).forEach((btn) => {
      btn.classList.remove("active");
    });
  };

  const resetDom = () => {
    const nodes = helperModule.wrapperDiv().childNodes;
    for (let i = 1; i < nodes.length; i += 1) {
      nodes[i].remove();
    }
  };

  const clrContactFields = (fields) => {
    fields.forEach((field) => {
      field.remove();
    });
  };

  Array.from(navBtns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      clearActive();
      resetDom();
      if (e.target.textContent === "HOME") {
        helperModule.appendTag(helperModule.wrapperDiv(), renderHomePage());
        btn.classList.add("active");
      } else if (e.target.textContent === "MENU") {
        helperModule.appendTag(helperModule.wrapperDiv(), renderMenuPage());
        btn.classList.add("active");
        // Toggle menus
        const clearMenu = () => {
          const menuWrap = document.querySelector(".menus");
          menuWrap.childNodes.forEach((m) => {
            m.style.display = 'none';
          });
        }
        const menuOptions = document.querySelector(".menu-bar select");
        const opt = document.querySelectorAll(".menu-bar select option");
        clearMenu();
        
        menuOptions.addEventListener("change", () => {
          clearMenu();
          menuOptions.classList.add('selectLoad');
          let selectedOpt = menuOptions.options[menuOptions.selectedIndex];
          if (selectedOpt.value === "Breakfast") {
            const brkFast = document.querySelector('.breakfast');
            brkFast.style.display = 'block';
          } else if (selectedOpt.value === "Brunch") {
            const brunch = document.querySelector('.brunch');
            brunch.style.display = 'block';
          } else if (selectedOpt.value === "Lunch") {
            const lunch = document.querySelector('.lunch');
            lunch.style.display = 'block';
          } else if (selectedOpt.value === "Dinner") {
            const dinner = document.querySelector('.dinner');
            dinner.style.display = 'block';
          }
        });
      } else if (e.target.textContent === "CONTACT") {
        helperModule.appendTag(helperModule.wrapperDiv(), renderContactPage());
        btn.classList.add("active");
        // Toggle contact panel tabs
        const panel = document.querySelector('.nav-panel');
        panel.classList.add('origin');
        const close = document.querySelectorAll('.close');
        const btns = document.querySelectorAll(".nav-panel button");
        const contactFieldsWrapper = document.querySelector(".contact-fields");
        const contactField = document.querySelectorAll(".contact-panel");
        btns.forEach((btn, index) => {
          clrContactFields(contactField);
          btn.addEventListener("click", (e) => {
            clrContactFields(contactField);
            panel.classList.add('move-panel');
            if (e.target.textContent === "ADDRESS") {
              helperModule.appendTag(contactFieldsWrapper, contactField[index]);
              contactField[index].classList.add('panel-display');
              close[index].addEventListener('click', (e) => {
                contactField[index].classList.remove('panel-display');
                e.target.parentElement.remove();
                panel.classList.remove('move-panel');
                panel.classList.add('origin');
              });
            } else if (e.target.textContent === "MESSAGE") {
              helperModule.appendTag(contactFieldsWrapper, contactField[index]);
              contactField[index].classList.add('panel-display');              
              close[index].addEventListener('click', (e) => {
                contactField[index].classList.remove('panel-display');
                e.target.parentElement.remove();
                panel.classList.remove('move-panel');
                panel.classList.add('origin');
              });
            }
          });
        });
      }
    });
  });
};

export default pageLoad;
