(()=>{"use strict";var n={950:(n,t,r)=>{r.d(t,{Z:()=>x});var e=r(645),o=r.n(e),i=r(667),a=r.n(i),s=r(825),c=r(938),d=r(318),l=r(862),u=r(652),p=o()((function(n){return n[1]})),f=a()(s),b=a()(c),m=a()(d),g=a()(l),h=a()(u);p.push([n.id,"@font-face {\r\n  font-family: 'MyFont';\r\n  src: url("+f+") format('ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'MyFont1';\r\n  src: url("+b+") format('ttf');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'MyFont2';\r\n  src: url("+m+") format('ttf');\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.3rem;\r\n}\r\n\r\n.text {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: #ff450033;\r\n}\r\n\r\n#content {\r\n  text-align: center;\r\n}\r\n\r\n.credit {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  position: relative;\r\n  top: 200px;\r\n}\r\n\r\n.credit-text {\r\n  color: #4b1009;\r\n  border-bottom: 2px solid #771d26;\r\n}\r\n\r\n.menu-item img {\r\n  width: 200px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n#logo-section img {\r\n  width: 200px;\r\n  border-radius: 20%;\r\n}\r\n\r\n.slogan-style {\r\n  margin-top: 0;\r\n  font-weight: 700;\r\n  font-size: 1.2rem;\r\n  font-family: cursive;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.heading {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  background-color: #0000004d;\r\n  top: 40px;\r\n  position: relative;\r\n  color: #ffc822;\r\n  border-left: 5px solid #ffc822;\r\n  border-bottom-right-radius: 200px;\r\n  border-right: 5px solid #ffc822;\r\n}\r\n\r\n.nav-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav-right {\r\n  display: flex;\r\n}\r\n\r\nnav {\r\n  width: max-content;\r\n  margin: 0 auto;\r\n  padding: 16px 0;\r\n}\r\n\r\n.nav-button {\r\n  padding: 5px 12px;\r\n  font-size: 1.2rem;\r\n  border: none;\r\n  background-color: #d3cca8;\r\n  color: #771d26;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-button:hover {\r\n  background-color: #771d26;\r\n  color: #d3cca8;\r\n}\r\n\r\n.active {\r\n  border: 2px solid #d3cca8;\r\n  transform: scale(1.1);\r\n  background-color: #771d26;\r\n  color: #d3cca8;\r\n}\r\n\r\n.main-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 100vh;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.left-section {\r\n  background-image: url("+g+");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.left-section button {\r\n  color: rgb(255, 200, 34);\r\n  position: relative;\r\n  top: 150px;\r\n  padding: 12px 20px;\r\n  font-size: large;\r\n  background-color: #982121;\r\n  border-radius: 20px;\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.right-section {\r\n  background-image: url("+h+");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.credit li {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n#credit1 {\r\n  border: 2px solid #f1f1c5;\r\n  background-color: #f1f1c54d;\r\n  transform: rotate(-15deg);\r\n}\r\n\r\n#credit2 {\r\n  border: 2px solid #c28f30;\r\n  background-color: #c28f304d;\r\n  position: absolute;\r\n  bottom: -50px;\r\n}\r\n\r\n#credit3 {\r\n  border: 2px solid #af5908;\r\n  background-color: #af59084d;\r\n  transform: rotate(15deg);\r\n}\r\n\r\n.menu-bar {\r\n  background-image: url("+g+");\r\n  background-size: 20%;\r\n}\r\n\r\n.menus {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  background-color: #f1f1e2e6;\r\n  border: 1px solid #c58e50;\r\n  border-top-right-radius: 100px;\r\n  border-bottom-left-radius: 100px;\r\n  border-bottom-right-radius: 20px;\r\n  border-top-left-radius: 20px;\r\n  box-shadow: 1px 2px 3px #333;\r\n}\r\n\r\n.menu-title {\r\n  color: #771d26;\r\n  font-weight: 700;\r\n  border-bottom-right-radius: 150px;\r\n  border-right: 2px solid #ff8d22;\r\n  border-bottom: 2px solid #ff8d22;\r\n  border-left: 2px solid #ff8d22;\r\n  width: max-content;\r\n  margin: 30px auto 20px;\r\n  padding: 0 12px;\r\n}\r\n\r\n.item-note {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.menu-item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  box-shadow: 2px 3px 4px;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  padding: 16px 0;\r\n  border-radius: 20px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.contact-section {\r\n  background-image: url("+h+");\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-position: 0 30%;\r\n  padding-top: 10px;\r\n}\r\n\r\n.contact-section h4 {\r\n  color: #f1f1ef;\r\n  font-weight: 900;\r\n  font-size: 1.8rem;\r\n  width: max-content;\r\n  margin: 0px auto;\r\n  background-color: #ff442280;\r\n  border-top-right-radius: 30px;\r\n  border-bottom-left-radius: 30px;\r\n  padding: 0 20px;\r\n}\r\n\r\n.contact-title {\r\n  background-color: #ffe4c466;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.panel {\r\n  display: grid;\r\n  grid-template-columns: 300px 1fr;\r\n  width: 85%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.nav-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  justify-content: space-evenly;\r\n  border: 1px solid #f1f1ef;\r\n  border-top-left-radius: 30px;\r\n  border-bottom-right-radius: 30px;\r\n}\r\n\r\n.contact-panel {\r\n  width: max-content;\r\n  margin: 0 auto;\r\n  padding: 30px;\r\n  border: 1px solid #f1f1ef;\r\n  border-radius: 40%;\r\n  background-color: #ff634766;\r\n  color: #f1f1ef;\r\n}\r\n\r\n.nav-panel button {\r\n  padding: 30px;\r\n  border-top-right-radius: 50px;\r\n}\r\n\r\n.panel-title {\r\n  border-bottom: 2px solid #af5908;\r\n  width: max-content;\r\n  margin: 0 auto;\r\n}\r\n",""]);const x=p},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(n,r,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);e&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,t,r)=>{var e,o=function(){var n={};return function(t){if(void 0===n[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[t]=r}return n[t]}}(),i=[];function a(n){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===n){t=r;break}return t}function s(n,t){for(var r={},e=[],o=0;o<n.length;o++){var s=n[o],c=t.base?s[0]+t.base:s[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var u=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:m(p,t),references:1}),e.push(l)}return e}function c(n){var t=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var i=r.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(t);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(n,t){return d[n]=t,d.filter(Boolean).join("\n")});function u(n,t,r,e){var o=r?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function p(n,t,r){var e=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var f=null,b=0;function m(n,t){var r,e,o;if(t.singleton){var i=b++;r=f||(f=c(t)),e=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=c(t),e=p.bind(null,r,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return e(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var r=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<r.length;e++){var o=a(r[e]);i[o].references--}for(var c=s(n,t),d=0;d<r.length;d++){var l=a(r[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=c}}}},938:(n,t,r)=>{n.exports=r.p+"2437497ae30a724c34a5.ttf"},825:(n,t,r)=>{n.exports=r.p+"764e166fd838fe050b60.ttf"},318:(n,t,r)=>{n.exports=r.p+"93cd59fff879b8bdd57d.ttf"},652:(n,t,r)=>{n.exports=r.p+"2ce8fe3e7c214ae20c0e.jpg"},862:(n,t,r)=>{n.exports=r.p+"ecd34619bc166aa9f20b.jpg"},243:(n,t,r)=>{n.exports=r.p+"196afcc8ead632e87df6.png"}},t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={id:e,exports:{}};return n[e](o,o.exports,r),o.exports}r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var t=r.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{const n=(n,t="")=>{const r=document.createElement(n);return r.innerHTML=t,r},t=()=>document.getElementById("content"),e=(n,t)=>{n.appendChild(t)};var o=r(243);const i=(t,r,o)=>{const i=n("button");return i.setAttribute("class",t),"HOME"===o&&i.classList.add("active"),i.textContent=o,e(r,i),r},a=()=>{const t=n("div");t.setAttribute("id","logo-section");const r=new Image;r.src=o,r.setAttribute("alt","UDine"),e(t,r);const i=n("p","signature cuisines await you...");return i.setAttribute("class","slogan-style"),e(t,i),t},s=()=>{const t=n("section");t.setAttribute("class","main-content");const r=n("section");r.setAttribute("class","left-section");const o=n("div");o.setAttribute("class","text");const i=n("h1","\n  Food is a necessity for life and at UDine, it is a necessity to give the\n  best of foods in the best way possible.\n  ");i.setAttribute("class","heading"),e(o,i);const a=n("button","Order Online");e(o,a);const s=n("div"),c=n("ul","\n    <li id='credit1' class='credit-item'>\n      <p>Icon</p>\n      <p class='credit-text'>Fast Service</p>\n    </li>\n    <li id= 'credit2' class='credit-item'>\n      <p>Icon</p>\n      <p class='credit-text'>Fresh Food</p>\n    </li>\n    <li id='credit3' class='credit-item'>\n      <p>Icon</p>\n      <p class='credit-text'>24/7 available</p>\n    </li>\n  ");c.setAttribute("class","credit"),e(s,c),e(o,s),e(r,o),e(t,r);const d=n("section");return d.setAttribute("class","right-section"),e(t,d),t};var c=r(379),d=r.n(c),l=r(950);d()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var u=r(652);const p=()=>{const n=new Image;return n.src=u,n},f=(t,r)=>{const e=n("h2",t);return e.setAttribute("class",r),e},b=t=>{const r=n("div");return r.setAttribute("class",t),r},m=(t,r)=>{const o=n("div");o.setAttribute("class","item-note");const i=n("span");i.textContent=`$${t}`,e(o,i);const a=n("span");return a.textContent=r,e(o,a),o},g=()=>{const n=b("menu-item"),t=p();e(n,t);const r=m("14.99","This menu item description goes here");return e(n,r),n},h=()=>{const n=b("menu-item"),t=p();e(n,t);const r=m("24.99","This menu item description goes here");return e(n,r),n},x=()=>{const n=b("menu-item"),t=p();e(n,t);const r=m("39.99","This menu item description goes here");return e(n,r),n},v=()=>{const n=b("menu-item"),t=p();e(n,t);const r=m("50.99","This menu item description goes here");return e(n,r),n},y=(()=>{const t=[{tag:"p",text:"Address: Kampala Uganda"},{tag:"p",text:"Email: ebtwino718@yahoo.com"},{tag:"p",text:"Mobile: 0785163925"}],r=(t,r,e)=>{const o=n(e,r);return o.setAttribute("class",t),o},o=(t,r,o,i,a)=>{const s=n("div");s.setAttribute("class","form-field");const c=((t,r)=>{const e=n("label",t);return e.setAttribute("for",r),e})(t,r);e(s,c);const d=((t,r,e)=>{const o=n("input");return o.setAttribute("type",t),o.setAttribute("id",r),o.setAttribute("name",e),o})(o,i,a);return e(s,d),s};return{createPanel:()=>{const t=n("div",'\n    <button id="address" class="panel-item">ADDRESS</button>\n    <button id="Email" class="panel-item">MESSAGE</button>\n    <button id="Mobile" class="panel-item">SOCIAL</button>\n  ');return t.setAttribute("class","nav-panel"),t},createContactPanel:()=>{const o=n("div");o.setAttribute("class","contact-panel");const i=r("panel-title","Contact Information","h3");e(o,i);const a=n("span","&times;");return a.setAttribute("class","close"),e(o,a),t.forEach((t=>{const r=n(`${t.tag}`,`${t.text}`);e(o,r)})),o},createMessageField:()=>{const t=n("div");t.setAttribute("class","contact-panel");const i=r("panel-title","Leave a message","h3");e(t,i);const a=n("span","&times;");return a.setAttribute("class","close"),e(t,a),e(t,(()=>{const t=n("form");t.setAttribute("action","#");const r=o("Name","name","text","name","name");e(t,r);const i=o("Email","email","email","email","email");e(t,i);const a=((t,r)=>{const o=n("div");o.setAttribute("class","actions");const i=n("button");return i.setAttribute("type","submit"),i.textContent="Send Message",e(o,i),o})();return e(t,a),t})()),t}}})();(()=>{e(t(),(()=>{const t=n("nav");t.setAttribute("id","nav-bar"),e(t,a());const r=n("div");return i("nav-button",r,"HOME"),i("nav-button",r,"MENU"),i("nav-button",r,"CONTACT"),e(t,r),t})()),e(t(),s());const r=document.getElementsByClassName("nav-button");Array.from(r).forEach((o=>{o.addEventListener("click",(i=>{Array.from(r).forEach((n=>{n.classList.remove("active")})),(()=>{const n=t().childNodes;for(let t=1;t<n.length;t++)n[t].remove()})(),"HOME"===i.target.textContent?(e(t(),s()),o.classList.add("active")):"MENU"===i.target.textContent?(e(t(),(()=>{const t=n("section");t.setAttribute("class","menu-section");const r=n("div");r.setAttribute("class","menu-bar");const o=n("select",'\n    <option value="Select">Select menu</option>\n    <option value="Breakfast">BreakFast</option>\n    <option value="Brunch">Brunch</option>\n    <option value="Lunch">Lunch</option>\n    <option value="Dinner">Dinner</option>\n  ');o.setAttribute("id","name"),e(r,o);const i=n("div");i.setAttribute("class","menus");const a=b("breakfast"),s=f("Breakfast Menu","menu-title");e(a,s),e(a,g()),e(a,g()),e(a,g()),e(a,g()),e(i,a);const c=b("brunch"),d=f("Brunch Menu","menu-title");e(c,d),e(c,h()),e(c,h()),e(c,h()),e(c,h()),e(i,c);const l=b("lunch"),u=f("Lunch Menu","menu-title");e(l,u),e(l,x()),e(l,x()),e(l,x()),e(l,x()),e(i,l);const p=b("dinner"),m=f("Dinner Menu","menu-title");return e(p,m),e(p,v()),e(p,v()),e(p,v()),e(p,v()),e(i,p),e(r,i),e(t,r),t})()),o.classList.add("active")):"CONTACT"===i.target.textContent&&(e(t(),(()=>{const t=n("section");t.setAttribute("class","contact-section");const r=n("h2");r.setAttribute("class","menu-title contact-title"),r.textContent="Contact Us",e(t,r);const o=n("h4");o.textContent="Let us talk food!",e(t,o);const i=n("div");i.setAttribute("class","panel");const a=n("div");return a.setAttribute("class","contact-fields"),e(i,y.createPanel()),e(a,y.createContactPanel()),e(a,y.createMessageField()),e(i,a),e(t,i),t})()),o.classList.add("active"))}))}))})()})()})();