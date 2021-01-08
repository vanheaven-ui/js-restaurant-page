import helperModule from './helpers';
import myLogo from '../images/logo.png';

const helperMethods = (() => {
  const createBtn = (classAttr, parent, value) => {
    const btn = helperModule.createTag('button');
    btn.setAttribute('class', classAttr);
    if (value === 'HOME') {
      btn.classList.add('active');
    }
    btn.textContent = value;
    helperModule.appendTag(parent, btn);
    return parent;
  };

  const createLogoSection = () => {
    const logoSection = helperModule.createTag('div');
    logoSection.setAttribute('id', 'logo-section');
    //  Create img tag
    const logo = new Image();
    logo.src = myLogo;
    logo.setAttribute('alt', 'UDine');
    helperModule.appendTag(logoSection, logo);
    // Create slogan p tag
    const slogan = helperModule.createTag(
      'p',
      'signature cuisines await you...',
    );
    slogan.setAttribute('class', 'slogan-style');
    helperModule.appendTag(logoSection, slogan);
    return logoSection;
  };

  return { createBtn, createLogoSection };
})();

const header = () => {
  const hdr = helperModule.createTag('nav');
  hdr.setAttribute('id', 'nav-bar');
  hdr.setAttribute('style', 'display: flex; justify-content: space-around; align-items: center; backgroung-color: #333; color: #fff;');
  //  Create logo Section
  helperModule.appendTag(hdr, helperMethods.createLogoSection());
  // create Nav buttons
  const btnWrapper = helperModule.createTag('div');
  helperMethods.createBtn('nav-button', btnWrapper, 'HOME');
  helperMethods.createBtn('nav-button', btnWrapper, 'MENU');
  helperMethods.createBtn('nav-button', btnWrapper, 'CONTACT');
  helperModule.appendTag(hdr, btnWrapper);

  return hdr;
};

export default header;