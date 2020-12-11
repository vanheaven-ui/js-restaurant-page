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

  const headingText = `
  Food is a necessity and at UDine, it is necessity to give the
  best of foods in the best way possible.
  `

  const listItems = `
    <li id='credit1' class='credit-item'>
      <p>Icon</p>
      <p class='credit-text'>Fast Service</p>
    </li>
    <li id= 'credit2' class='credit-item'>
      <p>Icon</p>
      <p class='credit-text'>Fresh Food</p>
    </li>
    <li id='credit3' class='credit-item'>
      <p>Icon</p>
      <p class='credit-text'>24/7 available</p>
    </li>
  `

const header = () => {
  const hdr = helperModule.createTag('nav', navItems);
  hdr.setAttribute('id', 'nav-bar');
  helperModule.appendTag(helperModule.wrapperDiv(), hdr);
};

const mainContent = () => {
  const sectionWrapper = helperModule.createTag('section');
  sectionWrapper.setAttribute('class', 'main-content')  

  const leftMainSection = helperModule.createTag('section');
  leftMainSection.setAttribute('class', 'left-section');
    const leftWrapper = helperModule.createTag('div')
    leftWrapper.setAttribute('class', 'text');
      const mainText = helperModule.createTag('h1', headingText);
      mainText.setAttribute('class', 'heading')
      helperModule.appendTag(leftWrapper, mainText);

      const orderBtn = helperModule.createTag('button', 'Order Online');
      helperModule.appendTag(leftWrapper, orderBtn);

      const highlights = helperModule.createTag('div')
        const credits = helperModule.createTag('ul', listItems);
        credits.setAttribute('class', 'credit');
        helperModule.appendTag(highlights, credits);
      helperModule.appendTag(leftWrapper, highlights);
    helperModule.appendTag(leftMainSection, leftWrapper);
  helperModule.appendTag(sectionWrapper, leftMainSection);

  const rightMainSection = helperModule.createTag('section');
  rightMainSection.setAttribute('class', 'right-section');
  helperModule.appendTag(sectionWrapper, rightMainSection);  

  helperModule.appendTag(helperModule.wrapperDiv(), sectionWrapper);
}

export { header, mainContent };
