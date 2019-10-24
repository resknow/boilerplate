/*! reefjs v4.0.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/reef */
Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),(function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof exports?module.exports=e(t):t.Reef=e(t)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(t){"use strict";var e,n=!1,r=function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},o=function(t){if(n)throw new Error(t)},a=function(t,e){var n=r(t);if("object"===n){var o={};for(var i in t)t.hasOwnProperty(i)&&(o[i]=a(t[i],e));return o}if("array"===n)return t.map((function(t){return a(t,e)}));if("string"===n&&!e){var c=document.createElement("div");return c.textContent=t,c.innerHTML}return t},i=function(t,e){var n=t.filter(e);return n.length<1?null:n[0]},c=function(t,e){if(!(t||e&&e.lagoon))return o("Reef.js: You did not provide an element to make into a component.");if(!e||!e.template&&!e.lagoon)return o("Reef.js: You did not provide a template for this component.");if(this.elem=t,this.data=e.data,this.template=e.template,this.allowHTML=e.allowHTML,this.attached=[],this.lagoon=e.lagoon,e.attachTo){var n=this;e.attachTo.forEach((function(t){"attach"in t&&t.attach(n)}))}},l=function(t,e){e.forEach((function(e){t.style[e]=""}))},u=function(t,e){e.forEach((function(e){"class"===e.att?t.className=e.value:"style"===e.att?(function(t,e){var n=(function(t){return t.split(";").filter((function(t){return t.indexOf(":")>0})).map((function(t){var e=t.split(":");return{name:e[0]?e[0].trim():"",value:e[1]?e[1].trim():""}}))})(e),r=Array.prototype.filter.call(t.style,(function(e){return null===i(n,(function(n){return n.name===e&&n.value===t.style[e]}))}));l(t,r),(function(t,e){e.forEach((function(e){t.style[e.name]=e.value}))})(t,n)})(t,e.value):t.setAttribute(e.att,e.value||!0)}))},f=function(t){var e;return e="text"===t.type?document.createTextNode(t.content):"comment"===t.type?document.createComment(t.content):t.isSVG?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),u(e,t.atts),t.children.length>0?t.children.forEach((function(t){e.appendChild(f(t))})):"text"!==t.type&&(e.textContent=t.content),e},s=function(t,e){var n,r=e.atts.filter((function(e){return null===i(t.atts,(function(t){return e.att===t.att}))})),o=t.atts.filter((function(t){var n=i(e.atts,(function(e){return t.att===e.att}));return null===n||n.value!==t.value}));u(e.node,o),n=e.node,r.forEach((function(t){"class"===t.att?n.className="":"style"===t.att?l(n,Array.prototype.slice.call(n.style)):n.removeAttribute(t.att)}))},d=function(t,e,n,r){var o=e.length-t.length;if(o>0)for(;o>0;o--)e[e.length-o].node.parentNode.removeChild(e[e.length-o].node);t.forEach((function(o,a){if(e[a])if(t[a].type===e[a].type){if(s(t[a],e[a]),!(r.filter((function(t){return 3!==o.node.nodeType&&o.node.matches(t)})).length>0))if(t[a].content!==e[a].content&&(e[a].node.textContent=t[a].content),e[a].children.length>0&&o.children.length<1)e[a].node.innerHTML="";else{if(e[a].children.length<1&&o.children.length>0){var i=document.createDocumentFragment();return d(o.children,e[a].children,i,r),void n.appendChild(i)}o.children.length>0&&d(o.children,e[a].children,e[a].node,r)}}else e[a].node.parentNode.replaceChild(f(t[a]),e[a].node);else n.appendChild(f(t[a]))}))},h=function(t,e){return Array.prototype.map.call(t.childNodes,(function(t){var n,r={content:t.childNodes&&t.childNodes.length>0?null:t.textContent,atts:1!==t.nodeType?[]:(n=t.attributes,Array.prototype.map.call(n,(function(t){return{att:t.name,value:t.value}}))),type:3===t.nodeType?"text":8===t.nodeType?"comment":t.tagName.toLowerCase(),node:t};return r.isSVG=e||"svg"===r.type,r.children=h(t,r.isSVG),r}))},p=function(t,e){t&&t.forEach((function(t){if(t.attached.indexOf(e)>-1)return o("ReefJS: "+e.elem+" has attached nodes that it is also attached to, creating an infinite loop.");"render"in t&&t.render()}))};return c.prototype.render=function(){if(this.lagoon)p(this.attached,this);else{if(!this.template)return o("Reef.js: No template was provided.");var n="string"===r(this.elem)?document.querySelector(this.elem):this.elem;if(!n)return o("Reef.js: The DOM element to render your template into was not found.");var i=a(this.data||{},this.allowHTML),c="function"===r(this.template)?this.template(i):this.template;if(-1!==["string","number"].indexOf(r(c))&&n.innerHTML!==c.innerHTML){if(n.innerHTML.length<1||c.length<1)n.innerHTML=c;else{var l=h(function(t){if(e)return(new DOMParser).parseFromString(t,"text/html").body;var n=document.createElement("div");return n.innerHTML=t,n}(c)),u=h(n),f=this.attached.map((function(t){return t.elem}));d(l,u,n,f)}var s;return"function"===r(t.CustomEvent)?s=new CustomEvent("render",{bubbles:!0}):(s=document.createEvent("CustomEvent")).initCustomEvent("render",!0,!1,null),n.dispatchEvent(s),p(this.attached,this),n}}},c.prototype.getData=function(){return a(this.data,!0)},c.prototype.setData=function(t){if("object"!==r(t))return o("ReefJS: The provided data is not an object.");for(var e in t)t.hasOwnProperty(e)&&(this.data[e]=t[e]);this.render()},c.prototype.attach=function(t){"array"===r(t)?Array.prototype.push.apply(this.attached,t):this.attached.push(t)},c.prototype.detach=function(t){var e="array"===r(t);this.attached=this.attached.filter((function(n){return e?-1===t.indexOf(n):n!==t}))},c.debug=function(t){n=!!t},e=(function(){if(!t.DOMParser)return!1;var e=new DOMParser;try{e.parseFromString("x","text/html")}catch(t){return!1}return!0})(),c}));