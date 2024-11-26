"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[504],{4046:function(e,t,n){n.d(t,{Am:function(){return N},FA:function(){return R},I9:function(){return D},Im:function(){return C},Ku:function(){return B},T9:function(){return E},Tj:function(){return _},Uj:function(){return a},XA:function(){return S},ZQ:function(){return u},bD:function(){return x},cY:function(){return I},eX:function(){return m},g:function(){return O},hp:function(){return L},jZ:function(){return l},lT:function(){return h},lV:function(){return d},sr:function(){return f},tD:function(){return M},u:function(){return c},zW:function(){return p}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let f=(15&s)<<2|c>>6,d=63&c;a||(d=64,i||(f=64)),r.push(n[u],n[l],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,s=i?n[e.charAt(o)]:0;++o;const a=o<e.length,c=a?n[e.charAt(o)]:64;++o;const u=o<e.length,l=u?n[e.charAt(o)]:64;if(++o,null==t||null==s||null==c||null==l)throw Error();const f=t<<2|s>>4;if(r.push(f),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return i.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function f(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function h(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){try{return"object"===typeof indexedDB}catch(e){return!1}}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},b=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},w=()=>{try{return v()||y()||b()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},_=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},E=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},S=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=T,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?k(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new O(r,s,n);return a}}function k(e,t){return e.replace(A,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function x(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(P(n)&&P(i)){if(!x(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function P(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function D(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function L(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){const n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){n.d(t,{C4:function(){return I},EW:function(){return je},Gc:function(){return ve},IG:function(){return Te},IJ:function(){return Ce},KR:function(){return Ae},Kh:function(){return ge},Pr:function(){return Le},R1:function(){return Ne},X2:function(){return u},bl:function(){return T},fE:function(){return Ee},g8:function(){return we},hZ:function(){return M},i9:function(){return ke},ju:function(){return Se},lJ:function(){return Oe},qA:function(){return U},u4:function(){return L},ux:function(){return Ie},wB:function(){return Ve},yC:function(){return s}});n(4114),n(9678),n(7145),n(1658),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(4232);let o,i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=o,!e&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(){return o}const c=new WeakSet;class u{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,o&&o.active&&o.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||h(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,O(this),g(this);const e=i,t=E;i=this,E=!0;try{return this.fn()}finally{0,v(this),i=e,E=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)w(e);this.deps=this.depsTail=void 0,O(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let l,f,d=0;function h(e,t=!1){if(e.flags|=8,t)return e.next=f,void(f=e);e.next=l,l=e}function p(){d++}function m(){if(--d>0)return;if(f){let e=f;f=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(l){let n=l;l=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function g(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function v(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),w(r),_(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function y(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(b(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function b(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===R)return;e.globalVersion=R;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!y(e))return void(e.flags&=-3);const n=i,o=E;i=e,E=!0;try{g(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(s){throw t.version++,s}finally{i=n,E=o,v(e),e.flags&=-3}}function w(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)w(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function _(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let E=!0;const S=[];function I(){S.push(E),E=!1}function T(){const e=S.pop();E=void 0===e||e}function O(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=i;i=void 0;try{t()}finally{i=e}}}let R=0;class k{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class A{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!i||!E||i===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==i)t=this.activeLink=new k(i,this),i.deps?(t.prevDep=i.depsTail,i.depsTail.nextDep=t,i.depsTail=t):i.deps=i.depsTail=t,C(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=i.depsTail,t.nextDep=void 0,i.depsTail.nextDep=t,i.depsTail=t,i.deps===t&&(i.deps=e)}return t}trigger(e){this.version++,R++,this.notify(e)}notify(e){p();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{m()}}}function C(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)C(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const x=new WeakMap,P=Symbol(""),N=Symbol(""),D=Symbol("");function L(e,t,n){if(E&&i){let t=x.get(e);t||x.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new A),r.map=t,r.key=n),r.track()}}function M(e,t,n,o,i,s){const a=x.get(e);if(!a)return void R++;const c=e=>{e&&e.trigger()};if(p(),"clear"===t)a.forEach(c);else{const i=(0,r.cy)(e),s=i&&(0,r.yI)(n);if(i&&"length"===n){const e=Number(o);a.forEach(((t,n)=>{("length"===n||n===D||!(0,r.Bm)(n)&&n>=e)&&c(t)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),s&&c(a.get(D)),t){case"add":i?s&&c(a.get("length")):(c(a.get(P)),(0,r.CE)(e)&&c(a.get(N)));break;case"delete":i||(c(a.get(P)),(0,r.CE)(e)&&c(a.get(N)));break;case"set":(0,r.CE)(e)&&c(a.get(P));break}}m()}function j(e){const t=Ie(e);return t===e?t:(L(t,"iterate",D),Ee(e)?t:t.map(Oe))}function U(e){return L(e=Ie(e),"iterate",D),e}const F={__proto__:null,[Symbol.iterator](){return B(this,Symbol.iterator,Oe)},concat(...e){return j(this).concat(...e.map((e=>(0,r.cy)(e)?j(e):e)))},entries(){return B(this,"entries",(e=>(e[1]=Oe(e[1]),e)))},every(e,t){return V(this,"every",e,t,void 0,arguments)},filter(e,t){return V(this,"filter",e,t,(e=>e.map(Oe)),arguments)},find(e,t){return V(this,"find",e,t,Oe,arguments)},findIndex(e,t){return V(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return V(this,"findLast",e,t,Oe,arguments)},findLastIndex(e,t){return V(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return V(this,"forEach",e,t,void 0,arguments)},includes(...e){return H(this,"includes",e)},indexOf(...e){return H(this,"indexOf",e)},join(e){return j(this).join(e)},lastIndexOf(...e){return H(this,"lastIndexOf",e)},map(e,t){return V(this,"map",e,t,void 0,arguments)},pop(){return z(this,"pop")},push(...e){return z(this,"push",e)},reduce(e,...t){return W(this,"reduce",e,t)},reduceRight(e,...t){return W(this,"reduceRight",e,t)},shift(){return z(this,"shift")},some(e,t){return V(this,"some",e,t,void 0,arguments)},splice(...e){return z(this,"splice",e)},toReversed(){return j(this).toReversed()},toSorted(e){return j(this).toSorted(e)},toSpliced(...e){return j(this).toSpliced(...e)},unshift(...e){return z(this,"unshift",e)},values(){return B(this,"values",Oe)}};function B(e,t,n){const r=U(e),o=r[t]();return r===e||Ee(e)||(o._next=o.next,o.next=()=>{const e=o._next();return e.value&&(e.value=n(e.value)),e}),o}const $=Array.prototype;function V(e,t,n,r,o,i){const s=U(e),a=s!==e&&!Ee(e),c=s[t];if(c!==$[t]){const t=c.apply(e,i);return a?Oe(t):t}let u=n;s!==e&&(a?u=function(t,r){return n.call(this,Oe(t),r,e)}:n.length>2&&(u=function(t,r){return n.call(this,t,r,e)}));const l=c.call(s,u,r);return a&&o?o(l):l}function W(e,t,n,r){const o=U(e);let i=n;return o!==e&&(Ee(e)?n.length>3&&(i=function(t,r,o){return n.call(this,t,r,o,e)}):i=function(t,r,o){return n.call(this,t,Oe(r),o,e)}),o[t](i,...r)}function H(e,t,n){const r=Ie(e);L(r,"iterate",D);const o=r[t](...n);return-1!==o&&!1!==o||!Se(n[0])?o:(n[0]=Ie(n[0]),r[t](...n))}function z(e,t,n=[]){I(),p();const r=Ie(e)[t].apply(e,n);return m(),T(),r}const q=(0,r.pD)("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function G(e){(0,r.Bm)(e)||(e=String(e));const t=Ie(this);return L(t,"has",e),t.hasOwnProperty(e)}class J{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const o=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!o;if("__v_isReadonly"===t)return o;if("__v_isShallow"===t)return i;if("__v_raw"===t)return n===(o?i?he:de:i?fe:le).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=(0,r.cy)(e);if(!o){let e;if(s&&(e=F[t]))return e;if("hasOwnProperty"===t)return G}const a=Reflect.get(e,t,ke(e)?e:n);return((0,r.Bm)(t)?K.has(t):q(t))?a:(o||L(e,"get",t),i?a:ke(a)?s&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?o?ye(a):ge(a):a)}}class Z extends J{constructor(e=!1){super(!1,e)}set(e,t,n,o){let i=e[t];if(!this._isShallow){const t=_e(i);if(Ee(n)||_e(n)||(i=Ie(i),n=Ie(n)),!(0,r.cy)(e)&&ke(i)&&!ke(n))return!t&&(i.value=n,!0)}const s=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,ke(e)?e:o);return e===Ie(o)&&(s?(0,r.$H)(n,i)&&M(e,"set",t,n,i):M(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&M(e,"delete",t,void 0,o),i}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&K.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,r.cy)(e)?"length":P),Reflect.ownKeys(e)}}class X extends J{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Q=new Z,Y=new X,ee=new Z(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function re(e,t,n){return function(...o){const i=this["__v_raw"],s=Ie(i),a=(0,r.CE)(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...o),f=n?te:t?Re:Oe;return!t&&L(s,"iterate",u?N:P),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function ie(e,t){const n={get(n){const o=this["__v_raw"],i=Ie(o),s=Ie(n);e||((0,r.$H)(n,s)&&L(i,"get",n),L(i,"get",s));const{has:a}=ne(i),c=t?te:e?Re:Oe;return a.call(i,n)?c(o.get(n)):a.call(i,s)?c(o.get(s)):void(o!==i&&o.get(n))},get size(){const t=this["__v_raw"];return!e&&L(Ie(t),"iterate",P),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],o=Ie(n),i=Ie(t);return e||((0,r.$H)(t,i)&&L(o,"has",t),L(o,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){const o=this,i=o["__v_raw"],s=Ie(i),a=t?te:e?Re:Oe;return!e&&L(s,"iterate",P),i.forEach(((e,t)=>n.call(r,a(e),a(t),o)))}};(0,r.X$)(n,e?{add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear")}:{add(e){t||Ee(e)||_e(e)||(e=Ie(e));const n=Ie(this),r=ne(n),o=r.has.call(n,e);return o||(n.add(e),M(n,"add",e,e)),this},set(e,n){t||Ee(n)||_e(n)||(n=Ie(n));const o=Ie(this),{has:i,get:s}=ne(o);let a=i.call(o,e);a||(e=Ie(e),a=i.call(o,e));const c=s.call(o,e);return o.set(e,n),a?(0,r.$H)(n,c)&&M(o,"set",e,n,c):M(o,"add",e,n),this},delete(e){const t=Ie(this),{has:n,get:r}=ne(t);let o=n.call(t,e);o||(e=Ie(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&M(t,"delete",e,void 0,i),s},clear(){const e=Ie(this),t=0!==e.size,n=void 0,r=e.clear();return t&&M(e,"clear",void 0,void 0,n),r}});const o=["keys","values","entries",Symbol.iterator];return o.forEach((r=>{n[r]=re(r,e,t)})),n}function se(e,t){const n=ie(e,t);return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get((0,r.$3)(n,o)&&o in t?n:t,o,i)}const ae={get:se(!1,!1)},ce={get:se(!1,!0)},ue={get:se(!0,!1)};const le=new WeakMap,fe=new WeakMap,de=new WeakMap,he=new WeakMap;function pe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:pe((0,r.Zf)(e))}function ge(e){return _e(e)?e:be(e,!1,Q,ae,le)}function ve(e){return be(e,!1,ee,ce,fe)}function ye(e){return be(e,!0,Y,ue,de)}function be(e,t,n,o,i){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=me(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function we(e){return _e(e)?we(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function _e(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Se(e){return!!e&&!!e["__v_raw"]}function Ie(e){const t=e&&e["__v_raw"];return t?Ie(t):e}function Te(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Oe=e=>(0,r.Gv)(e)?ge(e):e,Re=e=>(0,r.Gv)(e)?ye(e):e;function ke(e){return!!e&&!0===e["__v_isRef"]}function Ae(e){return xe(e,!1)}function Ce(e){return xe(e,!0)}function xe(e,t){return ke(e)?e:new Pe(e,t)}class Pe{constructor(e,t){this.dep=new A,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Ie(e),this._value=t?e:Oe(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ee(e)||_e(e);e=n?e:Ie(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Oe(e),this.dep.trigger())}}function Ne(e){return ke(e)?e.value:e}const De={get:(e,t,n)=>"__v_raw"===t?e:Ne(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return ke(o)&&!ke(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Le(e){return we(e)?e:new Proxy(e,De)}class Me{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new A(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=R-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||i===this))return h(this,!0),!0}get value(){const e=this.dep.track();return b(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function je(e,t,n=!1){let o,i;(0,r.Tn)(e)?o=e:(o=e.get,i=e.set);const s=new Me(o,i,n);return s}const Ue={},Fe=new WeakMap;let Be;function $e(e,t=!1,n=Be){if(n){let t=Fe.get(n);t||Fe.set(n,t=[]),t.push(e)}else 0}function Ve(e,t,n=r.MZ){const{immediate:o,deep:i,once:s,scheduler:c,augmentJob:l,call:f}=n,d=e=>i?e:Ee(e)||!1===i||0===i?We(e,1):We(e);let h,p,m,g,v=!1,y=!1;if(ke(e)?(p=()=>e.value,v=Ee(e)):we(e)?(p=()=>d(e),v=!0):(0,r.cy)(e)?(y=!0,v=e.some((e=>we(e)||Ee(e))),p=()=>e.map((e=>ke(e)?e.value:we(e)?d(e):(0,r.Tn)(e)?f?f(e,2):e():void 0))):p=(0,r.Tn)(e)?t?f?()=>f(e,2):e:()=>{if(m){I();try{m()}finally{T()}}const t=Be;Be=h;try{return f?f(e,3,[g]):e(g)}finally{Be=t}}:r.tE,t&&i){const e=p,t=!0===i?1/0:i;p=()=>We(e(),t)}const b=a(),w=()=>{h.stop(),b&&(0,r.TF)(b.effects,h)};if(s&&t){const e=t;t=(...t)=>{e(...t),w()}}let _=y?new Array(e.length).fill(Ue):Ue;const E=e=>{if(1&h.flags&&(h.dirty||e))if(t){const e=h.run();if(i||v||(y?e.some(((e,t)=>(0,r.$H)(e,_[t]))):(0,r.$H)(e,_))){m&&m();const n=Be;Be=h;try{const n=[e,_===Ue?void 0:y&&_[0]===Ue?[]:_,g];f?f(t,3,n):t(...n),_=e}finally{Be=n}}}else h.run()};return l&&l(E),h=new u(p),h.scheduler=c?()=>c(E,!1):E,g=e=>$e(e,!1,h),m=h.onStop=()=>{const e=Fe.get(h);if(e){if(f)f(e,4);else for(const t of e)t();Fe.delete(h)}},t?o?E(!0):_=h.run():c?c(E.bind(null,!0),!0):h.run(),w.pause=h.pause.bind(h),w.resume=h.resume.bind(h),w.stop=w,w}function We(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,ke(e))We(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)We(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{We(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)We(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&We(e[r],t,n)}return e}},6768:function(e,t,n){n.d(t,{$u:function(){return oe},CE:function(){return Kt},Df:function(){return B},EW:function(){return Dn},FK:function(){return Mt},Gt:function(){return $e},Gy:function(){return D},K9:function(){return ut},Lk:function(){return Yt},MZ:function(){return F},OW:function(){return U},Q3:function(){return sn},QP:function(){return M},WQ:function(){return Ve},bF:function(){return en},dY:function(){return g},g2:function(){return de},h:function(){return Ln},k6:function(){return k},nI:function(){return gn},pI:function(){return ge},pM:function(){return $},qL:function(){return s},uX:function(){return Vt},wB:function(){return wt}});n(4114),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(144),o=n(4232);function i(e,t,n,r){try{return r?e(...r):e()}catch(o){a(o,t,n)}}function s(e,t,n,r){if((0,o.Tn)(e)){const s=i(e,t,n,r);return s&&(0,o.yL)(s)&&s.catch((e=>{a(e,t,n)})),s}if((0,o.cy)(e)){const o=[];for(let i=0;i<e.length;i++)o.push(s(e[i],t,n,r));return o}}function a(e,t,n,s=!0){const a=t?t.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||o.MZ;if(t){let o=t.parent;const s=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(o){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,a))return;o=o.parent}if(u)return(0,r.C4)(),i(u,null,10,[e,s,a]),void(0,r.bl)()}c(e,n,a,s,l)}function c(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const u=[];let l=-1;const f=[];let d=null,h=0;const p=Promise.resolve();let m=null;function g(e){const t=m||p;return e?t.then(this?e.bind(this):e):t}function v(e){let t=l+1,n=u.length;while(t<n){const r=t+n>>>1,o=u[r],i=S(o);i<e||i===e&&2&o.flags?t=r+1:n=r}return t}function y(e){if(!(1&e.flags)){const t=S(e),n=u[u.length-1];!n||!(2&e.flags)&&t>=S(n)?u.push(e):u.splice(v(t),0,e),e.flags|=1,b()}}function b(){m||(m=p.then(I))}function w(e){(0,o.cy)(e)?f.push(...e):d&&-1===e.id?d.splice(h+1,0,e):1&e.flags||(f.push(e),e.flags|=1),b()}function _(e,t,n=l+1){for(0;n<u.length;n++){const t=u[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,u.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function E(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>S(e)-S(t)));if(f.length=0,d)return void d.push(...e);for(d=e,h=0;h<d.length;h++){const e=d[h];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,h=0}}const S=e=>null==e.id?2&e.flags?-1:1/0:e.id;function I(e){o.tE;try{for(l=0;l<u.length;l++){const e=u[l];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),i(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;l<u.length;l++){const e=u[l];e&&(e.flags&=-2)}l=-1,u.length=0,E(e),m=null,(u.length||f.length)&&I(e)}}let T=null,O=null;function R(e){const t=T;return T=e,O=e&&e.type.__scopeId||null,t}function k(e,t=T,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&zt(-1);const o=R(t);let i;try{i=e(...n)}finally{R(o),r._d&&zt(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function A(e,t,n,o){const i=e.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[o];l&&((0,r.C4)(),s(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}const C=Symbol("_vte"),x=e=>e.__isTeleport;const P=Symbol("_leaveCb"),N=Symbol("_enterCb");function D(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ne((()=>{e.isMounted=!0})),ie((()=>{e.isUnmounting=!0})),e}const L=[Function,Array],M={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:L,onEnter:L,onAfterEnter:L,onEnterCancelled:L,onBeforeLeave:L,onLeave:L,onAfterLeave:L,onLeaveCancelled:L,onBeforeAppear:L,onAppear:L,onAfterAppear:L,onAppearCancelled:L};function j(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function U(e,t,n,r,i){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:p,onLeave:m,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:y,onAppear:b,onAfterAppear:w,onAppearCancelled:_}=t,E=String(e.key),S=j(n,e),I=(e,t)=>{e&&s(e,r,9,t)},T=(e,t)=>{const n=t[1];I(e,t),(0,o.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},O={mode:c,persisted:u,beforeEnter(t){let r=l;if(!n.isMounted){if(!a)return;r=y||l}t[P]&&t[P](!0);const o=S[E];o&&Zt(e,o)&&o.el[P]&&o.el[P](),I(r,[t])},enter(e){let t=f,r=d,o=h;if(!n.isMounted){if(!a)return;t=b||f,r=w||d,o=_||h}let i=!1;const s=e[N]=t=>{i||(i=!0,I(t?o:r,[e]),O.delayedLeave&&O.delayedLeave(),e[N]=void 0)};t?T(t,[e,s]):s()},leave(t,r){const o=String(e.key);if(t[N]&&t[N](!0),n.isUnmounting)return r();I(p,[t]);let i=!1;const s=t[P]=n=>{i||(i=!0,r(),I(n?v:g,[t]),t[P]=void 0,S[o]===e&&delete S[o])};S[o]=e,m?T(m,[t,s]):s()},clone(e){const o=U(e,t,n,r,i);return i&&i(o),o}};return O}function F(e,t){6&e.shapeFlag&&e.component?(e.transition=t,F(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function B(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===Mt?(128&s.patchFlag&&o++,r=r.concat(B(s.children,t,a))):(t||s.type!==Ut)&&r.push(null!=a?rn(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function $(e,t){return(0,o.Tn)(e)?(()=>(0,o.X$)({name:e.name},t,{setup:e}))():e}function V(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function W(e,t,n,s,a=!1){if((0,o.cy)(e))return void e.forEach(((e,r)=>W(e,t&&((0,o.cy)(t)?t[r]:t),n,s,a)));if(H(s)&&!a)return;const c=4&s.shapeFlag?xn(s.component):s.el,u=a?null:c,{i:l,r:f}=e;const d=t&&t.r,h=l.refs===o.MZ?l.refs={}:l.refs,p=l.setupState,m=(0,r.ux)(p),g=p===o.MZ?()=>!1:e=>(0,o.$3)(m,e);if(null!=d&&d!==f&&((0,o.Kg)(d)?(h[d]=null,g(d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,o.Tn)(f))i(f,l,12,[u,h]);else{const t=(0,o.Kg)(f),i=(0,r.i9)(f);if(t||i){const r=()=>{if(e.f){const n=t?g(f)?p[f]:h[f]:f.value;a?(0,o.cy)(n)&&(0,o.TF)(n,c):(0,o.cy)(n)?n.includes(c)||n.push(c):t?(h[f]=[c],g(f)&&(p[f]=h[f])):(f.value=[c],e.k&&(h[e.k]=f.value))}else t?(h[f]=u,g(f)&&(p[f]=u)):i&&(f.value=u,e.k&&(h[e.k]=u))};u?(r.id=-1,ct(r,n)):r()}else 0}}(0,o.We)().requestIdleCallback,(0,o.We)().cancelIdleCallback;const H=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const z=e=>e.type.__isKeepAlive;RegExp,RegExp;function q(e,t){return(0,o.cy)(e)?e.some((e=>q(e,t))):(0,o.Kg)(e)?e.split(",").includes(t):!!(0,o.gd)(e)&&(e.lastIndex=0,e.test(t))}function K(e,t){J(e,"a",t)}function G(e,t){J(e,"da",t)}function J(e,t,n=mn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Y(t,r,n),n){let e=n.parent;while(e&&e.parent)z(e.parent.vnode)&&Z(r,t,n,e),e=e.parent}}function Z(e,t,n,r){const i=Y(t,e,r,!0);se((()=>{(0,o.TF)(r[t],i)}),n)}function X(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Q(e){return 128&e.shapeFlag?e.ssContent:e}function Y(e,t,n=mn,o=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{(0,r.C4)();const i=bn(n),a=s(t,n,e,o);return i(),(0,r.bl)(),a});return o?i.unshift(a):i.push(a),a}}const ee=e=>(t,n=mn)=>{In&&"sp"!==e||Y(e,((...e)=>t(...e)),n)},te=ee("bm"),ne=ee("m"),re=ee("bu"),oe=ee("u"),ie=ee("bum"),se=ee("um"),ae=ee("sp"),ce=ee("rtg"),ue=ee("rtc");function le(e,t=mn){Y("ec",e,t)}const fe="components";function de(e,t){return pe(fe,e,!0,t)||e}const he=Symbol.for("v-ndc");function pe(e,t,n=!0,r=!1){const i=T||mn;if(i){const n=i.type;if(e===fe){const e=Pn(n,!1);if(e&&(e===t||e===(0,o.PT)(t)||e===(0,o.ZH)((0,o.PT)(t))))return n}const s=me(i[e]||n[e],t)||me(i.appContext[e],t);return!s&&r?n:s}}function me(e,t){return e&&(e[t]||e[(0,o.PT)(t)]||e[(0,o.ZH)((0,o.PT)(t))])}function ge(e,t,n,i){let s;const a=n&&n[i],c=(0,o.cy)(e);if(c||(0,o.Kg)(e)){const n=c&&(0,r.g8)(e);let o=!1;n&&(o=!(0,r.fE)(e),e=(0,r.qA)(e)),s=new Array(e.length);for(let i=0,c=e.length;i<c;i++)s[i]=t(o?(0,r.lJ)(e[i]):e[i],i,void 0,a&&a[i])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,a&&a[n])}else if((0,o.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];s[r]=t(e[o],o,r,a&&a[r])}}else s=[];return n&&(n[i]=s),s}const ve=e=>e?_n(e)?xn(e):ve(e.parent):null,ye=(0,o.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ve(e.parent),$root:e=>ve(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Re(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=g.bind(e.proxy)),$watch:e=>Et.bind(e)}),be=(e,t)=>e!==o.MZ&&!e.__isScriptSetup&&(0,o.$3)(e,t),we={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:i,data:s,props:a,accessCache:c,type:u,appContext:l}=e;let f;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(be(i,t))return c[t]=1,i[t];if(s!==o.MZ&&(0,o.$3)(s,t))return c[t]=2,s[t];if((f=e.propsOptions[0])&&(0,o.$3)(f,t))return c[t]=3,a[t];if(n!==o.MZ&&(0,o.$3)(n,t))return c[t]=4,n[t];Ee&&(c[t]=0)}}const d=ye[t];let h,p;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(h=u.__cssModules)&&(h=h[t])?h:n!==o.MZ&&(0,o.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,o.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return be(i,t)?(i[t]=n,!0):r!==o.MZ&&(0,o.$3)(r,t)?(r[t]=n,!0):!(0,o.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let c;return!!n[a]||e!==o.MZ&&(0,o.$3)(e,a)||be(t,a)||(c=s[0])&&(0,o.$3)(c,a)||(0,o.$3)(r,a)||(0,o.$3)(ye,a)||(0,o.$3)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,o.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function _e(e){return(0,o.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ee=!0;function Se(e){const t=Re(e),n=e.proxy,i=e.ctx;Ee=!1,t.beforeCreate&&Te(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:f,created:d,beforeMount:h,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:E,render:S,renderTracked:I,renderTriggered:T,errorCaptured:O,serverPrefetch:R,expose:k,inheritAttrs:A,components:C,directives:x,filters:P}=t,N=null;if(f&&Ie(f,i,N),c)for(const r in c){const e=c[r];(0,o.Tn)(e)&&(i[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,o.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ee=!0,a)for(const r in a){const e=a[r],t=(0,o.Tn)(e)?e.bind(n,n):(0,o.Tn)(e.get)?e.get.bind(n,n):o.tE;0;const s=!(0,o.Tn)(e)&&(0,o.Tn)(e.set)?e.set.bind(n):o.tE,c=Dn({get:t,set:s});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Oe(u[r],i,n,r);if(l){const e=(0,o.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{$e(t,e[t])}))}function D(e,t){(0,o.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Te(d,e,"c"),D(te,h),D(ne,p),D(re,m),D(oe,g),D(K,v),D(G,y),D(le,O),D(ue,I),D(ce,T),D(ie,w),D(se,E),D(ae,R),(0,o.cy)(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===o.tE&&(e.render=S),null!=A&&(e.inheritAttrs=A),C&&(e.components=C),x&&(e.directives=x),R&&V(e)}function Ie(e,t,n=o.tE){(0,o.cy)(e)&&(e=Pe(e));for(const i in e){const n=e[i];let s;s=(0,o.Gv)(n)?"default"in n?Ve(n.from||i,n.default,!0):Ve(n.from||i):Ve(n),(0,r.i9)(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function Te(e,t,n){s((0,o.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Oe(e,t,n,r){let i=r.includes(".")?St(n,r):()=>n[r];if((0,o.Kg)(e)){const n=t[e];(0,o.Tn)(n)&&wt(i,n)}else if((0,o.Tn)(e))wt(i,e.bind(n));else if((0,o.Gv)(e))if((0,o.cy)(e))e.forEach((e=>Oe(e,t,n,r)));else{const r=(0,o.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,o.Tn)(r)&&wt(i,r,e)}else 0}function Re(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((e=>ke(u,e,a,!0))),ke(u,t,a)):u=t,(0,o.Gv)(t)&&s.set(t,u),u}function ke(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&ke(e,i,n,!0),o&&o.forEach((t=>ke(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Ae[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Ae={data:Ce,props:Le,emits:Le,methods:De,computed:De,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:De,directives:De,watch:Me,provide:Ce,inject:xe};function Ce(e,t){return t?e?function(){return(0,o.X$)((0,o.Tn)(e)?e.call(this,this):e,(0,o.Tn)(t)?t.call(this,this):t)}:t:e}function xe(e,t){return De(Pe(e),Pe(t))}function Pe(e){if((0,o.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function De(e,t){return e?(0,o.X$)(Object.create(null),e,t):t}function Le(e,t){return e?(0,o.cy)(e)&&(0,o.cy)(t)?[...new Set([...e,...t])]:(0,o.X$)(Object.create(null),_e(e),_e(null!=t?t:{})):t}function Me(e,t){if(!e)return t;if(!t)return e;const n=(0,o.X$)(Object.create(null),e);for(const r in t)n[r]=Ne(e[r],t[r]);return n}function je(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ue=0;function Fe(e,t){return function(n,r=null){(0,o.Tn)(n)||(n=(0,o.X$)({},n)),null==r||(0,o.Gv)(r)||(r=null);const i=je(),a=new WeakSet,c=[];let u=!1;const l=i.app={_uid:Ue++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Mn,get config(){return i.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,o.Tn)(e.install)?(a.add(e),e.install(l,...t)):(0,o.Tn)(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(o,s,a){if(!u){0;const c=l._ceVNode||en(n,r);return c.appContext=i,!0===a?a="svg":!1===a&&(a=void 0),s&&t?t(c,o):e(c,o,a),u=!0,l._container=o,o.__vue_app__=l,xn(c.component)}},onUnmount(e){c.push(e)},unmount(){u&&(s(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){const t=Be;Be=l;try{return e()}finally{Be=t}}};return l}}let Be=null;function $e(e,t){if(mn){let n=mn.provides;const r=mn.parent&&mn.parent.provides;r===n&&(n=mn.provides=Object.create(r)),n[e]=t}else 0}function Ve(e,t,n=!1){const r=mn||T;if(r||Be){const i=Be?Be._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,o.Tn)(t)?t.call(r&&r.proxy):t}else 0}const We={},He=()=>Object.create(We),ze=e=>Object.getPrototypeOf(e)===We;function qe(e,t,n,o=!1){const i={},s=He();e.propsDefaults=Object.create(null),Ge(e,t,i,s);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=o?i:(0,r.Gc)(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Ke(e,t,n,i){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(s),[l]=e.propsOptions;let f=!1;if(!(i||c>0)||16&c){let r;Ge(e,t,s,a)&&(f=!0);for(const i in u)t&&((0,o.$3)(t,i)||(r=(0,o.Tg)(i))!==i&&(0,o.$3)(t,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(s[i]=Je(l,u,i,void 0,e,!0)):delete s[i]);if(a!==u)for(const e in a)t&&(0,o.$3)(t,e)||(delete a[e],f=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(Rt(e.emitsOptions,i))continue;const c=t[i];if(l)if((0,o.$3)(a,i))c!==a[i]&&(a[i]=c,f=!0);else{const t=(0,o.PT)(i);s[t]=Je(l,u,t,c,e,!1)}else c!==a[i]&&(a[i]=c,f=!0)}}f&&(0,r.hZ)(e.attrs,"set","")}function Ge(e,t,n,i){const[s,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,o.SU)(r))continue;const l=t[r];let f;s&&(0,o.$3)(s,f=(0,o.PT)(r))?a&&a.includes(f)?(c||(c={}))[f]=l:n[f]=l:Rt(e.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),i=c||o.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Je(s,t,c,i[c],e,!(0,o.$3)(i,c))}}return u}function Je(e,t,n,r,i,s){const a=e[n];if(null!=a){const e=(0,o.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,o.Tn)(e)){const{propsDefaults:o}=i;if(n in o)r=o[n];else{const s=bn(i);r=o[n]=e.call(null,t),s()}}else r=e;i.ce&&i.ce._setProp(n,r)}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,o.Tg)(n)||(r=!0))}return r}const Ze=new WeakMap;function Xe(e,t,n=!1){const r=n?Ze:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},c=[];let u=!1;if(!(0,o.Tn)(e)){const r=e=>{u=!0;const[n,r]=Xe(e,t,!0);(0,o.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,o.Gv)(e)&&r.set(e,o.Oj),o.Oj;if((0,o.cy)(s))for(let f=0;f<s.length;f++){0;const e=(0,o.PT)(s[f]);Qe(e)&&(a[e]=o.MZ)}else if(s){0;for(const e in s){const t=(0,o.PT)(e);if(Qe(t)){const n=s[e],r=a[t]=(0,o.cy)(n)||(0,o.Tn)(n)?{type:n}:(0,o.X$)({},n),i=r.type;let u=!1,l=!0;if((0,o.cy)(i))for(let e=0;e<i.length;++e){const t=i[e],n=(0,o.Tn)(t)&&t.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,o.Tn)(i)&&"Boolean"===i.name;r[0]=u,r[1]=l,(u||(0,o.$3)(r,"default"))&&c.push(t)}}}const l=[a,c];return(0,o.Gv)(e)&&r.set(e,l),l}function Qe(e){return"$"!==e[0]&&!(0,o.SU)(e)}const Ye=e=>"_"===e[0]||"$stable"===e,et=e=>(0,o.cy)(e)?e.map(an):[an(e)],tt=(e,t,n)=>{if(t._n)return t;const r=k(((...e)=>et(t(...e))),n);return r._c=!1,r},nt=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Ye(i))continue;const n=e[i];if((0,o.Tn)(n))t[i]=tt(i,n,r);else if(null!=n){0;const e=et(n);t[i]=()=>e}}},rt=(e,t)=>{const n=et(t);e.slots.default=()=>n},ot=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},it=(e,t,n)=>{const r=e.slots=He();if(32&e.vnode.shapeFlag){const e=t._;e?(ot(r,t,n),n&&(0,o.yQ)(r,"_",e,!0)):nt(t,r)}else t&&rt(e,t)},st=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=o.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:ot(i,t,n):(s=!t.$stable,nt(t,i)),a=t}else t&&(rt(e,t),a={default:1});if(s)for(const o in i)Ye(o)||null!=a[o]||delete i[o]};function at(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,o.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ct=Lt;function ut(e){return lt(e)}function lt(e,t){at();const n=(0,o.We)();n.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:f,setElementText:d,parentNode:h,nextSibling:p,setScopeId:m=o.tE,insertStaticContent:g}=e,v=(e,t,n,r=null,o=null,i=null,s=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Zt(e,t)&&(r=Y(e),G(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:f}=t;switch(u){case jt:b(e,t,n,r);break;case Ut:w(e,t,n,r);break;case Ft:null==e&&S(t,n,r,s);break;case Mt:L(e,t,n,r,o,i,s,a,c);break;default:1&f?O(e,t,n,r,o,i,s,a,c):6&f?M(e,t,n,r,o,i,s,a,c):(64&f||128&f)&&u.process(e,t,n,r,o,i,s,a,c,ne)}null!=l&&o&&W(l,e&&e.ref,i,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},w=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},S=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=p(e),i(e,n,r),e=o;i(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},O=(e,t,n,r,o,i,s,a,c)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?R(t,n,r,o,i,s,a,c):P(e,t,o,i,s,a,c)},R=(e,t,n,r,s,u,l,f)=>{let h,p;const{props:m,shapeFlag:g,transition:v,dirs:y}=e;if(h=e.el=c(e.type,u,m&&m.is,m),8&g?d(h,e.children):16&g&&x(e.children,h,null,r,s,ft(e,u),l,f),y&&A(e,null,r,"created"),k(h,e,e.scopeId,l,r),m){for(const e in m)"value"===e||(0,o.SU)(e)||a(h,e,null,m[e],u,r);"value"in m&&a(h,"value",null,m.value,u),(p=m.onVnodeBeforeMount)&&fn(p,r,e)}y&&A(e,null,r,"beforeMount");const b=ht(s,v);b&&v.beforeEnter(h),i(h,t,n),((p=m&&m.onVnodeMounted)||b||y)&&ct((()=>{p&&fn(p,r,e),b&&v.enter(h),y&&A(e,null,r,"mounted")}),s)},k=(e,t,n,r,o)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(o){let n=o.subTree;if(t===n||Dt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=o.vnode;k(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},x=(e,t,n,r,o,i,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?cn(e[u]):an(e[u]);v(null,c,t,n,r,o,i,s,a)}},P=(e,t,n,r,i,s,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:f,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||o.MZ,m=t.props||o.MZ;let g;if(n&&dt(n,!1),(g=m.onVnodeBeforeUpdate)&&fn(g,n,t,e),h&&A(t,e,n,"beforeUpdate"),n&&dt(n,!0),(p.innerHTML&&null==m.innerHTML||p.textContent&&null==m.textContent)&&d(u,""),f?N(e.dynamicChildren,f,u,n,r,ft(t,i),s):c||$(e,t,u,null,n,r,ft(t,i),s,!1),l>0){if(16&l)D(u,p,m,n,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],o=p[r],s=m[r];s===o&&"value"!==r||a(u,r,o,s,i,n)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=f||D(u,p,m,n,i);((g=m.onVnodeUpdated)||h)&&ct((()=>{g&&fn(g,n,t,e),h&&A(t,e,n,"updated")}),r)},N=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Mt||!Zt(c,u)||70&c.shapeFlag)?h(c.el):n;v(c,u,l,null,r,o,i,s,!0)}},D=(e,t,n,r,i)=>{if(t!==n){if(t!==o.MZ)for(const s in t)(0,o.SU)(s)||s in n||a(e,s,t[s],null,i,r);for(const s in n){if((0,o.SU)(s))continue;const c=n[s],u=t[s];c!==u&&"value"!==s&&a(e,s,u,c,i,r)}"value"in n&&a(e,"value",t.value,n.value,i)}},L=(e,t,n,r,o,s,a,c,l)=>{const f=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(i(f,n,r),i(d,n,r),x(t.children||[],n,d,o,s,a,c,l)):h>0&&64&h&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,o,s,a,c),(null!=t.key||o&&t===o.subTree)&&pt(e,t,!0)):$(e,t,n,d,o,s,a,c,l)},M=(e,t,n,r,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,c):j(t,n,r,o,i,s,c):U(e,t,c)},j=(e,t,n,r,o,i,s)=>{const a=e.component=pn(e,r,o);if(z(e)&&(a.ctx.renderer=ne),Tn(a,!1,s),a.asyncDep){if(o&&o.registerDep(a,F,s),!e.el){const e=a.subTree=en(Ut);w(null,e,t,n)}}else F(a,e,t,n,o,i,s)},U=(e,t,n)=>{const r=t.component=e.component;if(xt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,i,s,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:i,vnode:l}=e;{const n=gt(e);if(n)return t&&(t.el=l.el,B(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let f,d=t;0,dt(e,!1),t?(t.el=l.el,B(e,t,c)):t=l,n&&(0,o.DY)(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&fn(f,i,t,l),dt(e,!0);const p=kt(e);0;const m=e.subTree;e.subTree=p,v(m,p,h(m.el),Y(m),e,s,a),t.el=p.el,null===d&&Nt(e,p.el),r&&ct(r,s),(f=t.props&&t.props.onVnodeUpdated)&&ct((()=>fn(f,i,t,l)),s)}else{let r;const{el:c,props:u}=t,{bm:l,m:f,parent:d,root:h,type:p}=e,m=H(t);if(dt(e,!1),l&&(0,o.DY)(l),!m&&(r=u&&u.onVnodeBeforeMount)&&fn(r,d,t),dt(e,!0),c&&oe){const t=()=>{e.subTree=kt(e),oe(c,e.subTree,e,s,null)};m&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{h.ce&&h.ce._injectChildStyle(p);const r=e.subTree=kt(e);0,v(null,r,n,i,e,s,a),t.el=r.el}if(f&&ct(f,s),!m&&(r=u&&u.onVnodeMounted)){const e=t;ct((()=>fn(r,d,e)),s)}(256&t.shapeFlag||d&&H(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&ct(e.a,s),e.isMounted=!0,t=n=i=null}};e.scope.on();const l=e.effect=new r.X2(u);e.scope.off();const f=e.update=l.run.bind(l),d=e.job=l.runIfDirty.bind(l);d.i=e,d.id=e.uid,l.scheduler=()=>y(d),dt(e,!0),f()},B=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,Ke(e,t.props,o,n),st(e,t.children,n),(0,r.C4)(),_(e),(0,r.bl)()},$=(e,t,n,r,o,i,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void q(u,f,n,r,o,i,s,a,c);if(256&h)return void V(u,f,n,r,o,i,s,a,c)}8&p?(16&l&&Q(u,o,i),f!==u&&d(n,f)):16&l?16&p?q(u,f,n,r,o,i,s,a,c):Q(u,o,i,!0):(8&l&&d(n,""),16&p&&x(f,n,r,o,i,s,a,c))},V=(e,t,n,r,i,s,a,c,u)=>{e=e||o.Oj,t=t||o.Oj;const l=e.length,f=t.length,d=Math.min(l,f);let h;for(h=0;h<d;h++){const r=t[h]=u?cn(t[h]):an(t[h]);v(e[h],r,n,null,i,s,a,c,u)}l>f?Q(e,i,s,!0,!1,d):x(t,n,r,i,s,a,c,u,d)},q=(e,t,n,r,i,s,a,c,u)=>{let l=0;const f=t.length;let d=e.length-1,h=f-1;while(l<=d&&l<=h){const r=e[l],o=t[l]=u?cn(t[l]):an(t[l]);if(!Zt(r,o))break;v(r,o,n,null,i,s,a,c,u),l++}while(l<=d&&l<=h){const r=e[d],o=t[h]=u?cn(t[h]):an(t[h]);if(!Zt(r,o))break;v(r,o,n,null,i,s,a,c,u),d--,h--}if(l>d){if(l<=h){const e=h+1,o=e<f?t[e].el:r;while(l<=h)v(null,t[l]=u?cn(t[l]):an(t[l]),n,o,i,s,a,c,u),l++}}else if(l>h)while(l<=d)G(e[l],i,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=h;l++){const e=t[l]=u?cn(t[l]):an(t[l]);null!=e.key&&g.set(e.key,l)}let y,b=0;const w=h-m+1;let _=!1,E=0;const S=new Array(w);for(l=0;l<w;l++)S[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=w){G(r,i,s,!0);continue}let o;if(null!=r.key)o=g.get(r.key);else for(y=m;y<=h;y++)if(0===S[y-m]&&Zt(r,t[y])){o=y;break}void 0===o?G(r,i,s,!0):(S[o-m]=l+1,o>=E?E=o:_=!0,v(r,t[o],n,null,i,s,a,c,u),b++)}const I=_?mt(S):o.Oj;for(y=I.length-1,l=w-1;l>=0;l--){const e=m+l,o=t[e],d=e+1<f?t[e+1].el:r;0===S[l]?v(null,o,n,d,i,s,a,c,u):_&&(y<0||l!==I[y]?K(o,n,d,2):y--)}}},K=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ne);if(a===Mt){i(s,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Ft)return void I(e,t,n);const f=2!==r&&1&l&&c;if(f)if(0===r)c.beforeEnter(s),i(s,t,n),ct((()=>c.enter(s)),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),u=()=>{e(s,(()=>{a(),o&&o()}))};r?r(s,a,u):u()}else i(s,t,n)},G=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:f,dirs:d,cacheIndex:h}=e;if(-2===f&&(o=!1),null!=a&&W(a,null,n,e,!0),null!=h&&(t.renderCache[h]=void 0),256&l)return void t.ctx.deactivate(e);const p=1&l&&d,m=!H(e);let g;if(m&&(g=s&&s.onVnodeBeforeUnmount)&&fn(g,t,e),6&l)X(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);p&&A(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,ne,r):u&&!u.hasOnce&&(i!==Mt||f>0&&64&f)?Q(u,t,n,!1,!0):(i===Mt&&384&f||!o&&16&l)&&Q(c,t,n),r&&J(e)}(m&&(g=s&&s.onVnodeUnmounted)||p)&&ct((()=>{g&&fn(g,t,e),p&&A(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===Mt)return void Z(n,r);if(t===Ft)return void T(e);const i=()=>{s(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,s=()=>t(n,i);r?r(e.el,i,s):s()}else i()},Z=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},X=(e,t,n)=>{const{bum:r,scope:i,job:s,subTree:a,um:c,m:u,a:l}=e;vt(u),vt(l),r&&(0,o.DY)(r),i.stop(),s&&(s.flags|=8,G(a,e,t,n)),c&&ct(c,t),ct((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)G(e[s],t,n,r,o)},Y=e=>{if(6&e.shapeFlag)return Y(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[C];return n?p(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,_(),E(),ee=!1)},ne={p:v,um:G,m:K,r:J,mt:j,mc:x,pc:$,pbc:N,n:Y,o:e};let re,oe;return t&&([re,oe]=t(ne)),{render:te,hydrate:re,createApp:Fe(te,re)}}function ft({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function dt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ht(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pt(e,t,n=!1){const r=e.children,i=t.children;if((0,o.cy)(r)&&(0,o.cy)(i))for(let o=0;o<r.length;o++){const e=r[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=cn(i[o]),t.el=e.el),n||-2===t.patchFlag||pt(e,t)),t.type===jt&&(t.el=e.el)}}function mt(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}function gt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gt(t)}function vt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yt=Symbol.for("v-scx"),bt=()=>{{const e=Ve(yt);return e}};function wt(e,t,n){return _t(e,t,n)}function _t(e,t,n=o.MZ){const{immediate:i,deep:a,flush:c,once:u}=n;const l=(0,o.X$)({},n);const f=t&&i||!t&&"post"!==c;let d;if(In)if("sync"===c){const e=bt();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!f){const e=()=>{};return e.stop=o.tE,e.resume=o.tE,e.pause=o.tE,e}const h=mn;l.call=(e,t,n)=>s(e,h,t,n);let p=!1;"post"===c?l.scheduler=e=>{ct(e,h&&h.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(e,t)=>{t?e():y(e)}),l.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,h&&(e.id=h.uid,e.i=h))};const m=(0,r.wB)(e,t,l);return In&&(d?d.push(m):f&&m()),m}function Et(e,t,n){const r=this.proxy,i=(0,o.Kg)(e)?e.includes(".")?St(r,e):()=>r[e]:e.bind(r,r);let s;(0,o.Tn)(t)?s=t:(s=t.handler,n=t);const a=bn(this),c=_t(i,s.bind(r),n);return a(),c}function St(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const It=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,o.PT)(t)}Modifiers`]||e[`${(0,o.Tg)(t)}Modifiers`];function Tt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||o.MZ;let i=n;const a=t.startsWith("update:"),c=a&&It(r,t.slice(7));let u;c&&(c.trim&&(i=n.map((e=>(0,o.Kg)(e)?e.trim():e))),c.number&&(i=n.map(o.bB)));let l=r[u=(0,o.rU)(t)]||r[u=(0,o.rU)((0,o.PT)(t))];!l&&a&&(l=r[u=(0,o.rU)((0,o.Tg)(t))]),l&&s(l,e,6,i);const f=r[u+"Once"];if(f){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(f,e,6,i)}}function Ot(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let a={},c=!1;if(!(0,o.Tn)(e)){const r=e=>{const n=Ot(e,t,!0);n&&(c=!0,(0,o.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,o.cy)(s)?s.forEach((e=>a[e]=null)):(0,o.X$)(a,s),(0,o.Gv)(e)&&r.set(e,a),a):((0,o.Gv)(e)&&r.set(e,null),null)}function Rt(e,t){return!(!e||!(0,o.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,o.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,o.$3)(e,(0,o.Tg)(t))||(0,o.$3)(e,t))}function kt(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:c,attrs:u,emit:l,render:f,renderCache:d,props:h,data:p,setupState:m,ctx:g,inheritAttrs:v}=e,y=R(e);let b,w;try{if(4&n.shapeFlag){const e=i||r,t=e;b=an(f.call(t,e,d,h,m,p,g)),w=u}else{const e=t;0,b=an(e.length>1?e(h,{attrs:u,slots:c,emit:l}):e(h,null)),w=t.props?u:At(u)}}catch(E){Bt.length=0,a(E,e,1),b=en(Ut)}let _=b;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(s&&e.some(o.CP)&&(w=Ct(w,s)),_=rn(_,w,!1,!0))}return n.dirs&&(_=rn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&F(_,n.transition),b=_,R(y),b}const At=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,o.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Ct=(e,t)=>{const n={};for(const r in e)(0,o.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function xt(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||Pt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?Pt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Rt(u,n))return!0}}return!1}function Pt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Rt(n,i))return!0}return!1}function Nt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const Dt=e=>e.__isSuspense;function Lt(e,t){t&&t.pendingBranch?(0,o.cy)(e)?t.effects.push(...e):t.effects.push(e):w(e)}const Mt=Symbol.for("v-fgt"),jt=Symbol.for("v-txt"),Ut=Symbol.for("v-cmt"),Ft=Symbol.for("v-stc"),Bt=[];let $t=null;function Vt(e=!1){Bt.push($t=e?null:[])}function Wt(){Bt.pop(),$t=Bt[Bt.length-1]||null}let Ht=1;function zt(e){Ht+=e,e<0&&$t&&($t.hasOnce=!0)}function qt(e){return e.dynamicChildren=Ht>0?$t||o.Oj:null,Wt(),Ht>0&&$t&&$t.push(e),e}function Kt(e,t,n,r,o,i){return qt(Yt(e,t,n,r,o,i,!0))}function Gt(e,t,n,r,o){return qt(en(e,t,n,r,o,!0))}function Jt(e){return!!e&&!0===e.__v_isVNode}function Zt(e,t){return e.type===t.type&&e.key===t.key}const Xt=({key:e})=>null!=e?e:null,Qt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,o.Kg)(e)||(0,r.i9)(e)||(0,o.Tn)(e)?{i:T,r:e,k:t,f:!!n}:e:null);function Yt(e,t=null,n=null,r=0,i=null,s=(e===Mt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xt(t),ref:t&&Qt(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:T};return c?(un(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,o.Kg)(n)?8:16),Ht>0&&!a&&$t&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&$t.push(u),u}const en=tn;function tn(e,t=null,n=null,i=0,s=null,a=!1){if(e&&e!==he||(e=Ut),Jt(e)){const r=rn(e,t,!0);return n&&un(r,n),Ht>0&&!a&&$t&&(6&r.shapeFlag?$t[$t.indexOf(e)]=r:$t.push(r)),r.patchFlag=-2,r}if(Nn(e)&&(e=e.__vccOpts),t){t=nn(t);let{class:e,style:n}=t;e&&!(0,o.Kg)(e)&&(t.class=(0,o.C4)(e)),(0,o.Gv)(n)&&((0,r.ju)(n)&&!(0,o.cy)(n)&&(n=(0,o.X$)({},n)),t.style=(0,o.Tr)(n))}const c=(0,o.Kg)(e)?1:Dt(e)?128:x(e)?64:(0,o.Gv)(e)?4:(0,o.Tn)(e)?2:0;return Yt(e,t,n,i,s,c,a,!0)}function nn(e){return e?(0,r.ju)(e)||ze(e)?(0,o.X$)({},e):e:null}function rn(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:c,transition:u}=e,l=t?ln(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Xt(l),ref:t&&t.ref?n&&s?(0,o.cy)(s)?s.concat(Qt(t)):[s,Qt(t)]:Qt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&F(f,u.clone(f)),f}function on(e=" ",t=0){return en(jt,null,e,t)}function sn(e="",t=!1){return t?(Vt(),Gt(Ut,null,e)):en(Ut,null,e)}function an(e){return null==e||"boolean"===typeof e?en(Ut):(0,o.cy)(e)?en(Mt,null,e.slice()):Jt(e)?cn(e):en(jt,null,String(e))}function cn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:rn(e)}function un(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,o.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),un(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||ze(t)?3===r&&T&&(1===T.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=T}}else(0,o.Tn)(t)?(t={default:t,_ctx:T},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function ln(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,o.C4)([t.class,r.class]));else if("style"===e)t.style=(0,o.Tr)([t.style,r.style]);else if((0,o.Mp)(e)){const n=t[e],i=r[e];!i||n===i||(0,o.cy)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function fn(e,t,n,r=null){s(e,t,7,[n,r])}const dn=je();let hn=0;function pn(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||dn,a={uid:hn++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xe(i,s),emitsOptions:Ot(i,s),emit:null,emitted:null,propsDefaults:o.MZ,inheritAttrs:i.inheritAttrs,ctx:o.MZ,data:o.MZ,props:o.MZ,attrs:o.MZ,slots:o.MZ,refs:o.MZ,setupState:o.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Tt.bind(null,a),e.ce&&e.ce(a),a}let mn=null;const gn=()=>mn||T;let vn,yn;{const e=(0,o.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};vn=t("__VUE_INSTANCE_SETTERS__",(e=>mn=e)),yn=t("__VUE_SSR_SETTERS__",(e=>In=e))}const bn=e=>{const t=mn;return vn(e),e.scope.on(),()=>{e.scope.off(),vn(t)}},wn=()=>{mn&&mn.scope.off(),vn(null)};function _n(e){return 4&e.vnode.shapeFlag}let En,Sn,In=!1;function Tn(e,t=!1,n=!1){t&&yn(t);const{props:r,children:o}=e.vnode,i=_n(e);qe(e,r,i,t),it(e,o,n);const s=i?On(e,t):void 0;return t&&yn(!1),s}function On(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,we);const{setup:s}=n;if(s){(0,r.C4)();const n=e.setupContext=s.length>1?Cn(e):null,c=bn(e),u=i(s,e,0,[e.props,n]),l=(0,o.yL)(u);if((0,r.bl)(),c(),!l&&!e.sp||H(e)||V(e),l){if(u.then(wn,wn),t)return u.then((n=>{Rn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else Rn(e,u,t)}else kn(e,t)}function Rn(e,t,n){(0,o.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,o.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),kn(e,n)}function kn(e,t,n){const i=e.type;if(!e.render){if(!t&&En&&!i.render){const t=i.template||Re(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=(0,o.X$)((0,o.X$)({isCustomElement:n,delimiters:s},r),a);i.render=En(t,c)}}e.render=i.render||o.tE,Sn&&Sn(e)}{const t=bn(e);(0,r.C4)();try{Se(e)}finally{(0,r.bl)(),t()}}}const An={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Cn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,An),slots:e.slots,emit:e.emit,expose:t}}function xn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in ye?ye[n](e):void 0},has(e,t){return t in e||t in ye}})):e.proxy}function Pn(e,t=!0){return(0,o.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Nn(e){return(0,o.Tn)(e)&&"__vccOpts"in e}const Dn=(e,t)=>{const n=(0,r.EW)(e,t,In);return n};function Ln(e,t,n){const r=arguments.length;return 2===r?(0,o.Gv)(t)&&!(0,o.cy)(t)?Jt(t)?en(e,null,[t]):en(e,t):en(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Jt(n)&&(n=[n]),en(e,t,n))}const Mn="3.5.12"},5130:function(e,t,n){n.d(t,{Ef:function(){return q}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),o=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let i;const s="undefined"!==typeof window&&window.trustedTypes;if(s)try{i=s.createPolicy("vue",{createHTML:e=>e})}catch(J){}const a=i?e=>i.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,f=l&&l.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o="svg"===t?l.createElementNS(c,e):"mathml"===t?l.createElementNS(u,e):n?l.createElement(e,{is:n}):l.createElement(e);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>l.createTextNode(e),createComment:e=>l.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>l.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{f.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const o=f.content;if("svg"===r||"mathml"===r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function m(e,t,n){const r=e[h];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const g=Symbol("_vod"),v=Symbol("_vsh");const y=Symbol("");const b=/(^|;)\s*display\s*:/;function w(e,t,n){const r=e.style,i=(0,o.Kg)(n);let s=!1;if(n&&!i){if(t)if((0,o.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&E(r,t,"")}else for(const e in t)null==n[e]&&E(r,e,"");for(const e in n)"display"===e&&(s=!0),E(r,e,n[e])}else if(i){if(t!==n){const e=r[y];e&&(n+=";"+e),r.cssText=n,s=b.test(n)}}else t&&e.removeAttribute("style");g in e&&(e[g]=s?r.display:"",e[v]&&(r.display="none"))}const _=/\s*!important$/;function E(e,t,n){if((0,o.cy)(n))n.forEach((n=>E(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=T(e,t);_.test(n)?e.setProperty((0,o.Tg)(r),n.replace(_,""),"important"):e[r]=n}}const S=["Webkit","Moz","ms"],I={};function T(e,t){const n=I[t];if(n)return n;let r=(0,o.PT)(t);if("filter"!==r&&r in e)return I[t]=r;r=(0,o.ZH)(r);for(let o=0;o<S.length;o++){const n=S[o]+r;if(n in e)return I[t]=n}return t}const O="http://www.w3.org/1999/xlink";function R(e,t,n,r,i,s=(0,o.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(O,t.slice(6,t.length)):e.setAttributeNS(O,t,n):null==n||s&&!(0,o.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":(0,o.Bm)(n)?String(n):n)}function k(e,t,n,r,i){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const s=e.tagName;if("value"===t&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?e.getAttribute("value")||"":e.value,o=null==n?"checkbox"===e.type?"on":"":String(n);return r===o&&"_value"in e||(e.value=o),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,o.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(J){0}c&&e.removeAttribute(i||t)}function A(e,t,n,r){e.addEventListener(t,n,r)}function C(e,t,n,r){e.removeEventListener(t,n,r)}const x=Symbol("_vei");function P(e,t,n,r,o=null){const i=e[x]||(e[x]={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=D(t);if(r){const s=i[t]=U(r,o);A(e,n,s,a)}else s&&(C(e,n,s,a),i[t]=void 0)}}const N=/(?:Once|Passive|Capture)$/;function D(e){let t;if(N.test(e)){let n;t={};while(n=e.match(N))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,o.Tg)(e.slice(2));return[n,t]}let L=0;const M=Promise.resolve(),j=()=>L||(M.then((()=>L=0)),L=Date.now());function U(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(F(e,n.value),t,5,[e])};return n.value=e,n.attached=j(),n}function F(e,t){if((0,o.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const B=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$=(e,t,n,r,i,s)=>{const a="svg"===i;"class"===t?m(e,r,a):"style"===t?w(e,n,r):(0,o.Mp)(t)?(0,o.CP)(t)||P(e,t,n,r,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):V(e,t,r,a))?(k(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||R(e,t,r,a,s,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,o.Kg)(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),R(e,t,r,a)):k(e,(0,o.PT)(t),r,s,t)};function V(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&B(t)&&(0,o.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!B(t)||!(0,o.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");Symbol("_assign");const W=(0,o.X$)({patchProp:$},d);let H;function z(){return H||(H=(0,r.K9)(W))}const q=(...e)=>{const t=z().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=G(e);if(!r)return;const i=t._component;(0,o.Tn)(i)||i.render||i.template||(i.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const s=n(r,!1,K(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function K(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function G(e){if((0,o.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return h},$H:function(){return j},BH:function(){return z},BX:function(){return ne},Bm:function(){return _},C4:function(){return X},CE:function(){return m},CP:function(){return u},DY:function(){return U},Gv:function(){return E},J$:function(){return Y},Kg:function(){return w},MZ:function(){return o},Mp:function(){return c},NO:function(){return a},Oj:function(){return i},PT:function(){return P},Qd:function(){return R},Ro:function(){return $},SU:function(){return A},TF:function(){return f},Tg:function(){return D},Tn:function(){return b},Tr:function(){return q},We:function(){return W},X$:function(){return l},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return O},bB:function(){return B},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return s},u3:function(){return re},vM:function(){return g},v_:function(){return ie},yI:function(){return k},yL:function(){return S},yQ:function(){return F}});n(4114);
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const o={},i=[],s=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,f=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,h=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>"[object Map]"===T(e),g=e=>"[object Set]"===T(e),v=e=>"[object Date]"===T(e),y=e=>"[object RegExp]"===T(e),b=e=>"function"===typeof e,w=e=>"string"===typeof e,_=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,S=e=>(E(e)||b(e))&&b(e.then)&&b(e.catch),I=Object.prototype.toString,T=e=>I.call(e),O=e=>T(e).slice(8,-1),R=e=>"[object Object]"===T(e),k=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),C=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},x=/-(\w)/g,P=C((e=>e.replace(x,((e,t)=>t?t.toUpperCase():"")))),N=/\B([A-Z])/g,D=C((e=>e.replace(N,"-$1").toLowerCase())),L=C((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=C((e=>{const t=e?`on${L(e)}`:"";return t})),j=(e,t)=>!Object.is(e,t),U=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},F=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let V;const W=()=>V||(V="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",z=r(H);function q(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=w(r)?Z(r):q(r);if(o)for(const e in o)t[e]=o[e]}return t}if(w(e)||E(e))return e}const K=/;(?![^(]*\))/g,G=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Z(e){const t={};return e.replace(J,"").split(K).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Q="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y=r(Q);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=_(e),r=_(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const oe=e=>!(!e||!0!==e["__v_isRef"]),ie=e=>w(e)?e:null==e?"":p(e)||E(e)&&(e.toString===I||!b(e.toString))?oe(e)?ie(e.value):JSON.stringify(e,se,2):String(e),se=(e,t)=>oe(t)?se(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:_(t)?ae(t):!E(t)||p(t)||R(t)?t:String(t),ae=(e,t="")=>{var n;return _(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},9306:function(e,t,n){var r=n(4901),o=n(6823),i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i("Can't set "+o(e)+" as a prototype")}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},6469:function(e,t,n){var r=n(8227),o=n(2360),i=n(4913).f,s=r("unscopables"),a=Array.prototype;void 0===a[s]&&i(a,s,{configurable:!0,value:o(null)}),e.exports=function(e){a[s][e]=!0}},679:function(e,t,n){var r=n(1625),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new o("Incorrect invocation")}},8551:function(e,t,n){var r=n(34),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not an object")}},7811:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){var r=n(4576),o=n(6706),i=n(2195),s=r.ArrayBuffer,a=r.TypeError;e.exports=s&&o(s.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==i(e))throw new a("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){var r=n(4576),o=n(7476),i=n(7394),s=r.ArrayBuffer,a=s&&s.prototype,c=a&&o(a.slice);e.exports=function(e){if(0!==i(e))return!1;if(!c)return!1;try{return c(e,0,0),!1}catch(t){return!0}}},5169:function(e,t,n){var r=n(3238),o=TypeError;e.exports=function(e){if(r(e))throw new o("ArrayBuffer is detached");return e}},5636:function(e,t,n){var r=n(4576),o=n(9504),i=n(6706),s=n(7696),a=n(5169),c=n(7394),u=n(4483),l=n(1548),f=r.structuredClone,d=r.ArrayBuffer,h=r.DataView,p=Math.min,m=d.prototype,g=h.prototype,v=o(m.slice),y=i(m,"resizable","get"),b=i(m,"maxByteLength","get"),w=o(g.getInt8),_=o(g.setInt8);e.exports=(l||u)&&function(e,t,n){var r,o=c(e),i=void 0===t?o:s(t),m=!y||!y(e);if(a(e),l&&(e=f(e,{transfer:[e]}),o===i&&(n||m)))return e;if(o>=i&&(!n||m))r=v(e,0,i);else{var g=n&&!m&&b?{maxByteLength:b(e)}:void 0;r=new d(i,g);for(var E=new h(e),S=new h(r),I=p(i,o),T=0;T<I;T++)_(S,T,w(E,T))}return l||u(e),r}},4644:function(e,t,n){var r,o,i,s=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),f=n(9297),d=n(6955),h=n(6823),p=n(6699),m=n(6840),g=n(2106),v=n(1625),y=n(2787),b=n(2967),w=n(8227),_=n(3392),E=n(1181),S=E.enforce,I=E.get,T=c.Int8Array,O=T&&T.prototype,R=c.Uint8ClampedArray,k=R&&R.prototype,A=T&&y(T),C=O&&y(O),x=Object.prototype,P=c.TypeError,N=w("toStringTag"),D=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=s&&!!b&&"Opera"!==d(c.opera),j=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||f(U,t)||f(F,t)},$=function(e){var t=y(e);if(l(t)){var n=I(t);return n&&f(n,L)?n[L]:$(t)}},V=function(e){if(!l(e))return!1;var t=d(e);return f(U,t)||f(F,t)},W=function(e){if(V(e))return e;throw new P("Target is not a typed array")},H=function(e){if(u(e)&&(!b||v(A,e)))return e;throw new P(h(e)+" is not a typed array constructor")},z=function(e,t,n,r){if(a){if(n)for(var o in U){var i=c[o];if(i&&f(i.prototype,e))try{delete i.prototype[e]}catch(s){try{i.prototype[e]=t}catch(u){}}}C[e]&&!n||m(C,e,n?t:M&&O[e]||t,r)}},q=function(e,t,n){var r,o;if(a){if(b){if(n)for(r in U)if(o=c[r],o&&f(o,e))try{delete o[e]}catch(i){}if(A[e]&&!n)return;try{return m(A,e,n?t:M&&A[e]||t)}catch(i){}}for(r in U)o=c[r],!o||o[e]&&!n||m(o,e,t)}};for(r in U)o=c[r],i=o&&o.prototype,i?S(i)[L]=o:M=!1;for(r in F)o=c[r],i=o&&o.prototype,i&&(S(i)[L]=o);if((!M||!u(A)||A===Function.prototype)&&(A=function(){throw new P("Incorrect invocation")},M))for(r in U)c[r]&&b(c[r],A);if((!M||!C||C===x)&&(C=A.prototype,M))for(r in U)c[r]&&b(c[r].prototype,C);if(M&&y(k)!==C&&b(k,C),a&&!f(C,N))for(r in j=!0,g(C,N,{configurable:!0,get:function(){return l(this)?this[D]:void 0}}),U)c[r]&&p(c[r],D,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:j&&D,aTypedArray:W,aTypedArrayConstructor:H,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:$,isView:B,isTypedArray:V,TypedArray:A,TypedArrayPrototype:C}},5370:function(e,t,n){var r=n(6198);e.exports=function(e,t,n){var o=0,i=arguments.length>2?n:r(t),s=new e(i);while(i>o)s[o]=t[o++];return s}},9617:function(e,t,n){var r=n(5397),o=n(5610),i=n(6198),s=function(e){return function(t,n,s){var a=r(t),c=i(a);if(0===c)return!e&&-1;var u,l=o(s,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4527:function(e,t,n){var r=n(3724),o=n(4376),i=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(o(e)&&!s(e,"length").writable)throw new i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7680:function(e,t,n){var r=n(9504);e.exports=r([].slice)},7628:function(e,t,n){var r=n(6198);e.exports=function(e,t){for(var n=r(e),o=new t(n),i=0;i<n;i++)o[i]=e[n-i-1];return o}},9928:function(e,t,n){var r=n(6198),o=n(1291),i=RangeError;e.exports=function(e,t,n,s){var a=r(e),c=o(n),u=c<0?a+c:c;if(u>=a||u<0)throw new i("Incorrect index");for(var l=new t(a),f=0;f<a;f++)l[f]=f===u?s:e[f];return l}},2195:function(e,t,n){var r=n(9504),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},6955:function(e,t,n){var r=n(2140),o=n(4901),i=n(2195),s=n(8227),a=s("toStringTag"),c=Object,u="Arguments"===i(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?i(t):"Object"===(r=i(t))&&o(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),o=n(5031),i=n(7347),s=n(4913);e.exports=function(e,t,n){for(var a=o(t),c=s.f,u=i.f,l=0;l<a.length;l++){var f=a[l];r(e,f)||n&&r(n,f)||c(e,f,u(t,f))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){var r=n(3724),o=n(4913),i=n(6980);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){var r=n(283),o=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),o=n(4913),i=n(283),s=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&i(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){var r=n(4576),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){var r,o,i,s,a=n(4576),c=n(9429),u=n(1548),l=a.structuredClone,f=a.ArrayBuffer,d=a.MessageChannel,h=!1;if(u)h=function(e){l(e,{transfer:[e]})};else if(f)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(o=new d,i=new f(2),s=function(e){o.port1.postMessage(null,[e])},2===i.byteLength&&(s(i),0===i.byteLength&&(h=s)))}catch(p){}e.exports=h},4055:function(e,t,n){var r=n(4576),o=n(34),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9544:function(e,t,n){var r=n(2839);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},8574:function(e,t,n){var r=n(4215);e.exports="NODE"===r},2839:function(e,t,n){var r=n(4576),o=r.navigator,i=o&&o.userAgent;e.exports=i?String(i):""},9519:function(e,t,n){var r,o,i=n(4576),s=n(2839),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},4215:function(e,t,n){var r=n(4576),o=n(2839),i=n(2195),s=function(e){return o.slice(0,e.length)===e};e.exports=function(){return s("Bun/")?"BUN":s("Cloudflare-Workers")?"CLOUDFLARE":s("Deno/")?"DENO":s("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===i(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},6193:function(e,t,n){var r=n(9504),o=Error,i=r("".replace),s=function(e){return String(new o(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=i(e,a,"");return e}},6518:function(e,t,n){var r=n(4576),o=n(7347).f,i=n(6699),s=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,f,d,h,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):r[m]&&r[m].prototype,l)for(f in t){if(h=t[f],e.dontCallGetSet?(p=o(l,f),d=p&&p.value):d=l[f],n=u(g?f:m+(v?".":"#")+f,e.forced),!n&&void 0!==d){if(typeof h==typeof d)continue;c(h,d)}(e.sham||d&&d.sham)&&i(h,"sham",!0),s(l,f,h,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},8745:function(e,t,n){var r=n(616),o=Function.prototype,i=o.apply,s=o.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(i):function(){return s.apply(i,arguments)})},6080:function(e,t,n){var r=n(7476),o=n(9306),i=n(616),s=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?s(e,t):function(){return e.apply(t,arguments)}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},350:function(e,t,n){var r=n(3724),o=n(9297),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(e,t,n){var r=n(9504),o=n(9306);e.exports=function(e,t,n){try{return r(o(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(i){}}},7476:function(e,t,n){var r=n(2195),o=n(9504);e.exports=function(e){if("Function"===r(e))return o(e)}},9504:function(e,t,n){var r=n(616),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);e.exports=r?s:function(e){return function(){return i.apply(e,arguments)}}},9429:function(e,t,n){var r=n(4576),o=n(8574);e.exports=function(e){if(o){try{return r.process.getBuiltinModule(e)}catch(t){}try{return Function('return require("'+e+'")')()}catch(t){}}}},4124:function(e,t,n){var r=n(4576);e.exports=function(e,t){var n=r[e],o=n&&n.prototype;return o&&o[t]}},7751:function(e,t,n){var r=n(4576),o=n(4901),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},5966:function(e,t,n){var r=n(9306),o=n(4117);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},3789:function(e,t,n){var r=n(9306),o=n(8551),i=n(9565),s=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,f=Math.max,d=function(e,t){this.set=e,this.size=f(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(o(i(this.keys,this.set)))},includes:function(e){return i(this.has,this.set,e)}},e.exports=function(e){o(e);var t=+e.size;if(t!==t)throw new l(c);var n=s(t);if(n<0)throw new u(c);return new d(e,n)}},4576:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),o=n(8981),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},421:function(e){e.exports={}},397:function(e,t,n){var r=n(7751);e.exports=r("document","documentElement")},5917:function(e,t,n){var r=n(3724),o=n(9039),i=n(4055);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),o=n(9039),i=n(2195),s=Object,a=r("".split);e.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?a(e,""):s(e)}:s},3167:function(e,t,n){var r=n(4901),o=n(34),i=n(2967);e.exports=function(e,t,n){var s,a;return i&&r(s=t.constructor)&&s!==n&&o(a=s.prototype)&&a!==n.prototype&&i(e,a),e}},3706:function(e,t,n){var r=n(9504),o=n(4901),i=n(7629),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},1181:function(e,t,n){var r,o,i,s=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),f=n(7629),d=n(6119),h=n(421),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=o(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(s||f.state){var b=f.state||(f.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new m(p);return t.facade=e,b.set(e,t),t},o=function(e){return b.get(e)||{}},i=function(e){return b.has(e)}}else{var w=d("state");h[w]=!0,r=function(e,t){if(l(e,w))throw new m(p);return t.facade=e,u(e,w,t),t},o=function(e){return l(e,w)?e[w]:{}},i=function(e){return l(e,w)}}e.exports={set:r,get:o,has:i,enforce:v,getterFor:y}},4376:function(e,t,n){var r=n(2195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),o=n(4901),i=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===l||n!==u&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),o=n(4901),i=n(1625),s=n(7040),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,a(e))}},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var o,i,s=n?e:e.iterator,a=e.next;while(!(o=r(a,s)).done)if(i=t(o.value),void 0!==i)return i}},9539:function(e,t,n){var r=n(9565),o=n(8551),i=n(5966);e.exports=function(e,t,n){var s,a;o(e);try{if(s=i(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return o(s),n}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),o=n(9039),i=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),f=l.enforce,d=l.get,h=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===m(h(t),0,7)&&(t="["+g(h(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=f(e);return s(r,"source")||(r.source=v(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return i(this)&&d(this).source||u(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2360:function(e,t,n){var r,o=n(8551),i=n(6801),s=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),f=">",d="<",h="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(e){return d+p+f+e+d+"/"+p+f},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=s.length;while(e--)delete w[h][s[e]];return w()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[h]=o(e),n=new g,g[h]=null,n[m]=e):n=w(),void 0===t?n:i.f(n,t)}},6801:function(e,t,n){var r=n(3724),o=n(8686),i=n(4913),s=n(8551),a=n(5397),c=n(1072);t.f=r&&!o?Object.defineProperties:function(e,t){s(e);var n,r=a(t),o=c(t),u=o.length,l=0;while(u>l)i.f(e,n=o[l++],r[n]);return e}},4913:function(e,t,n){var r=n(3724),o=n(5917),i=n(8686),s=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",h="writable";t.f=r?i?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&h in n&&!n[h]){var r=l(e,t);r&&r[h]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),o=n(9565),i=n(8773),s=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=a(e),t=c(t),l)try{return f(e,t)}catch(n){}if(u(e,t))return s(!o(i.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),o=n(8727),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),o=n(4901),i=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=i(e);if(r(t,c))return t[c];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),o=n(9297),i=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(t.length>u)o(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},1072:function(e,t,n){var r=n(1828),o=n(8727);e.exports=Object.keys||function(e){return r(e,o)}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),o=n(34),i=n(7750),s=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return i(n),s(r),o(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){var r=n(9565),o=n(4901),i=n(34),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&o(n=e.toString)&&!i(a=r(n,e)))return a;if(o(n=e.valueOf)&&!i(a=r(n,e)))return a;if("string"!==t&&o(n=e.toString)&&!i(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),o=n(9504),i=n(8480),s=n(3717),a=n(8551),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?c(t,n(e)):t}},7979:function(e,t,n){var r=n(8551);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},7750:function(e,t,n){var r=n(4117),o=TypeError;e.exports=function(e){if(r(e))throw new o("Can't call method on "+e);return e}},9472:function(e,t,n){var r=n(4576),o=n(8745),i=n(4901),s=n(4215),a=n(2839),c=n(7680),u=n(2812),l=r.Function,f=/MSIE .\./.test(a)||"BUN"===s&&function(){var e=r.Bun.version.split(".");return e.length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2])}();e.exports=function(e,t){var n=t?2:1;return f?function(r,s){var a=u(arguments.length,1)>n,f=i(r)?r:l(r),d=a?c(arguments,n):[],h=a?function(){o(f,this,d)}:f;return t?e(h,s):e(h)}:e}},9286:function(e,t,n){var r=n(4402),o=n(8469),i=r.Set,s=r.add;e.exports=function(e){var t=new i;return o(e,(function(e){s(t,e)})),t}},3440:function(e,t,n){var r=n(7080),o=n(4402),i=n(9286),s=n(5170),a=n(3789),c=n(8469),u=n(507),l=o.has,f=o.remove;e.exports=function(e){var t=r(this),n=a(e),o=i(t);return s(t)<=n.size?c(t,(function(e){n.includes(e)&&f(o,e)})):u(n.getIterator(),(function(e){l(t,e)&&f(o,e)})),o}},4402:function(e,t,n){var r=n(9504),o=Set.prototype;e.exports={Set:Set,add:r(o.add),has:r(o.has),remove:r(o["delete"]),proto:o}},8750:function(e,t,n){var r=n(7080),o=n(4402),i=n(5170),s=n(3789),a=n(8469),c=n(507),u=o.Set,l=o.add,f=o.has;e.exports=function(e){var t=r(this),n=s(e),o=new u;return i(t)>n.size?c(n.getIterator(),(function(e){f(t,e)&&l(o,e)})):a(t,(function(e){n.includes(e)&&l(o,e)})),o}},4449:function(e,t,n){var r=n(7080),o=n(4402).has,i=n(5170),s=n(3789),a=n(8469),c=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(i(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(e){if(o(t,e))return u(l,"normal",!1)}))}},3838:function(e,t,n){var r=n(7080),o=n(5170),i=n(8469),s=n(3789);e.exports=function(e){var t=r(this),n=s(e);return!(o(t)>n.size)&&!1!==i(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){var r=n(7080),o=n(4402).has,i=n(5170),s=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(i(t)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(e){if(!o(t,e))return c(u,"normal",!1)}))}},8469:function(e,t,n){var r=n(9504),o=n(507),i=n(4402),s=i.Set,a=i.proto,c=r(a.forEach),u=r(a.keys),l=u(new s).next;e.exports=function(e,t,n){return n?o({iterator:u(e),next:l},t):c(e,t)}},4916:function(e,t,n){var r=n(7751),o=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](o(0));try{return(new t)[e](o(-1)),!1}catch(n){return!0}}catch(i){return!1}}},5170:function(e,t,n){var r=n(6706),o=n(4402);e.exports=r(o.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){var r=n(7080),o=n(4402),i=n(9286),s=n(3789),a=n(507),c=o.add,u=o.has,l=o.remove;e.exports=function(e){var t=r(this),n=s(e).getIterator(),o=i(t);return a(n,(function(e){u(t,e)?l(o,e):c(o,e)})),o}},4204:function(e,t,n){var r=n(7080),o=n(4402).add,i=n(9286),s=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=s(e).getIterator(),c=i(t);return a(n,(function(e){o(c,e)})),c}},6119:function(e,t,n){var r=n(5745),o=n(3392),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},7629:function(e,t,n){var r=n(6395),o=n(4576),i=n(9433),s="__core-js_shared__",a=e.exports=o[s]||i(s,{});(a.versions||(a.versions=[])).push({version:"3.38.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){var r=n(4576),o=n(9039),i=n(9519),s=n(4215),a=r.structuredClone;e.exports=!!a&&!o((function(){if("DENO"===s&&i>92||"NODE"===s&&i>94||"BROWSER"===s&&i>97)return!1;var e=new ArrayBuffer(8),t=a(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){var r=n(9519),o=n(9039),i=n(4576),s=i.String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9225:function(e,t,n){var r,o,i,s,a=n(4576),c=n(8745),u=n(6080),l=n(4901),f=n(9297),d=n(9039),h=n(397),p=n(7680),m=n(4055),g=n(2812),v=n(9544),y=n(8574),b=a.setImmediate,w=a.clearImmediate,_=a.process,E=a.Dispatch,S=a.Function,I=a.MessageChannel,T=a.String,O=0,R={},k="onreadystatechange";d((function(){r=a.location}));var A=function(e){if(f(R,e)){var t=R[e];delete R[e],t()}},C=function(e){return function(){A(e)}},x=function(e){A(e.data)},P=function(e){a.postMessage(T(e),r.protocol+"//"+r.host)};b&&w||(b=function(e){g(arguments.length,1);var t=l(e)?e:S(e),n=p(arguments,1);return R[++O]=function(){c(t,void 0,n)},o(O),O},w=function(e){delete R[e]},y?o=function(e){_.nextTick(C(e))}:E&&E.now?o=function(e){E.now(C(e))}:I&&!v?(i=new I,s=i.port2,i.port1.onmessage=x,o=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(P)?(o=P,a.addEventListener("message",x,!1)):o=k in m("script")?function(e){h.appendChild(m("script"))[k]=function(){h.removeChild(this),A(e)}}:function(e){setTimeout(C(e),0)}),e.exports={set:b,clear:w}},5610:function(e,t,n){var r=n(1291),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5854:function(e,t,n){var r=n(2777),o=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new o("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){var r=n(1291),o=n(8014),i=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=o(t);if(t!==n)throw new i("Wrong length or index");return n}},5397:function(e,t,n){var r=n(7055),o=n(7750);e.exports=function(e){return r(o(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),o=Math.min;e.exports=function(e){var t=r(e);return t>0?o(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),o=Object;e.exports=function(e){return o(r(e))}},2777:function(e,t,n){var r=n(9565),o=n(34),i=n(757),s=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),o=n(757);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},655:function(e,t,n){var r=n(6955),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),o=n(9039);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4576),o=n(4901),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},8227:function(e,t,n){var r=n(4576),o=n(5745),i=n(9297),s=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=o("wks"),f=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return i(l,e)||(l[e]=a&&i(u,e)?u[e]:f("Symbol."+e)),l[e]}},6573:function(e,t,n){var r=n(3724),o=n(2106),i=n(3238),s=ArrayBuffer.prototype;r&&!("detached"in s)&&o(s,"detached",{configurable:!0,get:function(){return i(this)}})},7936:function(e,t,n){var r=n(6518),o=n(5636);o&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return o(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){var r=n(6518),o=n(5636);o&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return o(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){var r=n(6518),o=n(8981),i=n(6198),s=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},f=u||!l();r({target:"Array",proto:!0,arity:1,forced:f},{push:function(e){var t=o(this),n=i(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},9678:function(e,t,n){var r=n(6518),o=n(7628),i=n(5397),s=n(6469),a=Array;r({target:"Array",proto:!0},{toReversed:function(){return o(i(this),a)}}),s("toReversed")},7145:function(e,t,n){var r=n(6518),o=n(9504),i=n(9306),s=n(5397),a=n(5370),c=n(4124),u=n(6469),l=Array,f=o(c("Array","sort"));r({target:"Array",proto:!0},{toSorted:function(e){void 0!==e&&i(e);var t=s(this),n=a(l,t);return f(n,e)}}),u("toSorted")},1658:function(e,t,n){var r=n(6518),o=n(6469),i=n(6837),s=n(6198),a=n(5610),c=n(5397),u=n(1291),l=Array,f=Math.max,d=Math.min;r({target:"Array",proto:!0},{toSpliced:function(e,t){var n,r,o,h,p=c(this),m=s(p),g=a(e,m),v=arguments.length,y=0;for(0===v?n=r=0:1===v?(n=0,r=m-g):(n=v-2,r=d(f(u(t),0),m-g)),o=i(m+n-r),h=l(o);y<g;y++)h[y]=p[y];for(;y<g+n;y++)h[y]=arguments[y-g+2];for(;y<o;y++)h[y]=p[y+r-n];return h}}),o("toSpliced")},9479:function(e,t,n){var r=n(4576),o=n(3724),i=n(2106),s=n(7979),a=n(9039),c=r.RegExp,u=c.prototype,l=o&&a((function(){var e=!0;try{c(".","d")}catch(l){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in e&&(i.hasIndices="d"),i)o(s,i[s]);var a=Object.getOwnPropertyDescriptor(u,"flags").get.call(t);return a!==r||n!==r}));l&&i(u,"flags",{configurable:!0,get:s})},7642:function(e,t,n){var r=n(6518),o=n(3440),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("difference")},{difference:o})},8004:function(e,t,n){var r=n(6518),o=n(9039),i=n(8750),s=n(4916),a=!s("intersection")||o((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:i})},3853:function(e,t,n){var r=n(6518),o=n(4449),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isDisjointFrom")},{isDisjointFrom:o})},5876:function(e,t,n){var r=n(6518),o=n(3838),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSubsetOf")},{isSubsetOf:o})},2475:function(e,t,n){var r=n(6518),o=n(8527),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSupersetOf")},{isSupersetOf:o})},5024:function(e,t,n){var r=n(6518),o=n(3650),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("symmetricDifference")},{symmetricDifference:o})},1698:function(e,t,n){var r=n(6518),o=n(4204),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("union")},{union:o})},7467:function(e,t,n){var r=n(7628),o=n(4644),i=o.aTypedArray,s=o.exportTypedArrayMethod,a=o.getTypedArrayConstructor;s("toReversed",(function(){return r(i(this),a(this))}))},4732:function(e,t,n){var r=n(4644),o=n(9504),i=n(9306),s=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=o(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&i(e);var t=a(this),n=s(c(t),t);return l(n,e)}))},9577:function(e,t,n){var r=n(9928),o=n(4644),i=n(1108),s=n(1291),a=n(5854),c=o.aTypedArray,u=o.getTypedArrayConstructor,l=o.exportTypedArrayMethod,f=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),o=s(e),l=i(n)?a(t):+t;return r(n,u(n),o,l)}}["with"],!f)},6368:function(e,t,n){var r=n(6518),o=n(4576),i=n(9225).clear;r({global:!0,bind:!0,enumerable:!0,forced:o.clearImmediate!==i},{clearImmediate:i})},4979:function(e,t,n){var r=n(6518),o=n(4576),i=n(7751),s=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),f=n(2603),d=n(5002),h=n(6193),p=n(3724),m=n(6395),g="DOMException",v=i("Error"),y=i(g),b=function(){u(this,w);var e=arguments.length,t=f(e<1?void 0:arguments[0]),n=f(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=new v(t);return o.name=g,a(r,"stack",s(1,h(o.stack,1))),l(r,this,b),r},w=b.prototype=y.prototype,_="stack"in new v(g),E="stack"in new y(1,2),S=y&&p&&Object.getOwnPropertyDescriptor(o,g),I=!!S&&!(S.writable&&S.configurable),T=_&&!I&&!E;r({global:!0,constructor:!0,forced:m||T},{DOMException:T?b:y});var O=i(g),R=O.prototype;if(R.constructor!==O)for(var k in m||a(R,"constructor",s(1,O)),d)if(c(d,k)){var A=d[k],C=A.s;c(O,C)||a(O,C,s(6,A.c))}},9848:function(e,t,n){n(6368),n(9309)},9309:function(e,t,n){var r=n(6518),o=n(4576),i=n(9225).set,s=n(9472),a=o.setImmediate?s(i,!1):i;r({global:!0,bind:!0,enumerable:!0,forced:o.setImmediate!==a},{setImmediate:a})},4603:function(e,t,n){var r=n(6840),o=n(9504),i=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=o(c.append),l=o(c["delete"]),f=o(c.forEach),d=o([].push),h=new a("a=1&a=2&b=3");h["delete"]("a",1),h["delete"]("b",void 0),h+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];f(this,(function(e,t){d(r,{key:t,value:e})})),s(t,1);var o,a=i(e),c=i(n),h=0,p=0,m=!1,g=r.length;while(h<g)o=r[h++],m||o.key===a?(m=!0,l(this,o.key)):p++;while(p<g)o=r[p++],o.key===a&&o.value===c||u(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),o=n(9504),i=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=o(c.getAll),l=o(c.has),f=new a("a=1");!f.has("a",2)&&f.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);s(t,1);var o=i(n),a=0;while(a<r.length)if(r[a++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),o=n(9504),i=n(2106),s=URLSearchParams.prototype,a=o(s.forEach);r&&!("size"in s)&&i(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){n.d(t,{MF:function(){return me},j6:function(){return fe},om:function(){return le},Sx:function(){return ve},Wp:function(){return ge},KO:function(){return ye}});n(4114);var r=n(852),o=n(1363),i=n(4046);n(4979);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,d=new WeakMap,h=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(E(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&f.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(S(this),t),E(f.get(this))}:function(...t){return E(e.apply(S(this),t))}:function(t,...n){const r=e.call(S(this),t,...n);return h.set(r,t.sort?t.sort():[t]),E(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),s(e,u())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const S=e=>m.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=E(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(E(s.result),e.oldVersion,e.newVersion,E(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],R=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(R.get(t))return R.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!T.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return R.set(t,i),i}b((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(C(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function C(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const x="@firebase/app",P="0.9.0",N=new o.Vy("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",j="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",$="@firebase/database",V="@firebase/database-compat",W="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",q="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",Z="@firebase/performance-compat",X="@firebase/remote-config",Q="@firebase/remote-config-compat",Y="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.15.0",ie="[DEFAULT]",se={[x]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[j]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[$]:"fire-rtdb",[V]:"fire-rtdb-compat",[W]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[q]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[Z]:"fire-perf-compat",[X]:"fire-rc",[Q]:"fire-rc-compat",[Y]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new i.FA("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=oe;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!==typeof s||!s)throw he.create("bad-app-name",{appName:String(s)});if(n||(n=(0,i.T9)()),!n)throw he.create("no-options");const a=ae.get(s);if(a){if((0,i.bD)(n,a.options)&&(0,i.bD)(o,a.config))return a;throw he.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of ce.values())c.addComponent(r);const u=new pe(n,o,c);return ae.set(s,u),u}function ve(e=ie){const t=ae.get(e);if(!t&&e===ie)return ge();if(!t)throw he.create("no-app",{appName:e});return t}function ye(e,t,n){var o;let i=null!==(o=se[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}le(new r.uA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be="firebase-heartbeat-database",we=1,_e="firebase-heartbeat-store";let Ee=null;function Se(){return Ee||(Ee=I(be,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch((e=>{throw he.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Ie(e){try{const t=await Se();return t.transaction(_e).objectStore(_e).get(Oe(e))}catch(t){if(t instanceof i.g)N.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Te(e,t){try{const n=await Se(),r=n.transaction(_e,"readwrite"),o=r.objectStore(_e);return await o.put(t,Oe(e)),r.done}catch(n){if(n instanceof i.g)N.warn(n.message);else{const e=he.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=1024,ke=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ce();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=ke})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ce(),{heartbeatsToSend:t,unsentEntries:n}=xe(this._heartbeatsCache.heartbeats),r=(0,i.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ce(){const e=new Date;return e.toISOString().substring(0,10)}function xe(e,t=Re){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){le(new r.uA("platform-logger",(e=>new A(e)),"PRIVATE")),le(new r.uA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(x,P,e),ye(x,P,"esm2017"),ye("fire-js","")}De("")},852:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return o}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(4046);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){n.d(t,{$b:function(){return o},Vy:function(){return u}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},4373:function(e,t,n){n.d(t,{A:function(){return bn}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return Ue},hasStandardBrowserEnv:function(){return Be},hasStandardBrowserWebWorkerEnv:function(){return $e},navigator:function(){return Fe},origin:function(){return Ve}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(9848);function o(e,t){return function(){return e.apply(t,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:s}=Object,a=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=e=>(e=e.toLowerCase(),t=>a(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined");function d(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const h=c("ArrayBuffer");function p(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer),t}const m=u("string"),g=u("function"),v=u("number"),y=e=>null!==e&&"object"===typeof e,b=e=>!0===e||!1===e,w=e=>{if("object"!==a(e))return!1;const t=s(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_=c("Date"),E=c("File"),S=c("Blob"),I=c("FileList"),T=e=>y(e)&&g(e.pipe),O=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||g(e.append)&&("formdata"===(t=a(e))||"object"===t&&g(e.toString)&&"[object FormData]"===e.toString()))},R=c("URLSearchParams"),[k,A,C,x]=["ReadableStream","Request","Response","Headers"].map(c),P=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function N(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function D(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const L=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),M=e=>!f(e)&&e!==L;function j(){const{caseless:e}=M(this)&&this||{},t={},n=(n,r)=>{const o=e&&D(t,r)||r;w(t[o])&&w(n)?t[o]=j(t[o],n):w(n)?t[o]=j({},n):l(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&N(arguments[r],n);return t}const U=(e,t,n,{allOwnKeys:r}={})=>(N(t,((t,r)=>{n&&g(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),F=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),B=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$=(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),i=o.length;while(i-- >0)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},V=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},W=e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},H=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&s(Uint8Array)),z=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},q=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},K=c("HTMLFormElement"),G=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),J=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Z=c("RegExp"),X=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};N(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},Q=e=>{X(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Y=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},ee=()=>{},te=(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",re="0123456789",oe={DIGIT:re,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+re},ie=(e=16,t=oe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function se(e){return!!(e&&g(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ae=e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return N(e,((e,t)=>{const i=n(e,r+1);!f(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},ce=c("AsyncFunction"),ue=e=>e&&(y(e)||g(e))&&g(e.then)&&g(e.catch),le=((e,t)=>e?setImmediate:t?((e,t)=>(L.addEventListener("message",(({source:n,data:r})=>{n===L&&r===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),L.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))("function"===typeof setImmediate,g(L.postMessage)),fe="undefined"!==typeof queueMicrotask?queueMicrotask.bind(L):"undefined"!==typeof process&&process.nextTick||le;var de={isArray:l,isArrayBuffer:h,isBuffer:d,isFormData:O,isArrayBufferView:p,isString:m,isNumber:v,isBoolean:b,isObject:y,isPlainObject:w,isReadableStream:k,isRequest:A,isResponse:C,isHeaders:x,isUndefined:f,isDate:_,isFile:E,isBlob:S,isRegExp:Z,isFunction:g,isStream:T,isURLSearchParams:R,isTypedArray:H,isFileList:I,forEach:N,merge:j,extend:U,trim:P,stripBOM:F,inherits:B,toFlatObject:$,kindOf:a,kindOfTest:c,endsWith:V,toArray:W,forEachEntry:z,matchAll:q,isHTMLForm:K,hasOwnProperty:J,hasOwnProp:J,reduceDescriptors:X,freezeMethods:Q,toObjectSet:Y,toCamelCase:G,noop:ee,toFiniteNumber:te,findKey:D,global:L,isContextDefined:M,ALPHABET:oe,generateString:ie,isSpecCompliantForm:se,toJSONObject:ae,isAsyncFn:ce,isThenable:ue,setImmediate:le,asap:fe};function he(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}de.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:de.toJSONObject(this.config),code:this.code,status:this.status}}});const pe=he.prototype,me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{me[e]={value:e}})),Object.defineProperties(he,me),Object.defineProperty(pe,"isAxiosError",{value:!0}),he.from=(e,t,n,r,o,i)=>{const s=Object.create(pe);return de.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),he.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var ge=he,ve=null;function ye(e){return de.isPlainObject(e)||de.isArray(e)}function be(e){return de.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map((function(e,t){return e=be(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function _e(e){return de.isArray(e)&&!e.some(ye)}const Ee=de.toFlatObject(de,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Se(e,t,n){if(!de.isObject(e))throw new TypeError("target must be an object");t=t||new(ve||FormData),n=de.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!de.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&de.isSpecCompliantForm(t);if(!de.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(de.isDate(e))return e.toISOString();if(!c&&de.isBlob(e))throw new ge("Blob is not supported. Use a Buffer instead.");return de.isArrayBuffer(e)||de.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(de.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(de.isArray(e)&&_e(e)||(de.isFileList(e)||de.endsWith(n,"[]"))&&(a=de.toArray(e)))return n=be(n),a.forEach((function(e,r){!de.isUndefined(e)&&null!==e&&t.append(!0===s?we([n],r,i):null===s?n:n+"[]",u(e))})),!1;return!!ye(e)||(t.append(we(o,n,i),u(e)),!1)}const f=[],d=Object.assign(Ee,{defaultVisitor:l,convertValue:u,isVisitable:ye});function h(e,n){if(!de.isUndefined(e)){if(-1!==f.indexOf(e))throw Error("Circular reference detected in "+n.join("."));f.push(e),de.forEach(e,(function(e,r){const i=!(de.isUndefined(e)||null===e)&&o.call(t,e,de.isString(r)?r.trim():r,n,d);!0===i&&h(e,n?n.concat(r):[r])})),f.pop()}}if(!de.isObject(e))throw new TypeError("data must be an object");return h(e),t}var Ie=Se;function Te(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Oe(e,t){this._pairs=[],e&&Ie(e,this,t)}const Re=Oe.prototype;Re.append=function(e,t){this._pairs.push([e,t])},Re.toString=function(e){const t=e?function(t){return e.call(this,t,Te)}:Te;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ke=Oe;function Ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ce(e,t,n){if(!t)return e;const r=n&&n.encode||Ae,o=n&&n.serialize;let i;if(i=o?o(t,n):de.isURLSearchParams(t)?t.toString():new ke(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}class xe{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){de.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Pe=xe,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},De=(n(4603),n(7566),n(8721),"undefined"!==typeof URLSearchParams?URLSearchParams:ke),Le="undefined"!==typeof FormData?FormData:null,Me="undefined"!==typeof Blob?Blob:null,je={isBrowser:!0,classes:{URLSearchParams:De,FormData:Le,Blob:Me},protocols:["http","https","file","blob","url","data"]};const Ue="undefined"!==typeof window&&"undefined"!==typeof document,Fe="object"===typeof navigator&&navigator||void 0,Be=Ue&&(!Fe||["ReactNative","NativeScript","NS"].indexOf(Fe.product)<0),$e=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),Ve=Ue&&window.location.href||"http://localhost";var We={...r,...je};function He(e,t){return Ie(e,new We.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return We.isNode&&de.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function ze(e){return de.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function qe(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Ke(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&de.isArray(r)?r.length:i,a)return de.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s;r[i]&&de.isObject(r[i])||(r[i]=[]);const c=t(e,n,r[i],o);return c&&de.isArray(r[i])&&(r[i]=qe(r[i])),!s}if(de.isFormData(e)&&de.isFunction(e.entries)){const n={};return de.forEachEntry(e,((e,r)=>{t(ze(e),r,n,0)})),n}return null}var Ge=Ke;function Je(e,t,n){if(de.isString(e))try{return(t||JSON.parse)(e),de.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const Ze={transitional:Ne,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=de.isObject(e);o&&de.isHTMLForm(e)&&(e=new FormData(e));const i=de.isFormData(e);if(i)return r?JSON.stringify(Ge(e)):e;if(de.isArrayBuffer(e)||de.isBuffer(e)||de.isStream(e)||de.isFile(e)||de.isBlob(e)||de.isReadableStream(e))return e;if(de.isArrayBufferView(e))return e.buffer;if(de.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return He(e,this.formSerializer).toString();if((s=de.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ie(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),Je(e)):e}],transformResponse:[function(e){const t=this.transitional||Ze.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(de.isResponse(e)||de.isReadableStream(e))return e;if(e&&de.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,i=!n&&r;try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw ge.from(o,ge.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:We.classes.FormData,Blob:We.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};de.forEach(["delete","get","head","post","put","patch"],(e=>{Ze.headers[e]={}}));var Xe=Ze;const Qe=de.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ye=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Qe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const et=Symbol("internals");function tt(e){return e&&String(e).trim().toLowerCase()}function nt(e){return!1===e||null==e?e:de.isArray(e)?e.map(nt):String(e)}function rt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const ot=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function it(e,t,n,r,o){return de.isFunction(r)?r.call(this,t,n):(o&&(t=n),de.isString(t)?de.isString(r)?-1!==t.indexOf(r):de.isRegExp(r)?r.test(t):void 0:void 0)}function st(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function at(e,t){const n=de.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class ct{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=tt(t);if(!o)throw new Error("header name must be a non-empty string");const i=de.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=nt(e))}const i=(e,t)=>de.forEach(e,((e,n)=>o(e,n,t)));if(de.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(de.isString(e)&&(e=e.trim())&&!ot(e))i(Ye(e),t);else if(de.isHeaders(e))for(const[s,a]of e.entries())o(a,s,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=tt(e),e){const n=de.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return rt(e);if(de.isFunction(t))return t.call(this,e,n);if(de.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=tt(e),e){const n=de.findKey(this,e);return!(!n||void 0===this[n]||t&&!it(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=tt(e),e){const o=de.findKey(n,e);!o||t&&!it(n,n[o],o,t)||(delete n[o],r=!0)}}return de.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const o=t[n];e&&!it(this,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return de.forEach(this,((r,o)=>{const i=de.findKey(n,o);if(i)return t[i]=nt(r),void delete t[o];const s=e?st(o):String(o).trim();s!==o&&delete t[o],t[s]=nt(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return de.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&de.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[et]=this[et]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=tt(e);n[t]||(at(r,e),n[t]=!0)}return de.isArray(e)?e.forEach(o):o(e),this}}ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),de.reduceDescriptors(ct.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),de.freezeMethods(ct);var ut=ct;function lt(e,t){const n=this||Xe,r=t||n,o=ut.from(r.headers);let i=r.data;return de.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function ft(e){return!(!e||!e.__CANCEL__)}function dt(e,t,n){ge.call(this,null==e?"canceled":e,ge.ERR_CANCELED,t,n),this.name="CanceledError"}de.inherits(dt,ge,{__CANCEL__:!0});var ht=dt;function pt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ge("Request failed with status code "+n.status,[ge.ERR_BAD_REQUEST,ge.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}function mt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function gt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;while(l!==i)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var vt=gt;function yt(e,t){let n,r,o=0,i=1e3/t;const s=(t,i=Date.now())=>{o=i,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)},a=(...e)=>{const t=Date.now(),a=t-o;a>=i?s(e,t):(n=e,r||(r=setTimeout((()=>{r=null,s(n)}),i-a)))},c=()=>n&&s(n);return[a,c]}var bt=yt;const wt=(e,t,n=3)=>{let r=0;const o=vt(50,250);return bt((n=>{const i=n.loaded,s=n.lengthComputable?n.total:void 0,a=i-r,c=o(a),u=i<=s;r=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-i)/c:void 0,event:n,lengthComputable:null!=s,[t?"download":"upload"]:!0};e(l)}),n)},_t=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Et=e=>(...t)=>de.asap((()=>e(...t)));n(4979);var St=We.hasStandardBrowserEnv?function(){const e=We.navigator&&/(msie|trident)/i.test(We.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=de.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}(),It=We.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];de.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),de.isString(r)&&s.push("path="+r),de.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Tt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ot(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Rt(e,t){return e&&!Tt(t)?Ot(e,t):t}const kt=e=>e instanceof ut?{...e}:e;function At(e,t){t=t||{};const n={};function r(e,t,n){return de.isPlainObject(e)&&de.isPlainObject(t)?de.merge.call({caseless:n},e,t):de.isPlainObject(t)?de.merge({},t):de.isArray(t)?t.slice():t}function o(e,t,n){return de.isUndefined(t)?de.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!de.isUndefined(t))return r(void 0,t)}function s(e,t){return de.isUndefined(t)?de.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(kt(e),kt(t),!0)};return de.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);de.isUndefined(s)&&i!==a||(n[r]=s)})),n}var Ct=e=>{const t=At({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:c}=t;if(t.headers=a=ut.from(a),t.url=Ce(Rt(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),de.isFormData(r))if(We.hasStandardBrowserEnv||We.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(We.hasStandardBrowserEnv&&(o&&de.isFunction(o)&&(o=o(t)),o||!1!==o&&St(t.url))){const e=i&&s&&It.read(s);e&&a.set(i,e)}return t};const xt="undefined"!==typeof XMLHttpRequest;var Pt=xt&&function(e){return new Promise((function(t,n){const r=Ct(e);let o=r.data;const i=ut.from(r.headers).normalize();let s,a,c,u,l,{responseType:f,onUploadProgress:d,onDownloadProgress:h}=r;function p(){u&&u(),l&&l(),r.cancelToken&&r.cancelToken.unsubscribe(s),r.signal&&r.signal.removeEventListener("abort",s)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=ut.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),o=f&&"text"!==f&&"json"!==f?m.response:m.responseText,i={data:o,status:m.status,statusText:m.statusText,headers:r,config:e,request:m};pt((function(e){t(e),p()}),(function(e){n(e),p()}),i),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new ge("Request aborted",ge.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new ge("Network Error",ge.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||Ne;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new ge(t,o.clarifyTimeoutError?ge.ETIMEDOUT:ge.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&de.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),de.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),f&&"json"!==f&&(m.responseType=r.responseType),h&&([c,l]=wt(h,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,u]=wt(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(s=t=>{m&&(n(!t||t.type?new ht(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(s),r.signal&&(r.signal.aborted?s():r.signal.addEventListener("abort",s)));const v=mt(r.url);v&&-1===We.protocols.indexOf(v)?n(new ge("Unsupported protocol "+v+":",ge.ERR_BAD_REQUEST,e)):m.send(o||null)}))};const Nt=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,s();const t=e instanceof Error?e:this.reason;r.abort(t instanceof ge?t:new ht(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new ge(`timeout ${t} of ms exceeded`,ge.ETIMEDOUT))}),t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=()=>de.asap(s),a}};var Dt=Nt;const Lt=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;while(o<n)r=o+t,yield e.slice(o,r),o=r},Mt=async function*(e,t){for await(const n of jt(e))yield*Lt(n,t)},jt=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Ut=(e,t,n,r)=>{const o=Mt(e,t);let i,s=0,a=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return a(),void e.close();let i=r.byteLength;if(n){let e=s+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel(e){return a(e),o.return()}},{highWaterMark:2})},Ft="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Bt=Ft&&"function"===typeof ReadableStream,$t=Ft&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Vt=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},Wt=Bt&&Vt((()=>{let e=!1;const t=new Request(We.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Ht=65536,zt=Bt&&Vt((()=>de.isReadableStream(new Response("").body))),qt={stream:zt&&(e=>e.body)};Ft&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach((t=>{!qt[t]&&(qt[t]=de.isFunction(e[t])?e=>e[t]():(e,n)=>{throw new ge(`Response type '${t}' is not supported`,ge.ERR_NOT_SUPPORT,n)})}))})(new Response);const Kt=async e=>{if(null==e)return 0;if(de.isBlob(e))return e.size;if(de.isSpecCompliantForm(e)){const t=new Request(We.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return de.isArrayBufferView(e)||de.isArrayBuffer(e)?e.byteLength:(de.isURLSearchParams(e)&&(e+=""),de.isString(e)?(await $t(e)).byteLength:void 0)},Gt=async(e,t)=>{const n=de.toFiniteNumber(e.getContentLength());return null==n?Kt(t):n};var Jt=Ft&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:d}=Ct(e);u=u?(u+"").toLowerCase():"text";let h,p=Dt([o,i&&i.toAbortSignal()],s);const m=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let g;try{if(c&&Wt&&"get"!==n&&"head"!==n&&0!==(g=await Gt(l,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(de.isFormData(r)&&(e=n.headers.get("content-type"))&&l.setContentType(e),n.body){const[e,t]=_t(g,wt(Et(c)));r=Ut(n.body,Ht,e,t)}}de.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;h=new Request(t,{...d,signal:p,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:o?f:void 0});let i=await fetch(h);const s=zt&&("stream"===u||"response"===u);if(zt&&(a||s&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=de.toFiniteNumber(i.headers.get("content-length")),[n,r]=a&&_t(t,wt(Et(a),!0))||[];i=new Response(Ut(i.body,Ht,n,(()=>{r&&r(),m&&m()})),e)}u=u||"text";let v=await qt[de.findKey(qt,u)||"text"](i,e);return!s&&m&&m(),await new Promise(((t,n)=>{pt(t,n,{data:v,headers:ut.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:h})}))}catch(v){if(m&&m(),v&&"TypeError"===v.name&&/fetch/i.test(v.message))throw Object.assign(new ge("Network Error",ge.ERR_NETWORK,e,h),{cause:v.cause||v});throw ge.from(v,v&&v.code,e,h)}});const Zt={http:ve,xhr:Pt,fetch:Jt};de.forEach(Zt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Xt=e=>`- ${e}`,Qt=e=>de.isFunction(e)||null===e||!1===e;var Yt={getAdapter:e=>{e=de.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!Qt(n)&&(r=Zt[(t=String(n)).toLowerCase()],void 0===r))throw new ge(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Xt).join("\n"):" "+Xt(e[0]):"as no adapter specified";throw new ge("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:Zt};function en(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ht(null,e)}function tn(e){en(e),e.headers=ut.from(e.headers),e.data=lt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=Yt.getAdapter(e.adapter||Xe.adapter);return t(e).then((function(t){return en(e),t.data=lt.call(e,e.transformResponse,t),t.headers=ut.from(t.headers),t}),(function(t){return ft(t)||(en(e),t&&t.response&&(t.response.data=lt.call(e,e.transformResponse,t.response),t.response.headers=ut.from(t.response.headers))),Promise.reject(t)}))}const nn="1.7.7",rn={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{rn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const on={};function sn(e,t,n){if("object"!==typeof e)throw new ge("options must be an object",ge.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new ge("option "+i+" must be "+n,ge.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ge("Unknown option "+i,ge.ERR_BAD_OPTION)}}rn.transitional=function(e,t,n){function r(e,t){return"[Axios v"+nn+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new ge(r(o," has been removed"+(t?" in "+t:"")),ge.ERR_DEPRECATED);return t&&!on[o]&&(on[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var an={assertOptions:sn,validators:rn};const cn=an.validators;class un{constructor(e){this.defaults=e,this.interceptors={request:new Pe,response:new Pe}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=At(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&an.assertOptions(n,{silentJSONParsing:cn.transitional(cn.boolean),forcedJSONParsing:cn.transitional(cn.boolean),clarifyTimeoutError:cn.transitional(cn.boolean)},!1),null!=r&&(de.isFunction(r)?t.paramsSerializer={serialize:r}:an.assertOptions(r,{encode:cn.function,serialize:cn.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&de.merge(o.common,o[t.method]);o&&de.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ut.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[tn.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(f<l)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;f=0;while(f<l){const e=s[f++],t=s[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{u=tn.call(this,d)}catch(h){return Promise.reject(h)}f=0,l=c.length;while(f<l)u=u.then(c[f++],c[f++]);return u}getUri(e){e=At(this.defaults,e);const t=Rt(e.baseURL,e.url);return Ce(t,e.params,e.paramsSerializer)}}de.forEach(["delete","get","head","options"],(function(e){un.prototype[e]=function(t,n){return this.request(At(n||{},{method:e,url:t,data:(n||{}).data}))}})),de.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(At(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}un.prototype[e]=t(),un.prototype[e+"Form"]=t(!0)}));var ln=un;class fn{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ht(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new fn((function(t){e=t}));return{token:t,cancel:e}}}var dn=fn;function hn(e){return function(t){return e.apply(null,t)}}function pn(e){return de.isObject(e)&&!0===e.isAxiosError}const mn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(mn).forEach((([e,t])=>{mn[t]=e}));var gn=mn;function vn(e){const t=new ln(e),n=o(ln.prototype.request,t);return de.extend(n,ln.prototype,t,{allOwnKeys:!0}),de.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return vn(At(e,t))},n}const yn=vn(Xe);yn.Axios=ln,yn.CanceledError=ht,yn.CancelToken=dn,yn.isCancel=ft,yn.VERSION=nn,yn.toFormData=Ie,yn.AxiosError=ge,yn.Cancel=yn.CanceledError,yn.all=function(e){return Promise.all(e)},yn.spread=hn,yn.isAxiosError=pn,yn.mergeConfig=At,yn.AxiosHeaders=ut,yn.formToJSON=e=>Ge(de.isHTMLForm(e)?new FormData(e):e),yn.getAdapter=Yt.getAdapter,yn.HttpStatusCode=gn,yn.default=yn;var bn=yn},6400:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),o="firebase",i="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(o,i,"app")},5955:function(e,t,n){n.d(t,{xI:function(){return Ir},Pj:function(){return gt},hg:function(){return wt},MN:function(){return mt},hK:function(){return vt},CI:function(){return _t}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(4603),n(7566),n(8721);var r=n(4046),o=n(3405),i=n(1363);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.FA("auth","Firebase",c()),f=new i.Vy("@firebase/auth");function d(e,...t){f.logLevel<=i.$b.ERROR&&f.error(`Auth (${o.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const o=Object.assign(Object.assign({},u()),{[t]:n}),i=new r.FA("auth","Firebase",o);return i.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,o.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if((0,r.bD)(o,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const i=n.initialize({options:t});return i}function S(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,o,i={}){return M(e,i,(async()=>{let i={},s={};o&&("GET"===t?s=o:i={body:JSON.stringify(o)});const a=(0,r.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),x.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function M(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},P),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw B(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw B(e,"user-disabled",i);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);h(e,a)}}catch(i){if(i instanceof r.g)throw i;h(e,"network-request-failed")}}async function j(e,t,n,r,o={}){const i=await L(e,t,n,r,o);return"mfaPendingCredential"in i&&h(e,"multi-factor-auth-required",{_serverResponse:i}),i}function U(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?C(e.config,o):`${e.config.apiScheme}://${o}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=p(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.Ku)(e),o=await n.getIdToken(t),i=q(o);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:o,authTime:W(z(i.auth_time)),issuedAtTime:W(z(i.iat)),expirationTime:W(z(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function q(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.u)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function K(e){const t=q(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r.g&&J(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),o=await G(e,V(n,{idToken:r}));v(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new X(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function Y(e){const t=(0,r.Ku)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=U(e,o,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(v("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new X(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return Y(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:S}=t;v(b&&S,e,"internal-error");const I=re.fromJSON(this.name,S);v("string"===typeof b,e,"internal-error"),oe(l,e.name),oe(f,e.name),v("boolean"===typeof w,e,"internal-error"),v("boolean"===typeof _,e,"internal-error"),oe(d,e.name),oe(h,e.name),oe(p,e.name),oe(m,e.name),oe(g,e.name),oe(y,e.name);const T=new ie({uid:b,auth:e,email:f,emailVerified:w,displayName:l,isAnonymous:_,photoURL:h,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const o=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(o),o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,o),this.fullPersistenceKey=ce("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||_(ae);const i=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ie._fromJSON(e,t);u!==o&&(s=n),o=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(c){}}))),new ue(o,e,n)):new ue(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fe(e=(0,r.ZQ)()){return/firefox\//i.test(e)}function de(e=(0,r.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=(0,r.ZQ)()){return/crios\//i.test(e)}function pe(e=(0,r.ZQ)()){return/iemobile/i.test(e)}function me(e=(0,r.ZQ)()){return/android/i.test(e)}function ge(e=(0,r.ZQ)()){return/blackberry/i.test(e)}function ve(e=(0,r.ZQ)()){return/webos/i.test(e)}function ye(e=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.ZQ)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.lT)()&&10===document.documentMode}function _e(e=(0,r.ZQ)()){return ye(e)||me(e)||ve(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.ZQ)());break;case"Worker":n=`${le((0,r.ZQ)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.MF}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Re(this),this.idTokenSubscription=new Re(this),this.beforeStateQueue=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==i||!(null===s||void 0===s?void 0:s.user)||(r=s.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.Ku)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return v(i,this,"internal-error"),i.then((()=>o(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Oe(e){return(0,r.Ku)(e)}class Re{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.tD)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ke(e,t,n){const r=Oe(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ae(t),{host:s,port:a}=Ce(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Pe()}function Ae(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ce(e){const t=Ae(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:xe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:xe(t)}}}function xe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Pe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}async function Me(e,t){return L(e,"POST","/v1/accounts:sendOobCode",D(e,t))}async function je(e,t){return Me(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ue(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function Fe(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Ne{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Be(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Be(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Le(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ue(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return De(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="http://localhost";class We extends Ne{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new We(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new We(n,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return $e(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$e(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$e(e,t)}buildRequest(){const e={requestUri:Ve,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function ze(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function qe(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const Ke={["USER_NOT_FOUND"]:"user-not-found"};async function Ge(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),Ke)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ne{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Je({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Je({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ze(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ge(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new Je({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xe(e){const t=(0,r.I9)((0,r.hp)(e))["link"],n=t?(0,r.I9)((0,r.hp)(t))["deep_link_id"]:null,o=(0,r.I9)((0,r.hp)(e))["deep_link_id"],i=o?(0,r.I9)((0,r.hp)(o))["link"]:null;return i||o||n||t||e}class Qe{constructor(e){var t,n,o,i,s,a;const c=(0,r.I9)((0,r.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,f=Ze(null!==(o=c["mode"])&&void 0!==o?o:null);v(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Xe(e);try{return new Qe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,t){return Be._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qe.parseLink(t);return v(n,"argument-error"),Be._fromEmailAndCode(e,n.code,n.tenantId)}}Ye.PROVIDER_ID="password",Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends tt{constructor(){super("facebook.com")}static credential(e){return We._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com",nt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends tt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return We._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com",rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends tt{constructor(){super("github.com")}static credential(e){return We._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch(t){return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com",ot.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends tt{constructor(){super("twitter.com")}static credential(e,t){return We._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return it.credential(t,n)}catch(r){return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com",it.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ie._fromIdTokenResponse(e,n,r),i=at(n),s=new st({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=at(n);return new st({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function at(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct extends r.g{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ct.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ct(e,t,n,r)}}function ut(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ct._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return st._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ft(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await G(e,ut(r,o,t,e),n);v(i.idToken,r,"internal-error");const s=q(i.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),st._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&h(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t,n=!1){const r="signIn",o=await ut(e,r,t),i=await st._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function ht(e,t){return dt(Oe(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pt(e,t,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),v("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mt(e,t,n){const o=(0,r.Ku)(e),i={requestType:"EMAIL_SIGNIN",email:t};v(n.handleCodeInApp,o,"argument-error"),n&&pt(o,i,n),await je(o,i)}function gt(e,t){const n=Qe.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function vt(e,t,n){const o=(0,r.Ku)(e),i=Ye.credentialWithLink(t,n||I());return v(i._tenantId===(o.tenantId||null),o,"tenant-id-mismatch"),ht(o,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,t,n,o){return(0,r.Ku)(e).onIdTokenChanged(t,n,o)}function bt(e,t,n){return(0,r.Ku)(e).beforeAuthStateChanged(t,n)}function wt(e,t,n,o){return(0,r.Ku)(e).onAuthStateChanged(t,n,o)}function _t(e){return(0,r.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function St(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const It="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(It,"1"),this.storage.removeItem(It),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){const e=(0,r.ZQ)();return de(e)||ye(e)}const Rt=1e3,kt=10;class At extends Tt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ot()&&Ee(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);we()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Rt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}At.type="LOCAL";const Ct=At;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Tt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xt.type="SESSION";const Pt=xt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Dt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map((async e=>e(t.origin,o))),a=await Nt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.receivers=[];class Mt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((s,a)=>{const c=Lt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function Ut(e){jt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return"undefined"!==typeof jt()["WorkerGlobalScope"]&&"function"===typeof jt()["importScripts"]}async function Bt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function $t(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Vt(){return Ft()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="firebaseLocalStorageDb",Ht=1,zt="firebaseLocalStorage",qt="fbase_key";class Kt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Gt(e,t){return e.transaction([zt],t?"readwrite":"readonly").objectStore(zt)}function Jt(){const e=indexedDB.deleteDatabase(Wt);return new Kt(e).toPromise()}function Zt(){const e=indexedDB.open(Wt,Ht);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(zt,{keyPath:qt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(zt)?t(n):(n.close(),await Jt(),t(await Zt()))}))}))}async function Xt(e,t,n){const r=Gt(e,!0).put({[qt]:t,value:n});return new Kt(r).toPromise()}async function Qt(e,t){const n=Gt(e,!1).get(t),r=await new Kt(n).toPromise();return void 0===r?null:r.value}function Yt(e,t){const n=Gt(e,!0).delete(t);return new Kt(n).toPromise()}const en=800,tn=3;class nn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Zt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ft()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dt._getInstance(Vt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bt(),!this.activeServiceWorker)return;this.sender=new Mt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&$t()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zt();return await Xt(e,It,"1"),await Yt(e,It),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Qt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Yt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gt(e,!1).getAll();return new Kt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),en)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nn.type="LOCAL";const rn=nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function sn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function cn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",an().appendChild(r)}))}function un(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
un("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="recaptcha";async function fn(e,t,n){var r;const o=await n.verify();try{let i;if(v("string"===typeof o,e,"argument-error"),v(n.type===ln,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){v("enroll"===t.type,e,"internal-error");const n=await Et(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await on(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await He(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{constructor(e){this.providerId=dn.PROVIDER_ID,this.auth=Oe(e)}verifyPhoneNumber(e,t){return fn(this.auth,e,(0,r.Ku)(t))}static credential(e,t){return Je._fromVerification(e,t)}static credentialFromResult(e){const t=e;return dn.credentialFromTaggedObject(t)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Je._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(e,t){return t?_(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.PROVIDER_ID="phone",dn.PHONE_SIGN_IN_METHOD="phone";class pn extends Ne{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $e(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mn(e){return dt(e.auth,new pn(e),e.bypassAuthState)}function gn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ft(n,new pn(e),e.bypassAuthState)}async function vn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),lt(n,new pn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mn;case"linkViaPopup":case"linkViaRedirect":return vn;case"reauthViaPopup":case"reauthViaRedirect":return gn;default:h(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new A(2e3,1e4);class wn extends yn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Lt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,bn.get())};e()}}wn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n="pendingRedirect",En=new Map;class Sn extends yn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=En.get(this.auth._key());if(!e){try{const t=await In(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}En.set(this.auth._key(),e)}return this.bypassAuthState||En.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function In(e,t){const n=Rn(t),r=On(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function Tn(e,t){En.set(e._key(),t)}function On(e){return _(e._redirectPersistence)}function Rn(e){return ce(_n,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t,n=!1){const r=Oe(e),o=hn(r,t),i=new Sn(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const An=6e5;class Cn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Nn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Pn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=An&&this.cachedEventUids.clear(),this.cachedEventUids.has(xn(e))}saveEventToCache(e){this.cachedEventUids.add(xn(e)),this.lastProcessedEventTime=Date.now()}}function xn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Pn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Nn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mn=/^https?/;async function jn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Dn(e);for(const r of t)try{if(Un(r))return}catch(n){}h(e,"unauthorized-domain")}function Un(e){const t=I(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!Mn.test(n))return!1;if(Ln.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new A(3e4,6e4);function Bn(){const e=jt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function $n(e){return new Promise(((t,n)=>{var r,o,i;function s(){Bn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bn(),n(p(e,"network-request-failed"))},timeout:Fn.get()})}if(null===(o=null===(r=jt().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=jt().gapi)||void 0===i?void 0:i.load)){const t=un("iframefcb");return jt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},cn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Vn=null,e}))}let Vn=null;function Wn(e){return Vn=Vn||$n(e),Vn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new A(5e3,15e3),zn="__/auth/iframe",qn="emulator/auth/iframe",Kn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,qn):`https://${e.config.authDomain}/${zn}`,i={apiKey:t.apiKey,appName:e.name,v:o.MF},s=Gn.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.Am)(i).slice(1)}`}async function Zn(e){const t=await Wn(e),n=jt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Jn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=p(e,"network-request-failed"),i=jt().setTimeout((()=>{r(o)}),Hn.get());function s(){jt().clearTimeout(i),n(t)}t.ping(s).then(s,(()=>{r(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qn=500,Yn=600,er="_blank",tr="http://localhost";class nr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function rr(e,t,n,o=Qn,i=Yn){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Xn),{width:o.toString(),height:i.toString(),top:s,left:a}),l=(0,r.ZQ)().toLowerCase();n&&(c=he(l)?er:n),fe(l)&&(t=t||tr,u.scrollbars="yes");const f=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(l)&&"_self"!==c)return or(t||"",c),new nr(null);const d=window.open(t||"",c,f);v(d,e,"popup-blocked");try{d.focus()}catch(h){}return new nr(d)}function or(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="__/auth/handler",sr="emulator/auth/handler";function ar(e,t,n,i,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o.MF,eventId:s};if(t instanceof et){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof tt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${cr(e)}?${(0,r.Am)(u).slice(1)}`}function cr({config:e}){return e.emulator?C(e,sr):`https://${e.authDomain}/${ir}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="webStorageSupport";class lr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pt,this._completeRedirectFn=kn,this._overrideRedirectResult=Tn}async _openPopup(e,t,n,r){var o;b(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=ar(e,t,n,I(),r);return rr(e,i,Lt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ut(ar(e,t,n,I(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Zn(e),n=new Cn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ur,{type:ur},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ur];void 0!==o&&t(!!o),h(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||de()||ye()}}const fr=lr;class dr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class hr extends dr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new hr(e)}_finalizeEnroll(e,t,n){return St(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return sn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class pr{constructor(){}static assertion(e){return hr._fromCredential(e)}}pr.FACTOR_ID="phone";var mr="@firebase/auth",gr="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function br(e){(0,o.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=r.options;return((t,r)=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const o={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},a=new Te(t,r,o);return S(a,n),a})(r,o)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o.om)(new a.uA("auth-internal",(e=>{const t=Oe(e.getProvider("auth").getImmediate());return(e=>new vr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KO)(mr,gr,yr(e)),(0,o.KO)(mr,gr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=300,_r=(0,r.XA)("authIdTokenMaxAge")||wr;let Er=null;const Sr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_r)return;const o=null===n||void 0===n?void 0:n.token;Er!==o&&(Er=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ir(e=(0,o.Sx)()){const t=(0,o.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=E(e,{popupRedirectResolver:fr,persistence:[rn,Ct,Pt]}),i=(0,r.XA)("authTokenSyncURL");if(i){const e=Sr(i);bt(n,e,(()=>e(n.currentUser))),yt(n,(t=>e(t)))}const s=(0,r.Tj)("auth");return s&&ke(n,`http://${s}`),n}br("Browser")},1387:function(e,t,n){n.d(t,{LA:function(){return ce},aE:function(){return rt}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),o=n(144);
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof document;function s(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&s(e.default)}const c=Object.assign;function u(e,t){const n={};for(const r in t){const o=t[r];n[r]=f(o)?o.map(e):e(o)}return n}const l=()=>{},f=Array.isArray;const d=/#/g,h=/&/g,p=/\//g,m=/=/g,g=/\?/g,v=/\+/g,y=/%5B/g,b=/%5D/g,w=/%5E/g,_=/%60/g,E=/%7B/g,S=/%7C/g,I=/%7D/g,T=/%20/g;function O(e){return encodeURI(""+e).replace(S,"|").replace(y,"[").replace(b,"]")}function R(e){return O(e).replace(E,"{").replace(I,"}").replace(w,"^")}function k(e){return O(e).replace(v,"%2B").replace(T,"+").replace(d,"%23").replace(h,"%26").replace(_,"`").replace(E,"{").replace(I,"}").replace(w,"^")}function A(e){return k(e).replace(m,"%3D")}function C(e){return O(e).replace(d,"%23").replace(g,"%3F")}function x(e){return null==e?"":C(e).replace(p,"%2F")}function P(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const N=/\/$/,D=e=>e.replace(N,"");function L(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),o=e(i)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=W(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:P(s)}}function M(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function j(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function U(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&F(t.matched[r],n.matched[o])&&B(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function F(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function B(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!$(e[n],t[n]))return!1;return!0}function $(e,t){return f(e)?V(e,t):f(t)?V(t,e):e===t}function V(e,t){return f(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function W(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let i,s,a=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(i).join("/")}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var z,q;(function(e){e["pop"]="pop",e["push"]="push"})(z||(z={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(q||(q={}));function K(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),D(e)}const G=/^[^#]+#/;function J(e,t){return e.replace(G,"#")+t}function Z(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function Q(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Z(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Y(e,t){const n=history.state?history.state.position-t:-1;return n+e}const ee=new Map;function te(e,t){ee.set(e,t)}function ne(e){const t=ee.get(e);return ee.delete(e),t}let re=()=>location.protocol+"//"+location.host;function oe(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),j(n,"")}const s=j(n,e);return s+r+o}function ie(e,t,n,r){let o=[],i=[],s=null;const a=({state:i})=>{const a=oe(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach((e=>{e(n.value,c,{delta:l,type:z.pop,direction:l?l>0?q.forward:q.back:q.unknown})}))};function u(){s=n.value}function l(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function f(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:X()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function se(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?X():null}}function ae(e){const{history:t,location:n}=window,r={value:oe(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:re()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=c({},t.state,se(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function a(e,n){const s=c({},o.value,t.state,{forward:e,scroll:X()});i(s.current,s,!0);const a=c({},se(r.value,e,null),{position:s.position+1},n);i(e,a,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:a,replace:s}}function ce(e){e=K(e);const t=ae(e),n=ie(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=c({location:"",base:e,go:r,createHref:J.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function ue(e){return"string"===typeof e||e&&"object"===typeof e}function le(e){return"string"===typeof e||"symbol"===typeof e}const fe=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function he(e,t){return c(new Error,{type:e,[fe]:!0},t)}function pe(e,t){return e instanceof Error&&fe in e&&(null==t||!!(e.type&t))}const me="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},ve=/[.+*?^${}()[\]/\\]/g;function ye(e,t){const n=c({},ge,t),r=[];let o=n.start?"^":"";const i=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let t=0;t<c.length;t++){const r=c[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ve,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:u}=r;i.push({name:e,repeatable:n,optional:a});const f=u||me;if(f!==me){s+=10;try{new RegExp(`(${f})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+l.message)}}let d=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(d=a&&c.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),o+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:s,optional:a}=e,c=i in t?t[i]:"";if(f(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=f(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:i,parse:a,stringify:u}}function be(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function we(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=be(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(_e(r))return 1;if(_e(o))return-1}return o.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ee={type:0,value:""},Se=/[a-zA-Z0-9_]/;function Ie(e){if(!e)return[[]];if("/"===e)return[[Ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function f(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&f(),s()):":"===a?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Se.test(a)?d():(f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),f(),s(),o}function Te(e,t,n){const r=ye(Ie(e.path),n);const o=c(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function Oe(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,a=ke(e);a.aliasOf=r&&r.record;const f=Pe(t,e),d=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(ke(c({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a})))}let h,p;for(const t of d){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(h=Te(t,n,f),r?r.alias.push(h):(p=p||h,p!==h&&p.alias.push(h),o&&e.name&&!Ce(h)&&s(e.name)),Le(h)&&u(h),a.children){const e=a.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h}return p?()=>{s(p)}:l}function s(e){if(le(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function u(e){const t=Ne(e,n);n.splice(t,0,e),e.record.name&&!Ce(e)&&r.set(e.record.name,e)}function f(e,t){let o,i,s,a={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw he(1,{location:e});0,s=o.record.name,a=c(Re(t.params,o.keys.filter((e=>!e.optional)).concat(o.parent?o.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Re(e.params,o.keys.map((e=>e.name)))),i=o.stringify(a)}else if(null!=e.path)i=e.path,o=n.find((e=>e.re.test(i))),o&&(a=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw he(1,{location:e,currentLocation:t});s=o.record.name,a=c({},t.params,e.params),i=o.stringify(a)}const u=[];let l=o;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:i,params:a,matched:u,meta:xe(u)}}function d(){n.length=0,r.clear()}return t=Pe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:f,removeRoute:s,clearRoutes:d,getRoutes:a,getRecordMatcher:o}}function Re(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ke(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xe(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function Pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ne(e,t){let n=0,r=t.length;while(n!==r){const o=n+r>>1,i=we(e,t[o]);i<0?r=o:n=o+1}const o=De(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function De(e){let t=e;while(t=t.parent)if(Le(t)&&0===we(e,t))return t}function Le({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(v," "),n=e.indexOf("="),i=P(n<0?e:e.slice(0,n)),s=n<0?null:P(e.slice(n+1));if(i in t){let e=t[i];f(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function je(e){let t="";for(let n in e){const r=e[n];if(n=A(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=f(r)?r.map((e=>e&&k(e))):[r&&k(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=f(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Be=Symbol(""),$e=Symbol(""),Ve=Symbol(""),We=Symbol("");function He(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ze(e,t,n,r,o,i=e=>e()){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((a,c)=>{const u=e=>{!1===e?c(he(4,{from:n,to:t})):e instanceof Error?c(e):ue(e)?c(he(2,{from:t,to:e})):(s&&r.enterCallbacks[o]===s&&"function"===typeof e&&s.push(e),a())},l=i((()=>e.call(r&&r.instances[o],t,n,u)));let f=Promise.resolve(l);e.length<3&&(f=f.then(u)),f.catch((e=>c(e)))}))}function qe(e,t,n,r,o=e=>e()){const i=[];for(const c of e){0;for(const e in c.components){let u=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(s(u)){const s=u.__vccOpts||u,a=s[t];a&&i.push(ze(a,n,r,c,e,o))}else{let s=u();0,i.push((()=>s.then((i=>{if(!i)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const s=a(i)?i.default:i;c.mods[e]=i,c.components[e]=s;const u=s.__vccOpts||s,l=u[t];return l&&ze(l,n,r,c,e,o)()}))))}}}return i}function Ke(e){const t=(0,r.WQ)($e),n=(0,r.WQ)(Ve);const i=(0,r.EW)((()=>{const n=(0,o.R1)(e.to);return t.resolve(n)})),s=(0,r.EW)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(F.bind(null,r));if(s>-1)return s;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&o[o.length-1].path!==a?o.findIndex(F.bind(null,e[t-2])):s})),a=(0,r.EW)((()=>s.value>-1&&Xe(n.params,i.value.params))),c=(0,r.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&B(n.params,i.value.params)));function u(n={}){return Ze(n)?t[(0,o.R1)(e.replace)?"replace":"push"]((0,o.R1)(e.to)).catch(l):Promise.resolve()}return{route:i,href:(0,r.EW)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:u}}const Ge=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,o.Kh)(Ke(e)),{options:i}=(0,r.WQ)($e),s=(0,r.EW)((()=>({[Ye(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Je=Ge;function Ze(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!f(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,et=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.WQ)(We),s=(0,r.EW)((()=>e.route||i.value)),a=(0,r.WQ)(Be,0),u=(0,r.EW)((()=>{let e=(0,o.R1)(a);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.EW)((()=>s.value.matched[u.value]));(0,r.Gt)(Be,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Fe,l),(0,r.Gt)(We,s);const f=(0,o.KR)();return(0,r.wB)((()=>[f.value,l.value,e.name]),(([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&F(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=s.value,i=e.name,a=l.value,u=a&&a.components[i];if(!u)return tt(n.default,{Component:u,route:o});const d=a.props[i],h=d?!0===d?o.params:"function"===typeof d?d(o):d:null,p=e=>{e.component.isUnmounted&&(a.instances[i]=null)},m=(0,r.h)(u,c({},h,t,{onVnodeUnmounted:p,ref:f}));return tt(n.default,{Component:m,route:o})||m}}});function tt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const nt=et;function rt(e){const t=Oe(e.routes,e),n=e.parseQuery||Me,s=e.stringifyQuery||je,a=e.history;const d=He(),h=He(),p=He(),m=(0,o.IJ)(H);let g=H;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=u.bind(null,(e=>""+e)),y=u.bind(null,x),b=u.bind(null,P);function w(e,n){let r,o;return le(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function _(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function S(e){return!!t.getRecordMatcher(e)}function I(e,r){if(r=c({},r||m.value),"string"===typeof e){const o=L(n,e,r.path),i=t.resolve({path:o.path},r),s=a.createHref(o.fullPath);return c(o,i,{params:b(i.params),hash:P(o.hash),redirectedFrom:void 0,href:s})}let o;if(null!=e.path)o=c({},e,{path:L(n,e.path,r.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];o=c({},e,{params:y(t)}),r.params=y(r.params)}const i=t.resolve(o,r),u=e.hash||"";i.params=v(b(i.params));const l=M(s,c({},e,{hash:R(u),path:i.path})),f=a.createHref(l);return c({fullPath:l,hash:u,query:s===je?Ue(e.query):e.query||{}},i,{redirectedFrom:void 0,href:f})}function T(e){return"string"===typeof e?L(n,e,m.value.path):c({},e)}function O(e,t){if(g!==e)return he(8,{from:t,to:e})}function k(e){return N(e)}function A(e){return k(c(T(e),{replace:!0}))}function C(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=T(r):{path:r},r.params={}),c({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function N(e,t){const n=g=I(e),r=m.value,o=e.state,i=e.force,a=!0===e.replace,u=C(n);if(u)return N(c(T(u),{state:"object"===typeof u?c({},o,u.state):o,force:i,replace:a}),t||n);const l=n;let f;return l.redirectedFrom=t,!i&&U(s,r,n)&&(f=he(16,{to:l,from:r}),re(r,r,!0,!1)),(f?Promise.resolve(f):F(l,r)).catch((e=>pe(e)?pe(e,2)?e:ee(e):J(e,l,r))).then((e=>{if(e){if(pe(e,2))return N(c({replace:a},T(e.to),{state:"object"===typeof e.to?c({},o,e.to.state):o,force:i}),t||l)}else e=$(l,r,!0,a,o);return B(l,r,e),e}))}function D(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function j(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function F(e,t){let n;const[r,o,i]=ot(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(ze(r,e,t))}));const s=D.bind(null,e,t);return n.push(s),ce(n).then((()=>{n=[];for(const r of d.list())n.push(ze(r,e,t));return n.push(s),ce(n)})).then((()=>{n=qe(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(ze(r,e,t))}));return n.push(s),ce(n)})).then((()=>{n=[];for(const r of i)if(r.beforeEnter)if(f(r.beforeEnter))for(const o of r.beforeEnter)n.push(ze(o,e,t));else n.push(ze(r.beforeEnter,e,t));return n.push(s),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(i,"beforeRouteEnter",e,t,j),n.push(s),ce(n)))).then((()=>{n=[];for(const r of h.list())n.push(ze(r,e,t));return n.push(s),ce(n)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function B(e,t,n){p.list().forEach((r=>j((()=>r(e,t,n)))))}function $(e,t,n,r,o){const s=O(e,t);if(s)return s;const u=t===H,l=i?history.state:{};n&&(r||u?a.replace(e.fullPath,c({scroll:u&&l&&l.scroll},o)):a.push(e.fullPath,o)),m.value=e,re(e,t,n,u),ee()}let V;function W(){V||(V=a.listen(((e,t,n)=>{if(!ae.listening)return;const r=I(e),o=C(r);if(o)return void N(c(o,{replace:!0}),r).catch(l);g=r;const s=m.value;i&&te(Y(s.fullPath,n.delta),X()),F(r,s).catch((e=>pe(e,12)?e:pe(e,2)?(N(e.to,r).then((e=>{pe(e,20)&&!n.delta&&n.type===z.pop&&a.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&a.go(-n.delta,!1),J(e,r,s)))).then((e=>{e=e||$(r,s,!1),e&&(n.delta&&!pe(e,8)?a.go(-n.delta,!1):n.type===z.pop&&pe(e,20)&&a.go(-1,!1)),B(r,s,e)})).catch(l)})))}let q,K=He(),G=He();function J(e,t,n){ee(e);const r=G.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Z(){return q&&m.value!==H?Promise.resolve():new Promise(((e,t)=>{K.add([e,t])}))}function ee(e){return q||(q=!e,W(),K.list().forEach((([t,n])=>e?n(e):t())),K.reset()),e}function re(t,n,o,s){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!o&&ne(Y(t.fullPath,0))||(s||!o)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&Q(e))).catch((e=>J(e,t,n)))}const oe=e=>a.go(e);let ie;const se=new Set,ae={currentRoute:m,listening:!0,addRoute:w,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:E,resolve:I,options:e,push:k,replace:A,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:d.add,beforeResolve:h.add,afterEach:p.add,onError:G.add,isReady:Z,install(e){const t=this;e.component("RouterLink",Je),e.component("RouterView",nt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.R1)(m)}),i&&!ie&&m.value===H&&(ie=!0,k(a.location).catch((e=>{0})));const n={};for(const o in H)Object.defineProperty(n,o,{get:()=>m.value[o],enumerable:!0});e.provide($e,t),e.provide(Ve,(0,o.Gc)(n)),e.provide(We,m);const r=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=H,V&&V(),V=null,m.value=H,ie=!1,q=!1),r()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>j(t)))),Promise.resolve())}return ae}function ot(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find((e=>F(e,i)))?r.push(i):n.push(i));const a=e.matched[s];a&&(t.matched.find((e=>F(e,a)))||o.push(a))}return[n,r,o]}}}]);
//# sourceMappingURL=chunk-vendors.1220122e.js.map