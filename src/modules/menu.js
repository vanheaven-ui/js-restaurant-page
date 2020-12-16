import helperModule from './helpers';
import menuImg from '../images/img.jpg';

// Using Module
const createMenuItem = (() => {
  const createMenu = (classAttribute) => {
    const menu = helperModule.createTag('div');
    menu.setAttribute('class', classAttribute);
    return menu;
  };

  const createTitle = (title, classAttribute) => {
    const heading = helperModule.createTag('h2', title);
    heading.setAttribute('class', classAttribute);
    return heading;
  };

  const createImgTag = () => {
    const img = new Image();
    img.src = menuImg;
    return img;
  };

  const createItemDesc = (price, description) => {
    const descWrap = helperModule.createTag('div');
    descWrap.setAttribute('class', 'item-note');
    const priceTag = helperModule.createTag('span');
    priceTag.textContent = `$${price}`;
    helperModule.appendTag(descWrap, priceTag);
    const desc = helperModule.createTag('span');
    desc.textContent = description;
    helperModule.appendTag(descWrap, desc);
    return descWrap;
  };


  return {
    createImgTag, createTitle, createMenu, createItemDesc,
  };
})();

const createBreakfast = () => {
  const breakfastItem = createMenuItem.createMenu('menu-item');
  const myImg = createMenuItem.createImgTag();
  helperModule.appendTag(breakfastItem, myImg);
  const itemDesc = createMenuItem.createItemDesc('14.99', 'This menu item description goes here');
  helperModule.appendTag(breakfastItem, itemDesc);
  return breakfastItem;
};

const createBrunch = () => {
  const brunchItem = createMenuItem.createMenu('menu-item');
  const myImg = createMenuItem.createImgTag();
  helperModule.appendTag(brunchItem, myImg);
  const itemDesc = createMenuItem.createItemDesc('24.99', 'This menu item description goes here');
  helperModule.appendTag(brunchItem, itemDesc);
  return brunchItem;
};

const createLunch = () => {
  const lunchItem = createMenuItem.createMenu('menu-item');
  const myImg = createMenuItem.createImgTag();
  helperModule.appendTag(lunchItem, myImg);
  const itemDesc = createMenuItem.createItemDesc('39.99', 'This menu item description goes here');
  helperModule.appendTag(lunchItem, itemDesc);
  return lunchItem;
};

const createDinner = () => {
  const dinnerItem = createMenuItem.createMenu('menu-item');
  const myImg = createMenuItem.createImgTag();
  helperModule.appendTag(dinnerItem, myImg);
  const itemDesc = createMenuItem.createItemDesc('50.99', 'This menu item description goes here');
  helperModule.appendTag(dinnerItem, itemDesc);
  return dinnerItem;
};

const renderMenuPage = () => {
  const selectItems = `
    <option value="Select">Select menu</option>
    <option value="Breakfast">BreakFast</option>
    <option value="Brunch">Brunch</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
  `;

  const menuSection = helperModule.createTag('section');
  menuSection.setAttribute('class', 'menu-section');
  const menuWrapper = helperModule.createTag('div');
  menuWrapper.setAttribute('class', 'menu-bar');
  const selectMenu = helperModule.createTag('select', selectItems);
  selectMenu.setAttribute('id', 'name');
  selectMenu.setAttribute('class', 'name');
  helperModule.appendTag(menuWrapper, selectMenu);
  const menus = helperModule.createTag('div');
  menus.setAttribute('class', 'menus');
  //  create breakfast section
  const breakfastMenu = createMenuItem.createMenu('breakfast');
  const breakfastTitle = createMenuItem.createTitle('Breakfast Menu', 'menu-title');
  helperModule.appendTag(breakfastMenu, breakfastTitle);
  helperModule.appendTag(breakfastMenu, createBreakfast());
  helperModule.appendTag(breakfastMenu, createBreakfast());
  helperModule.appendTag(breakfastMenu, createBreakfast());
  helperModule.appendTag(breakfastMenu, createBreakfast());
  helperModule.appendTag(menus, breakfastMenu);
  //  create brunch section
  const brunchMenu = createMenuItem.createMenu('brunch');
  const brunchTitle = createMenuItem.createTitle('Brunch Menu', 'menu-title');
  helperModule.appendTag(brunchMenu, brunchTitle);
  helperModule.appendTag(brunchMenu, createBrunch());
  helperModule.appendTag(brunchMenu, createBrunch());
  helperModule.appendTag(brunchMenu, createBrunch());
  helperModule.appendTag(brunchMenu, createBrunch());
  helperModule.appendTag(menus, brunchMenu);
  const lunchMenu = createMenuItem.createMenu('lunch');
  const lunchTitle = createMenuItem.createTitle('Lunch Menu', 'menu-title');
  helperModule.appendTag(lunchMenu, lunchTitle);
  helperModule.appendTag(lunchMenu, createLunch());
  helperModule.appendTag(lunchMenu, createLunch());
  helperModule.appendTag(lunchMenu, createLunch());
  helperModule.appendTag(lunchMenu, createLunch());
  helperModule.appendTag(menus, lunchMenu);
  //  Create dinner menu
  const dinnerMenu = createMenuItem.createMenu('dinner');
  const dinnerTitle = createMenuItem.createTitle('Dinner Menu', 'menu-title');
  helperModule.appendTag(dinnerMenu, dinnerTitle);
  helperModule.appendTag(dinnerMenu, createDinner());
  helperModule.appendTag(dinnerMenu, createDinner());
  helperModule.appendTag(dinnerMenu, createDinner());
  helperModule.appendTag(dinnerMenu, createDinner());
  helperModule.appendTag(menus, dinnerMenu);
  helperModule.appendTag(menuWrapper, menus);
  helperModule.appendTag(menuSection, menuWrapper);

  return menuSection;
};

export default renderMenuPage;