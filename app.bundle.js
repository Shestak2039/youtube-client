!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,d=0,l=[],u=n(4);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function m(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function g(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),g(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=d++;n=c||(c=h(e)),r=A.bind(null,n,a,!1),o=A.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),g(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){f(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=m(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(m(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var v,w=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function A(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"html {\n  font-size: 3.5px;\n}\n\nbody {\n  background-color: #e4e4e4;\n  overflow: -webkit-paged-y;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".search-form {\n  margin: 20px auto;\n  padding: 5px 10px;\n  font-family: sans-serif;\n  font-weight: bold;\n  border: 2px solid grey;\n  outline: none;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.search-form::placeholder {\n  color: black;\n}\n\n.search-form:focus {\n  background-color: red;\n  border: 2px solid red;\n}\n\n.search-form-wrapper {\n  margin: 0 auto;\n  width: 40%;\n}\n\n@media screen and (max-width: 1024px) {\n  .search-form {\n    height: 5vh;\n    font-size: 20px;\n  }\n\n  .search-form-wrapper {\n    margin: 0 auto;\n    width: 90%;\n  }\n}\n",""])},function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'@font-face {\n  font-family: "FontAwesome";\n  font-weight: normal;\n  font-style : normal;\n         src : url("http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot?v=4.3.0");\n         src : url("http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot?#iefix&v=4.3.0") format("embedded-opentype"),\n               url("http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2?v=4.3.0") format("woff2"),\n               url("http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff?v=4.3.0") format("woff"),\n               url("http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf?v=4.3.0") format("truetype"),\n               url("http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular") format("svg");\n}\n\n.clip-list {\n  --position: 0;\n  --drag-drop: 0px;\n  --clips-total: 15;\n  --clips-count-page: 4;\n  --clip-width: calc(100vw/var(--clips-count-page));\n  --clip-height: calc(var(--clip-width)*1.2);\n  display: grid;\n  grid-template-rows: var(--clip-height);\n  grid-template-columns: repeat(var(--clips-total),var(--clip-width));\n  list-style-type: none;\n  overflow-y: hidden;\n  width: calc(var(--clip-width)*var(--clips-total));\n  height: var(--clip-height);\n  transform: translateX(calc(-1*var(--clip-width)*var(--clips-count-page)*var(--position) + var(--drag-drop)));\n  transition: opacity .5s,-webkit-transform .5s ease-out;\n  transition: transform .5s ease-out, opacity .5s;\n  transition: transform .5s ease-out,opacity .5s,-webkit-transform .5s ease-out, left .5s ease-out, display .4s linear;\n  cursor: -webkit-grab;\n  cursor: grab;\n  margin-left: 0;\n  position: relative;\n\n}\n\n.clip {\n  box-sizing: border-box;\n  overflow: hidden;\n  width: var(--clip-width);\n  height: var(--clip-height);\n  padding: 7.5rem;\n  transform: scale(1);\n  transition: transform .2s linear;\n}\n\n.clip:hover {\n  transform: scale(1.05);\n}\n\n.clip-inner {\n  overflow: hidden;\n  width: 100%;\n  max-width: 100rem;\n  height: 100%;\n  margin: 0 auto;\n  background-color: #fff;\n  border: .4rem solid #b6b6b6;\n  border-radius: 3rem;\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color .2s linear, color .2s linear, transform .2s linear;\n}\n\n.clip-inner:hover {\n  background-color: black;\n  color: red;\n}\n\n.clip-image {\n  width: 100%;\n  margin-top: 3rem;\n  text-align: center;\n}\n\n.clip-title {\n  z-index: 2;\n  display: flex;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 15%;\n}\n\n.clip-link:link, .clip-link:visited {\n    display: block;\n    width: 100%;\n    padding: 4rem 2rem;\n    overflow: hidden;\n    font-weight: 700;\n    font-size: 5rem;\n    color: #000;\n    background-color: red;\n}\n\n.clip-link:hover {\n  display: block;\n  padding: 4rem 2rem;\n  overflow: hidden;\n  font-weight: 700;\n  font-size: 5rem;\n  color: red;\n  background-color: #000;\n}\n\n.clip-info {\n  overflow: hidden;\n}\n\n.clip-info-wrapper {\n  width: 80%;\n  margin: 2rem auto;\n}\n\n.clip-icon {\n  font-weight: 600;\n  font-size: 4.2rem;\n  line-height: 1.8em;\n  text-align: center;\n}\n\n.clip-icon:before {\n  position: absolute;\n  display: block;\n  width: 1em;\n  font-family: FontAwesome;\n  font-weight: 400;\n  text-align: center;\n  color: #575757;\n}\n\n.clip-channel-title:before {\n  content: "\\f007";\n}\n\n.clip-date:before {\n  content: "\\F073";\n}\n\n.clip-view-count:before {\n  content: "\\F06E";\n}\n\n.clip-description {\n  margin: 0 1rem;\n  padding: 0 5rem;\n  font-weight: 300;\n  font-size: 3.5rem;\n  line-height: 1.5em;\n  text-align: justify;\n  color: #575757;\n  transition: color .7s;\n}\n\n.clip-list.active {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n  transform: scale(1.02);\n}\n\n@media screen and (max-width: 1024px) {\n  .clip-list {\n    --clips-count-page: 3;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .clip-list {\n    --clips-count-page: 2;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .clip-list {\n    --clips-count-page: 1;\n  }\n}\n',""])},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".navigator {\r\n  margin-top: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  box-sizing: border-box;\r\n  width: 6rem;\r\n  height: 6rem;\r\n  margin: 0 1rem;\r\n  font-weight: 900;\r\n  font-size: 2.4rem;\r\n  color: transparent;\r\n  background: #fff;\r\n  box-shadow: 0px 0px 6px rgb(54, 5, 5);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.button .tooltip {\r\n  position: relative;\r\n  bottom: 10rem;\r\n  left: 50%;\r\n  z-index: 1;\r\n  margin-left: -5.5rem;\r\n  padding: 2rem 3rem;\r\n  font-size: 4rem;\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: red;\r\n  border-radius: 2rem;\r\n  opacity: 0;\r\n  display: none;\r\n  transition: opacity .3s;\r\n}\r\n\r\n.button:active .tooltip {\r\n  opacity: 1;\r\n  display: inline;\r\n}\r\n\r\n.button:focus {\r\n  outline: none;\r\n}\r\n\r\n.button.current, .button:hover:not(.current) {\r\n  background: red;\r\n  border: .6rem solid red;\r\n}\r\n\r\n.button.current {\r\n  color: white;\r\n}\r\n\r\n.-hidden {\r\n  position: absolute;\r\n  width: .1rem;\r\n  height: .1rem;\r\n  margin: -.1rem;\r\n  clip: rect(0 0 0 0);\r\n}\r\n",""])},function(t,e,n){"use strict";n.r(e);class r{static render(){const t=document.createElement("div"),e=document.createElement("input");t.classList.add("search-form-wrapper"),e.setAttribute("type","text"),e.setAttribute("placeholder","Input title of Video and press Enter"),e.setAttribute("class","search-form"),t.appendChild(e),document.body.appendChild(t)}}class o{constructor(t){this.state=t}render(t){let e;"new"===t?document.querySelector(".clip-list")?(e=document.querySelector(".clip-list"),document.body.removeChild(e),(e=document.createElement("ul")).classList.add("clip-list"),document.body.insertBefore(e,document.querySelector(".navigator"))):((e=document.createElement("ul")).classList.add("clip-list"),document.body.insertBefore(e,document.querySelector(".navigator"))):e=document.querySelector(".clip-list");for(let t=0;t<15;t+=1){const n=document.createElement("li");n.classList.add("clip"),e.appendChild(n);const r=document.createElement("div");r.classList.add("clip-inner"),n.appendChild(r);const o=document.createElement("img");o.classList.add("clip-image"),o.setAttribute("src",`${this.state[t].image.url}`),o.setAttribute("width",`${this.state[t].image.width}`),o.setAttribute("alt",`${this.state[t].videoTitle}`),r.appendChild(o);const i=document.createElement("div");i.classList.add("clip-title"),r.appendChild(i);const a=document.createElement("a");a.classList.add("clip-link"),a.setAttribute("href",`${this.state[t].videoLink}`),a.setAttribute("target","_blank"),a.innerHTML=`${this.state[t].videoTitle}`,i.appendChild(a);const s=document.createElement("div");s.classList.add("clip-info"),r.appendChild(s);const c=document.createElement("div");c.classList.add("clip-info-wrapper"),s.appendChild(c);const d=document.createElement("div");d.classList.add("clip-channel-title"),d.classList.add("clip-icon"),d.innerHTML=`${this.state[t].channelTitle}`,c.appendChild(d);const l=document.createElement("div");l.classList.add("clip-date"),l.classList.add("clip-icon"),l.innerHTML=`${this.state[t].publishedAt}`,c.appendChild(l);const u=document.createElement("div");u.classList.add("clip-view-count"),u.classList.add("clip-icon"),u.innerHTML=`${this.state[t].viewCount}`,c.appendChild(u);const p=document.createElement("div");p.classList.add("clip-description"),p.innerHTML=`${this.state[t].description}`,s.appendChild(p)}}}class i{constructor(t){this.url=t,this.infoAboutVideos=[]}static getVideoId(t){return t.items.map(t=>t.id.videoId)}static truncateWithEllipses(t,e){return t.substr(0,e-1)+(t.length>e?"&hellip;":"")}static extractNextPageToken(t){return t.nextPageToken}static getVideoInformation(t){const e={};return e.image=t.snippet.thumbnails.medium,e.channelTitle=i.truncateWithEllipses(t.snippet.channelTitle,27),e.publishedAt=t.snippet.publishedAt.slice(0,10),e.viewCount=t.statistics.viewCount,e.description=i.truncateWithEllipses(t.snippet.description,180),e.videoTitle=t.snippet.title,e.videoLink=`https://www.youtube.com/watch?v=${t.id}`,e}async getVideoCards(){const t=await fetch(this.url),e=await t.json(),n=await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=${i.getVideoId(e).join(",")}&part=snippet,statistics`),r=await n.json();for(let t=0;t<15;t+=1)this.infoAboutVideos.push(i.getVideoInformation(r.items[t]));return this.infoAboutVideos.push(i.extractNextPageToken(e)),this.infoAboutVideos}}class a{constructor(t){this.url=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=${t}`,a.query=t||a.query}static eventDragAndDrop(){const t=document.querySelector(".clip-list");let e,n=!1,r=0;function o(r){const o=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--position"),i=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--clips-count-page"),a=document.documentElement.clientWidth/i;t.style.left=`${-1*o*i*a}px`,n=!0,e=r.clientX||r.changedTouches[0].clientX,t.classList.add("active")}function i(){const e=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--position"),o=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--clips-count-page"),i=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--clips-total");if(t.style.left="0px",n=!1,t.classList.remove("active"),r<-200){document.querySelector(".clip-list").style.setProperty("--position",parseInt(e,10)+1);const t=document.getElementById("next");t.setAttribute("data-page-num",parseInt(t.getAttribute("data-page-num"),10)+1),t.children[0].textContent=t.getAttribute("data-page-num");const n=document.getElementById("current");n.setAttribute("data-page-num",parseInt(n.getAttribute("data-page-num"),10)+1),n.textContent=n.getAttribute("data-page-num");const s=document.getElementById("prev");if(s.setAttribute("data-page-num",parseInt(n.getAttribute("data-page-num"),10)-1),s.classList.remove("-hidden"),s.children[0].textContent=s.getAttribute("data-page-num"),n.getAttribute("data-page-num")>2){const t=document.getElementById("before-prev");t.setAttribute("data-page-num",parseInt(n.getAttribute("data-page-num"),10)-2),t.classList.remove("-hidden"),t.children[0].textContent=t.getAttribute("data-page-num")}i-o*e<=15&&(document.querySelector(".clip-list").style.setProperty("--clips-total",parseInt(i,10)+15),a.loadData()),o*e>i&&t.classList.add("hidden"),r=0}else if(r>200&&e>0){document.querySelector(".clip-list").style.setProperty("--position",parseInt(e,10)-1);const t=document.getElementById("current");t.setAttribute("data-page-num",parseInt(t.getAttribute("data-page-num"),10)-1),t.textContent=t.getAttribute("data-page-num");const n=document.getElementById("prev");n.setAttribute("data-page-num",parseInt(t.getAttribute("data-page-num"),10)-1),n.children[0].textContent=n.getAttribute("data-page-num");const r=document.getElementById("before-prev");r.setAttribute("data-page-num",parseInt(t.getAttribute("data-page-num"),10)-2),r.children[0].textContent=r.getAttribute("data-page-num");const o=document.getElementById("next");o.setAttribute("data-page-num",parseInt(t.getAttribute("data-page-num"),10)+1),o.children[0].textContent=o.getAttribute("data-page-num"),t.getAttribute("data-page-num")<3&&r.classList.add("-hidden"),t.getAttribute("data-page-num")<2&&n.classList.add("-hidden")}}function s(o){if(!n)return;const i=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--position"),a=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--clips-count-page"),s=document.documentElement.clientWidth/a;r=(o.clientX||o.changedTouches[0].clientX)-t.scrollLeft-e,t.style.left=`${-1*i*a*s+r}px`,window.console.log(r),window.console.log(o)}t.addEventListener("mousedown",o,!1),t.addEventListener("touchstart",o,!1),t.addEventListener("mouseup",i,!1),t.addEventListener("touchend",i,!1),t.addEventListener("mousemove",s,!1),t.addEventListener("touchmove",s,!1)}static resize(){let t=parseInt(window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--clips-count-page"),10);window.addEventListener("resize",function(){const e=parseInt(window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--clips-count-page"),10),n=parseInt(window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--position"),10);if(e!==t){const r=t*n,o=Math.floor(r/e);document.querySelector(".clip-list").style.setProperty("--position",o),t=e;const i=document.getElementById("current");i.setAttribute("data-page-num",o+1),i.textContent=i.getAttribute("data-page-num");const a=document.getElementById("next");a.setAttribute("data-page-num",o+2),a.children[0].textContent=a.getAttribute("data-page-num");const s=document.getElementById("prev");s.setAttribute("data-page-num",o),s.children[0].textContent=s.getAttribute("data-page-num");const c=document.getElementById("before-prev");c.setAttribute("data-page-num",o-1),c.children[0].textContent=c.getAttribute("data-page-num")}})}async start(){const t=new i(this.url),e=await t.getVideoCards();a.nextPagetoken=e[e.length-1],new o(e).render("new"),a.eventDragAndDrop(),a.resize()}static async loadData(){const t=new i(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=${a.query}&pageToken=${a.nextPagetoken}`),e=await t.getVideoCards();a.nextPagetoken=e[e.length-1],new o(e).render()}}class s{static render(){document.querySelector(".navigator")&&document.body.removeChild(document.querySelector(".navigator"));const t=document.createElement("div");t.classList.add("navigator"),document.body.appendChild(t);const e=document.createElement("button");e.innerHTML="&nbsp;",e.setAttribute("class","button before-prev -hidden"),e.setAttribute("id","before-prev"),e.setAttribute("data-page-num","1"),t.appendChild(e);const n=document.createElement("span");n.setAttribute("class","tooltip"),n.innerHTML=e.getAttribute("data-page-num"),e.appendChild(n);const r=document.createElement("button");r.innerHTML="&nbsp;",r.setAttribute("class","button prev -hidden"),r.setAttribute("id","prev"),r.setAttribute("data-page-num","2"),t.appendChild(r);const o=document.createElement("span");o.setAttribute("class","tooltip"),o.innerHTML=r.getAttribute("data-page-num"),r.appendChild(o);const i=document.createElement("button");i.setAttribute("class","button current"),i.setAttribute("id","current"),i.setAttribute("data-page-num","1"),i.innerHTML=i.getAttribute("data-page-num"),t.appendChild(i);const a=document.createElement("button");a.innerHTML="&nbsp;",a.setAttribute("class","button next"),a.setAttribute("id","next"),a.setAttribute("data-page-num","2"),t.appendChild(a);const s=document.createElement("span");s.setAttribute("class","tooltip"),s.innerHTML=a.getAttribute("data-page-num"),a.appendChild(s)}}class c{static eventButtonNext(){const t=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--clips-count-page"),e=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--clips-total"),n=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--position");document.querySelector(".clip-list").style.setProperty("--position",parseInt(n,10)+1);const r=document.getElementById("next");r.setAttribute("data-page-num",parseInt(r.getAttribute("data-page-num"),10)+1),r.children[0].textContent=r.getAttribute("data-page-num");const o=document.getElementById("current");o.setAttribute("data-page-num",parseInt(o.getAttribute("data-page-num"),10)+1),o.textContent=o.getAttribute("data-page-num");const i=document.getElementById("prev");if(i.setAttribute("data-page-num",parseInt(o.getAttribute("data-page-num"),10)-1),i.classList.remove("-hidden"),i.children[0].textContent=i.getAttribute("data-page-num"),o.getAttribute("data-page-num")>2){const t=document.getElementById("before-prev");t.setAttribute("data-page-num",parseInt(o.getAttribute("data-page-num"),10)-2),t.classList.remove("-hidden"),t.children[0].textContent=t.getAttribute("data-page-num")}e-t*n<=15&&(document.querySelector(".clip-list").style.setProperty("--clips-total",parseInt(e,10)+15),a.loadData()),t*n>e&&r.classList.add("hidden")}static eventButtonPrev(){const t=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--position");document.querySelector(".clip-list").style.setProperty("--position",parseInt(t,10)-1);const e=document.getElementById("current");e.setAttribute("data-page-num",parseInt(e.getAttribute("data-page-num"),10)-1),e.textContent=e.getAttribute("data-page-num");const n=document.getElementById("prev");n.setAttribute("data-page-num",parseInt(e.getAttribute("data-page-num"),10)-1),n.children[0].textContent=n.getAttribute("data-page-num");const r=document.getElementById("before-prev");r.setAttribute("data-page-num",parseInt(e.getAttribute("data-page-num"),10)-2),r.children[0].textContent=r.getAttribute("data-page-num");const o=document.getElementById("next");o.setAttribute("data-page-num",parseInt(e.getAttribute("data-page-num"),10)+1),o.children[0].textContent=o.getAttribute("data-page-num"),e.getAttribute("data-page-num")<3&&r.classList.add("-hidden"),e.getAttribute("data-page-num")<2&&n.classList.add("-hidden")}static eventButtonBeforePrev(){const t=window.getComputedStyle(document.querySelector(".clip-list")).getPropertyValue("--position");document.querySelector(".clip-list").style.setProperty("--position",parseInt(t,10)-2);const e=document.getElementById("current");e.setAttribute("data-page-num",parseInt(e.getAttribute("data-page-num"),10)-2),e.textContent=e.getAttribute("data-page-num");const n=document.getElementById("prev");n.setAttribute("data-page-num",parseInt(e.getAttribute("data-page-num"),10)-1),n.children[0].textContent=n.getAttribute("data-page-num");const r=document.getElementById("before-prev");r.setAttribute("data-page-num",parseInt(e.getAttribute("data-page-num"),10)-2),r.children[0].textContent=r.getAttribute("data-page-num");const o=document.getElementById("next");o.setAttribute("data-page-num",parseInt(e.getAttribute("data-page-num"),10)+1),o.children[0].textContent=o.getAttribute("data-page-num"),e.getAttribute("data-page-num")<3&&r.classList.add("-hidden"),e.getAttribute("data-page-num")<2&&n.classList.add("-hidden")}static start(){s.render(),document.getElementById("next").addEventListener("click",c.eventButtonNext),document.getElementById("prev").addEventListener("click",c.eventButtonPrev),document.getElementById("before-prev").addEventListener("click",c.eventButtonBeforePrev)}}class d{static async searchEnter(t){if(13===t.keyCode){const t=new a(document.querySelector(".search-form").value);await t.start(),await c.start()}}static start(){r.render(),document.querySelector(".search-form").addEventListener("keydown",d.searchEnter)}}n(2),n(5),n(7),n(9);(class{static start(){d.start()}}).start()}]);
//# sourceMappingURL=app.bundle.js.map