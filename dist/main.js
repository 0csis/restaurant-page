(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),d=t.n(s),c=new URL(t(829),t.b),l=new URL(t(322),t.b),u=new URL(t(51),t.b),p=new URL(t(984),t.b),m=new URL(t(837),t.b),h=new URL(t(92),t.b),f=new URL(t(818),t.b),g=i()(o());g.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Elsie&display=swap);"]),g.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap);"]);var b=d()(c),v=d()(l),C=d()(u),w=d()(p),y=d()(m),x=d()(h),E=d()(f);g.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  font-family: "Noto Serif", "Elsie";\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n}\n\n.homepage {\n  display: grid;\n  grid-template-rows: 2fr 3fr 2fr;\n  height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  color: white;\n  gap: 1rem;\n}\n\nheader {\n  margin-top: 0.5rem;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr 2fr;\n  grid-row: 1 / 2;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.headerButtons {\n  position: fixed;\n  display: flex;\n  width: 60%;\n  justify-content: space-between;\n}\n\nbutton {\n  --b: 3px;   /* border thickness */\n  --s: .45em; /* size of the corner */\n  --color: white;\n  \n  padding: calc(.5em + var(--s)) calc(.9em + var(--s));\n  color: var(--color);\n  --_p: var(--s);\n  background:\n    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)\n    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));\n  transition: .3s linear, color 0s, background-color 0s;\n  outline: var(--b) solid #0000;\n  outline-offset: .6em;\n\n  border: 0;\n\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  font-size: 1rem;\n}\n\nbutton:hover,\nbutton:focus-visible{\n  --_p: 0px;\n  outline-color: var(--color);\n  outline-offset: .05em;\n  cursor: pointer;\n}\n\nbutton:active {\n  background: var(--color);\n  color: #fff;\n}\n\n.headerText {\n  font-style: italic;\n  font-size: 4rem;\n  grid-row: 2 / 3;\n  grid-column: 1 / 4;\n  display: flex;\n  justify-self: center;\n  text-shadow: 3px 3px 20px brown,\n    -2px 1px 30px #ff99cc;\n}\n\n.restaurantImage {\n  background: url('+b+");\n  background-size: 100% 100%;\n  grid-row: 2 / 3;\n  width: 85%;\n  height: 25rem;\n  justify-self: center;\n  --b: 3px;   /* border thickness */\n  --s: .45em; /* size of the corner */\n  --color: white;\n  padding: calc(.5em + var(--s)) calc(.9em + var(--s));\n  outline: var(--b) solid white;\n  border-radius: 0.2rem;\n}\n\n.textHomepage {\n  grid-row: 3 / 4;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  width: 60%;\n  height: 100%;\n  align-content: center;\n  justify-self: center;\n}\n\n.backgroundContact,\n.backgroundMenu {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 2.9);\n  margin-top: 5rem;\n  color: white;\n  width: 60vw;\n  height: 70vh;\n  border-radius: 0.2rem;\n}\n\n.direction,\n.phone {\n  display: flex;\n  gap: 0.4rem;\n  margin-bottom: 0.5rem;\n}\n\n.silverwareImage,\n.phoneImage {\n  background: url("+v+");\n  width: 1.5rem;\n  height: 1.5rem;\n  background-size: 100% 100%;\n}\n\n.phoneImage {\n  background: url("+C+");\n}\n\n.mapImage {\n  background: url("+w+");\n  background-size: 100% 100%;\n  margin-top: 3rem;\n  height: 70%;\n}\n\n.saladDescription,\n.saladTitle,\n.sushiDescription,\n.sushiTitle,\n.burritoDescription,\n.burritoTitle {\n  margin-left: 1rem;\n}\n\n.saladImage,\n.sushiImage,\n.burritoImage {\n  background: url("+y+");\n  background-repeat:no-repeat;\n  background-position: center center;\n  background-size: 100% 100%;\n  height: 20rem;\n}\n\n.sushi,\n.salad,\n.burrito {\n  margin-bottom: 2rem;\n  background: rgba(255, 255, 255, 0.05);\n  border-bottom: solid 0.1rem rgba(255, 255, 255, 0.5);\n}\n\n.sushiImage {\n  background: url("+x+");\n  background-repeat:no-repeat;\n  background-position: center center;\n}\n\n.burritoImage {\n  background: url("+E+");\n  background-repeat:no-repeat;\n  background-position: center center;\n}\n\n.saladTitle,\n.sushiTitle,\n.burritoTitle {\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.backgroundMenu {\n  height: fit-content;\n}",""]);const k=g},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},818:(e,n,t)=>{e.exports=t.p+"d854006755209fe61aa4.png"},984:(e,n,t)=>{e.exports=t.p+"b50139fe8d6577226097.png"},51:(e,n,t)=>{e.exports=t.p+"dc7ee903cc622019f822.svg"},829:(e,n,t)=>{e.exports=t.p+"4415973cd4bdf20f31fc.jpg"},837:(e,n,t)=>{e.exports=t.p+"c52be9d5cc4ab4cfaa16.png"},322:(e,n,t)=>{e.exports=t.p+"7d6c5829038e928fbc47.svg"},92:(e,n,t)=>{e.exports=t.p+"26e8cf3fc8f9687e1aa6.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),c=t(216),l=t.n(c),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(829);const g=()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("homepage");const t=document.createElement("header"),r=document.createElement("headerText");r.classList.add("headerText"),r.textContent="Nane International",t.appendChild(r),n.appendChild(t);const o=document.createElement("div");o.classList.add("restaurantImage");const a=new Image;a.src=f,o.appendChild=a,n.appendChild(o);const i=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("div");i.classList.add("textHomepage"),s.textContent="Dear esteemed patrons,",i.appendChild(s),d.textContent="Welcome to 'Nane International', where the impossible becomes possible and the nonsensical is our specialty. Our chefs are masters at concocting dishes that will leave your taste buds confused yet strangely satisfied.",i.appendChild(d),c.textContent="Our menu features dishes like the 'Inverted Salad' where the lettuce is served on top and the toppings are hidden below, and the 'Backwards Lentils Burger' where the lentils burger is on the bottom and the bun is on top. And don't miss out on our signature dessert, the 'Inside-Out Cake' where the frosting is inside and the cake is outside.",i.appendChild(c),l.textContent="But our food is not the only thing that defies logic here. Our waitstaff will serve your drinks upside down, and the tables and chairs inside the building are suspended from the ceiling.",i.appendChild(l),u.textContent="So come join us at 'Nane International' for an unforgettable dining experience that will leave you questioning everything you thought you knew about food and physics.",i.appendChild(u),p.textContent="Sincerely,",i.appendChild(p),m.textContent="The Management",i.appendChild(m),n.appendChild(i),e.appendChild(n)};var b=t(322),v=t(51),C=t(984),w=t(818),y=t(92),x=t(837);(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("headerButtons");const t=document.createElement("button");t.textContent="Menu",t.classList.add("menuButton");const r=document.createElement("button");r.textContent="Home",r.classList.add("homeButton");const o=document.createElement("button");o.textContent="Contact",o.classList.add("contactButton"),n.appendChild(t),n.appendChild(r),n.appendChild(o),e.appendChild(n)})(),g();const E=document.querySelector("#content");document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(()=>{if(E.children[1]){const e=E.children[1];E.removeChild(e)}"contactButton"==e.className?(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("backgroundContact");const t=document.createElement("div");t.classList.add("direction");const r=document.createElement("div");r.classList.add("silverwareImage");const o=new Image;o.src=b,r.appendChild=o,t.appendChild(r);const a=document.createElement("div");a.textContent="123 Main Street in the heart of downtown London, UK",t.appendChild(a);const i=document.createElement("div");i.classList.add("phone");const s=document.createElement("div");s.classList.add("phoneImage");const d=new Image;d.src=v,s.appendChild=d,i.appendChild(s);const c=document.createElement("div");c.textContent="55091029292",i.appendChild(c);const l=document.createElement("div");l.classList.add("mapImage");const u=new Image;u.src=C,l.appendChild=u,n.appendChild(t),n.appendChild(i),n.appendChild(l),e.appendChild(n)})():"homeButton"==e.className?g():"menuButton"==e.className&&(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("backgroundMenu");const t=document.createElement("div");t.classList.add("salad");const r=document.createElement("div");r.classList.add("saladImage");const o=new Image;o.src=x,r.appendChild=o,t.appendChild(r);const a=document.createElement("div");a.classList.add("saladTitle"),a.textContent="The Inverted Salad",t.appendChild(a);const i=document.createElement("ul");i.classList.add("saladDescription");const s=document.createElement("li"),d=document.createElement("li");s.textContent="A playful take on the traditional salad where the greens are served on the bottom and the toppings are hidden beneath.",d.textContent="Ingredients: Mixed greens, sliced cucumber, shredded carrot, cherry tomatoes, sliced radishes, sunflower seeds, croutons, balsamic vinaigrette.",i.appendChild(s),i.appendChild(d),t.appendChild(i);const c=document.createElement("div");c.classList.add("sushi");const l=document.createElement("div");l.classList.add("sushiImage");const u=new Image;u.src=y,l.appendChild=u,c.appendChild(l);const p=document.createElement("div");p.classList.add("sushiTitle"),p.textContent="The Inside-Out Sushi Roll",c.appendChild(p);const m=document.createElement("ul");m.classList.add("sushiDescription");const h=document.createElement("li"),f=document.createElement("li");h.textContent="A sushi roll with a playful twist, where the rice and the nori seaweed are reversed in order.",f.textContent="Ingredients: Sushi rice, avocado, cucumber, carrot, bell pepper, alfalfa sprouts, wasabi, soy sauce.",m.appendChild(h),m.appendChild(f),c.appendChild(m);const g=document.createElement("div");g.classList.add("burrito");const b=document.createElement("div");b.classList.add("burritoImage");const v=new Image;v.src=w,b.appendChild=v,g.appendChild(b);const C=document.createElement("div");C.classList.add("burritoTitle"),C.textContent="The Backwards Burrito",g.appendChild(C);const E=document.createElement("ul");E.classList.add("burritoDescription");const k=document.createElement("li"),I=document.createElement("li");k.textContent="A burrito with its filling on the outside and the tortilla wrapped around it.",I.textContent="Ingredients: Flour tortilla, refried beans, sliced avocado, diced tomato, chopped cilantro, sliced jalapenos, lime wedges.",E.appendChild(k),E.appendChild(I),g.appendChild(E),n.appendChild(t),n.appendChild(c),n.appendChild(g),e.appendChild(n)})()}))}))})()})();