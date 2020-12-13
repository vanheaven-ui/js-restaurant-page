import helperModule from './helpers.js';

const createSections = (() => {
  const panelItems = `
    <button id="address">ADDRESS</button>
    <button id="Email">MESSAGE</button>
    <button id="Mobile">SOCIAL</button>
  `;

  const pTags = [
    {
      tag: 'p',
      text: 'Address: Kampala Uganda'
    }, 
    {
      tag: 'p',
      text: 'Email: ebtwino718@yahoo.com'
    }, 
    {
      tag: 'p',
      text: 'Mobile: 0785163925'
    }
  ];

  const createTitle = (classAttribute, text, h) => {
    const title = helperModule.createTag(h, text);
    title.setAttribute('class', classAttribute);
    return title;
  }

  const createLabel = (value, forAttr) => {
    const lab = helperModule.createTag('label', value);
    lab.setAttribute('for', forAttr);
    return lab;
  }

  const createInput = (type, id, name) => {
    const input = helperModule.createTag('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('name', name);
    return input;
  }

  const createFormField = (value, forAttr, type, id, name) => {
    const formField = helperModule.createTag('div');
    formField.setAttribute('class', 'form-field');
    const label = createLabel(value, forAttr);
    helperModule.appendTag(formField, label);
    const input = createInput(type, id, name);
    helperModule.appendTag(formField, input);
    return formField;
  }

  const createSubmitBtn = (type, value) => {
    const btnField = helperModule.createTag('div');
    btnField.setAttribute('class', 'actions');
    const btn = helperModule.createTag('button');
    btn.setAttribute('type', type);
    btn.textContent = value;
    helperModule.appendTag(btnField, btn);
    return btnField;
  }

  const createForm = () => {
    const form = helperModule.createTag('form');
    form.setAttribute('action', '#');
    const field1 = createFormField('Name', 'name', 'text', 'name', 'name');
    helperModule.appendTag(form, field1);
    const field2 = createFormField('Email', 'email', 'email', 'email', 'email');
    helperModule.appendTag(form, field2);
    const submitBtn = createSubmitBtn('submit', 'Send Message')
    helperModule.appendTag(form, submitBtn);
    return form;
  }

  const createPanel = () => {
    const panelWrapper = helperModule.createTag('div', panelItems);
    panelWrapper.setAttribute('class', 'nav-panel');
    return panelWrapper;
  }

  const createContactPanel= () => {
    const panelWrapper = helperModule.createTag('div');
    panelWrapper.setAttribute('class', 'contact-panel');
    const h3 = createTitle('panel-title', 'Contact Information', 'h3');
    helperModule.appendTag(panelWrapper, h3);
    const close = helperModule.createTag('span', '&times;');
    close.setAttribute('class', 'close');
    helperModule.appendTag(panelWrapper, close);
    pTags.forEach((p) => {
      const pTag = helperModule.createTag(`${p.tag}`, `${p.text}`);
      helperModule.appendTag(panelWrapper, pTag);
    });
    return panelWrapper;
  }

  const createMessageField = () => {
    const panelWrapper = helperModule.createTag('div');
    panelWrapper.setAttribute('class', 'contact-panel');
    const h3 = createTitle('panel-title', 'Leave a message', 'h3');
    helperModule.appendTag(panelWrapper, h3);
    const close = helperModule.createTag('span', '&times;');
    close.setAttribute('class', 'close');
    helperModule.appendTag(panelWrapper, close);
    
    helperModule.appendTag(panelWrapper, createForm());

    return panelWrapper;
  }



  return { createPanel, createContactPanel, createMessageField };
})();


const renderContactPage = () => {
  const contactWrapper = helperModule.createTag('section');
  contactWrapper.setAttribute('class', 'contact-section');
  const contactHeading = helperModule.createTag('h2');
  contactHeading.setAttribute('class', 'menu-title contact-title');
  contactHeading.textContent = 'Contact Us';
  helperModule.appendTag(contactWrapper, contactHeading);
  const contactSubHeading = helperModule.createTag('h4');
  contactSubHeading.textContent = 'Let us talk food!';
  helperModule.appendTag(contactWrapper, contactSubHeading);
  const navPanel = helperModule.createTag('div');
  navPanel.setAttribute('class', 'panel')
  const contactSections = helperModule.createTag('div');
  contactSections.setAttribute('class', 'contact-fields');
  
  helperModule.appendTag(navPanel, createSections.createPanel());

  helperModule.appendTag(contactSections, createSections.createContactPanel());

  helperModule.appendTag(contactSections, createSections.createMessageField());

  helperModule.appendTag(navPanel, contactSections);
 
  helperModule.appendTag(contactWrapper, navPanel);

  return contactWrapper;
}

export default renderContactPage;