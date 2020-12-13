import helperModule from './helpers.js';

const navItems = `
  <div>
    UDine
    signature cuisines await you...
  </div>
  <div>
    <button class="nav-button active">HOME</button>
    <button class="nav-button">MENU</button>
    <button class="nav-button">CONTACT</button>
  </div>
  `;

  const header = () => {
    const hdr = helperModule.createTag('nav', navItems);
    hdr.setAttribute('id', 'nav-bar');
    return hdr;

  };

  export default header;
  