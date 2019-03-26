!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const n=document.createElement("link");n.rel="stylesheet",n.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(n)},function(t,e,i){"use strict";i.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,s=t=>(...e)=>{const i=t(...e);return n.set(i,!0),i},r=t=>"function"==typeof t&&n.has(t),a=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,i=null)=>{let n=e;for(;n!==i;){const e=n.nextSibling;t.removeChild(n),n=e}},d={},c={},l=`{{lit-${String(Math.random()).slice(2)}}}`,u=`\x3c!--${l}--\x3e`,h=new RegExp(`${l}|${u}`),p="$lit$";class m{constructor(t,e){this.parts=[],this.element=e;let i=-1,n=0;const s=[],r=e=>{const a=e.content,o=document.createTreeWalker(a,133,null,!1);let d=0;for(;o.nextNode();){i++;const e=o.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const s=e.attributes;let r=0;for(let t=0;t<s.length;t++)s[t].value.indexOf(l)>=0&&r++;for(;r-- >0;){const s=t.strings[n],r=b.exec(s)[2],a=r.toLowerCase()+p,o=e.getAttribute(a).split(h);this.parts.push({type:"attribute",index:i,name:r,strings:o}),e.removeAttribute(a),n+=o.length-1}}"TEMPLATE"===e.tagName&&r(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const r=e.parentNode,a=t.split(h),o=a.length-1;for(let t=0;t<o;t++)r.insertBefore(""===a[t]?g():document.createTextNode(a[t]),e),this.parts.push({type:"node",index:++i});""===a[o]?(r.insertBefore(g(),e),s.push(e)):e.data=a[o],n+=o}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&i!==d||(i++,t.insertBefore(g(),e)),d=i,this.parts.push({type:"node",index:i}),null===e.nextSibling?e.data="":(s.push(e),i--),n++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1})}}};r(e);for(const t of s)t.parentNode.removeChild(t)}}const f=t=>-1!==t.index,g=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,i){this._parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this._parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let i=0,n=0;const s=t=>{const r=document.createTreeWalker(t,133,null,!1);let a=r.nextNode();for(;i<e.length&&null!==a;){const t=e[i];if(f(t))if(n===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options));i++}else n++,"TEMPLATE"===a.nodeName&&s(a.content),a=r.nextNode();else this._parts.push(void 0),i++}};return s(t),a&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class v{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="";for(let i=0;i<t;i++){const t=this.strings[i],n=b.exec(t);e+=n?t.substr(0,n.index)+n[1]+n[2]+p+n[3]+l:t+u}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const y=t=>null===t||!("object"==typeof t||"function"==typeof t);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)i+="string"==typeof e?e:String(e);else i+="string"==typeof t?t:String(t)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===d||y(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=d,t(this)}this.value!==d&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=g()),t._insert(this.endNode=g())}insertAfterPart(t){t._insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=d,t(this)}const t=this._pendingValue;t!==d&&(y(t)?t!==this.value&&this._commitText(t):t instanceof v?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===c?(this.value=c,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const i=new _(e,t.processor,this.options),n=i._clone();i.update(t.values),this._commitNode(n),this.value=i}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)void 0===(i=e[n])&&(i=new S(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=d,t(this)}if(this._pendingValue===d)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=d}}class C extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends w{}let T=!1;try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class P{constructor(t,e,i){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=d,t(this)}if(this._pendingValue===d)return;const t=this._pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=k(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=d}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=new class{handleAttributeExpressions(t,e,i,n){const s=e[0];return"."===s?new C(t,e.slice(1),i).parts:"@"===s?[new P(t,e.slice(1),n.eventContext)]:"?"===s?[new A(t,e.slice(1),i)]:new x(t,e,i).parts}handleTextExpression(t){return new S(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function R(t){let e=N.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},N.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(l);return void 0===(i=e.keyString.get(n))&&(i=new m(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const N=new Map,I=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const O=(t,...e)=>new v(t,e,"html",M),V=133;function z(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,V,null,!1);let r=F(n),a=n[r],o=-1,d=0;const c=[];let l=null;for(;s.nextNode();){o++;const t=s.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(c.push(t),null===l&&(l=t)),null!==l&&d++;void 0!==a&&a.index===o;)a.index=null!==l?-1:a.index-d,a=n[r=F(n,r)]}c.forEach(t=>t.parentNode.removeChild(t))}const H=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,V,null,!1);for(;i.nextNode();)e++;return e},F=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(f(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const D=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),U=!1);const L=t=>e=>{const i=D(e.type,t);let n=N.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},N.set(i,n));let s=n.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(l);if(void 0===(s=n.keyString.get(r))){const i=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(i,t),s=new m(e,i),n.keyString.set(r,s)}return n.stringsArray.set(e.strings,s),s},B=["html","svg"],$=new Set,j=(t,e,i)=>{$.add(i);const n=t.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,i);const s=document.createElement("style");for(let t=0;t<n.length;t++){const e=n[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}if((t=>{B.forEach(e=>{const i=N.get(D(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),z(t,i)})})})(i),function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,V,null,!1);let a=F(s),o=0,d=-1;for(;r.nextNode();)for(d++,r.currentNode===i&&(o=H(e),i.parentNode.insertBefore(e,i));-1!==a&&s[a].index===d;){if(o>0){for(;-1!==a;)s[a].index+=o,a=F(s,a);return}a=F(s,a)}}(e,s,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,i),window.ShadyCSS.nativeShadow){const i=e.element.content.querySelector("style");t.insertBefore(i.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(s,e.element.content.firstChild);const t=new Set;t.add(s),z(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((t,e)=>t);const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},G=(t,e)=>e!==t&&(e==e||t==t),X={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:G},Y=Promise.resolve(!0),W=1,J=4,Z=8,K=16,Q=32;class tt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=X){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=G){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||q,s="function"==typeof n?n:n.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||q.toAttribute)(t,i)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=X){const n=this.constructor,s=n._attributeNameForProperty(t,i);if(void 0!==s){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=this._updateState|Z,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=this._updateState&~Z}}_attributeToProperty(t,e){if(this._updateState&Z)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i._classProperties.get(n)||X;this._updateState=this._updateState|K,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~K}}requestUpdate(t,e){let i=!0;if(void 0!==t&&!this._changedProperties.has(t)){const n=this.constructor,s=n._classProperties.get(t)||X;n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.set(t,e),!0!==s.reflect||this._updateState&K||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}return!this._hasRequestedUpdate&&i&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|J;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const i=this.performUpdate();null!=i&&"function"==typeof i.then&&await i,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&J}get hasUpdated(){return this._updateState&W}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&W||(this._updateState=this._updateState|W,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~J}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}tt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const et=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:Object.assign({},e,{finisher(i){i.createProperty(e.key,t)}}),it=(t,e,i)=>{e.constructor.createProperty(i,t)};function nt(t){return(e,i)=>void 0!==i?it(t,e,i):et(t,e)}at((t,e)=>t.querySelector(e)),at((t,e)=>t.querySelectorAll(e));const st=(t,e,i)=>{Object.defineProperty(e,i,t)},rt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function at(t){return e=>(i,n)=>{const s={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==n?st(s,i,n):rt(s,i)}}const ot="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol();class ct{constructor(t,e){if(e!==dt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ot?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const lt=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof ct)return t.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new ct(i,dt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ut=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let n=0,s=e.length;n<s;n++){const s=e[n];Array.isArray(s)?t(s,i):i.push(s)}return i}(t);class ht extends tt{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){ut(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ot?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ht.finalized=!0,ht.render=((t,e,i)=>{const n=i.scopeName,s=I.has(e),r=e instanceof ShadowRoot&&U&&t instanceof v,a=r&&!$.has(n),d=a?document.createDocumentFragment():e;if(((t,e,i)=>{let n=I.get(e);void 0===n&&(o(e,e.firstChild),I.set(e,n=new S(Object.assign({templateFactory:R},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,d,Object.assign({templateFactory:L(n)},i)),a){const t=I.get(d);I.delete(d),t.value instanceof _&&j(d,t.value.template,n),o(e,e.firstChild),e.appendChild(d),I.set(e,t)}!s&&r&&window.ShadyCSS.styleElement(e.host)});const pt=5;customElements.define("cherry-brackets",class extends ht{static get properties(){return{currentSlot:{type:Number}}}constructor(){super(),this.currentSlot=1}updated(t){t.currentSlot!==this.currentSlot&&this.animateBrackets()}firstUpdated(){let t=this.shadowRoot.getElementById("brackets-content");t.addEventListener("animationstart",()=>console.log("animation started on brackets")),t.addEventListener("animationend",()=>console.log("animation ended on brackets")),this.animateBrackets()}animateBrackets(){let t=this.shadowRoot.getElementById("brackets-content");t.classList.remove("brackets-content-animated"),t.offsetWidth,t.classList.add("brackets-content-animated")}render(){return O`
            <style>
                @keyframes brackets-animation {
                    0% { max-width: calc(100vw); visibility: hidden; }
                    50% { max-width: calc(0vw); visibility: hidden; }
                    100% { max-width: calc(100vw); visibility: visible; }
                }

                .brackets-container {
                    display: flex;
                    animation-name: cherries-rotation;
                    animation-duration: 4s;
                    align-items: center;
                    justify-content: center;
                }

                .bracket {
                    stroke: hsl(0, 100%, 30%);
                    stroke-width: 5px;
                    fill: none;
                }

                .bracket-left-container, .bracket-right-container {
                    flex-grow: 1;
                }

                #brackets-content {
                    overflow: hidden;
                }

                .brackets-content-animated {
                    animation-name: brackets-animation;
                    animation-duration: ${pt}s;
                }
            </style>
            <div class="brackets-container">
                <div class="bracket-left-container">
                    <svg width="100%" height="100%" viewbox="0 0 50 100" preserveAspectRatio="none">
                        <path id="bracket-left" class="bracket" d="M 40.00,10.00 C 0.00,10.00 50.00,50.00 10.00,50.00 50.00,50.00 0.00,90.00 40.00,90.00"></path>
                    </svg>
                </div>
                <div id="brackets-content" >
                    <slot name="slot${this.currentSlot}"></slot>
                </div>
                <div class="bracket-right-container">
                    <svg width="100%" height="100%" viewbox="0 0 50 100" preserveAspectRatio="none">
                        <path id="bracket-left" class="bracket" d="M 10.00,10.00 C 50.00,10.00 0.00,50.00 40.00,50.00 0.00,50.00 50.00,90.00 10.00,90.00"></path>
                    </svg>
                </div>
            </div>
        `}});function mt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}customElements.define("cherry-logo",class extends ht{constructor(){super()}render(){return O`
            <style>
                @keyframes cherries-rotation {
                    from { transform: rotateY(0deg); }
                    to { transform: rotateY(360deg); }
                }
        
                #cherry-logo {
                    transform-origin: center;
                    animation-name: cherries-rotation;
                    animation-duration: 4s;
                    animation-iteration-count: infinite;
                    animation-delay: 2s;
                    stroke: red;
                    stroke-width: 10px;
                    fill: none;
                }
            </style>
            <svg width="100%" height="100%" viewbox="0 0 256 256">
                <path id="cherry-logo" d="M 119.67,88.67 C 119.33,75.33 141.00,50.00 175.00,67.00 162.00,105.00 128.00,108.00 119.67,88.67 Z M 150.25,78.69 C 150.25,78.69 119.56,88.88 119.56,88.88M 113.67,154.33 C 100.00,108.33 119.69,90.33 119.69,89.00M 119.81,89.06 C 119.81,89.06 108.91,110.00 130.91,131.82M 123.12,121.12 C 134.18,111.45 150.73,118.00 154.88,129.31 157.81,143.25 147.25,156.38 135.75,153.00M 110.88,140.38 C 126.75,138.50 138.10,149.15 136.73,162.27 135.12,172.50 128.12,184.25 114.12,185.12 87.00,185.75 80.25,154.62 96.50,145.62"></path>
            </svg>
        `}});class ft{constructor(t,e){this.x=t,this.y=e,this.dx=0,this.dy=0}}class gt{constructor(t,e,i,n){this.xMax=t,this.yMax=e,this.particles=new Array(i),this.color=n;for(let n=0;n<i;n++)this.particles[n]=new ft(mt(0,t),mt(0,e))}renderSwarm(t){t.fillStyle=this.color,this.particles.forEach(e=>{t.fillRect(e.x,e.y,5,5)})}}const bt="cherry-swarm-canvas-id";class _t{animate(t,e,i){throw new Error("this should be overridden...")}onCanvasResize(t,e,i,n){throw new Error("this should be overriden...")}}class vt extends _t{static validateParams(t,e,i,n,s){if(null==t)throw Error("invalid orbit animation - orbitX is null/undefined");if(null==e)throw Error("invalid orbit animation - orbitY is null/undefined");if(null==i)throw Error("invalid orbit animation - radius is null/undefined");if(null==n)throw Error("invalid orbit animation - xMax is null/undefined");if(null==s)throw Error("invalid orbit animation - yMax is null/undefined")}constructor({orbitX:t,orbitY:e,radius:i,xMax:n,yMax:s}){super(),vt.validateParams(t,e,i,n,s),this.orbitX=t,this.orbitY=e,this.radius=i,this.xMax=n,this.yMax=s}animate(t,e){let{orbitX:i,orbitY:n,radius:s,xMax:r,yMax:a}=this;t.particles.forEach(t=>{t.x+=e*t.dx/1e3,t.y+=e*t.dy/1e3,t.x=Math.min(Math.max(-10,t.x),r+10),t.y=Math.min(Math.max(-10,t.y),a+10);let o=i-t.x,d=n-t.y,c=Math.sqrt(o*o+d*d),l=o/c,u=d/c;t.dx+=c>s?10*l:.5*l,t.dy+=c>s?10*u:.5*u;let h=d/c,p=-1*o/c;t.dx+=h,t.dy+=p})}onCanvasResize(t,e,i,n){this.xMax=i,this.yMax=n,this.orbitX=i*(this.orbitX/t),this.orbitY=n*(this.orbitY/e),console.log(`orbit animation - handling canvas resize: {orbitX: ${this.orbitX}, orbitY: ${this.orbitY}}`)}}class yt extends _t{static validateParams(t,e){if(null==t)throw Error("invalid orbit animation - xMax is null/undefined");if(null==e)throw Error("invalid orbit animation - yMax is null/undefined")}constructor({xMax:t,yMax:e}){super(),yt.validateParams(t,e),this.xMax=t,this.yMax=e}animate(t,e){let{xMax:i,yMax:n}=this;t.particles.forEach(t=>{t.x+=e*t.dx/1e3,t.y+=e*t.dy/1e3,t.x=Math.min(Math.max(-10,t.x),i+10),t.y=Math.min(Math.max(-10,t.y),n+10);let s=mt(0,i)-t.x,r=mt(0,n)-t.y,a=Math.sqrt(s*s+r*r),o=s/a,d=r/a;t.dx+=100*o,t.dy+=100*d})}onCanvasResize(t,e,i,n){this.xMax=i,this.yMax=n,console.log(`random animation - handling canvas resize: {orbitX: ${this.orbitX}, orbitY: ${this.orbitY}}`)}}class xt extends _t{constructor(){super()}animate(t){t.particles.forEach(t=>{t.dx=0,t.dy=0})}onCanvasResize(){}}class wt extends _t{constructor({animationSequence:t}){if(super(),!t||t.length<=0)throw Error("sequence animation - invalid animation sequence");let e=0;this.animations=[],t.forEach(({animationProps:i,duration:n},s)=>{let r=St(i);if(this.animations.push({animation:r,atTime:e}),s<t.length-1){if(null==n)throw new Error(`sequence animation - invalid animation #${s+1} in sequence invalid`);e+=n}}),this.timeStarted=null,this.timeElapsed=0,this.indexOfCurrentAnimation=0,this.currenAnimation=this.animations[this.indexOfCurrentAnimation].animation}updateCurrentTime(t){null===this.timeStarted&&(this.timeStarted=t),this.timeElapsed=t-this.timeStarted;for(let t=this.indexOfCurrentAnimation+1;t<this.animations.length&&!(this.timeElapsed<this.animations[t].atTime);t++)this.indexOfCurrentAnimation=t,this.currenAnimation=this.animations[this.indexOfCurrentAnimation].animation}animate(t,e,i){this.updateCurrentTime(i),this.currenAnimation.animate(t,e,i)}onCanvasResize(t,e,i,n){this.currenAnimation.onCanvasResize(t,e,i,n)}}function St(t){switch(console.log(`generating animation: ${JSON.stringify(t)}`),t.name){case"orbit":return new vt(t);case"random":return new yt(t);case"freeze":return new xt(t);case"sequence":return new wt(t);default:return new vt(t)}}customElements.define("cherry-swarm",class extends ht{static get properties(){return{particleCount:{type:Number},swarmCount:{type:Number},animationProps:{type:Object,reflect:!0}}}constructor(){super(),this.particleCount=1e3,this.swarmCount=1,this.animationProps={name:"orbit",orbitX:0,orbitY:0,radius:50,xMax:0,yMax:0},this.swarms=[],this.lastAnimationFrameTime=null,this.numAnimationUpdates=0,this.animation=null,this.width=0,this.height=0,this.onResize()}onResize(){let t=this.width,e=this.height;this.width=Math.max(1,this.shadowRoot.host.clientWidth),this.height=Math.max(1,this.shadowRoot.host.clientHeight),this.animation&&this.animation.onCanvasResize(t,e,this.width,this.height);const i=this.shadowRoot.getElementById(bt);i&&(i.width=this.width,i.height=this.height)}connectedCallback(){super.connectedCallback();for(let t=0;t<this.swarmCount;t++)this.swarms.push(new gt(this.width,this.height,this.particleCount,`hsl(0, 100%, ${mt(60,90)}%)`));this.animationProps={name:"orbit",orbitX:Math.floor(this.width/2),orbitY:Math.floor(this.height/2),radius:50,xMax:this.width,yMax:this.height},this.animation=St(this.animationProps),requestAnimationFrame(t=>this.updateCherry(t)),window.addEventListener("resize",()=>this.onResize())}updateCherry(t){this.lastAnimationFrameTime||(this.lastAnimationFrameTime=t);const e=this.shadowRoot.getElementById(bt);if(!e)return;const i=t-this.lastAnimationFrameTime,n=e.getContext("2d");n.fillStyle="white",n.fillRect(0,0,this.width,this.height),this.swarms.forEach(e=>{this.animation.animate(e,i,t),e.renderSwarm(n)}),this.lastAnimationFrameTime=t,requestAnimationFrame(t=>this.updateCherry(t))}updated(){this.animation=St(this.animationProps)}render(){return O`
            <canvas id="${bt}" width="${this.width}" height="${this.height}"></canvas>
        `}});customElements.define("cherry-button",class extends ht{static get properties(){return{label:{type:String}}}constructor(){super(),this.label=""}render(){return O`
            <style>
                .button-container {
                    background-color: hsl(0, 100%, 30%);
                    color: white;
                    min-height: 20px;
                    border-radius: 10px;
                }
            </style>
            <div class="button-container">
                <slot></slot>
            </h1>
        `}}),
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.navigator.userAgent.match("Trident")&&(DOMTokenList.prototype.toggle=function(t,e){return void 0===e||e?this.add(t):this.remove(t),void 0===e||e});const At=new WeakMap,Ct=new WeakMap,Et=s(t=>e=>{if(!(e instanceof w)||e instanceof E||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");Ct.has(e)||(e.committer.element.className=e.committer.strings.join(" "),Ct.set(e,!0));const i=At.get(e);for(const n in i)n in t||e.committer.element.classList.remove(n);for(const n in t)i&&i[n]===t[n]||e.committer.element.classList.toggle(n,Boolean(t[n]));At.set(e,t)});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Tt=lt`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.16}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.32}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{display:inline-flex;outline:none}.mdc-button{flex:1}`;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pt=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const kt={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},Mt={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},Rt={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let Nt,It;function Ot(t=window,e=!1){if(void 0===It||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){return e=!0}})}catch(t){}It=e}return!!It&&{passive:!0}}const Vt=["touchstart","pointerdown","mousedown","keydown"],zt=["touchend","pointerup","mouseup","contextmenu"];let Ht=[];class Ft extends Pt{static get cssClasses(){return kt}static get strings(){return Mt}static get numbers(){return Rt}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(Ft.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(()=>this.deactivate_()),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=Ft.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(Ft.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(Ft.cssClasses.FG_DEACTIVATION));const{ROOT:t,UNBOUNDED:e}=Ft.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(Vt.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):zt.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){Vt.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),zt.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=Ft;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&void 0!==t&&i.type!==t.type||(e.isActivated=!0,e.isProgrammatic=void 0===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Ht.length>0&&Ht.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(void 0!==t&&(Ht.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{Ht=[],e.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=Ft.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:n}=Ft.cssClasses,{DEACTIVATION_TIMEOUT_MS:s}=Ft.numbers;this.layoutInternal_();let r="",a="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();r=`${t.x}px, ${t.y}px`,a=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,r),this.adapter_.updateCssVariable(e,a),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(n),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),s)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let i;return{startPoint:i={x:(i=e?function(t,e,i){const{x:n,y:s}=e,r=n+i.left,a=s+i.top;let o,d;return"touchstart"===t.type?(o=(t=t).changedTouches[0].pageX-r,d=t.changedTouches[0].pageY-a):(o=(t=t).pageX-r,d=t.pageY-a),{x:o,y:d}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:i.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=Ft.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},Rt.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=Ft.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=void 0,Ft.numbers.TAP_DELAY_MS)}deactivate_(){const t=this.activationState_;if(!t.isActivated)return;const e=Object.assign({},t);t.isProgrammatic?(requestAnimationFrame(()=>this.animateDeactivation_(e)),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(e),this.resetActivationState_()}))}deactivate(){this.deactivate_()}animateDeactivation_({wasActivatedByPointer:t,wasElementMadeActive:e}){(t||e)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+Ft.numbers.PADDING})(),this.initialSize_=Math.floor(t*Ft.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:n}=Ft.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(n,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=Ft.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(Ft.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(Ft.cssClasses.BG_FOCUSED))}}var Dt=Ft;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const Ut=lt`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`,Lt=function(t){const e=["matches","webkitMatchesSelector","msMatchesSelector"];let i="matches";for(let n=0;n<e.length;n++){const s=e[n];if(s in t){i=s;break}}return i}(HTMLElement.prototype),Bt=function(t,e=!1){let i=Nt;if("boolean"==typeof Nt&&!e)return i;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const n=t.CSS.supports("--css-vars","yes"),s=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return i=!(!n&&!s||function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const n=t.getComputedStyle(i),s=null!==n&&"solid"===n.borderTopStyle;return i.remove(),s}(t)),e||(Nt=i),i}(window),$t=navigator.userAgent.match(/Safari/);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let jt=!1;const qt=t=>{$t&&!jt&&(()=>{jt=!0;const t=new S({templateFactory:R});t.appendInto(document.head),t.setValue(Ut),t.commit()})();const e=t.surfaceNode,i=t.interactionNode||e;i.getRootNode()!==e.getRootNode()&&""===i.style.position&&(i.style.position="relative");const n=new Dt({browserSupportsCssVars:()=>Bt,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>i[Lt](":active"),isSurfaceDisabled:()=>Boolean(t.disabled),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>i.contains(t),registerInteractionHandler:(t,e)=>i.addEventListener(t,e,Ot()),deregisterInteractionHandler:(t,e)=>i.removeEventListener(t,e,Ot()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,Ot()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,Ot()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,i)=>e.style.setProperty(t,i),computeBoundingRect:()=>i.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return n.init(),n},Gt=new WeakMap,Xt=s((t={})=>e=>{const i=e.committer.element,n=t.interactionNode||i;let s=e.value;const r=Gt.get(s);void 0!==r&&r!==n&&(s.destroy(),s=d),s===d?(s=qt(Object.assign({},t,{surfaceNode:i})),Gt.set(s,n),e.setValue(s)):(void 0!==t.unbounded&&s.setUnbounded(t.unbounded),void 0!==t.disabled&&s.setUnbounded(t.disabled)),!0===t.active?s.activate():!1===t.active&&s.deactivate()});i(0);var Yt=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
let Wt=class extends ht{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}render(){const t={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense},e=O`<span class="material-icons mdc-button__icon">${this.icon}</span>`;return O`
      <button
          .ripple="${Xt({unbounded:!1})}"
          class="mdc-button ${Et(t)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}">
        ${this.icon&&!this.trailingIcon?e:""}
        <span class="mdc-button__label">${this.label}</span>
        ${this.icon&&this.trailingIcon?e:""}
        <slot></slot>
      </button>`}};Wt.styles=Tt,Yt([nt({type:Boolean})],Wt.prototype,"raised",void 0),Yt([nt({type:Boolean})],Wt.prototype,"unelevated",void 0),Yt([nt({type:Boolean})],Wt.prototype,"outlined",void 0),Yt([nt({type:Boolean})],Wt.prototype,"dense",void 0),Yt([nt({type:Boolean})],Wt.prototype,"disabled",void 0),Yt([nt({type:Boolean})],Wt.prototype,"trailingIcon",void 0),Yt([nt()],Wt.prototype,"icon",void 0),Yt([nt()],Wt.prototype,"label",void 0),Wt=Yt([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e))("mwc-button")],Wt)}]);