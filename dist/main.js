(()=>{"use strict";var n={950:(n,r,t)=>{t.d(r,{Z:()=>p});var e=t(645),o=t.n(e),i=t(667),a=t.n(i),c=t(862),s=t(652),d=o()((function(n){return n[1]})),l=a()(c),u=a()(s);d.push([n.id,"* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.3rem;\r\n}\r\n\r\n.text {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: #ff450033;\r\n}\r\n\r\n#content {\r\n  text-align: center;\r\n}\r\n\r\n.credit {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  position: relative;\r\n  top: 200px;\r\n}\r\n\r\n.credit-text {\r\n  color: #4b1009;\r\n  border-bottom: 2px solid #771d26;\r\n}\r\n\r\n.heading {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  top: 40px;\r\n  position: relative;\r\n  color: #ffc822;\r\n  border-left: 5px solid #ffc822;\r\n  border-bottom-right-radius: 200px;\r\n  border-right: 5px solid #ffc822;\r\n}\r\n\r\n.nav-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav-right {\r\n  display: flex;\r\n}\r\n\r\nnav {\r\n  width: max-content;\r\n  margin: 0 auto;\r\n  padding: 16px 0;\r\n}\r\n\r\n.nav-button {\r\n  padding: 5px 12px;\r\n  font-size: 1.2rem;\r\n  border: none;\r\n  background-color: #d3cca8;\r\n  color: #771d26;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-button:hover {\r\n  background-color: #771d26;\r\n  color: #d3cca8;\r\n}\r\n\r\n.active {\r\n  border: 2px solid #d3cca8;\r\n  transform: scale(1.1);\r\n  background-color: #771d26;\r\n  color: #d3cca8;\r\n}\r\n\r\n.main-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 100vh;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.left-section {\r\n  background-image: url("+l+");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.left-section button {\r\n  color: rgb(255, 200, 34);\r\n  position: relative;\r\n  top: 150px;\r\n  color: rgb(255, 200, 34);\r\n  position: relative;\r\n  top: 150px;\r\n  padding: 12px 20px;\r\n  font-size: large;\r\n  background-color: #982121;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.right-section {\r\n  background-image: url("+u+");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.credit li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n#credit1 {\r\n  border: 2px solid #f1f1c5;\r\n  background-color: #f1f1c54d;\r\n  transform: rotate(-15deg);\r\n}\r\n\r\n#credit2 {\r\n  border: 2px solid #c28f30;\r\n  background-color: #c28f304d;\r\n  position: absolute;\r\n  bottom: -50px;\r\n}\r\n\r\n#credit3 {\r\n  border: 2px solid #af5908;\r\n  background-color: #af59084d;\r\n  transform: rotate(15deg);\r\n}\r\n\r\n.menu-bar {\r\n  background-image: url("+l+");\r\n  background-size: 20%;\r\n}\r\n\r\n.menus {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  background-color: #f1f1e2e6;\r\n  border: 1px solid rgb(197, 142, 80);\r\n  border-top-right-radius: 100px;\r\n  border-bottom-left-radius: 100px;\r\n  border-bottom-right-radius: 20px;\r\n  border-top-left-radius: 20px;\r\n  box-shadow: 1px 2px 3px #333;\r\n}\r\n\r\n.menu-title {\r\n  color: #771d26;\r\n  font-weight: 700;\r\n  border-bottom-right-radius: 150px;\r\n  border-right: 2px solid #ff8d22;\r\n  border-bottom: 2px solid #ff8d22;\r\n  border-left: 2px solid #ff8d22;\r\n  width: max-content;\r\n  margin: 30px auto 20px;\r\n  padding: 0 12px;\r\n}\r\n\r\n.item-note {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu-item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.menu-item img {\r\n  width: 200px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.contact-section {\r\n  background-image: url("+u+");\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-position: 0 30%;\r\n  padding-top: 10px;\r\n}\r\n\r\n.contact-section h4 {\r\n  color: #f1f1ef;\r\n  font-weight: 900;\r\n  font-size: 1.8rem;\r\n  width: max-content;\r\n  margin: 0px auto;\r\n  background-color: rgba(255, 68, 34, 0.5);\r\n  border-top-right-radius: 30px;\r\n  border-bottom-left-radius: 30px;\r\n  padding: 0 20px;\r\n}\r\n\r\n.contact-title {\r\n  background-color: rgb(255, 228, 196, 0.4);\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.panel {\r\n  display: grid;\r\n  grid-template-columns: 300px 1fr;\r\n  width: 85%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.nav-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  justify-content: space-evenly;\r\n  border: 1px soild #333;\r\n  border: 1px solid #f1f1ef;\r\n  border-top-left-radius: 30px;\r\n  border-bottom-right-radius: 30px;\r\n}\r\n\r\n.contact-panel {\r\n  width: max-content;\r\n  margin: 0 auto;\r\n  padding: 30px;\r\n  border: 1px solid #f1f1ef;\r\n  border-radius: 40%;\r\n  background-color: rgb(255,99,71, 0.4);\r\n  color: #f1f1ef;\r\n}\r\n\r\n.nav-panel button {\r\n  padding: 30px;\r\n  border-top-right-radius: 50px;\r\n}\r\n\r\n.panel-title {\r\n  border-bottom: 2px solid #af5908;\r\n  width: max-content;\r\n  margin: 0 auto;\r\n}",""]);const p=d},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,r,t)=>{var e,o=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),i=[];function a(n){for(var r=-1,t=0;t<i.length;t++)if(i[t].identifier===n){r=t;break}return r}function c(n,r){for(var t={},e=[],o=0;o<n.length;o++){var c=n[o],s=r.base?c[0]+r.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:g(p,r),references:1}),e.push(l)}return e}function s(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var i=t.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var d,l=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function u(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var f=null,b=0;function g(n,r){var t,e,o;if(r.singleton){var i=b++;t=f||(f=s(r)),e=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=s(r),e=p.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var o=a(t[e]);i[o].references--}for(var s=c(n,r),d=0;d<t.length;d++){var l=a(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}},652:(n,r,t)=>{n.exports=t.p+"615112097b69053fb963.jpg"},862:(n,r,t)=>{n.exports=t.p+"fbcc36055385c765978a.jpg"}},r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={id:e,exports:{}};return n[e](o,o.exports,t),o.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var r=t.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{const n=(n,r="")=>{const t=document.createElement(n);return t.innerHTML=r,t},r=()=>document.getElementById("content"),e=(n,r)=>{n.appendChild(r)};var o=t(379),i=t.n(o),a=t(950);i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var c=t(652);const s=()=>{const n=new Image;return n.src=c,n},d=(r,t)=>{const e=n("h2",r);return e.setAttribute("class",t),e},l=r=>{const t=n("div");return t.setAttribute("class",r),t},u=(r,t)=>{const o=n("div");o.setAttribute("class","item-note");const i=n("span");i.textContent=`$${r}`,e(o,i);const a=n("span");return a.textContent=t,e(o,a),o},p=()=>{const n=l("menu-item"),r=s();e(n,r);const t=u("14.99","This menu item description goes here");return e(n,t),n},f=()=>{const n=l("menu-item"),r=s();e(n,r);const t=u("24.99","This menu item description goes here");return e(n,t),n},b=()=>{const n=l("menu-item"),r=s();e(n,r);const t=u("39.99","This menu item description goes here");return e(n,t),n},g=()=>{const n=l("menu-item"),r=s();e(n,r);const t=u("50.99","This menu item description goes here");return e(n,t),n};console.log(d("Brunch","brunch")),console.log(p());(()=>{const t=n("nav",'\n  <div>\n    UDine\n    signature cuisines await you...\n  </div>\n  <div>\n    <button class="nav-button active">HOME</button>\n    <button class="nav-button">MENU</button>\n    <button class="nav-button">CONTACT</button>\n  </div>\n  ');t.setAttribute("id","nav-bar"),e(r(),t)})(),(()=>{const t=n("section");t.setAttribute("class","main-content");const o=n("section");o.setAttribute("class","left-section");const i=n("div");i.setAttribute("class","text");const a=n("h1","\n  Food is a necessity for life and at UDine, it is a necessity to give the\n  best of foods in the best way possible.\n  ");a.setAttribute("class","heading"),e(i,a);const c=n("button","Order Online");e(i,c);const s=n("div"),d=n("ul","\n    <li id='credit1' class='credit-item'>\n      <p>Icon</p>\n      <p class='credit-text'>Fast Service</p>\n    </li>\n    <li id= 'credit2' class='credit-item'>\n      <p>Icon</p>\n      <p class='credit-text'>Fresh Food</p>\n    </li>\n    <li id='credit3' class='credit-item'>\n      <p>Icon</p>\n      <p class='credit-text'>24/7 available</p>\n    </li>\n  ");d.setAttribute("class","credit"),e(s,d),e(i,s),e(o,i),e(t,o);const l=n("section");l.setAttribute("class","right-section"),e(t,l),e(r(),t)})(),(()=>{const t=n("section"),o=n("div");o.setAttribute("class","menu-bar");const i=n("select",'\n<option value="Select">Select menu</option>\n<option value="Breakfast">BreakFast</option>\n<option value="Brunch">Brunch</option>\n<option value="Lunch">Lunch</option>\n<option value="Dinner">Dinner</option>\n');i.setAttribute("id","name"),e(o,i);const a=n("div");a.setAttribute("class","menus");const c=l("breakfast"),s=d("Breakfast Menu","menu-title");e(c,s),e(c,p()),e(c,p()),e(c,p()),e(c,p()),e(a,c);const u=l("brunch"),m=d("Brunch Menu","menu-title");e(u,m),e(u,f()),e(u,f()),e(u,f()),e(u,f()),e(a,u);const h=l("lunch"),x=d("Lunch Menu","menu-title");e(h,x),e(h,b()),e(h,b()),e(h,b()),e(h,b()),e(a,h);const v=l("dinner"),y=d("Dinner Menu","menu-title");e(v,y),e(v,g()),e(v,g()),e(v,g()),e(v,g()),e(a,v),e(o,a),e(t,o),e(r(),t)})();const m=document.getElementById("content"),h=document.createElement("p");h.textContent="This is a child element of content",m.appendChild(h),console.log(h),console.log("This is the page load")})()})();