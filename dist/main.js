(()=>{"use strict";const t=(t,n="")=>{const e=document.createElement(t);return e.innerHTML=n,e},n=()=>document.getElementById("content"),e=(t,n)=>{t.appendChild(n)};(()=>{const i=t("nav","\n  <div>\n    UDine\n    signature cuisines await you...\n  </div>\n  <div>\n    <button>HOME</button>\n    <button>MENU</button>\n    <button>CONTACT</button>\n  </div>\n  ");e(n(),i)})(),(()=>{const i=t("section");i.setAttribute("class","main-content");const s=t("section");s.setAttribute("class","left-section");const c=t("div");c.setAttribute("class","text");const o=t("h1","\n  Food is a necessity and at UDine, it is necessity to give the\n  best of foods in the best way possible.\n  ");o.setAttribute("class","heading"),e(c,o);const d=t("button","Order Online");e(c,d);const l=t("div"),a=t("ul","\n    <li id='credit1' class='credit-item'>\n      <p>Icon</p>\n      <p>Fast Service</p>\n    </li>\n    <li id= 'credit2' class='credit-item'>\n      <p>Icon</p>\n      <p>Fresh Food</p>\n    </li>\n    <li id='credit3' class='credit-item'>\n      <p>Icon</p>\n      <p>24/7 available</p>\n    </li>\n  ");a.setAttribute("class","credit"),e(l,a),e(c,l),e(s,c),e(i,s);const r=t("section");r.setAttribute("class","right-section"),e(i,r),e(n(),i)})();const i=document.getElementById("content"),s=document.createElement("p");s.textContent="This is a child element of content",i.appendChild(s),console.log(s),console.log("This is the page load")})();