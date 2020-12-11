import { pageLoad } from './modules/page-load.js';

const wrapper = document.getElementById('content');
const p = document.createElement('p');
p.textContent = "This is a child element of content";
wrapper.appendChild(p);

console.log(p);

pageLoad();