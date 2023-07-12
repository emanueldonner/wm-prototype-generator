/* @copyright Stadt Wien - Wiener Melange v2 */
!function(){
  /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let r=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new r(o,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var n;const l=window,c=l.trustedTypes,h=c?c.emptyScript:"",d=l.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g};let u=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const o=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{e?i.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=e.cssText,i.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var o;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,r=o._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=o.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=r,this[r]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  var b;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:u}),(null!==(n=l.reactiveElementVersions)&&void 0!==n?n:l.reactiveElementVersions=[]).push("1.6.1");const v=window,f=v.trustedTypes,w=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,y="?"+_,k=`<${y}>`,x=document,E=(t="")=>x.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,A=/>/g,L=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),M=/'/g,T=/"/g,q=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),N=new WeakMap,V=x.createTreeWalker(x,129,null,!1),O=(t,e)=>{const i=t.length-1,o=[];let r,s=2===e?"<svg>":"",a=z;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===z?"!--"===l[1]?a=S:void 0!==l[1]?a=A:void 0!==l[2]?(q.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=L):void 0!==l[3]&&(a=L):a===L?">"===l[0]?(a=null!=r?r:z,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?L:'"'===l[3]?T:M):a===T||a===M?a=L:a===S||a===A?a=z:(a=L,r=void 0);const d=a===L&&t[e+1].startsWith("/>")?" ":"";s+=a===z?i+k:c>=0?(o.push(n),i.slice(0,c)+"$lit$"+i.slice(c)+_+d):i+_+(-2===c?(o.push(void 0),e):d)}const n=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(n):n,o]};class R{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0;const a=t.length-1,n=this.parts,[l,c]=O(t,e);if(this.el=R.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=V.nextNode())&&n.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=c[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);n.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?X:"@"===e[1]?Y:j})}else n.push({type:6,index:r})}for(const e of t)o.removeAttribute(e)}if(q.test(o.tagName)){const t=o.textContent.split(_),e=t.length-1;if(e>0){o.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),V.nextNode(),n.push({type:2,index:++r});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===y)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(_,t+1));)n.push({type:7,index:r}),t+=_.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function P(t,e,i=t,o){var r,s,a,n;if(e===I)return e;let l=void 0!==o?null===(r=i._$Co)||void 0===r?void 0:r[o]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(a=(n=i)._$Co)&&void 0!==a?a:n._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=P(t,l._$AS(t,e.values),l,o)),e}class D{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);V.currentNode=r;let s=V.nextNode(),a=0,n=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new U(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new G(s,this,t)),this.u.push(e),l=o[++n]}a!==(null==l?void 0:l.index)&&(s=V.nextNode(),a++)}return r}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,o){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),C(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==I&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>$(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==H&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=R.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new D(r,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new R(t)),e}k(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new U(this.O(E()),this.O(E()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,o,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(void 0===r)t=P(this,t,e,0),s=!C(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else{const o=t;let a,n;for(t=r[0],a=0;a<r.length-1;a++)n=P(this,o[i+a],e,a),n===I&&(n=this._$AH[a]),s||(s=!C(n)||n!==this._$AH[a]),n===H?t=H:t!==H&&(t+=(null!=n?n:"")+r[a+1]),this._$AH[a]=n}s&&!o&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const Z=f?f.emptyScript:"";class X extends j{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Y extends j{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=P(this,t,e,0))&&void 0!==i?i:H)===I)return;const o=this._$AH,r=t===H&&o!==H||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==H&&(o===H||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const K=v.litHtmlPolyfillSupport;null==K||K(R,U),(null!==(b=v.litHtmlVersions)&&void 0!==b?b:v.litHtmlVersions=[]).push("2.6.1");
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  var W,J;let Q=class extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,r;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let a=s._$litPart$;if(void 0===a){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=a=new U(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return I}};Q.finalized=!0,Q._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.2");const et=[s`
    * {
      box-sizing: border-box;
    }
  
    :host {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: var(--anchor-gap);
      margin-block-end: 1em;
    }
  
    ::slotted(*) {
      margin-bottom: 0 !important;
    }
  
    wm-icon {
      display: block;
    }
  
    a {
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    a:is(:link, :visited) {
      color: var(--site-color)
    }
  
    :host(:is(:hover, :focus-within)) a {
      opacity: 1;
    }
  
    :focus-visible {
      outline: var(--site-focus-outline);
    }
  `],it=[s`
  :host {
    --anchor-gap: var(--_anchor-gap, 1rem);
  }`],ot=(t,e)=>Array.prototype.indexOf.call(t,e),rt=(t=5)=>Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,t),st=(t,e)=>t.split(".").reduce(((t,e)=>t[e]),e);let at;customElements.define("wm-anchor",class extends Q{get _heading(){return this.querySelectorAll("h2, h3, h4, h5, h6")[0]??null}get _anchors(){return document.querySelectorAll("wm-anchor")??null}static properties={_id:{type:String,attribute:!1},copyText:{type:String},id:{type:String},icon:{type:String}};static styles=[it,et];constructor(){super(),this.copyText="Link kopieren",this.icon="share",this.id=""}connectedCallback(){super.connectedCallback(),this._id=this._generateID(),this._heading.setAttribute("id",this._id)}_generateID(){let t=this._heading.getAttribute("id");return t||(t=this._heading.textContent.toLowerCase().replaceAll("ü","ue").replaceAll("ä","ae").replaceAll("ö","oe").replaceAll("ß","sz").replaceAll(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"").replaceAll(" ","-"),document.querySelector(`#${t}`)&&(t+=`${ot(this._anchors,this)}`)),t}updated(t){t.has("id")&&this.id&&(this._id=this.id)}render(){return B`
        <slot></slot>
  
        <a href="#${this._id}" aria-label="${this.copyText}">
          <wm-icon iconid="${this.icon}"></wm-icon>
        </a>
      `}});
  /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  const nt=Symbol.for(""),lt=t=>{if((null==t?void 0:t.r)===nt)return null==t?void 0:t._$litStatic$},ct=t=>({_$litStatic$:t,r:nt}),ht=new Map,dt=(t=>(e,...i)=>{const o=i.length;let r,s;const a=[],n=[];let l,c=0,h=!1;for(;c<o;){for(l=e[c];c<o&&void 0!==(s=i[c],r=lt(s));)l+=r+e[++c],h=!0;n.push(s),a.push(l),c++}if(c===o&&a.push(e[o]),h){const t=a.join("$$lit$$");void 0===(e=ht.get(t))&&(a.raw=a,ht.set(t,e=a)),i=n}return t(e,...i)})(B),pt=[s`
  * {
    box-sizing: border-box;
  }
  
  :host {
    display: block;
  }
  
  .heading {
    margin: 0;
  }
  
  button[aria-controls] {
    all: unset !important;
    background-color: var(--accordion-background) !important;
    box-sizing: border-box !important;
    cursor: pointer !important;
    font-size: 1.1rem !important;
    font-variation-settings: "wght" 600 !important;
    font-weight: 400 !important;
    padding-block: var(--accordion-padding-block) !important;
    padding-inline: var(--accordion-padding-inline) !important;
    position: relative !important;
    width: 100% !important;
  }
  
  button[aria-controls]::after {
    content: "";
    background: var(--accordion-icon) no-repeat center right;
    background-size: cover;
    display: inline-block;
    height: var(--accordion-icon-size);
    inset-inline-end: var(--accordion-padding-inline);
    inset-block: 0;
    margin: auto;
    position: absolute;
    transition: 0.2s all ease-in-out;
    width: var(--accordion-icon-size);
  }
  
  button:where(:hover, :focus-visible)::after {
    transform: rotate(-90deg);
  }
  
  [aria-expanded="true"]::after {
    transform: rotate(-180deg);
  }
  
  .panel {
    --_panel-height: 0fr;
    --_panel-visibility: hidden;
    --_panel-gap: 0;
  
    background-color: var(--accordion-background);
    display: grid;
    grid-template-rows: var(--_panel-height);
    margin-block-end: var(--_panel-gap);
    visibility: var(--_panel-visibility);
  }
  
  @media(prefers-reduced-motion: no-preference) {
    .panel {
      transition: margin 0.3s, visibility 0.3s, grid-template-rows 0.3s;
    }
  }
  
  .panel-inner {
    overflow: hidden;
  }
  
  .panel-content {
    padding-block: var(--accordion-padding-block);
    padding-inline: var(--accordion-padding-inline);
  }
  
  .panel > *:first-child {
    margin-block-start: 0;
  }
  
  .open {
    --_panel-height: 1fr;
    --_panel-visibility: visible;
    --_panel-gap: var(--accordion-gap);
  }
  
  figcaption {
    --media-figcaption-background: var(--accordion-contrast);
  }
  `],gt=[s`
  :host {
    --accordion-background: var(--_accordion-background, transparent);
    --accordion-contrast: var(--_accordion-contrast, #FFF);
    --accordion-padding-inline: var(--_accordion-padding-inline, 0);
    --accordion-padding-block: var(--_accordion-padding-block, 0);
    --accordion-icon: var(--_accordion-icon, none);
    --accordion-icon-size: var(--_accordion-icon-size, 0);
    --accordion-gap: var(--_accordion-gap, 0);
  }`],mt=1,ut=2,bt=3,vt=4,ft=t=>(...e)=>({_$litDirective$:t,values:e});class wt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let _t=class extends wt{constructor(t){if(super(t),this.it=H,t.type!==ut)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||null==t)return this._t=void 0,this.it=t;if(t===I)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};_t.directiveName="unsafeHTML",_t.resultType=1;const yt=ft(_t),kt=[s`
    img,
    picture,
    svg,
    video {
      display: block;
      height: auto;
      max-width: 100%;
    }
  
    iframe {
      border: 0;
      display: block;
      max-width: 100%;
    }
  
    iframe[src*="youtube"] {
      aspect-ratio: 560 / 315;
    }
  
    iframe:not([height]) {
      aspect-ratio: 16 / 9;
    }
  
    figure {
      display: inline-flex;
      flex-direction: column;
      margin: 0;
      max-inline-size: 100%;
    }
  
    figcaption {
      background-color: var(--media-figcaption-background);
      padding: var(--media-figcaption-padding);
    }
  `],xt=[s`
      form {
        margin-block-end: 2em;
      }
  
      form > * + * {
        margin-block-start: 1em;
      }
  
      input,
      button,
      textarea,
      select {
        font: inherit;
        /* max-width: 30rem; */
      }
  
      label,
      .wm-e-label {
        display: block;
        font-weight: var(--content-font-weight);
        font-variation-settings: var(--content-font-variation-settings);
        margin-block-end: 0.125rem;
      }
  
      :where(input[type="checkbox"], input[type="radio"]) + label {
        display: inline-block;
        font-weight: normal;
        font-variation-settings: normal;
      }
  
      input:is([type="time"], [type="date"], [type="text"],  [type="tel"], [type="url"], [type="email"], [type="password"], ),
      textarea {
        background-color: var(--input-background);
        border: 1px solid var(--input-border-color);
        border-radius: 0;
        color: var(--input-color);
        display: block;
        line-height: 1;
        margin: 0;
        min-height: var(--input-min-height);
        padding: var(--input-padding);
        width: 100%;
      }
  
      @media(min-width: 48em) {
        input:is(
          [type="date"],
          [type="email"],
          [type="password"],
          [type="text"],
          [type="tel"],
          [type="time"]
          [type="url"]
        )[size] {
          width: auto;
        }
      }
  
      :is(input, textarea, select)[aria-disabled="true"],
      :is(input, textarea, select)[aria-disabled="true"] + label {
        opacity: 0.7;
        cursor: not-allowed;
        pointer-events: none;
        border: none;
      }
      
  
      select {
        appearance: var(--select-appearance);
        background-color: var(--select-background);
        border: 1px solid var(--select-border-color);
        border-radius: 0;
        color: var(--select-color);
        font-family: inherit;
        font-size: inherit;
        margin: 0;
        min-height: var(--select-min-height);
        min-width: 8.75rem;
        width: 100%;
      }
      
      select:not([size]:not([size="1"])):not([multiple]) {
        background-image: var(--select-icon);
        background-repeat: no-repeat;
        background-position: right 0.625rem center;
        padding: var(--select-padding);
      }
  
      :is(button, .wm-e-button:link, .wm-e-button:visited) {
        align-items: center;
        background-color: var(--button-background);
        border: 1px solid var(--button-border-color);
        color: var(--button-color);
        display: inline-flex;
        font-weight: var(--content-font-weight);
        font-variation-settings: var(--content-font-variation-settings);
        font-size: var(--button-font-size, inherit);
        justify-content: center;
        line-height: 1.45;
        padding: 0.463em 0.88em;
        text-align: center;
        text-decoration: none;
        text-transform: var(--button-text-transform, uppercase);
      }
  
      /* split up selectors because .wm-e-button:link in :is() increases the specificty of button */
      button:is(:focus-visible, :hover),
      :is(.wm-e-button:link, .wm-e-button:visited):is(:focus-visible, :hover) {
        --button-background: var(--button-background-hover);
        --button-color: var(--button-color-hover);
      }
  
      fieldset {
        border: 0;
        padding: 0;
      }
  
      legend {
        font-weight: var(--content-font-weight);
        font-variation-settings: var(--content-font-variation-settings);
        padding: 0;
      }
  
      :is(input[type="radio"], input[type="checkbox"]) {
        appearance: none;
        border: 1px solid var(--input-accent-color);
        display: inline-block;
        height: 1rem;
        margin: 0;
        margin-inline-end: 0.5rem;
        position: relative;
        top: 0.125rem;
        width: 1rem;
      }
  
      input[type="radio"] {
        border-radius: 50%;
      }
  
      input[type="checkbox"]:is(:checked, :indeterminate) {
        background-color: var(--accent-color, var(--input-accent-color));
        background-image: var(--input-checkbox-icon);
        background-position: right 0 center;
        background-size: cover;
      }
  
      input[type="radio"]:checked {
        box-shadow: inset 0 0 0 4px #fff;
      }
  
      input[type="radio"]:checked {
        background-color: var(--accent-color, var(--input-accent-color));
      }
  
      input[type="checkbox"]:indeterminate {
        background-color: var(--input-border-color);
      }
  
      /* Errors */
  
      [aria-invalid="true"] {
        --input-border-color: var(--wm-color-ui-error);
      }
  
      .wm-forms-message {
        padding-block: 0.2rem;
      }
  
      [aria-invalid="true"] ~ .wm-forms-message {
        color: var(--wm-color-ui-error);
      }
  
      div:has(> [aria-invalid="true"]) {
        color: var(--wm-color-ui-error);
      }
    `],Et=[s`
  /* External and internal links */
  /* Seiten, die wien.gv.at beinhaltet - ist KEIN EXTERNER LINK!!! */
  /* define rules for external icons on links, quicklinks,  */
  a[href]:not(:where(
    /* exclude hash only links */
    [href^="#"],
    /* exclude relative but not double slash only links */
    [href^="/"]:not([href^="//"]),
    /* domains to exclude */
    [href*="wien.gv.at"],
    [href*="facebook"],
    [href*="instagram"],
    [href*="youtube"],
    [href*="xing"],
    [href*="linkedin"],
    [href*="twitter"],
    [href*="tel:"],
    [href*="mailto:"],
    [class="wm-no-external-icon"]
  ))::after {
    background-image: url('data:image/svg+xml,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 200 200" xml:space="preserve"> <path stroke="currentColor" fill="none" style="stroke-miterlimit: 10; stroke-width: 10;" d="M83.2 116.6l61.1-61M145.3 93.4c0-.1 1.1-6.9 1.6-15.2.6-9.2.2-16.3-1-21l-3.2-3.2c-4.7-1.2-11.8-1.5-21-1-7.9.5-14.5 1.5-15.3 1.6M147.2 104.3v43H52.8V53h42.8"/></svg>');
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 1.5em;
    content: "";
    display: inline-block;
    height: 1.4em;
    margin-left: .1em;
    vertical-align: text-bottom;
    width: 1.4em;
  }
  `];class Ct extends Q{get _panels(){return this.shadowRoot?.querySelectorAll(".panel")??null}get _buttons(){return this.shadowRoot?.querySelectorAll("button")??null}static properties={open:{type:String,reflect:!0},multiple:{type:String,reflect:!0},_previousIndex:{type:Number,attribute:!1},_showMultiple:{type:Boolean,attribute:!1},_items:{type:Array,attribute:!1}};static styles=[xt,kt,Et,gt,pt];constructor(){super(),this.open=!1,this.multiple="false",this._previousIndex=NaN,this._showMultiple=!1,this._items=[],this._tagName="h3"}firstUpdated(){this._registerEvents()}updated(t){t.has("multiple")&&(this._showMultiple="false"!==this.multiple),t.has("open")&&this._openOrCloseItems(),t.has("_items")&&this._openOrCloseItems()}_openOrCloseItems(){const t=this._openByDefaultIndex();if(-1===t||isNaN(t)){const e=isNaN(t)?"close":"open";for(let t=0;t<this._buttons.length;t++)this._openOrClose(t,e)}else this._openOrClose(this._openByDefaultIndex())}_openOrClose(t,e="toggle",i=!1){if(isNaN(t)){if(this.renderRoot?.querySelectorAll(".open").length)for(let t=0;t<this.renderRoot?.querySelectorAll(".open").length;t++){this.collapse(t,!1)}}else if(t<this._panels.length){const o=this._buttons[t],r=this._panels[t],s="false"!==o.getAttribute("aria-expanded");s?"open"!==e&&(o.setAttribute("aria-expanded","false"),r.classList.remove("open")):"close"!==e&&(o.setAttribute("aria-expanded","true"),r.classList.add("open")),this._showMultiple||isNaN(this._previousIndex)||this._previousIndex===t||this.collapse(this._previousIndex,!1),s||(this._previousIndex=t);const a={bubbles:!0,composed:!0,detail:{id:o.getAttribute("aria-controls"),index:t}};i&&(s?this.dispatchEvent(new CustomEvent("collapsed",a)):this.dispatchEvent(new CustomEvent("expanded",a)))}else console.log("Dieser Panel existiert nicht")}_registerEvents(){this.shadowRoot.addEventListener("click",(t=>{const e=t.target.closest("button");if(e){const t=e.getAttribute("aria-controls"),i=parseInt(t.split("_")[1]);this._openOrClose(i,"toggle",!0)}}))}_openByDefaultIndex(){let t;return t=""===this.open||"true"===this.open?0:isNaN(parseInt(this.open))?NaN:parseInt(this.open),t-1}_getContents(){this._items=[];const t=this.querySelectorAll('[slot="heading"]'),e=this.querySelectorAll('[slot="content"]');for(let i=0;i<t.length;i++){const o=t[i],r=e[i];this._items.push({text:o.textContent,content:r.innerHTML}),0===i&&(this._tagName=o.nodeName)}}_getPanel(t){const e=typeof t;let i;return"number"===e?i=t:"string"===e?i=ot(this._panels,this.renderRoot?.querySelector(t)):"object"===e?i=ot(this._panels,t):isNaN(t)&&(i=NaN),i}expand(t,e=!0){const i=this._getPanel(t);this._openOrClose(i,"open",e)}collapse(t,e=!0){const i=this._getPanel(t);this._openOrClose(i,"close",e)}_rerender(){this._getContents();this.dispatchEvent(new CustomEvent("contentchanged",{bubbles:!0,composed:!0,detail:{}}))}connectedCallback(){super.connectedCallback()}render(){return dt`
      ${this._items.map(((t,e)=>dt`<${ct(this._tagName)} class="heading">
        <wm-button clean>
          <button aria-expanded="false" aria-controls="panel_${e}">
            ${t.text}
          </button>
        </wm-button>
        </${ct(this._tagName)}>
  
        <div id="panel_${e}" class="panel">
          <div class="panel-inner">
            <div class="panel-content">
              ${yt(t.content)}
            </div>
          </div>
        </div>
        `))}
        <slot name="heading" @slotchange="${this._rerender}" hidden></slot>
        <slot name="content" hidden></slot>
      `}}customElements.define("wm-accordion",Ct);const $t=[s`
  :host {
    --button-background: var(--_button-background, gray);
    --button-border: var(--_button-border, gray);
    --button-color: var(--_button-color, #000000);
    --button-text-transform: var(--_button-text-transform, none);
  }`],zt=[s`
  
  ::slotted(:is(button, a)) {
    --button-background: var(--button-primary);
    --button-background-hover: var(--button-secondary);
    --button-border-color: var(--button-primary);
    --button-color: var(--button-secondary);
    --button-color-hover: var(--button-primary);
  }
  
  :host ::slotted(:is(button, a)) {
    display: flex;
    justify-content: center;
    gap: var(--wm-spacing-xxs) !important;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  /* Disabled buttons */
  
  ::slotted(button:is([aria-disabled="true"], [disabled])) {
    opacity: 0.5;
    pointer-events: none;
  }
  
  /* Secondary Buttons */
  
  :host([kind="secondary"]) ::slotted(:is(button, a)) {
    --button-background: var(--button-secondary);
    --button-color: var(--button-primary);
    --button-background-hover: var(--button-primary);
    --button-color-hover: var(--button-secondary)
  }
  
  /* Tertiary Buttons */
  
  :host([kind="tertiary"]) ::slotted(:is(button, a)) {
    --button-background: none;
    --button-color: var(--button-primary);
    --button-background-hover: none;
    --button-color-hover: var(--button-primary);
    --button-border-color: transparent;
  
    text-transform: none !important;
    text-decoration: underline !important;
    font-variation-settings: var(--wm-font-weight-normal) !important;
    font-weight: normal !important;
    padding: 0 !important;
  }
  
  :host([kind="tertiary"]) ::slotted(button:is(:hover, :focus-visible)) {
    text-decoration: none !important;
  }
  
  /* Clean Buttons */
  
  :host([kind="clean"]) ::slotted(:is(button, a)) {
    all: unset !important;
    align-items: center !important;
    cursor: pointer !important;
    display: inline-flex !important;
    gap: var(--wm-spacing-xxs) !important;
    line-height: 1.45 !important;
    outline: revert !important;
    box-sizing: border-box !important;
  }
  
  :host([kind="clean"]) ::slotted(button:focus-visible) {
    outline-offset: var(--site-focus-outline-offset) !important;
    outline: var(--_button-focus-outline, var(--site-focus-outline)) !important;
  }
  
  :host([kind="round"]) ::slotted(:is(button, a)) {
    border-radius: 50%;
    padding: 0.1rem !important;
  }
  
  :host([kind="tag"]) ::slotted(:is(button, a)) {
    border-radius: 30px;
    --button-text-transform: none;
  }
  
  /* Full width Buttons */
  
  :host([full]) ::slotted(:is(button, a)) {
    width:100% !important;
  }
  
  :host([alignment="center"]) ::slotted(:is(button, a)) {
    justify-content: center !important;
  }
  
  :host([alignment="space-between"]) ::slotted(:is(button, a)) {
    justify-content: space-between !important;
  }
  
  /* Color variations */
  
  :host([color]) ::slotted(:is(button, a)) {
    --button-color:  var(--wm-color-fastschwarz);
    --button-color-hover:  var(--wm-color-fastschwarz);
  }
  
  :host([color="frischgruen"]) ::slotted(:is(button, a)) {
    --button-primary: var(--wm-color-frischgruen);
    --button-secondary: var(--wm-color-weiss);
    --button-color: var(--wm-color-fastschwarz);
    --button-color-hover:  var(--wm-color-fastschwarz);
  }
  
  :host([color="morgenrot"]) ::slotted(:is(button, a)) {
    --button-primary: var(--wm-color-morgenrot);
    --button-secondary: var(--wm-color-weiss);
    --button-color:  var(--wm-color-fastschwarz);
    --button-color-hover:  var(--wm-color-fastschwarz);
  }
  
  :host([color="nebelgrau"]) ::slotted(:is(button, a)) {
    --button-primary: var(--wm-color-nebelgrau);
    --button-secondary: var(--wm-color-weiss);
  }
  
  :host([color="abendstimmung"]) ::slotted(:is(button, a)) {
    --button-primary: var(--wm-color-abendstimmung);
    --button-secondary: var(--wm-color-weiss);
  
    --button-color:  var(--wm-color-weiss);
    --button-color-hover:  var(--wm-color-abendstimmung);
  }
  
  :host([color="abendstimmung"][kind="tertiary"]) ::slotted(:is(button, a)) {
    --button-color: var(--button-primary);
  }
  
  :host([color="goldgelb"]) ::slotted(:is(button, a)) {
    --button-primary: var(--wm-color-goldgelb);
    --button-secondary: var(--wm-color-weiss);
  }
  
  :host([color="flieder"]) ::slotted(:is(button, a)) {
    --button-primary: var(--wm-color-flieder);
    --button-secondary: var(--wm-color-weiss);
  }
  
  :host([color="wasserblau"]) ::slotted(:is(button, a)) {
    --button-primary: var(--wm-color-wasserblau);
    --button-secondary: var(--wm-color-weiss);
  }
  
  :host([color="success"]) ::slotted(:is(button, a)) {
    --button-primary: var(--wm-color-ui-success);
    --button-background-hover: var(--wm-color-ui-success);
    --button-color:  var(--wm-color-weiss);
    --button-color-hover:  var(--wm-color-weiss);
  }
  
  :host([color="success"]) ::slotted(:is(button, a):is(:hover, :focus-visible)) {
    opacity: 0.8;
  }
  
  /* secondary button color variations  */
  :host([color][kind="secondary"]) ::slotted(:is(button, a)) {
    --button-color: var(--wm-color-fastschwarz);
    --button-color-hover:  var(--wm-color-fastschwarz);
  }
  :host([color="abendstimmung"][kind="secondary"]) ::slotted(:is(button, a)) {
    --button-color: var(--wm-color-abendstimmung);
    --button-color-hover:  var(--wm-color-weiss);
  }
  
  :host([size="s"]) ::slotted(:is(button, a)) {
    --button-font-size: 0.8rem;
  }
  `];class St extends Q{static properties={alignment:{type:String,reflect:!0},color:{type:String,reflect:!0},kind:{type:String,reflect:!0},full:{type:Boolean,reflect:!0},size:{type:String,reflect:!0}};static styles=[$t,zt];constructor(){super(),this.kind=void 0,this.full=!1,this.alignment=void 0,this.color=void 0,this.size=void 0}render(){return B`
        <slot></slot>
      `}}customElements.define("wm-button",St);const At=[s`
  :host {
    --badge-color-success: var(--_badge-color-success, green);
    --badge-color-error: var(--_badge-color-error, red);
    --badge-font-variation-settings: var(--_badge-font-variation-settings, normal);
    --badge-font-weight: var(--_badge-font-weight, bold);
  }`],Lt=[s`
    * {
      box-sizing: border-box;
    }
  
    :host {
      font-weight: var(--_badge-font-weight);
      font-variation-settings: var(--_badge-font-variation-settings);
      text-transform: uppercase;
    }
  
    :host([color="success"]) {
      color: var(--_badge-color-success);
    }
  
    :host([color="error"]) {
      color: var(--_badge-color-error);
    }
  
  `];customElements.define("wm-badge",class extends Q{static properties={color:{type:String,reflect:!0}};static styles=[At,Lt];constructor(){super(),this.color=void 0}render(){return B`
        <slot></slot>
      `}});const Mt=[s`
  * {
    box-sizing: border-box;
  }
  
  :host {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wm-spacing-xs);
  }
  
  span {
    align-items: center;
    display: inline-flex;
    gap: 0.6rem;
  }
  
  .status {
    --_color: #d6d1ca;
    background: var(--_color);
    block-size: 1.6rem;
    border-radius: 50%;
    display: inline-block;
    inline-size: 1.6rem;
  }
  
  .status-0 {
    --_color: #292929;
  }
  
  .status-1 {
    --_color: #82d282;
  }
  
  .status-2 {
    --_color: #e6c828;
  }
  
  .status-3 {
    --_color: #e6b728;
  }
  .status-4 {
    --_color: #e68a28;
  }
  
  .status-5 {
    --_color: #cc0000;
  }
  
  strong {
    font-weight: var(--content-font-weight);
    font-variation-settings: var(--content-font-variation-settings);
  }
  `];customElements.define("wm-status",class extends Q{static properties={label:{type:String,reflect:!0},loading:{type:String,reflect:!0},status:{type:String,reflect:!0},statusText:{type:String,reflect:!0}};static styles=[Mt];constructor(){super(),this.label="Auslastung:",this.loading="Lade Auslastung…",this.status=6,this.statusText=""}render(){return B`
        <strong>${this.label}</strong>
        <span>
          <span class="status status-${this.status}"></span>${this.statusText?B`${this.statusText}`:B`${this.loading}`}
        </span>
        <slot></slot>
      `}});const Tt=[s`
    * {
      box-sizing: border-box;
    }
  
  :host {
    --_spacing: var(--card-spacing);
    --_max-width: none;
    --_grid-columns: var(--_spacing) 1fr var(--_spacing);
    --_grid-rows: repeat(4, min-content) 1fr;
  
    display: block;
    max-width: var(--_max-width);
    /*height: 100%;*/
    width: 100%;
  
    perspective: 1000px;
  }
  
  :host([flipped]) .card-inner  {
    transform: rotateY(180deg);
  }
  
  .card-inner {
    align-content: start;
    background-color: var(--card-background);
    border: var(--card-border);
    box-shadow: var(--card-shadow);
    display: grid;
    block-size: 100%;
    grid-template-columns: var(--_grid-columns);
    grid-template-rows: var(--_grid-rows);
    padding-block: var(--_spacing);
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  :host([size="s"]) {
    --_max-width: 16.25rem;
  }
  
  :host([size="m"]) {
    --_max-width: 21.875rem;
  }
  
  :host([size="l"]) {
    --_max-width: 33.125rem;
  }
  
  @media(min-width: 64em) {
    :host(:not([size="s"])) {
      --_spacing: var(--card-spacing-large);
    }
  }
  
  ::slotted(:is(img, picture)) {
    display: block;
    height: 100% !important;
    object-fit: cover;
    width: 100%;
  }
  
  ::slotted(*) {
    grid-column: 2;
    min-width: 0;
  }
  
  ::slotted(:is(img, picture)),
  ::slotted(div[slot]) {
    margin: 0 !important;
  }
  
  ::slotted(:is(h1, h2, h3, h4)) {
    -webkit-hyphens: auto;
    hyphens: auto;
  }
  
  .header {
    background-color: inherit;
    align-items: center;
    display: flex;
    grid-column: 2;
    grid-row: 3;
    justify-content: space-between;
    z-index: 1;
  }
  
  .media {
    aspect-ratio: 16 / 9;
    grid-column: 1 / -1;
    grid-row: 1;
    margin-block-end: var(--_spacing);
    margin-block-start: calc(var(--_spacing) * -1);
    position: relative;
  }
  
  .content ::slotted(*:not(:last-of-type)) {
    margin-block-end: var(--_spacing) !important;
  }
  
  .content {
    background-color: inherit;
    grid-column: 2;
    grid-row: 4;
    z-index: 1;
  }
  
  .precontent {
    grid-column: 2;
    grid-row: 2;
    margin-block-end: 0.5em;
    z-index: 1;
  }
  
  .postcontent {
    grid-column: 2;
    grid-row: -1;
    z-index: 1;
  }
  
  .flip {
    background-color: inherit;
    block-size: 100%;
    inline-size: 100%;
    grid-column: 2 / -2;
    grid-row: 1 / -1;
    transform:translateZ(-1px) rotateY(180deg);
    z-index: 1;
  }
  
  .flip:focus-visible {
    outline: var(--site-focus-outline);
  }
  
  .flip-header {
    display: flex;
    justify-content: flex-end;
    padding-block: 0.7rem;
  }
  
  .eyecatcher {
    background: var(--card-media-background);
    color: var(--card-media-color);
    font-size: var(--card-eyecatcher-fontsize);
    font-weight: normal;
    padding: 0 var(--card-eyecatcher-padding);
    position: absolute;
  }
  
  :host([color="goldgelb"]) {
    --card-media-background: var(--wm-color-goldgelb) !important;
  }
  
  :host([color="wasserblau"]) {
    --card-media-background: var(--wm-color-wasserblau) !important;
  }
  
  :host([color="morgenrot"]) {
    --card-media-background: var(--wm-color-morgenrot) !important;
  }
  
  :host([color="flieder"]) {
    --card-media-background: var(--wm-color-flieder) !important;
  }
  
  :host([color="nebelgrau"]) {
    --card-media-background: var(--wm-color-nebelgrau) !important;
  }
  
  :host([color="abendstimmung"]) {
    --card-media-background: var(--wm-color-abendstimmung) !important;
    --card-media-color: var(--wm-color-weiss) !important;
  }
  
  :host(:not([position])) .eyecatcher {
    inset-block-end: var(--card-eyecatcher-spacing);
    inset-inline-end: 0;
  } 
  
  :host([position*="block-end"]) .eyecatcher {
    inset-block-end: var(--card-eyecatcher-spacing);
  } 
  
  :host([position*="block-start"]) .eyecatcher {
    inset-block-start: var(--card-eyecatcher-spacing);
  } 
  
  :host([position*="inline-start"]) .eyecatcher {
    inset-inline-start: 0;
  } 
  
  :host([position*="inline-end"]) .eyecatcher {
    inset-inline-end: 0;
  } 
  
  :host([position*="inline-start"][type="eyecatcher-round"]) .eyecatcher {
    inset-inline-start: var(--card-eyecatcher-spacing);
  } 
  
  :host([position*="inline-end"][type="eyecatcher-round"]) .eyecatcher {
    inset-inline-end: var(--card-eyecatcher-spacing);
  } 
  
  :host([type="eyecatcher-round"]) .eyecatcher {
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 3.5em;
    justify-content: center;
    padding: 0;
    transform: rotate(-20deg);
    width: 3.5em;
  }
  
  :host([canvas]) .media ::slotted(:is(h2, h3)) {
    margin: 0 !important;
  }
  
  :host([canvas]) .media {
    --_align-items: center;
    --_justify-content: center;
  
    align-items: var(--_align-items);
    background-color: var(--card-media-background);
    display: flex;
    justify-content: var(--_justify-content);
    padding: var(--_spacing);
  }
  
  :host([canvas][position*="block-end"]) .media {
    --_align-items: end;
  }
  :host([canvas][position*="block-start"]) .media {
    --_align-items: start;
  }
  :host([canvas][position*="inline-end"]) .media {
    --_justify-content: end;
  }
  :host([canvas][position*="inline-start"]) .media {
    --_justify-content: start;
  }
  
  @media(min-width: 64em) {
    :host([size="full-responsive"]) {
      --_grid-columns: 1fr 1fr;
      --_grid-rows: 1fr;
      --_spacing: var(--wm-spacing-xl);
    }
    
    :host([size="full-responsive"]) .card-inner {
      --_media-col: 1 / 2;
      --_media-pos: 0;
      --_content-col: 2;
      column-gap: var(--_spacing);
      padding: var(--_spacing);
    }
  
    :host([size="full-responsive"]) .header {
      grid-row: auto;
      grid-column: var(--_content-col);
    }
  
    :host([size="full-responsive"]) .media {
      grid-column: var(--_media-col);
      grid-row: 1;
      position: absolute;
      inset-inline-end: var(--_media-pos);
      inset-block-start: calc(var(--_spacing) * -1);
      height: calc(100% + var(--_spacing));
      width: calc(100% + var(--_spacing));
      margin: 0;
    }
  
    :host([size="full-responsive"]) .content {
      grid-column: var(--_content-col);
    }
  
    :host([size="full-responsive"][size="inline-end"]) .header {
      grid-column: var(--_content-col);
    }
  
    @container style(--card-style: reverse) {
      :host([size="full-responsive"]) .card-inner {
        --_content-col: 1;
        --_media-col: -1 / 2;
        --_media-pos: calc(var(--_spacing) * -1);
      }
    }
  }
  
  `],qt=[s`
  :host {
    --card-background: var(--_card-background, #FFFFFF);
    --card-border: var(--_card-border, 1px solid var(--site-color));
    --card-eyecatcher-spacing: var(--_card-eyecatcher-spacing, 1rem);
    --card-eyecatcher-padding: var(--_card-eyecatcher-padding, 0.5rem);
    --card-eyecatcher-fontsize: var(--_card-eyecatcher-fontsize, 1.5rem);
    --card-media-background: var(--_card-media-background, hsl(0 0% 0%));
    --card-media-color: var(--_card-media-color, hsl(0 0% 100%));
    --card-spacing: var(--_card-spacing, 1rem);
    --card-spacing-large: var(--_card-spacing-large, 1.5rem);
    --card-shadow: var(--_card-shadow, none);
  }`];
  /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  function Bt(t,e,i){return t?e():null==i?void 0:i()}
  /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const It=t=>null!=t?t:H;class Ht{host;constructor(t){(this.host=t).addController(this)}hostConnected(){}hostDisconnected(){}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}}class Nt extends Q{get _flipShow(){return this.shadowRoot?.querySelector("#flip-show")}get _flipSide(){return this.shadowRoot?.querySelector(".flip")}static properties={size:{type:String,reflect:!0},_hasMedia:{type:String,attribute:!1},_flipcard:{type:Boolean},flipped:{type:Boolean,reflect:!0},blocklink:{type:Boolean,reflect:!0},canvas:{type:Boolean,reflect:!0},color:{type:String,reflect:!0},position:{type:String,reflect:!0},type:{type:String}};static styles=[qt,Tt];constructor(){super(),this.size="m",this.type=void 0,this.position=void 0,this.color=void 0,this.blocklink=!1,this.canvas=!1,this._hasMedia=null,this._flipcard=!1,this.flipped=!1,this._slotController=new Ht(this)}firstUpdated(){this.shadowRoot.querySelector('slot[name="media"]').addEventListener("slotchange",(()=>{this._hasMedia=this.shadowRoot.querySelector('slot[name="media"]').assignedNodes().length,this._hasMedia&&this._linkCard()}))}updated(t){t.has("canvas")&&this.canvas&&(this._hasMedia=!0)}_linkCard(){this.querySelectorAll("a").length<2&&1===this.querySelectorAll("h2 a, h3 a, h4 a").length&&(this.blocklink||(this.blocklink=!0))}_onFlip(){this._flipcard=!0}_flipTheCard(){this.flipped=!this.flipped,setTimeout((()=>{this.flipped?this._flipSide.focus():this._flipShow.focus()}),0)}render(){return B`
        <div class="card-inner">
          <div class="header" inert="${It(this.flipped?"inert":void 0)}">
            <slot name="heading"></slot>
  
            ${Bt(this._flipcard,(()=>B`
                <wm-button kind="clean">
                  <button
                    @click="${this._flipTheCard}"
                    aria-expanded="${this.flipped}"
                    id="flip-show"
                  >
                    <wm-icon iconid="embed"></wm-icon>
                    Teilen
                  </button>
                  <wm-button> </wm-button
                ></wm-button>
              `))}
          </div>
  
          <div class="media" ?hidden=${!this._hasMedia}>
            <slot name="media"></slot>
  
            <div class="eyecatcher">
              <strong><slot name="eyecatcher"></slot></strong>
            </div>
          </div>
            
          ${Bt(this._slotController.hasNamedSlot("precontent"),(()=>B`
              <div
                class="precontent"
                inert="${It(this.flipped?"inert":void 0)}"
              >
                <slot name="precontent"></slot>
              </div>
            `))}
          
          <div class="content" inert="${It(this.flipped?"inert":void 0)}">
            <slot name="content"></slot>
          </div>
          <div class="postcontent" inert="${It(this.flipped?"inert":void 0)}">
            <slot name="postcontent"></slot>
          </div>
  
          ${Bt(this._slotController.hasNamedSlot("flip"),(()=>B`
          <div class="flip" inert="${It(this.flipped?void 0:"inert")}" aria-label="Teilen" role="region" tabindex="0">
            <div class="flip-header">
              <wm-button kind="clean">
                <button @click="${this._flipTheCard}" aria-expanded="${this.flipped}" class="flip-hide">
                  <wm-icon iconid="close">Schließen</wm-icon>
                </button>
              <wm-button>
            </div>
  
            <slot name="flip" @slotchange="${this._onFlip}"></slot>
          </div>
          `))}
        </div>
      `}}customElements.define("wm-card",Nt);
  /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  const Vt=ft(class extends wt{constructor(t){var e;if(super(t),t.type!==mt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,o;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const r=t.element.classList;this.nt.forEach((t=>{t in e||(r.remove(t),this.nt.delete(t))}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(r.add(t),this.nt.add(t)):(r.remove(t),this.nt.delete(t)))}return I}}),Ot=[s`
  :host {
    --carousel-ratio: var(--_carousel-ratio, 16 / 9);
    --carousel-item-inner-padding: var(--_carousel-item-inner-padding, 0);
    --carousel-shadow-offset: var(--_carousel-shadow-offset, 0);
    --carousel-gap: var(--_carousel-gap, 1rem);
    --carousel-control-bg: var(--_carousel-control-bg, #fff);
    --carousel-control-bg-start: var(--_carousel-control-bg-start, none);
    --carousel-control-bg-end: var(--_carousel-control-bg-end, none);
  }`],Rt=[s`
  * {
    box-sizing: border-box;
  }
  
  :host(:not(.focusmode)) {
    max-inline-size: calc(100% + (var(--carousel-shadow-offset) * 2));
    margin-inline: calc(var(--carousel-shadow-offset) * -1);
    max-height: inherit;
    position: relative;
  }
  
  :host {
    display: block;
    pointer-events: all; /* Needed for carousels within modals */
    max-width: 100%;
  }
  
  :host(:not(.focusmode)) .inner {
    max-height: inherit;
    min-height: 100px;
    padding: 0 var(--carousel-shadow-offset) var(--carousel-shadow-offset);
    position: relative;
    clip-path: polygon(0 -100vh, calc(100% + var(--carousel-shadow-offset)) -100vh, calc(100% + var(--carousel-shadow-offset)) 100vh, 0 100vh);
  }
  
  :host(:not(.focusmode)) .strip {
    display: flex;
    gap: var(--carousel-gap);
    max-height: inherit;
    min-width: 100%;
  }
  
  :host(:not(.notransition)) .strip {
    transition: 0.2s ease-in-out;
  
  }
  
  :host(.focusmode) .strip {
    transform: none !important;
  }
  
  :host([single]) .strip {
    align-items: center;
  }
  
  .strip > ::slotted(*) {
    flex-shrink: 0;
  }
  
  .control {
    --_size: 2.75rem;
    --_display: none; 
  
    position: absolute;
    background: var(--carousel-control-bg) no-repeat center;
    border: 0;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0,0,0,.16);
    display: var(--_display);
    height: var(--_size);
    inset-block-start: 50%;
    opacity: 1;
    padding: 0;
    transform-origin: center center;
    transition: scale 0.3s, opacity 0.3s;
    width: var(--_size);
    z-index: 1;
  }
  
  @media (min-width: 48em) {
    .control {
      --_size: 3.75rem;
      --_display: inline-flex; 
    }
  }
  
  .control--prev {
    background-image: var(--carousel-control-bg-start);
    inset-inline-start: 0;
    translate: -50% -50%;
  }
  
  .control--next {
    background-image: var(--carousel-control-bg-end);
    inset-inline-end: 0;
    translate: 50% -50%;
  }
  
  :host(.focusmode) .control,
  .control--inactive {
    opacity: 0;
    visibility: hidden;
  }
  
  .control:is(:hover, :focus) {
    scale: 1.1;
  }
  
  .control:focus-visible {
    outline: var(--site-focus-outline-width) solid var(--wm-color-ui-interactive);
  }
  
  img {
    max-height: inherit;
  }
  
  wm-modal img[src],
  .loaded {
    min-height: 0;
    max-height: 100%;
  }
  
  ::slotted(img) {
    width: initial;
  }
  
  :host([single]) ::slotted(img) {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  `];let Pt=!1,Dt=1,Ut=1;const jt={active:!1,x:0,targetX:0,y:0,startDist:0,dist:0,lastDist:1,offset:32};let Ft=Object.assign({},jt);const Zt={lastX:0,lastY:0,moving:!1,moved:!1};let Xt,Yt=Object.assign({},Zt),Gt=!1,Kt=()=>{};const Wt=new Event("reset");let Jt,Qt,te,ee,ie,oe=!1;const re=function(t){return console.info("🌈 Image zoom initialisieren."),this.image={elem:t.img},this.ready=!1,setTimeout((()=>{this.image.zoomedClass=t.zoomedClass,this.image.container=t.container,this.image.zoomEvent=t.zoomEvent,this.getImageData(),t.onReset&&(Kt=t.onReset),this.container="string"==typeof t.container?document.querySelector(t.container):t.container,this.addEvents(),console.info("✅ Image zoomt bereit."),console.info(" "),this.ready=!0,this.image.zoomEvent&&("dblclick"===t.zoomEventType?this.zoomOnDoubleTap(this.image.zoomEvent):this.zoomOnPinch(this.image.zoomEvent))}),150),this};re.prototype.getImageData=function(){this.image.originalHeight=this.image.elem.height,this.image.originalRect=this.image.elem.getBoundingClientRect(),this.setXandY()},re.prototype.setXandY=function(){if(this.image.container){const t=this.image.elem,e=this.image.container.getBoundingClientRect();this.image.x=Math.round(t.getBoundingClientRect().left-e.left),this.image.y=Math.round(t.getBoundingClientRect().top-e.top)}},re.prototype.isDoubleTap=function(){return!!oe||(oe=!0,window.setTimeout((function(){oe=!1}),300),!1)},re.prototype.pinchGetDist=function(t){return Math.hypot(t.touches[0].clientX-t.touches[1].clientX,t.touches[0].clientY-t.touches[1].clientY)},re.prototype.resizeImage=function(){this.resetZoom(),this.getImageData()},re.prototype.addEvents=function(){Qt=this.resizeImage.bind(this),te=this.startHandler.bind(this),ee=this.moveHandler.bind(this),ie=this.endHandler.bind(this),Jt=Kt(),this.container.addEventListener("touchstart",te),this.container.addEventListener("touchmove",ee),this.container.addEventListener("touchend",ie),this.container.addEventListener("reset",Jt),this.container.addEventListener("resize",Qt),console.info("👉 Events attachen.")},re.prototype.destroyEvents=function(){this.container&&(this.container.removeEventListener("touchstart",te),this.container.removeEventListener("touchmove",ee),this.container.removeEventListener("touchend",ie),this.container.removeEventListener("resize",Qt),this.container.removeEventListener("reset",Jt),console.info("👉 Events destroyen."))},re.prototype.zoomOnPinch=function(t){Ft.active=!0,Ft.x=(t.touches[0].clientX+t.touches[1].clientX)/2,Ft.y=(t.touches[0].clientY+t.touches[1].clientY)/2,Ft.startDist=this.pinchGetDist(t),console.info("👉 Zoom: pinch.")},re.prototype.zoomOnDoubleTap=function(t){Yt.moving=!1,Ut=Dt,Pt?this.resetZoom():(Dt=2,this.zoom(t.touches[0].clientX,t.touches[0].clientY)),console.info("👉 Zoom: double tap.")},re.prototype.resetZoom=function(){Dt=1,Ut=1,this.image.elem.removeAttribute("style"),this.image.elem.classList.remove(this.image.zoomedClass),Pt=!1,this.setXandY(),Ft=jt,Yt=Zt,document.body.classList.remove("wm-is-zoomed"),this.container&&(this.container.classList.remove("wm-zoom-active"),this.container.dispatchEvent(Wt)),console.info("👉 Zoom: reset.")},re.prototype.moveImage=function(t,e){clearInterval(Gt),Gt=!1;const i=this.image.container.getBoundingClientRect();t>i.width/2&&(t=i.width/2),e>i.height/2&&(e=i.height/2),this.image.elem.getBoundingClientRect().height+e<=i.height/2&&(e=-1*(this.image.elem.getBoundingClientRect().height-i.height/2)),this.image.elem.getBoundingClientRect().width+t<=i.width/2&&(t=-1*(this.image.elem.getBoundingClientRect().width-i.width/2)),this.image.elem.style.transform=`translateX(${t}px) translateY(${e}px)`,this.image.x=t,this.image.y=e},re.prototype.zoom=function(t,e){this.image.elem.removeAttribute("width"),this.image.elem.style.height=this.image.originalRect.height*Dt+"px";const i=this.image.container.getBoundingClientRect(),o=(i.width-this.image.originalRect.width)/2,r=(i.height-this.image.originalRect.height)/2,s=t-this.image.originalRect.left+o,a=e-this.image.originalRect.top+r,n=s-(-1*this.image.x+s)/Ut*Dt,l=a-(-1*this.image.y+a)/Ut*Dt;Pt=!0,this.container.classList.add("wm-zoom-active"),document.body.classList.add("wm-is-zoomed"),this.image.elem.classList.add(this.image.zoomedClass),this.moveImage(n,l)},re.prototype.startHandler=function(t,e=!1){if(t.preventDefault(),"true"===this.image.elem.dataset.wmZoomDisable)return void console.warn("👉 Zoom disabled.");if(console.info("👉 Start touch."),2===t.touches.length)return void this.zoomOnPinch(t);Yt.lastX=t.touches[0].clientX,Yt.lastY=t.touches[0].clientY,Pt&&(Xt=performance.now(),Gt&&(clearInterval(Gt),Gt=!1));if(!this.isDoubleTap()&&!e)return Yt.moving=!0,!1;Yt.moved||this.zoomOnDoubleTap(t)},re.prototype.moveHandler=function(t){if("true"!==this.image.elem.dataset.wmZoomDisable&&(Ft.active&&(Ft.dist=this.pinchGetDist(t),Ut=Dt,Dt=Ft.dist>Ft.lastDist?Ft.lastDist*Math.abs(Ft.dist/Ft.startDist):Ft.lastDist*Math.abs(Ft.startDist/Ft.dist),Dt>=5&&(Dt=5),Dt<1?this.resetZoom():(Pt=!0,Pt&&(Yt.moving=!1,this.zoom(Ft.x,Ft.y)))),Yt.moving&&Pt)){Yt.moved=!1,performance.now()-Xt>60&&(Yt.moved=!0);const e=Math.round(Yt.lastX-t.touches[0].clientX),i=Math.round(Yt.lastY-t.touches[0].clientY);Yt.lastX=t.touches[0].clientX,Yt.lastY=t.touches[0].clientY;const o=this.image.x-e,r=this.image.y-i;this.moveImage(o,r)}},re.prototype.endHandler=function(){Ft.active=!1,Ft.lastDist=Dt,Yt.moving=!1,Yt.moved=!1,console.info("👉 End touch.")};const se=t=>{if(2===t.touches.length)return t.preventDefault(),!1};class ae extends Q{get _items(){return this.renderRoot?.querySelector(".inner").querySelector("slot").assignedElements()}get _wrapper(){return this.renderRoot?.querySelector(".strip")??null}get _current(){return this.querySelector(".current")??null}get _lastSlide(){return this.querySelector(".last")??null}get _output(){return document.querySelector('[role="status"]')??null}static properties={nextLabel:{type:String},prevLabel:{type:String},single:{type:String,reflect:!0},_initialized:{type:Boolean,attribute:!1},_currentSlide:{type:Number,attribute:!1},_offset:{type:String,attribute:!1},_first:{type:String,attribute:!1},_last:{type:String,attribute:!1},_focusMode:{type:Boolean,attribute:!1},_canMove:{type:Boolean,attribute:!1},_imageZoom:{type:Object,attribute:!1},_touchstartX:{type:Number},_touchstartY:{type:Number},_touches:{type:Number},_swipeTreshold:{type:Number}};static styles=[Ot,Rt];constructor(){super(),this.single=void 0,this.nextLabel="Nächstes",this.prevLabel="Vorheriges",this._first=!0,this._last=!1,this._currentSlide=1,this._offset=0,this._focusMode=!1,this._canMove=!0,this._initialized=!1,this._imageZoom={},this._swipeTreshold=80,this._touchstartX=0,this._touchstartY=0,this._touches=0}_move(t){if(this._canMove){this._canMove=!1;let e=this._current.nextElementSibling;"prev"===t&&(e=this._current.previousElementSibling),Number.isInteger(t)&&(e=this._items[t]),this._current.classList.remove("current"),e.classList.add("current","active"),e.removeAttribute("inert"),this._positionSlide(e),"prev"===t?this._currentSlide--:"next"===t?this._currentSlide++:this._currentSlide=t+1;let i=`Element ${this._currentSlide}`;this._items[this._currentSlide-1].getAttribute("alt")&&(i=this._items[this._currentSlide-1].getAttribute("alt")),this._output.innerHTML=i,this._wrapper.addEventListener("transitionend",(()=>{this._canMove=!0}))}}_positionSlide(){const t=parseInt(getComputedStyle(this).getPropertyValue("--carousel-shadow-offset"));this._offset=this._current.getBoundingClientRect().left-this._wrapper.getBoundingClientRect().left,this._offset=this._offset-t,this._wrapper.style.transform=`translateX(${-1*this._offset}px)`}_firstOrLast(){this._last=this._lastSlide.classList.contains("active"),this._first=!(this._currentSlide>1),this._initialized&&(this._last&&setTimeout((()=>{this.renderRoot.querySelector(".control--prev").focus()}),0),!this._last&&this._first&&setTimeout((()=>{this.renderRoot.querySelector(".control--next").focus()}),0))}prev(){1!==this._currentSlide&&(this._move("prev"),this._changeSlide())}next(){this._lastSlide.classList.contains("active")||(this._move("next"),this._changeSlide())}slide(t){this._items[t]&&t!==this._currentSlide-1&&(this._move(t),this._changeSlide(t+1))}_changeSlide(t){this.dispatchEvent(new CustomEvent("slideChanged",{detail:this._currentSlide,bubbles:!0})),this._lazyLoadContent(t||this._currentSlide+1)}_lazyLoadContent(t){const e=this._items[t-1];if(e&&(e.hasAttribute("data-src")||e.querySelector("[data-src]"))){const t=e.querySelector("[data-src]")??e;t.onload=()=>{t.classList.add("loaded")},t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src")}}firstUpdated(){this.shadowRoot.querySelector("slot").addEventListener("slotchange",(()=>{this._setWidth(),this._observeItems(),this._setItemClasses(),this._lazyLoadContent(2),this._addEvents()}))}_onResize(){this._positionSlide(this._current)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._onResize.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._removeEvents(),Object.keys(this._imageZoom).length&&this._imageZoom.resetZoom(),window.removeEventListener("resize",this._onResize)}_keyEvents(t){"ArrowRight"===t.code&&this.next(),"ArrowLeft"===t.code&&this.prev()}_removeEvents(){this.removeEventListener("keyup",this._keyEvents)}_handleTouch(t){(2===t.touches.length||at||(at=!0,window.setTimeout((function(){at=!1}),300),0))&&(t.preventDefault(),this._focusMode||(console.info("👉 Start touch in Carousel."),this._initFocusMode(t))),this._touchstartX=t.changedTouches[0].clientX,this._touchstartY=t.changedTouches[0].clientY,this._touches=t.touches.length}_handleTouchEnd(t){setTimeout((()=>{this._imageZoom.ready&&this._imageZoom.endHandler()}),150),this._touchendX=t.changedTouches[0].clientX,this._touchendY=t.changedTouches[0].clientY,this._touches<2&&this._handleSwipe()}_handleSwipe(){this._focusMode||(this._touchendX+this._swipeTreshold<this._touchstartX&&this.next(),this._touchendX-this._swipeTreshold>this._touchstartX&&this.prev())}_leaveFocusMode(t){if(this._focusMode){console.log("👉 Stop focusmode"),this._focusMode=!1,this.classList.remove("focusmode"),this._items.forEach((t=>{t.removeAttribute("hidden"),t.classList.remove("wm-image--zoom"),t.querySelector("img")&&t.querySelector("img").classList.remove("wm-image--zoom")}));const e=t.target;e.style.removeProperty("width"),e.style.removeProperty("aspect-ratio"),this._imageZoom.destroyEvents(),setTimeout((()=>{this.classList.remove("notransition")}),300)}}_initFocusMode(t){const e=t.target;if(!this._focusMode&&(console.log("👉 Start focusmode"),"IMG"===e.nodeName)){this._focusMode=!0,this.classList.add("focusmode"),this.classList.add("notransition");const i=e;this._items.forEach((t=>{t!==this._current&&(t.hidden=!0)}));const o=i.closest(".content-inner");o.addEventListener("reset",this._leaveFocusMode.bind(this)),this._imageZoom=new re({img:i,container:o,zoomedClass:"wm-image--zoomed"}),i.classList.add("wm-image--zoom"),setTimeout((()=>{this._imageZoom.startHandler(t,!0)}),150)}}_addEvents(){this.addEventListener("keyup",this._keyEvents),document.querySelector("dialog")&&document.querySelector("dialog").addEventListener("touchstart",se),this.addEventListener("touchstart",this._handleTouch),this.addEventListener("touchend",this._handleTouchEnd)}_setItemClasses(){this._items[0].classList.add("current","first"),this._items[this._items.length-1].classList.add("last")}_observeItems(){const t=new IntersectionObserver(this._handleIntersection.bind(this),{root:this,threshold:.9});for(let e=0;e<this._items.length;e++){const i=this._items[e];t.observe(i)}}_setWidth(){this.single&&(this.style.maxWidth=`${this.single}px`)}_handleIntersection(t){t.map((t=>{const e=t.target;return e.classList.contains("wm-image--zoom")||(t.isIntersecting?(e.classList.add("active"),e.removeAttribute("inert")):(e.setAttribute("inert",""),e.classList.remove("active"))),this._firstOrLast(),t})),this._initialized=!0}render(){const t={"control--inactive":this._last},e={"control--inactive":this._first};return B`
        <div>
          <button class="control control--prev ${Vt(e)}" aria-label="${this.prevLabel}" @click="${this.prev}"></button>
          <button class="control control--next ${Vt(t)}" aria-label="${this.nextLabel}" @click="${this.next}"></button>
        </div>
        <div class="inner">
          <div class="strip">
            <slot @slotchange="${this._rerender}"></slot>
          </div>
        </div>
  
      `}}customElements.define("wm-carousel",ae);const ne=[s`
    * {
      box-sizing: border-box;
    }
  
    :host {
      display: inline-flex;
      font-weight: var(--cta-font-weight);
      font-variation-settings: var(--cta-font-variation-settings);
    }
  
    :host([clean="true"]) {
      font-weight: var(--wm-font-weight-normal);
      font-variation-settings: var(--wm-font-weight-normal);
    }
  
    ::slotted(a:is(:link, :visited)) {
      --link-color: var(--cta-color-link) !important;
      --link-color-visited: var(--cta-color-visited) !important;
      color: var(--link-color);
    }
  
    ::slotted(:is(a, button)) {
      background: var(--cta-icon) no-repeat center right 0.5rem !important;
      display: inline-block !important;
      padding: var(--cta-padding) !important;
      text-decoration: none !important;
      transition: background 0.3s !important;
      width: 100% !important;
    }
  
    ::slotted(:is(a, button):is(:hover, :focus-visible)) {
      background-position: 100% !important;
    }
  
    ::slotted(button) {
      border: none !important;
      color: currentColor !important;
      text-transform: none !important;
      cursor: pointer;
      text-align: left !important;
    }
  
    /* Full width links */
    :host([full="true"]) {
      width: 100%;
    }
  
    /* Display arrow left instead of right */
    :host([start="true"]) ::slotted(:is(a, button)) {
      background-image: var(--cta-icon-start) !important;
      background-position: center left !important;
      padding: var(--cta-padding-start) !important;
      text-align: right !important;
      justify-content: end;
    }
  
    :host([start="true"]) ::slotted(:is(a, button):is(:hover, :focus-visible)) {
      background-position: center left -0.5rem !important;
    }
  `],le=[s`
  :host {
    --cta-icon: var(--_cta-icon, none);
    --cta-icon-start: var(--_cta-icon-start, none);
    --cta-color-link: var(--_cta-color-link, var(--site-color));
    --cta-color-visited: var(--_cta-color-visited, var(--site-color));
    --cta-font-variation-settings: var(--_cta-font-variation-settings, normal);
    --cta-font-weight: var(--_cta-font-weight, bold);
    --cta-padding: var(--_cta-padding, .5rem .5rem .5rem 0);
    --cta-padding-start: var(--_cta-padding-start, .5rem 0 .5rem .5rem .5rem);
  }`];customElements.define("wm-cta",class extends Q{static properties={full:{type:String,reflect:!0},start:{type:String,reflect:!0},clean:{type:String,reflect:!0}};static styles=[le,ne];constructor(){super(),this.full="false",this.start="false",this.clean="false"}render(){return B`
        <slot></slot>
      `}});const ce=t=>{class e extends t{static properties={autocomplete:{type:String},error:{type:String},disabled:{type:Boolean},hideAsterisk:{type:Boolean},hideLabel:{type:Boolean},hint:{type:String},info:{type:String},id:{type:String},label:{type:String},name:{type:String},required:{type:Boolean},requiredText:{type:String},value:{type:String},_id:{type:String,attribute:!1},_hasError:{type:Boolean},_hasHint:{type:Boolean},_hasInfo:{type:Boolean},_infoOpen:{type:Boolean}};firstUpdated(){""!==this.label&&"true"!==this.label||console.error("Das label muss angegeben werden! Um labels zu verstecken, hideLabel verwenden.")}constructor(){super(),this.autocomplete=void 0,this.disabled=!1,this.error=void 0,this.hint=void 0,this.hideAsterisk=!1,this.hideLabel=!1,this.id=void 0,this.info=void 0,this.label="",this.name=void 0,this.required=!1,this.requiredText="Pflichtfeld",this.value="",this._id=`wm-form_${rt()}`,this._hasHint=!1,this._hasInfo=!1,this._infoOpen=!1,this._hasError=!1,this._msgID=!1,this._slotController=new Ht(this)}updated(t){t.has("id")&&(this._id=this.id),this._hasHint=this.hint||this._slotController.hasNamedSlot("hint"),this._hasInfo=this.info||this._slotController.hasNamedSlot("info"),this._hasError=this.error||this._slotController.hasNamedSlot("error")}_renderLabel(){const t={"has-error":this._hasError,"wm-h-vh":this.hideLabel};return B`
          <label for="${this._id}" class="${Vt(t)}">
            ${this.label}
            ${Bt(this.required,(()=>B`
                ${this.hideAsterisk?`(${this.requiredText})`:B`<abbr title="${this.requiredText}">*</abbr>`}
              `))}
          </label>
        `}_renderInfoText(){const t={"info-visible":this._infoOpen};return B`
          <div
            class="info ${Vt(t)}"
            aria-hidden="${!this._infoOpen}"
          >
            <div class="info-inner">
              <wm-highlight color="frischgruen-light">
                <slot name="info">${this.info}</slot>
              </wm-highlight>
            </div>
          </div>
        `}_renderInfoButton(){return B` <wm-button kind="round" color="success" @click="${this._toggleInfo}" class="info-button">
          <button aria-expanded="${this._infoOpen}">
            <wm-icon iconid="info"></wm-icon>
          </button>
        </wm-button>`}_toggleInfo(){this._infoOpen=!this._infoOpen}_renderItem(t){return B`
          ${Bt("checkbox"===this.type||"radio"===this.type,(()=>B`
              ${t} 
              ${this._renderLabel()}
              ${Bt(this._hasInfo,(()=>this._renderInfoText()))}
            `),(()=>B`
              ${this._renderLabel()}
              <wm-stack equal="false" gap="xs" horizontal="true">
                <div>
                  ${t}
                  ${Bt(this._hasInfo,(()=>this._renderInfoText()))}
                </div>
                ${Bt(this._hasInfo,(()=>this._renderInfoButton()))}
              </wm-stack>
            `))}
          
          ${Bt(this._hasHint||this._hasError,(()=>B`
              <div class="wm-forms-message" id="message">
                <div class="has-error"><slot name="error">${this.error}</slot></div>
                <div><slot name="hint">${this.hint}</slot></div>
              </div>
            `))}
        `}}return e},he={},de=ft(class extends wt{constructor(t){if(super(t),t.type!==bt&&t.type!==mt&&t.type!==vt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===I||e===H)return e;const i=t.element,o=t.name;if(t.type===bt){if(e===i[o])return I}else if(t.type===vt){if(!!e===i.hasAttribute(o))return I}else if(t.type===mt&&i.getAttribute(o)===e+"")return I;return((t,e=he)=>{t._$AH=e;
  /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */})(t),e}}),pe=[s`
    * {
      box-sizing: border-box;
    }
  
    :host {
      display: block;
    }
  
    .has-error {
      color: var(--wm-color-ui-error);
    }
  
    .info {
      --_height: 0fr;
      
      display: grid;
      grid-template-rows: var(--_height);
      transition: grid-template-rows 0.3s;
      margin-block-start: 0.2rem;
    }
    
    .info-inner {
      overflow:hidden;
    }
  
    .info-visible {
      --_height: 1fr;
    }
  
    .info-button {
      position: relative;
      inset-block-start: 0.35rem;
      flex-grow: 0 !important;
    }
  `],ge=[s`
      .wm-h-vh {
        position: absolute;
        white-space: nowrap;
        width: 1px;
        height: 1px;
        overflow: hidden;
        border: 0;
        padding: 0;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        margin: -1px;
      }
    `];
  /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class me extends(ce(Q)){static properties={checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0}};static styles=[xt,pe,ge];constructor(){super(),this.checked=!1,this.indeterminate=!1,this.type="checkbox"}_handleClick(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("wm-change",{detail:this.checked,bubbles:!0,composed:!0}))}render(){return this._renderItem(B`
        <input 
          autocomplete=${It(this.autocomplete)}
          type="${this.type}" 
          .indeterminate=${de(this.indeterminate)}
          .checked=${de(this.checked)}
          aria-describedby="${It(this._hasHint||this._hasError?"message":void 0)}"
          aria-disabled="${It(!!this.disabled||void 0)}"
          aria-invalid="${It(!!this._hasError||void 0)}"
          ?required=${this.required}
          id="${this._id}"
          .value=${de(this.value)}
          @input="${this._handleInput}" 
          @click="${this._handleClick}" 
        >
      `)}}customElements.define("wm-checkbox",me);const ue=[s`
    * {
      box-sizing: border-box;
    }
  
    :host {
      display: block;
      align-self: start;
      text-align: left;
    }
  
    [hidden] {
      display: none !important;
    }
  `];customElements.define("wm-copyright",class extends Q{get _images(){return document.querySelectorAll('img[title^="copyright:"]')??null}static properties={_credits:{type:Array}};static styles=[ue];constructor(){super(),this._credits=[]}connectedCallback(){super.connectedCallback();for(const t of this._images){const e=t.getAttribute("title");this._credits.push(e.split("copyright: ")[1])}}render(){return B`
        <wm-toggle ?hidden="${!this._credits.length}">
          <strong slot="label">Foto-Credits:</strong>
          <div slot="content">
            <wm-list>
              <ul>
                ${this._credits.map((t=>B`<li>${t}</li>`))}
              </ul>
            </wm-list>
          </div>
        </wm-toggle>
      `}});customElements.define("wm-fetch",class extends Q{static properties={url:{type:String,reflect:!0},dataset:{type:String},pagination:{type:String},itemsperpage:{type:Number,reflect:!0},_itemsPerSet:{type:Number,reflect:!0},_results:{type:Array}};get _resultsContainer(){return this.querySelector('[slot="results"]')??null}get _content(){return this._resultsContainer?.querySelector("[data-fetch-content]")??null}get _attributes(){return this._resultsContainer?.querySelectorAll("[data-fetch-attributes]")??null}get _template(){return this.querySelector("template")??null}constructor(){super(),this.url="",this.dataset=void 0,this._results="",this.itemsperpage=5,this._itemsPerSet=this.itemsperpage,this.pagination="none"}createRenderRoot(){return this}updated(t){t.has("itemsperpage")&&(this._itemsPerSet=this.itemsperpage),t.has("url")&&this._fetchData()}_fetchData(){fetch(this.url).then((t=>t.json())).then((t=>{this._results=this.dataset?t[this.dataset]:t,this._displayData(!0),this.dispatchEvent(new CustomEvent("fetched",{detail:this._results.length,bubbles:!0,composed:!0}))}))}_displayData(){if(this._content){this._content.innerHTML="";for(let t=0;t<this._itemsPerSet;t++){const e=this._results[t];if(e){const t=this._template.content.cloneNode(!0).children[0],i=t.querySelectorAll("[data-fetch-field]");for(let t=0;t<i.length;t++){const o=i[t];o.textContent=st(o.dataset.fetchField,e)}this._replaceAttributes(t.querySelectorAll("[data-fetch-attribute]"),e),this._content.appendChild(t)}}}else this._attributes&&this._replaceAttributes(this._attributes,this._results[0])}_replaceAttributes(t,e){for(let i=0;i<t.length;i++){const o=t[i];for(const t in o.dataset)if(-1!==t.indexOf("fetchAttribute")&&o.dataset[t]){const i=o.dataset[t].split(":");o.setAttribute(i[0],st(i[1],e))}}}_loadMore(){this._itemsPerSet=this._itemsPerSet+this.itemsperpage,this._displayData()}connectedCallback(){super.connectedCallback()}render(){return B`
        <wm-stack vertical gap="xs">
          <div><slot name="results"></slot></div>
          <div><slot name="template"></slot></div>
          ${"button"===this.pagination&&this._itemsPerSet<this._results.length?B`
            <wm-button @click="${this._loadMore}">
              <button>Mehr laden</button>
            </wm-button>`:""}
        </wm-stack>
      `}});class be extends Q{get _fieldsets(){return this.querySelectorAll("fieldset")??null}get _lists(){return this.querySelectorAll(".list")??null}get _toggles(){return this.querySelectorAll("wm-toggle")??null}get _inputs(){return this.querySelectorAll("input:not(.check-all)")??null}static properties={label:{type:String,reflect:!0},searchlabel:{type:String,reflect:!0},dismisslabel:{type:String,reflect:!0},type:{type:String,reflect:!0},open:{type:Boolean,reflect:!0},controls:{type:Boolean,reflect:!0},totals:{type:Object,attribute:!1},_selection:{type:Array,attribute:!1},_newSelection:{type:Array,attribute:!1,reflect:!0}};constructor(){super(),this.label="Erweiterte Filter",this.searchlabel="Anwenden",this.dismisslabel="Abbrechen",this.type=void 0,this.open=void 0,this.controls=void 0,this.totals={all:{total:this._inputs.length,checked:0}},this._selection=[],this._newSelection=[]}connectedCallback(){super.connectedCallback(),this._registerCheckboxes(),this._updateTotalChecked()}updated(t){t.has("_newSelection")&&(this._updateCheckboxes(),this._updateTotalChecked())}firstUpdated(){this._addEvents()}_updateTotalChecked(){this.totals.all.checked=0,Array.from(this._fieldsets).forEach(((t,e)=>{this._newSelection[e].checked=Array.from(t.querySelectorAll("input")).filter((t=>t.checked)).length,this.totals.all.checked+=this._newSelection[e].checked})),this.requestUpdate()}_addEvents(){this.addEventListener("change",this._check),this.addEventListener("filter-selection-removed",this._uncheck),document.addEventListener("click",this._clickOutSide.bind(this))}_clickOutSide(t){!t.target.closest("wm-filter")&&this.open&&this._toggleDropdown()}_uncheck(t){Array.from(this._newSelection).forEach(((e,i)=>{e.items.forEach((e=>{if(0===t.detail){e.checked=!1,this.querySelector(`#${e.id}`).checked=!1;const t=new URL(document.location).searchParams;t.delete(e.name),window.history.replaceState(null,"",`${window.location.origin}${window.location.pathname}?${t}`)}else e.id===t.detail&&(e.checked=!1,this.querySelector(`#${e.id}`).checked=!1,window.history.replaceState(null,"",`${window.location.origin}${window.location.pathname}${window.location.search.replace(`${encodeURI(e.name)}=${e.value}`,"")}`))})),this._updateParentCheckbox(i)})),this._selection=JSON.parse(JSON.stringify(this._newSelection)),this._updateTotalChecked()}_check(t){if(t.target.classList.contains("check-all"))return;const e=t.target.dataset.index;this._newSelection[e].items.map((e=>(e.value===t.target.value&&(e.checked=!e.checked),e))),this._updateParentCheckbox(e),this._updateTotalChecked()}_updateParentCheckbox(t){const e=this._newSelection[t].items.filter((t=>t.checked)).length,i=this._lists[t].querySelector(".check-all");i.indeterminate=!1,i.checked=!0,0===e?i.checked=!1:this._newSelection[t].items.length!==e&&(i.indeterminate=!0)}_registerCheckboxes(){for(let t=0;t<this._fieldsets.length;t++){const e=this._fieldsets[t],i=e.querySelector("legend"),o=e.querySelectorAll('input[type="checkbox"], input[type="radio"]'),r=new URL(document.location).searchParams.getAll(o[0].name);this._selection.push({total:o.length,checked:0,items:[]});for(let s=0;s<o.length;s++){const a=o[s];a.dataset.index=t,this._selection[t].items.push({id:a.id,parentid:this.id,parentlabel:i.textContent,value:a.value,name:a.name,label:e.querySelector(`[for="${a.id}"]`).textContent,checked:-1!==r.indexOf(a.value)})}}this._newSelection=JSON.parse(JSON.stringify(this._selection)),this._showSelection(this._newSelection)}_checkAll(t,e){this._newSelection[t].items=this._newSelection[t].items.filter((t=>(t.checked=e.target.checked,t)));const i=this._newSelection;this._newSelection=[],this._newSelection=i}_updateCheckboxes(){Array.from(this._newSelection).forEach(((t,e)=>{t.items.forEach(((t,i)=>{this._fieldsets[e].querySelectorAll("input")[i].checked=t.checked})),this._updateParentCheckbox(e)}))}_abort(){this._newSelection=JSON.parse(JSON.stringify(this._selection)),"dropdown"===this.type&&this._toggleDropdown()}submit(){this._selection=JSON.parse(JSON.stringify(this._newSelection)),this._showSelection(this._selection),"dropdown"===this.type&&this.open&&this._toggleDropdown()}_showSelection(t){setTimeout((()=>{this.dispatchEvent(new CustomEvent("filter-selected",{detail:t,bubbles:!0,composed:!0}))}),0)}_toggleDropdown(){this.open=!this.open,this.open&&(document.querySelector("wm-filter[open]")&&document.querySelector("wm-filter[open]")._toggleDropdown(),setTimeout((()=>{this._toggles.forEach((t=>t.updateHeight()))}),0))}_renderCheckboxes(){return B`
        <div>
          ${Array.from(this._fieldsets).map(((t,e)=>{const i=t.querySelector("legend");return i.classList.add("wm-h-vh"),B`
            <div class="list">
              <input type="checkbox" class="check-all" id="check_${e}" @change="${this._checkAll.bind(this,e)}" indeterminate="true">
              <label for="check_${e}" class="wm-h-vh">${i.textContent}</label>
  
              <wm-toggle full open=${It(1===this._fieldsets.length||void 0)}">
                <span slot="label">
                  <strong>${i.textContent}</strong> 
                  ${Bt(this._newSelection[e].checked,(()=>B`(${this._newSelection[e].checked} von ${this._newSelection[e].items.length})`))}
                  </span>
                <div slot="content">
                  ${t}
                </div>
              </wm-toggle>
            </div>
            `}))}
        </div>
      `}_renderTotalSelected(){return B`
        ${Bt(this.totals.all.checked>0,(()=>B`
          (${this.totals.all.checked} von ${this.totals.all.total})
        `),(()=>{}))}
      `}_renderFilterControls(){return B`${Bt(this.controls,(()=>B`
        <wm-stack gap="s">
          <wm-button full kind="primary">
            <button @click="${this.submit}">
              ${this.searchlabel}
            </button>
          </wm-button>
          <wm-button full kind="secondary">
            <button @click="${this._abort}" type="button">
              ${this.dismisslabel}
            </button>
          </wm-button>
        </wm-stack>
      `))}`}_renderFilters(){return B`
      ${Bt("dropdown"===this.type,(()=>B`
        <strong aria-hidden="true">${this.label}</strong>
  
        <div class="filter-dropdown-wrapper">
          <button class="filter-dropdown-button" aria-expanded="${this.open}" @click="${this._toggleDropdown}" type="button">
            ${this.label}
            ${this._renderTotalSelected()}
          </button>
  
          <div class="filter-dropdown-content" hidden>
            <wm-stack vertical gap="xs">
              ${this._renderCheckboxes()}
              ${Bt(this.totals.all.checked>0,(()=>B`
                ${this._renderFilterControls()}
              `),(()=>B`
  
              ${Bt(this.controls,(()=>B`<wm-button full kind="primary" color="nebelgrau">
                <button @click="${this._toggleDropdown}"  type="button">
                  Schliessen
                </button>
              </wm-button>`))}
            `))}
            </wm-stack>
          </div>
        </div>
  
      `),(()=>B`
        <wm-stack vertical gap="xs">
          <h3>${this.label} ${this._renderTotalSelected()}</h3>
  
          ${this._renderCheckboxes()}
          ${this._renderFilterControls()}
        </wm-stack>
      
      `))}
      `}createRenderRoot(){return this}render(){return B`
        ${this._renderFilters()}
        <slot></slot>
      `}}customElements.define("wm-filter",be);customElements.define("wm-filter-selection",class extends Q{static properties={filterid:{type:String,reflect:!0},resetlabel:{type:String,reflect:!0},_selectedElements:{type:Array}};constructor(){super(),this.filterid=void 0,this.resetLabel="Alle entfernen",this._selectedElements=[]}connectedCallback(){super.connectedCallback(),this.filterid||console.error("Bitte filterid angeben."),this._addEvents()}_addEvents(){this.filterid.replaceAll(" ","").split(",").forEach((t=>{document.querySelector(`#${t}`).addEventListener("filter-selected",this._getSelections.bind(this))}))}_getSelections(t){t.detail.forEach((t=>{this._selectedElements=[...this._selectedElements,...t.items.filter((t=>t.checked))]})),this._selectedElements=[...new Map(this._selectedElements.map((t=>[t.id,t]))).values()]}_remove(t){let e=t.target.dataset.id;t.target.dataset.id?this._selectedElements=this._selectedElements.filter((e=>e.id!==t.target.dataset.id)):(this._selectedElements=[],e=0);t.target.dataset.parentid.replaceAll(" ","").split(",").forEach((t=>{document.querySelector(`#${t}`).dispatchEvent(new CustomEvent("filter-selection-removed",{detail:e,bubbles:!0,composed:!0}))})),this.dispatchEvent(new CustomEvent("filter-updated",{detail:"",bubbles:!0,composed:!0}))}createRenderRoot(){return this}render(){return B`
      <div>
        <wm-stack grow="false" gapx="s" gapy="xs" wrap="true">
          ${this._selectedElements.map((t=>B`
              <wm-button kind="clean">
                <button @click="${this._remove}" data-id="${t.id}" data-parentid="${t.parentid}" type="button">
                  ${t.parentlabel}: ${t.label}
                  <wm-icon iconid="close" width="16" height="16"></wm-icon>
                </button>
                </wm-button>
            `))}
        
          ${Bt(this._selectedElements.length,(()=>B`
            <wm-button kind="tertiary">
              <button @click="${this._remove}" data-parentid="${this.filterid}" type="button">
                ${this.resetLabel}
              </button>
            </wm-button>
          `))}
        </wm-stack>
        
        <slot></slot>
      </div>
      `}});const ve=[s`
  * {
    box-sizing: border-box;
  }
  
  /* TODO: define grid columns as CSS properties globally  */
  :host {
    --grid-template-columns-s: 4;
    --grid-template-columns-m: 3;
    --grid-template-columns-l: 2;
    --grid-template-columns-full: 1;
  }
  
  :host {
    --gap: var(--grid-spacing);
    --cols: none;
  
    display: grid;
    flex-grow: unset !important;
    grid-gap: var(--gap);
    grid-template-columns: var(--cols);
  }
  
  :host([size="s"]) {
    --cols: repeat(auto-fill,minmax(15rem, 1fr));
  }
  
  :host([size="full"]) {
    --cols: repeat(var(--grid-template-columns-full), 1fr);
  }
  
  @media (min-width: 48em) {
    :host([size="m"]) {
      --cols: repeat(auto-fill,minmax(19rem, 1fr));
    }
  
    :host([size="l"]) {
      --cols: repeat(auto-fill,minmax(25rem, 1fr));
    }
  }
  
  @media (min-width: 64em) {
    :host([size="s"]) {
      --cols: repeat(var(--grid-template-columns-s), 1fr);
    }
    :host([size="m"]) {
      --cols: repeat(var(--grid-template-columns-m), 1fr);
    }
    :host([size="l"]) {
      --cols: repeat(var(--grid-template-columns-l), 1fr);
    }
  }
  
  :host([gap="xs"]) {
    --gap: var(--grid-spacing-xs);
  }
  
  :host([gap="s"]) {
    --gap: var(--grid-spacing-s);
  }
  
  :host([gap="m"]) {
    --gap: var(--grid-spacing-m);
  }
  
  :host([gap="l"]) {
    --gap: var(--grid-spacing-l);
  }
  
  ::slotted(*) {
    max-width: 100%;
  }
  `],fe=[s`
  :host {
    --grid-spacing: var(--_grid-spacing, 1rem);
    --grid-spacing-xs: var(--_grid-spacing-xs, 0.625rem);
    --grid-spacing-s: var(--_grid-spacing-s, 0.9375rem);
    --grid-spacing-m: var(--_grid-spacing-m, 1.25rem);
    --grid-spacing-l: var(--_grid-spacing-l, 1.875rem);
  }`];customElements.define("wm-grid",class extends Q{static properties={gap:{type:String,reflect:!0},size:{type:String,reflect:!0}};constructor(){super(),this.gap="default",this.size="m"}static styles=[fe,ve];render(){return B`
        <slot></slot>
      `}});
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  class we extends _t{}we.directiveName="unsafeSVG",we.resultType=2;const _e=ft(we),ye=[s`
  * {
    box-sizing: border-box;
  }
  
  :host {
    display: inline-flex;
  }
  
  .wm-icon-wrapper {
    block-size: fit-content;
    display: flex;
    gap: var(--wm-spacing-xs);
  }
  `];customElements.define("wm-icon",class extends Q{static properties={iconid:{type:String},width:{type:Number},height:{type:Number},class:{type:String},_accessibleName:{type:String,attribute:!1}};static styles=[ye];constructor(){super(),this.width=26,this.height="auto",this.class="",this.iconid="",this._accessibleName=""}firstUpdated(){this._accessibleName=this.shadowRoot.querySelector("slot")?.assignedNodes()[0]?.textContent}_attrDefined(t,e){return It(void 0!==t?e||t:void 0)}_renderSVG(){return B`
        <div class="wm-icon-wrapper">
        <svg
          class="wm-icon ${this.class}" 
          width="${this.width}" 
          height="${"auto"!==this.height?this.height:this.width}" 
          role="${this._attrDefined(this._accessibleName,"img")}" 
          aria-label="${this._attrDefined(this._accessibleName)}"
          aria-hidden="${It(void 0===this._accessibleName?"true":void 0)}"
        >
          <title><slot></slot></title>
            ${_e(`<use href="/wiener-melange/assets/icons/sprite.symbol.svg#${this.iconid}"/>`)}
          </svg>
        </div>
      `}render(){return B`
        ${this._renderSVG()}
      `}});const ke=t=>{class e extends(ce(t)){static properties={maxlength:{type:Number},placeholder:{type:String}};static styles=[xt,pe,ge];constructor(){super(),this.maxlength=void 0,this.placeholder=void 0}_handleInput(t){this.dispatchEvent(new CustomEvent("wm-input",{detail:t.target.value,bubbles:!0,composed:!0}))}_renderElement(t){return this._renderItem(B`        
          ${t}
        `)}}return e};class xe extends(ke(Q)){static properties={maxlength:{type:Number},type:{type:String}};constructor(){super(),this.type="text"}render(){return this._renderElement(B`
        <input 
          type="${this.type}" 
          autocomplete=${It(this.autocomplete)}
          aria-describedby="${It(this._hasHint||this._hasError?"message":void 0)}"
          aria-disabled="${It(!!this.disabled||void 0)}"
          aria-invalid="${It(!!this._hasError||void 0)}"
          placeholder="${It(this.placeholder)}"
          ?required=${this.required}
          maxlength="${It(this.maxlength)}"
          id="${this._id}"
          .value=${de(this.value)}
          @input="${this._handleInput}" 
        >
      `)}}customElements.define("wm-input",xe);const Ee=[s`
  :host {
    --highlight-background: var(--_highlight-background, gray);
    --highlight-color: var(--_highlight-color, #000000);
    --highlight-padding: var(--_highlight-padding, 1rem);
    --highlight-padding-large: var(--_highlight-padding-large, 1rem 3rem);
  }`],Ce=[s`
  * {
    box-sizing: border-box;
  }
  
  :host {
    background-color: var(--highlight-background);
    color: var(--highlight-color);
    display: block;
    padding: var(--highlight-padding);
  }
  
  :host([type="large"]) {
    background-color: transparent;
    border-block: 5px solid var(--highlight-background);
  }
  
  @media(min-width: 1024px) {
    :host([type="large"]) {
      padding: var(--highlight-padding-large);
    }
  }
  
  :host([color="weiss"]) { 
    --highlight-background: var(--wm-color-weiss) !important;
    border: 1px solid var(--wm-color-nebelgrau);
  }
  
  :host([color="nebelgrau"]) { 
    --highlight-background: var(--wm-color-nebelgrau) !important;
  }
  
  :host([color="frischgruen"]) {
    --highlight-background: var(--wm-color-frischgruen) !important;
  }
  
  :host([color="frischgruen-light"]) {
    --highlight-background: var(--wm-color-frischgruen-light) !important;
  }
  
  :host([color="wasserblau"]) {
    --highlight-background: var(--wm-color-wasserblau) !important;
  }
  
  :host([color="wasserblau-light"]) {
    --highlight-background: var(--wm-color-wasserblau-light) !important;
  }
  
  :host([color="fastschwarz"]) {
    --highlight-background: var(--wm-color-fastschwarz) !important; 
    --highlight-color: var(--wm-color-weiss) !important;
  }
  
  :host([color="fastschwarz"][type="large"]) {
    --highlight-color: var(--wm-color-fastschwarz) !important;
  }
  
  :host([color="abendstimmung"]) {
    --highlight-background: var(--wm-color-abendstimmung) !important;
    --highlight-color: var(--wm-color-weiss) !important;
  }
  
  :host([color="abendstimmung"][type="large"]) {
    --highlight-color: var(--wm-color-fastschwarz) !important;
  }
  
  :host([color="abendstimmung-light"]) {
    --highlight-background: var(--wm-color-abendstimmung-light) !important;
  }
  
  :host([color="goldgelb"]) {
    --highlight-background: var(--wm-color-goldgelb) !important;
  }
  
  :host([color="goldgelb-light"]) {
    --highlight-background: var(--wm-color-goldgelb-light) !important;
  }
  
  :host([color="flieder"]) {
    --highlight-background: var(--wm-color-flieder) !important;
  }
  
  :host([color="flieder-light"]) {
    --highlight-background: var(--wm-color-flieder-light) !important;
  }
  
  :host([color="morgenrot"]) {
    --highlight-background: var(--wm-color-morgenrot) !important;
  }
  
  :host([color="morgenrot-light"]) {
    --highlight-background: var(--wm-color-morgenrot-light) !important;
  }
  
  .content {
    max-width: var(--content-text-max-width);
  }
  `];customElements.define("wm-highlight",class extends Q{static properties={color:{type:String,reflect:!0},type:{type:String,reflect:!0}};static styles=[Ee,Ce];constructor(){super(),this.color="nebelgrau-light",this.type=""}render(){return B`
        <div class="content">
          <slot></slot>
        </div>
      `}});const $e=[s`
  * {
    box-sizing: border-box;
  }
  
  :host {
    display: block;
    hyphens: auto;
    -webkit-hyphens: auto;
  }
  
  :host([clean]) ::slotted(ul) {
    list-style: none;
    margin: 0;
    padding: 0 !important;
  }
  
  ::slotted(ul) {
    --_gap: 0;
    display: flex;
    flex-direction: column;
    gap: var(--_gap);
  }
  
  :host([type="horizontal"]) ::slotted(ul) {
    flex-direction: row;
    list-style: none;
    padding: 0 !important;
    flex-wrap: wrap;
  }
  
  :host([gap="xxs"]) ::slotted(ul) {
    --_gap: var(--wm-spacing-xxs);
  }
  
  :host([gap="xs"]) ::slotted(ul) {
    --_gap: var(--wm-spacing-xs);
  }
  
  :host([gap="s"]) ::slotted(ul) {
    --_gap: var(--wm-spacing-s);
  }
  
  :host([gap="m"]) ::slotted(ul) {
    --_gap: var(--wm-spacing-m);
  }
  
  :host([gap="l"]) ::slotted(ul) {
    --_gap: var(--wm-spacing-l);
  }
  
  :host([alignment="center"]) ::slotted(ul) {
    justify-content: center;
  }
  `],ze=[s`
  :host {
    --list-border: var(--_list-border, 1px solid);
    --list-border-color: var(--_list-border-color, var(--site-color));
    --list-gap: var(--_list-gap, 0.5rem);
    --list-link-bg: var(--_list-link-bg, none);
  }`];class Se extends Q{static properties={alignment:{type:String,reflect:!0},block:{type:Boolean,reflect:!0},clean:{type:Boolean,reflect:!0},gap:{type:String,reflect:!0},separator:{type:String,reflect:!0},type:{type:String,reflect:!0}};static styles=[ze,$e];constructor(){super(),this.clean=void 0,this.gap=void 0,this.type=void 0,this.separator=void 0,this.alignment=void 0,this.block=!1}render(){return B`
        <slot></slot>
      `}}customElements.define("wm-list",Se);const Ae=[s`
    .maplibregl-map{-webkit-tap-highlight-color:rgb(0 0 0/0);font:12px/20px Helvetica Neue,Arial,Helvetica,sans-serif;overflow:hidden;position:relative}.maplibregl-canvas{left:0;position:absolute;top:0}.maplibregl-map:fullscreen{height:100%;width:100%}.maplibregl-canvas-container.maplibregl-interactive,.maplibregl-ctrl-group button.maplibregl-ctrl-compass{cursor:grab;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.maplibregl-canvas-container.maplibregl-interactive.maplibregl-track-pointer{cursor:pointer}.maplibregl-canvas-container.maplibregl-interactive:active,.maplibregl-ctrl-group button.maplibregl-ctrl-compass:active{cursor:grabbing}.maplibregl-canvas-container.maplibregl-touch-zoom-rotate,.maplibregl-canvas-container.maplibregl-touch-zoom-rotate .maplibregl-canvas{touch-action:pan-x pan-y}.maplibregl-canvas-container.maplibregl-touch-drag-pan,.maplibregl-canvas-container.maplibregl-touch-drag-pan .maplibregl-canvas{touch-action:pinch-zoom}.maplibregl-canvas-container.maplibregl-touch-zoom-rotate.maplibregl-touch-drag-pan,.maplibregl-canvas-container.maplibregl-touch-zoom-rotate.maplibregl-touch-drag-pan .maplibregl-canvas{touch-action:none}.maplibregl-ctrl-bottom-left,.maplibregl-ctrl-bottom-right,.maplibregl-ctrl-top-left,.maplibregl-ctrl-top-right{pointer-events:none;position:absolute;z-index:2}.maplibregl-ctrl-top-left{left:0;top:0}.maplibregl-ctrl-top-right{right:0;top:0}.maplibregl-ctrl-bottom-left{bottom:0;left:0}.maplibregl-ctrl-bottom-right{bottom:0;right:0}.maplibregl-ctrl{clear:both;pointer-events:auto;transform:translate(0)}.maplibregl-ctrl-top-left .maplibregl-ctrl{float:left;margin:10px 0 0 10px}.maplibregl-ctrl-top-right .maplibregl-ctrl{float:right;margin:10px 10px 0 0}.maplibregl-ctrl-bottom-left .maplibregl-ctrl{float:left;margin:0 0 10px 10px}.maplibregl-ctrl-bottom-right .maplibregl-ctrl{float:right;margin:0 10px 10px 0}.maplibregl-ctrl-group{background:#fff;border-radius:4px}.maplibregl-ctrl-group:not(:empty){box-shadow:0 0 0 2px rgba(0,0,0,.1)}@media (-ms-high-contrast:active){.maplibregl-ctrl-group:not(:empty){box-shadow:0 0 0 2px ButtonText}}.maplibregl-ctrl-group button{background-color:transparent;border:0;box-sizing:border-box;cursor:pointer;display:block;height:29px;outline:none;padding:0;width:29px}.maplibregl-ctrl-group button+button{border-top:1px solid #ddd}.maplibregl-ctrl button .maplibregl-ctrl-icon{background-position:50%;background-repeat:no-repeat;display:block;height:100%;width:100%}@media (-ms-high-contrast:active){.maplibregl-ctrl-icon{background-color:transparent}.maplibregl-ctrl-group button+button{border-top:1px solid ButtonText}}.maplibregl-ctrl button::-moz-focus-inner{border:0;padding:0}.maplibregl-ctrl-attrib-button:focus,.maplibregl-ctrl-group button:focus{box-shadow:0 0 2px 2px #0096ff}.maplibregl-ctrl button:disabled{cursor:not-allowed}.maplibregl-ctrl button:disabled .maplibregl-ctrl-icon{opacity:.25}.maplibregl-ctrl button:not(:disabled):hover{background-color:rgb(0 0 0/5%)}.maplibregl-ctrl-group button:focus:focus-visible{box-shadow:0 0 2px 2px #0096ff}.maplibregl-ctrl-group button:focus:not(:focus-visible){box-shadow:none}.maplibregl-ctrl-group button:focus:first-child{border-radius:4px 4px 0 0}.maplibregl-ctrl-group button:focus:last-child{border-radius:0 0 4px 4px}.maplibregl-ctrl-group button:focus:only-child{border-radius:inherit}.maplibregl-ctrl button.maplibregl-ctrl-zoom-out .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-zoom-in .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E%3C/svg%3E")}@media (-ms-high-contrast:active){.maplibregl-ctrl button.maplibregl-ctrl-zoom-out .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-zoom-in .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E%3C/svg%3E")}}@media (-ms-high-contrast:black-on-white){.maplibregl-ctrl button.maplibregl-ctrl-zoom-out .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-zoom-in .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E%3C/svg%3E")}}.maplibregl-ctrl button.maplibregl-ctrl-fullscreen .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-shrink .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z'/%3E%3C/svg%3E")}@media (-ms-high-contrast:active){.maplibregl-ctrl button.maplibregl-ctrl-fullscreen .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-shrink .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z'/%3E%3C/svg%3E")}}@media (-ms-high-contrast:black-on-white){.maplibregl-ctrl button.maplibregl-ctrl-fullscreen .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-shrink .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z'/%3E%3C/svg%3E")}}.maplibregl-ctrl button.maplibregl-ctrl-compass .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='m10.5 14 4-8 4 8h-8z'/%3E%3Cpath d='m10.5 16 4 8 4-8h-8z' fill='%23ccc'/%3E%3C/svg%3E")}@media (-ms-high-contrast:active){.maplibregl-ctrl button.maplibregl-ctrl-compass .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='m10.5 14 4-8 4 8h-8z'/%3E%3Cpath d='m10.5 16 4 8 4-8h-8z' fill='%23999'/%3E%3C/svg%3E")}}@media (-ms-high-contrast:black-on-white){.maplibregl-ctrl button.maplibregl-ctrl-compass .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m10.5 14 4-8 4 8h-8z'/%3E%3Cpath d='m10.5 16 4 8 4-8h-8z' fill='%23ccc'/%3E%3C/svg%3E")}}.maplibregl-ctrl button.maplibregl-ctrl-terrain .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='%23333'%3E%3Cpath d='m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-terrain-enabled .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='%2333b5e5'%3E%3Cpath d='m1.754 13.406 4.453-4.851 3.09 3.09 3.281 3.277.969-.969-3.309-3.312 3.844-4.121 6.148 6.886h1.082v-.855l-7.207-8.07-4.84 5.187L6.169 6.57l-5.48 5.965v.871ZM.688 16.844h20.625v1.375H.688Zm0 0'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate:disabled .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23aaa'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Cpath d='m14 5 1 1-9 9-1-1 9-9z' fill='red'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-active .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-active-error .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e58978'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background-error .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-waiting .maplibregl-ctrl-icon{animation:maplibregl-spin 2s linear infinite}@media (-ms-high-contrast:active){.maplibregl-ctrl button.maplibregl-ctrl-geolocate .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate:disabled .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23999'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Cpath d='m14 5 1 1-9 9-1-1 9-9z' fill='red'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-active .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-active-error .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e58978'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background-error .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3C/svg%3E")}}@media (-ms-high-contrast:black-on-white){.maplibregl-ctrl button.maplibregl-ctrl-geolocate .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E")}.maplibregl-ctrl button.maplibregl-ctrl-geolocate:disabled .maplibregl-ctrl-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23666'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Cpath d='m14 5 1 1-9 9-1-1 9-9z' fill='red'/%3E%3C/svg%3E")}}@keyframes maplibregl-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}a.maplibregl-ctrl-logo{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='23' fill='none'%3E%3Cpath d='M17.408 16.796h-1.827l2.501-12.095h.198l3.324 6.533.988 2.19.988-2.19 3.258-6.533h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.929 5.644h-.098l-2.914-5.644-.757-1.71-.345 1.71zm1.958-3.42-.726 3.663a1.255 1.255 0 0 1-1.232 1.011h-1.827a1.255 1.255 0 0 1-1.229-1.509l2.501-12.095a1.255 1.255 0 0 1 1.23-1.001h.197a1.255 1.255 0 0 1 1.12.685l3.19 6.273 3.125-6.263a1.255 1.255 0 0 1 1.123-.695h.181a1.255 1.255 0 0 1 1.227.991l1.443 6.71a5.11 5.11 0 0 1 .314-.787l.009-.016a4.623 4.623 0 0 1 1.777-1.887c.782-.46 1.668-.667 2.611-.667a4.548 4.548 0 0 1 1.7.32l.306.134c.21-.16.474-.256.759-.256h1.694a1.255 1.255 0 0 1 1.212.925 1.255 1.255 0 0 1 1.212-.925h1.711c.284 0 .545.094.755.252.613-.3 1.312-.45 2.075-.45 1.356 0 2.557.445 3.482 1.4.314.319.566.676.763 1.064V4.701a1.255 1.255 0 0 1 1.255-1.255h1.86A1.255 1.255 0 0 1 54.44 4.7v9.194h2.217c.19 0 .37.043.532.118v-4.77c0-.356.147-.678.385-.906a2.416 2.416 0 0 1-.682-1.71c0-.665.267-1.253.735-1.7a2.448 2.448 0 0 1 1.722-.674 2.43 2.43 0 0 1 1.705.675c.211.2.381.43.504.683V4.7a1.255 1.255 0 0 1 1.255-1.255h1.744A1.255 1.255 0 0 1 65.812 4.7v3.335a4.76 4.76 0 0 1 1.526-.246c.938 0 1.817.214 2.59.69a4.47 4.47 0 0 1 1.67 1.743v-.98a1.255 1.255 0 0 1 1.256-1.256h1.777c.233 0 .451.064.639.174a3.407 3.407 0 0 1 1.567-.372c.346 0 .861.02 1.285.232a1.255 1.255 0 0 1 .689 1.004 4.73 4.73 0 0 1 .853-.588c.795-.44 1.675-.647 2.61-.647 1.385 0 2.65.39 3.525 1.396.836.938 1.168 2.173 1.168 3.528 0 .343-.02.694-.056 1.051a1.255 1.255 0 0 1-.947 1.09l.408.952a1.255 1.255 0 0 1-.477 1.552c-.418.268-.92.463-1.458.612-.613.171-1.304.244-2.049.244-1.06 0-2.043-.207-2.886-.698l-.015-.008c-.798-.48-1.419-1.135-1.818-1.963l-.004-.008a5.815 5.815 0 0 1-.548-2.512c0-.286.017-.567.053-.843a1.255 1.255 0 0 1-.333-.086l-.166-.004c-.223 0-.426.062-.643.228-.03.024-.142.139-.142.59v3.883a1.255 1.255 0 0 1-1.256 1.256h-1.777a1.255 1.255 0 0 1-1.256-1.256V15.69l-.032.057a4.778 4.778 0 0 1-1.86 1.833 5.04 5.04 0 0 1-2.484.634 4.47 4.47 0 0 1-1.935-.424 1.252 1.252 0 0 1-.764.258h-1.71a1.255 1.255 0 0 1-1.256-1.255V7.687a2.402 2.402 0 0 1-.428.625c.253.23.412.561.412.93v7.553a1.255 1.255 0 0 1-1.256 1.255h-1.843a1.25 1.25 0 0 1-.894-.373c-.228.23-.544.373-.894.373H51.32a1.255 1.255 0 0 1-1.256-1.255v-1.251l-.061.117a4.703 4.703 0 0 1-1.782 1.884 4.767 4.767 0 0 1-2.485.67 5.6 5.6 0 0 1-1.485-.188l.009 2.764a1.255 1.255 0 0 1-1.255 1.259h-1.729a1.255 1.255 0 0 1-1.255-1.255v-3.537a1.255 1.255 0 0 1-1.167.793h-1.679a1.25 1.25 0 0 1-.77-.263 4.47 4.47 0 0 1-1.945.429c-.885 0-1.724-.21-2.495-.632l-.017-.01a4.983 4.983 0 0 1-1.081-.836 1.255 1.255 0 0 1-1.254 1.312h-1.81a1.255 1.255 0 0 1-1.228-.99l-.782-3.625-2.044 3.939a1.255 1.255 0 0 1-1.115.676h-.098a1.255 1.255 0 0 1-1.116-.68l-2.061-3.994zM35.92 16.63l.207-.114.223-.15c.329-.237.574-.499.735-.785l.061-.118.033 1.332h1.678V9.242h-1.694l-.033 1.267c-.088-.22-.264-.438-.526-.658l-.032-.028a3.16 3.16 0 0 0-.668-.428l-.27-.12a3.293 3.293 0 0 0-1.235-.23c-.757 0-1.415.163-1.974.493a3.36 3.36 0 0 0-1.3 1.382c-.297.593-.444 1.284-.444 2.074 0 .8.17 1.503.51 2.107a3.795 3.795 0 0 0 1.382 1.381 3.883 3.883 0 0 0 1.893.477c.53 0 1.015-.11 1.455-.33zm-2.789-5.38c-.384.45-.575 1.038-.575 1.762 0 .735.186 1.332.559 1.794.384.45.933.675 1.645.675a2.25 2.25 0 0 0 .934-.19 2.17 2.17 0 0 0 .468-.29l.178-.161a2.163 2.163 0 0 0 .397-.561c.163-.333.244-.717.244-1.15v-.115c0-.472-.098-.894-.296-1.267l-.043-.077a2.211 2.211 0 0 0-.633-.709l-.13-.086-.047-.028a2.099 2.099 0 0 0-1.073-.285c-.702 0-1.244.231-1.629.692zm2.316 2.706c.163-.17.28-.407.28-.83v-.114c0-.292-.06-.508-.15-.68a.958.958 0 0 0-.353-.389.851.851 0 0 0-.464-.127c-.4 0-.56.114-.664.239l-.01.012c-.148.174-.275.45-.275.945 0 .506.122.801.27.99.097.11.266.224.68.224.303 0 .504-.09.687-.269zm7.545 1.705a2.626 2.626 0 0 0 .331.423c.213.22.464.402.755.548l.173.074c.433.17.93.255 1.49.255.68 0 1.295-.165 1.844-.493a3.447 3.447 0 0 0 1.316-1.4c.329-.603.493-1.299.493-2.089 0-1.273-.33-2.243-.988-2.913-.658-.68-1.52-1.02-2.584-1.02-.598 0-1.124.115-1.575.347a2.807 2.807 0 0 0-.415.262l-.199.166a3.35 3.35 0 0 0-.64.82V9.242h-1.712v11.553h1.729l-.017-5.134zm.53-1.138c.137.193.297.36.48.5l.155.11.053.034c.34.197.713.297 1.119.297.714 0 1.262-.225 1.645-.675.385-.46.576-1.048.576-1.762 0-.746-.192-1.338-.576-1.777-.372-.45-.92-.675-1.645-.675-.29 0-.569.053-.835.16a2.366 2.366 0 0 0-.284.136 1.99 1.99 0 0 0-.363.254 2.237 2.237 0 0 0-.46.569l-.082.162a2.56 2.56 0 0 0-.213 1.072v.115c0 .471.098.894.296 1.267l.135.211zm.964-.818a1.11 1.11 0 0 0 .367.385.937.937 0 0 0 .476.118c.423 0 .59-.117.687-.23.159-.194.28-.478.28-.95 0-.53-.133-.8-.266-.952l-.021-.025c-.078-.094-.231-.221-.68-.221a.995.995 0 0 0-.503.135l-.012.007a.859.859 0 0 0-.335.343c-.073.133-.132.324-.132.614v.115a1.43 1.43 0 0 0 .14.66zm15.7-6.222c.232-.23.346-.516.346-.856a1.053 1.053 0 0 0-.345-.79 1.175 1.175 0 0 0-.84-.329c-.34 0-.625.11-.855.33a1.053 1.053 0 0 0-.346.79c0 .34.115.625.346.855.23.23.516.346.856.346.34 0 .62-.115.839-.346zm4.337 9.314.033-1.332c.128.269.324.518.59.747l.098.081a3.727 3.727 0 0 0 .316.224l.223.122a3.21 3.21 0 0 0 1.44.322 3.785 3.785 0 0 0 1.875-.477 3.52 3.52 0 0 0 1.382-1.366c.352-.593.526-1.29.526-2.09 0-.79-.147-1.48-.444-2.073a3.235 3.235 0 0 0-1.283-1.399c-.549-.34-1.195-.51-1.942-.51a3.476 3.476 0 0 0-1.527.344l-.086.043-.165.09a3.412 3.412 0 0 0-.33.214c-.288.21-.507.446-.656.707a1.893 1.893 0 0 0-.099.198l.082-1.283V4.701h-1.744v12.095zm.473-2.509a2.482 2.482 0 0 0 .566.7c.078.065.159.125.245.18l.144.08a2.105 2.105 0 0 0 .975.232c.713 0 1.262-.225 1.645-.675.384-.46.576-1.053.576-1.778 0-.734-.192-1.327-.576-1.777-.373-.46-.921-.692-1.645-.692a2.18 2.18 0 0 0-1.015.235c-.147.075-.285.17-.415.282l-.15.142a2.086 2.086 0 0 0-.42.594c-.149.32-.223.685-.223 1.1v.115c0 .47.097.89.293 1.26zm2.616-.293c.157-.191.28-.479.28-.967 0-.51-.13-.79-.276-.961l-.021-.026c-.082-.1-.232-.225-.67-.225a.868.868 0 0 0-.681.279l-.012.011c-.154.155-.274.38-.274.807v.115c0 .285.057.499.144.669a1.13 1.13 0 0 0 .367.405c.137.082.28.123.455.123.423 0 .59-.118.686-.23zm8.266-3.013c.23-.087.472-.134.724-.14l.069-.002c.329 0 .542.033.642.099l.247-1.794c-.13-.066-.37-.099-.717-.099a2.3 2.3 0 0 0-.545.063 2.086 2.086 0 0 0-.411.148 2.18 2.18 0 0 0-.4.249 2.482 2.482 0 0 0-.485.499 2.659 2.659 0 0 0-.32.581l-.05.137v-1.48h-1.778v7.553h1.777v-3.884c0-.364.053-.678.159-.943a1.49 1.49 0 0 1 .466-.636 2.52 2.52 0 0 1 .399-.253 2.19 2.19 0 0 1 .224-.099zm9.784 2.656.05-.922c0-1.162-.285-2.062-.856-2.698-.559-.647-1.42-.97-2.584-.97-.746 0-1.415.163-2.007.493a3.462 3.462 0 0 0-1.4 1.382c-.329.604-.493 1.306-.493 2.106 0 .714.143 1.371.428 1.975.285.593.73 1.07 1.332 1.432.604.351 1.355.526 2.255.526.649 0 1.204-.062 1.668-.185l.044-.012.135-.04c.409-.122.736-.263.984-.421l-.542-1.267c-.2.108-.415.199-.642.274l-.297.087c-.34.088-.773.131-1.3.131-.636 0-1.135-.147-1.497-.444a1.573 1.573 0 0 1-.192-.193c-.244-.294-.415-.705-.512-1.234l-.004-.021h5.43zm-5.427-1.256-.003.022h3.752v-.138c-.007-.485-.104-.857-.288-1.118a1.056 1.056 0 0 0-.156-.176c-.307-.285-.746-.428-1.316-.428-.657 0-1.155.202-1.494.604-.253.3-.417.712-.494 1.234zm-27.053 2.77V4.7h-1.86v12.095h5.333V15.15zm7.103-5.908v7.553h-1.843V9.242h1.843z' fill='%23000' fill-opacity='.4' fill-rule='evenodd'/%3E%3Cpath d='m19.63 11.151-.757-1.71-.345 1.71-1.12 5.644h-1.827L18.083 4.7h.197l3.325 6.533.988 2.19.988-2.19L26.839 4.7h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.93 5.644h-.098l-2.913-5.644zm14.836 5.81c-.68 0-1.311-.16-1.893-.478a3.795 3.795 0 0 1-1.381-1.382c-.34-.604-.51-1.306-.51-2.106 0-.79.147-1.482.444-2.074a3.364 3.364 0 0 1 1.3-1.382c.559-.33 1.217-.494 1.974-.494a3.293 3.293 0 0 1 1.234.231 3.341 3.341 0 0 1 .97.575c.264.22.44.439.527.659l.033-1.267h1.694v7.553H37.18l-.033-1.332c-.186.395-.526.746-1.02 1.053a3.167 3.167 0 0 1-1.662.444zm.296-1.482c.626 0 1.152-.214 1.58-.642.428-.44.642-1.01.642-1.711v-.115c0-.472-.098-.894-.296-1.267a2.211 2.211 0 0 0-.807-.872 2.098 2.098 0 0 0-1.119-.313c-.702 0-1.245.231-1.629.692-.384.45-.575 1.037-.575 1.76 0 .736.186 1.333.559 1.795.384.45.933.675 1.645.675zm6.521-6.237h1.711v1.4c.604-1.065 1.547-1.597 2.83-1.597 1.064 0 1.926.34 2.584 1.02.659.67.988 1.641.988 2.914 0 .79-.164 1.487-.493 2.09a3.456 3.456 0 0 1-1.316 1.399 3.51 3.51 0 0 1-1.844.493c-.636 0-1.19-.11-1.662-.329a2.665 2.665 0 0 1-1.086-.97l.017 5.134h-1.728V9.242zm4.048 6.22c.714 0 1.262-.224 1.645-.674.385-.46.576-1.048.576-1.762 0-.746-.192-1.338-.576-1.777-.372-.45-.92-.675-1.645-.675-.395 0-.768.098-1.12.296-.34.187-.613.46-.822.823-.197.351-.296.763-.296 1.234v.115c0 .472.098.894.296 1.267.209.362.483.647.823.855.34.197.713.297 1.119.297z' fill='%23fff'/%3E%3Cpath d='M51.325 4.7h1.86v10.45h3.473v1.646h-5.333zm7.12 4.542h1.843v7.553h-1.843zm.905-1.415a1.159 1.159 0 0 1-.856-.346 1.165 1.165 0 0 1-.346-.856 1.053 1.053 0 0 1 .346-.79c.23-.219.516-.329.856-.329.329 0 .609.11.839.33a1.053 1.053 0 0 1 .345.79 1.159 1.159 0 0 1-.345.855c-.22.23-.5.346-.84.346zm7.875 9.133a3.167 3.167 0 0 1-1.662-.444c-.482-.307-.817-.658-1.004-1.053l-.033 1.332h-1.71V4.701h1.743v4.657l-.082 1.283c.186-.438.548-.812 1.086-1.119a3.486 3.486 0 0 1 1.778-.477c.746 0 1.393.17 1.942.51a3.235 3.235 0 0 1 1.283 1.4c.297.592.444 1.282.444 2.072 0 .8-.175 1.498-.526 2.09a3.52 3.52 0 0 1-1.382 1.366 3.785 3.785 0 0 1-1.876.477zm-.296-1.481c.713 0 1.26-.225 1.645-.675.384-.46.577-1.053.577-1.778 0-.734-.193-1.327-.577-1.776-.373-.46-.921-.692-1.645-.692a2.115 2.115 0 0 0-1.58.659c-.428.428-.642.992-.642 1.694v.115c0 .473.098.895.296 1.267a2.385 2.385 0 0 0 .807.872 2.1 2.1 0 0 0 1.119.313zm5.927-6.237h1.777v1.481c.176-.505.46-.91.856-1.217a2.14 2.14 0 0 1 1.349-.46c.351 0 .593.032.724.098l-.247 1.794c-.099-.066-.313-.099-.642-.099-.516 0-.988.164-1.416.494-.417.329-.626.855-.626 1.58v3.883h-1.777V9.242zm9.534 7.718c-.9 0-1.651-.175-2.255-.526-.603-.362-1.047-.84-1.332-1.432a4.567 4.567 0 0 1-.428-1.975c0-.8.164-1.502.493-2.106a3.462 3.462 0 0 1 1.4-1.382c.592-.33 1.262-.494 2.007-.494 1.163 0 2.024.324 2.584.97.57.637.856 1.537.856 2.7 0 .296-.017.603-.05.92h-5.43c.12.67.356 1.153.708 1.45.362.296.86.443 1.497.443.526 0 .96-.044 1.3-.131a4.123 4.123 0 0 0 .938-.362l.542 1.267c-.274.175-.647.329-1.119.46-.472.132-1.042.197-1.711.197zm1.596-4.558c.01-.68-.137-1.158-.444-1.432-.307-.285-.746-.428-1.316-.428-1.152 0-1.815.62-1.991 1.86h3.752z' fill='%23e1e3e9'/%3E%3Cg fill-rule='evenodd' stroke-width='1.036'%3E%3Cpath d='m8.166 16.146-.002.002a1.54 1.54 0 0 1-2.009 0l-.002-.002-.043-.034-.002-.002-.199-.162H4.377a.657.657 0 0 0-.659.659v1.84a.657.657 0 0 0 .659.659h5.565a.657.657 0 0 0 .659-.659v-1.84a.657.657 0 0 0-.659-.659H8.411l-.202.164zm-1.121-.905a.29.29 0 0 0 .113.023.286.286 0 0 0 .189-.07l.077-.063c.634-.508 4.672-3.743 4.672-7.575 0-2.55-2.215-4.625-4.938-4.625S2.221 5.006 2.221 7.556c0 3.225 2.86 6.027 4.144 7.137h.004l.04.038.484.4.077.063a.628.628 0 0 0 .074.047zm-2.52-.548a16.898 16.898 0 0 1-1.183-1.315C2.187 11.942.967 9.897.967 7.555c0-3.319 2.855-5.88 6.192-5.88 3.338 0 6.193 2.561 6.193 5.881 0 2.34-1.22 4.387-2.376 5.822a16.898 16.898 0 0 1-1.182 1.315h.15a1.912 1.912 0 0 1 1.914 1.914v1.84a1.912 1.912 0 0 1-1.914 1.914H4.377a1.912 1.912 0 0 1-1.914-1.914v-1.84a1.912 1.912 0 0 1 1.914-1.914zm3.82-6.935c0 .692-.55 1.222-1.187 1.222s-1.185-.529-1.185-1.222.548-1.222 1.185-1.222c.638 0 1.186.529 1.186 1.222zm-1.186 2.477c1.348 0 2.442-1.11 2.442-2.478S8.507 5.28 7.159 5.28 4.72 6.39 4.72 7.758s1.092 2.477 2.44 2.477zm2.048 7.71H5.114v-.838h4.093z' fill='%23000' fill-opacity='.4'/%3E%3Cpath d='M2.222 7.555c0-2.55 2.214-4.625 4.937-4.625 2.723 0 4.938 2.075 4.938 4.625 0 3.832-4.038 7.068-4.672 7.575l-.077.063a.286.286 0 0 1-.189.07.286.286 0 0 1-.188-.07l-.077-.063c-.634-.507-4.672-3.743-4.672-7.575zm4.937 2.68c1.348 0 2.442-1.11 2.442-2.478S8.507 5.28 7.159 5.28 4.72 6.39 4.72 7.758s1.092 2.477 2.44 2.477z' fill='%23e1e3e9'/%3E%3Cpath d='M4.377 15.948a.657.657 0 0 0-.659.659v1.84a.657.657 0 0 0 .659.659h5.565a.657.657 0 0 0 .659-.659v-1.84a.657.657 0 0 0-.659-.659zm4.83 1.16H5.114v.838h4.093z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");background-repeat:no-repeat;cursor:pointer;display:block;height:23px;margin:0 0 -4px -4px;overflow:hidden;width:88px}a.maplibregl-ctrl-logo.maplibregl-compact{width:14px}@media (-ms-high-contrast:active){a.maplibregl-ctrl-logo{background-color:transparent;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='23' fill='none'%3E%3Cpath d='M17.408 16.796h-1.827l2.501-12.095h.198l3.324 6.533.988 2.19.988-2.19 3.258-6.533h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.929 5.644h-.098l-2.914-5.644-.757-1.71-.345 1.71zm1.958-3.42-.726 3.663a1.255 1.255 0 0 1-1.232 1.011h-1.827a1.255 1.255 0 0 1-1.229-1.509l2.501-12.095a1.255 1.255 0 0 1 1.23-1.001h.197a1.255 1.255 0 0 1 1.12.685l3.19 6.273 3.125-6.263a1.255 1.255 0 0 1 1.123-.695h.181a1.255 1.255 0 0 1 1.227.991l1.443 6.71a5.11 5.11 0 0 1 .314-.787l.009-.016a4.623 4.623 0 0 1 1.777-1.887c.782-.46 1.668-.667 2.611-.667a4.548 4.548 0 0 1 1.7.32l.306.134c.21-.16.474-.256.759-.256h1.694a1.255 1.255 0 0 1 1.212.925 1.255 1.255 0 0 1 1.212-.925h1.711c.284 0 .545.094.755.252.613-.3 1.312-.45 2.075-.45 1.356 0 2.557.445 3.482 1.4.314.319.566.676.763 1.064V4.701a1.255 1.255 0 0 1 1.255-1.255h1.86A1.255 1.255 0 0 1 54.44 4.7v9.194h2.217c.19 0 .37.043.532.118v-4.77c0-.356.147-.678.385-.906a2.416 2.416 0 0 1-.682-1.71c0-.665.267-1.253.735-1.7a2.448 2.448 0 0 1 1.722-.674 2.43 2.43 0 0 1 1.705.675c.211.2.381.43.504.683V4.7a1.255 1.255 0 0 1 1.255-1.255h1.744A1.255 1.255 0 0 1 65.812 4.7v3.335a4.76 4.76 0 0 1 1.526-.246c.938 0 1.817.214 2.59.69a4.47 4.47 0 0 1 1.67 1.743v-.98a1.255 1.255 0 0 1 1.256-1.256h1.777c.233 0 .451.064.639.174a3.407 3.407 0 0 1 1.567-.372c.346 0 .861.02 1.285.232a1.255 1.255 0 0 1 .689 1.004 4.73 4.73 0 0 1 .853-.588c.795-.44 1.675-.647 2.61-.647 1.385 0 2.65.39 3.525 1.396.836.938 1.168 2.173 1.168 3.528 0 .343-.02.694-.056 1.051a1.255 1.255 0 0 1-.947 1.09l.408.952a1.255 1.255 0 0 1-.477 1.552c-.418.268-.92.463-1.458.612-.613.171-1.304.244-2.049.244-1.06 0-2.043-.207-2.886-.698l-.015-.008c-.798-.48-1.419-1.135-1.818-1.963l-.004-.008a5.815 5.815 0 0 1-.548-2.512c0-.286.017-.567.053-.843a1.255 1.255 0 0 1-.333-.086l-.166-.004c-.223 0-.426.062-.643.228-.03.024-.142.139-.142.59v3.883a1.255 1.255 0 0 1-1.256 1.256h-1.777a1.255 1.255 0 0 1-1.256-1.256V15.69l-.032.057a4.778 4.778 0 0 1-1.86 1.833 5.04 5.04 0 0 1-2.484.634 4.47 4.47 0 0 1-1.935-.424 1.252 1.252 0 0 1-.764.258h-1.71a1.255 1.255 0 0 1-1.256-1.255V7.687a2.402 2.402 0 0 1-.428.625c.253.23.412.561.412.93v7.553a1.255 1.255 0 0 1-1.256 1.255h-1.843a1.25 1.25 0 0 1-.894-.373c-.228.23-.544.373-.894.373H51.32a1.255 1.255 0 0 1-1.256-1.255v-1.251l-.061.117a4.703 4.703 0 0 1-1.782 1.884 4.767 4.767 0 0 1-2.485.67 5.6 5.6 0 0 1-1.485-.188l.009 2.764a1.255 1.255 0 0 1-1.255 1.259h-1.729a1.255 1.255 0 0 1-1.255-1.255v-3.537a1.255 1.255 0 0 1-1.167.793h-1.679a1.25 1.25 0 0 1-.77-.263 4.47 4.47 0 0 1-1.945.429c-.885 0-1.724-.21-2.495-.632l-.017-.01a4.983 4.983 0 0 1-1.081-.836 1.255 1.255 0 0 1-1.254 1.312h-1.81a1.255 1.255 0 0 1-1.228-.99l-.782-3.625-2.044 3.939a1.255 1.255 0 0 1-1.115.676h-.098a1.255 1.255 0 0 1-1.116-.68l-2.061-3.994zM35.92 16.63l.207-.114.223-.15c.329-.237.574-.499.735-.785l.061-.118.033 1.332h1.678V9.242h-1.694l-.033 1.267c-.088-.22-.264-.438-.526-.658l-.032-.028a3.16 3.16 0 0 0-.668-.428l-.27-.12a3.293 3.293 0 0 0-1.235-.23c-.757 0-1.415.163-1.974.493a3.36 3.36 0 0 0-1.3 1.382c-.297.593-.444 1.284-.444 2.074 0 .8.17 1.503.51 2.107a3.795 3.795 0 0 0 1.382 1.381 3.883 3.883 0 0 0 1.893.477c.53 0 1.015-.11 1.455-.33zm-2.789-5.38c-.384.45-.575 1.038-.575 1.762 0 .735.186 1.332.559 1.794.384.45.933.675 1.645.675a2.25 2.25 0 0 0 .934-.19 2.17 2.17 0 0 0 .468-.29l.178-.161a2.163 2.163 0 0 0 .397-.561c.163-.333.244-.717.244-1.15v-.115c0-.472-.098-.894-.296-1.267l-.043-.077a2.211 2.211 0 0 0-.633-.709l-.13-.086-.047-.028a2.099 2.099 0 0 0-1.073-.285c-.702 0-1.244.231-1.629.692zm2.316 2.706c.163-.17.28-.407.28-.83v-.114c0-.292-.06-.508-.15-.68a.958.958 0 0 0-.353-.389.851.851 0 0 0-.464-.127c-.4 0-.56.114-.664.239l-.01.012c-.148.174-.275.45-.275.945 0 .506.122.801.27.99.097.11.266.224.68.224.303 0 .504-.09.687-.269zm7.545 1.705a2.626 2.626 0 0 0 .331.423c.213.22.464.402.755.548l.173.074c.433.17.93.255 1.49.255.68 0 1.295-.165 1.844-.493a3.447 3.447 0 0 0 1.316-1.4c.329-.603.493-1.299.493-2.089 0-1.273-.33-2.243-.988-2.913-.658-.68-1.52-1.02-2.584-1.02-.598 0-1.124.115-1.575.347a2.807 2.807 0 0 0-.415.262l-.199.166a3.35 3.35 0 0 0-.64.82V9.242h-1.712v11.553h1.729l-.017-5.134zm.53-1.138c.137.193.297.36.48.5l.155.11.053.034c.34.197.713.297 1.119.297.714 0 1.262-.225 1.645-.675.385-.46.576-1.048.576-1.762 0-.746-.192-1.338-.576-1.777-.372-.45-.92-.675-1.645-.675-.29 0-.569.053-.835.16a2.366 2.366 0 0 0-.284.136 1.99 1.99 0 0 0-.363.254 2.237 2.237 0 0 0-.46.569l-.082.162a2.56 2.56 0 0 0-.213 1.072v.115c0 .471.098.894.296 1.267l.135.211zm.964-.818a1.11 1.11 0 0 0 .367.385.937.937 0 0 0 .476.118c.423 0 .59-.117.687-.23.159-.194.28-.478.28-.95 0-.53-.133-.8-.266-.952l-.021-.025c-.078-.094-.231-.221-.68-.221a.995.995 0 0 0-.503.135l-.012.007a.859.859 0 0 0-.335.343c-.073.133-.132.324-.132.614v.115a1.43 1.43 0 0 0 .14.66zm15.7-6.222c.232-.23.346-.516.346-.856a1.053 1.053 0 0 0-.345-.79 1.175 1.175 0 0 0-.84-.329c-.34 0-.625.11-.855.33a1.053 1.053 0 0 0-.346.79c0 .34.115.625.346.855.23.23.516.346.856.346.34 0 .62-.115.839-.346zm4.337 9.314.033-1.332c.128.269.324.518.59.747l.098.081a3.727 3.727 0 0 0 .316.224l.223.122a3.21 3.21 0 0 0 1.44.322 3.785 3.785 0 0 0 1.875-.477 3.52 3.52 0 0 0 1.382-1.366c.352-.593.526-1.29.526-2.09 0-.79-.147-1.48-.444-2.073a3.235 3.235 0 0 0-1.283-1.399c-.549-.34-1.195-.51-1.942-.51a3.476 3.476 0 0 0-1.527.344l-.086.043-.165.09a3.412 3.412 0 0 0-.33.214c-.288.21-.507.446-.656.707a1.893 1.893 0 0 0-.099.198l.082-1.283V4.701h-1.744v12.095zm.473-2.509a2.482 2.482 0 0 0 .566.7c.078.065.159.125.245.18l.144.08a2.105 2.105 0 0 0 .975.232c.713 0 1.262-.225 1.645-.675.384-.46.576-1.053.576-1.778 0-.734-.192-1.327-.576-1.777-.373-.46-.921-.692-1.645-.692a2.18 2.18 0 0 0-1.015.235c-.147.075-.285.17-.415.282l-.15.142a2.086 2.086 0 0 0-.42.594c-.149.32-.223.685-.223 1.1v.115c0 .47.097.89.293 1.26zm2.616-.293c.157-.191.28-.479.28-.967 0-.51-.13-.79-.276-.961l-.021-.026c-.082-.1-.232-.225-.67-.225a.868.868 0 0 0-.681.279l-.012.011c-.154.155-.274.38-.274.807v.115c0 .285.057.499.144.669a1.13 1.13 0 0 0 .367.405c.137.082.28.123.455.123.423 0 .59-.118.686-.23zm8.266-3.013c.23-.087.472-.134.724-.14l.069-.002c.329 0 .542.033.642.099l.247-1.794c-.13-.066-.37-.099-.717-.099a2.3 2.3 0 0 0-.545.063 2.086 2.086 0 0 0-.411.148 2.18 2.18 0 0 0-.4.249 2.482 2.482 0 0 0-.485.499 2.659 2.659 0 0 0-.32.581l-.05.137v-1.48h-1.778v7.553h1.777v-3.884c0-.364.053-.678.159-.943a1.49 1.49 0 0 1 .466-.636 2.52 2.52 0 0 1 .399-.253 2.19 2.19 0 0 1 .224-.099zm9.784 2.656.05-.922c0-1.162-.285-2.062-.856-2.698-.559-.647-1.42-.97-2.584-.97-.746 0-1.415.163-2.007.493a3.462 3.462 0 0 0-1.4 1.382c-.329.604-.493 1.306-.493 2.106 0 .714.143 1.371.428 1.975.285.593.73 1.07 1.332 1.432.604.351 1.355.526 2.255.526.649 0 1.204-.062 1.668-.185l.044-.012.135-.04c.409-.122.736-.263.984-.421l-.542-1.267c-.2.108-.415.199-.642.274l-.297.087c-.34.088-.773.131-1.3.131-.636 0-1.135-.147-1.497-.444a1.573 1.573 0 0 1-.192-.193c-.244-.294-.415-.705-.512-1.234l-.004-.021h5.43zm-5.427-1.256-.003.022h3.752v-.138c-.007-.485-.104-.857-.288-1.118a1.056 1.056 0 0 0-.156-.176c-.307-.285-.746-.428-1.316-.428-.657 0-1.155.202-1.494.604-.253.3-.417.712-.494 1.234zm-27.053 2.77V4.7h-1.86v12.095h5.333V15.15zm7.103-5.908v7.553h-1.843V9.242h1.843z' fill='%23000' fill-opacity='.4' fill-rule='evenodd'/%3E%3Cpath d='m19.63 11.151-.757-1.71-.345 1.71-1.12 5.644h-1.827L18.083 4.7h.197l3.325 6.533.988 2.19.988-2.19L26.839 4.7h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.93 5.644h-.098l-2.913-5.644zm14.836 5.81c-.68 0-1.311-.16-1.893-.478a3.795 3.795 0 0 1-1.381-1.382c-.34-.604-.51-1.306-.51-2.106 0-.79.147-1.482.444-2.074a3.364 3.364 0 0 1 1.3-1.382c.559-.33 1.217-.494 1.974-.494a3.293 3.293 0 0 1 1.234.231 3.341 3.341 0 0 1 .97.575c.264.22.44.439.527.659l.033-1.267h1.694v7.553H37.18l-.033-1.332c-.186.395-.526.746-1.02 1.053a3.167 3.167 0 0 1-1.662.444zm.296-1.482c.626 0 1.152-.214 1.58-.642.428-.44.642-1.01.642-1.711v-.115c0-.472-.098-.894-.296-1.267a2.211 2.211 0 0 0-.807-.872 2.098 2.098 0 0 0-1.119-.313c-.702 0-1.245.231-1.629.692-.384.45-.575 1.037-.575 1.76 0 .736.186 1.333.559 1.795.384.45.933.675 1.645.675zm6.521-6.237h1.711v1.4c.604-1.065 1.547-1.597 2.83-1.597 1.064 0 1.926.34 2.584 1.02.659.67.988 1.641.988 2.914 0 .79-.164 1.487-.493 2.09a3.456 3.456 0 0 1-1.316 1.399 3.51 3.51 0 0 1-1.844.493c-.636 0-1.19-.11-1.662-.329a2.665 2.665 0 0 1-1.086-.97l.017 5.134h-1.728V9.242zm4.048 6.22c.714 0 1.262-.224 1.645-.674.385-.46.576-1.048.576-1.762 0-.746-.192-1.338-.576-1.777-.372-.45-.92-.675-1.645-.675-.395 0-.768.098-1.12.296-.34.187-.613.46-.822.823-.197.351-.296.763-.296 1.234v.115c0 .472.098.894.296 1.267.209.362.483.647.823.855.34.197.713.297 1.119.297z' fill='%23fff'/%3E%3Cpath d='M51.325 4.7h1.86v10.45h3.473v1.646h-5.333zm7.12 4.542h1.843v7.553h-1.843zm.905-1.415a1.159 1.159 0 0 1-.856-.346 1.165 1.165 0 0 1-.346-.856 1.053 1.053 0 0 1 .346-.79c.23-.219.516-.329.856-.329.329 0 .609.11.839.33a1.053 1.053 0 0 1 .345.79 1.159 1.159 0 0 1-.345.855c-.22.23-.5.346-.84.346zm7.875 9.133a3.167 3.167 0 0 1-1.662-.444c-.482-.307-.817-.658-1.004-1.053l-.033 1.332h-1.71V4.701h1.743v4.657l-.082 1.283c.186-.438.548-.812 1.086-1.119a3.486 3.486 0 0 1 1.778-.477c.746 0 1.393.17 1.942.51a3.235 3.235 0 0 1 1.283 1.4c.297.592.444 1.282.444 2.072 0 .8-.175 1.498-.526 2.09a3.52 3.52 0 0 1-1.382 1.366 3.785 3.785 0 0 1-1.876.477zm-.296-1.481c.713 0 1.26-.225 1.645-.675.384-.46.577-1.053.577-1.778 0-.734-.193-1.327-.577-1.776-.373-.46-.921-.692-1.645-.692a2.115 2.115 0 0 0-1.58.659c-.428.428-.642.992-.642 1.694v.115c0 .473.098.895.296 1.267a2.385 2.385 0 0 0 .807.872 2.1 2.1 0 0 0 1.119.313zm5.927-6.237h1.777v1.481c.176-.505.46-.91.856-1.217a2.14 2.14 0 0 1 1.349-.46c.351 0 .593.032.724.098l-.247 1.794c-.099-.066-.313-.099-.642-.099-.516 0-.988.164-1.416.494-.417.329-.626.855-.626 1.58v3.883h-1.777V9.242zm9.534 7.718c-.9 0-1.651-.175-2.255-.526-.603-.362-1.047-.84-1.332-1.432a4.567 4.567 0 0 1-.428-1.975c0-.8.164-1.502.493-2.106a3.462 3.462 0 0 1 1.4-1.382c.592-.33 1.262-.494 2.007-.494 1.163 0 2.024.324 2.584.97.57.637.856 1.537.856 2.7 0 .296-.017.603-.05.92h-5.43c.12.67.356 1.153.708 1.45.362.296.86.443 1.497.443.526 0 .96-.044 1.3-.131a4.123 4.123 0 0 0 .938-.362l.542 1.267c-.274.175-.647.329-1.119.46-.472.132-1.042.197-1.711.197zm1.596-4.558c.01-.68-.137-1.158-.444-1.432-.307-.285-.746-.428-1.316-.428-1.152 0-1.815.62-1.991 1.86h3.752z' fill='%23e1e3e9'/%3E%3Cg fill-rule='evenodd' stroke-width='1.036'%3E%3Cpath d='m8.166 16.146-.002.002a1.54 1.54 0 0 1-2.009 0l-.002-.002-.043-.034-.002-.002-.199-.162H4.377a.657.657 0 0 0-.659.659v1.84a.657.657 0 0 0 .659.659h5.565a.657.657 0 0 0 .659-.659v-1.84a.657.657 0 0 0-.659-.659H8.411l-.202.164zm-1.121-.905a.29.29 0 0 0 .113.023.286.286 0 0 0 .189-.07l.077-.063c.634-.508 4.672-3.743 4.672-7.575 0-2.55-2.215-4.625-4.938-4.625S2.221 5.006 2.221 7.556c0 3.225 2.86 6.027 4.144 7.137h.004l.04.038.484.4.077.063a.628.628 0 0 0 .074.047zm-2.52-.548a16.898 16.898 0 0 1-1.183-1.315C2.187 11.942.967 9.897.967 7.555c0-3.319 2.855-5.88 6.192-5.88 3.338 0 6.193 2.561 6.193 5.881 0 2.34-1.22 4.387-2.376 5.822a16.898 16.898 0 0 1-1.182 1.315h.15a1.912 1.912 0 0 1 1.914 1.914v1.84a1.912 1.912 0 0 1-1.914 1.914H4.377a1.912 1.912 0 0 1-1.914-1.914v-1.84a1.912 1.912 0 0 1 1.914-1.914zm3.82-6.935c0 .692-.55 1.222-1.187 1.222s-1.185-.529-1.185-1.222.548-1.222 1.185-1.222c.638 0 1.186.529 1.186 1.222zm-1.186 2.477c1.348 0 2.442-1.11 2.442-2.478S8.507 5.28 7.159 5.28 4.72 6.39 4.72 7.758s1.092 2.477 2.44 2.477zm2.048 7.71H5.114v-.838h4.093z' fill='%23000' fill-opacity='.4'/%3E%3Cpath d='M2.222 7.555c0-2.55 2.214-4.625 4.937-4.625 2.723 0 4.938 2.075 4.938 4.625 0 3.832-4.038 7.068-4.672 7.575l-.077.063a.286.286 0 0 1-.189.07.286.286 0 0 1-.188-.07l-.077-.063c-.634-.507-4.672-3.743-4.672-7.575zm4.937 2.68c1.348 0 2.442-1.11 2.442-2.478S8.507 5.28 7.159 5.28 4.72 6.39 4.72 7.758s1.092 2.477 2.44 2.477z' fill='%23e1e3e9'/%3E%3Cpath d='M4.377 15.948a.657.657 0 0 0-.659.659v1.84a.657.657 0 0 0 .659.659h5.565a.657.657 0 0 0 .659-.659v-1.84a.657.657 0 0 0-.659-.659zm4.83 1.16H5.114v.838h4.093z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E")}}@media (-ms-high-contrast:black-on-white){a.maplibregl-ctrl-logo{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='23' fill='none'%3E%3Cpath d='M17.408 16.796h-1.827l2.501-12.095h.198l3.324 6.533.988 2.19.988-2.19 3.258-6.533h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.929 5.644h-.098l-2.914-5.644-.757-1.71-.345 1.71zm1.958-3.42-.726 3.663a1.255 1.255 0 0 1-1.232 1.011h-1.827a1.255 1.255 0 0 1-1.229-1.509l2.501-12.095a1.255 1.255 0 0 1 1.23-1.001h.197a1.255 1.255 0 0 1 1.12.685l3.19 6.273 3.125-6.263a1.255 1.255 0 0 1 1.123-.695h.181a1.255 1.255 0 0 1 1.227.991l1.443 6.71a5.11 5.11 0 0 1 .314-.787l.009-.016a4.623 4.623 0 0 1 1.777-1.887c.782-.46 1.668-.667 2.611-.667a4.548 4.548 0 0 1 1.7.32l.306.134c.21-.16.474-.256.759-.256h1.694a1.255 1.255 0 0 1 1.212.925 1.255 1.255 0 0 1 1.212-.925h1.711c.284 0 .545.094.755.252.613-.3 1.312-.45 2.075-.45 1.356 0 2.557.445 3.482 1.4.314.319.566.676.763 1.064V4.701a1.255 1.255 0 0 1 1.255-1.255h1.86A1.255 1.255 0 0 1 54.44 4.7v9.194h2.217c.19 0 .37.043.532.118v-4.77c0-.356.147-.678.385-.906a2.416 2.416 0 0 1-.682-1.71c0-.665.267-1.253.735-1.7a2.448 2.448 0 0 1 1.722-.674 2.43 2.43 0 0 1 1.705.675c.211.2.381.43.504.683V4.7a1.255 1.255 0 0 1 1.255-1.255h1.744A1.255 1.255 0 0 1 65.812 4.7v3.335a4.76 4.76 0 0 1 1.526-.246c.938 0 1.817.214 2.59.69a4.47 4.47 0 0 1 1.67 1.743v-.98a1.255 1.255 0 0 1 1.256-1.256h1.777c.233 0 .451.064.639.174a3.407 3.407 0 0 1 1.567-.372c.346 0 .861.02 1.285.232a1.255 1.255 0 0 1 .689 1.004 4.73 4.73 0 0 1 .853-.588c.795-.44 1.675-.647 2.61-.647 1.385 0 2.65.39 3.525 1.396.836.938 1.168 2.173 1.168 3.528 0 .343-.02.694-.056 1.051a1.255 1.255 0 0 1-.947 1.09l.408.952a1.255 1.255 0 0 1-.477 1.552c-.418.268-.92.463-1.458.612-.613.171-1.304.244-2.049.244-1.06 0-2.043-.207-2.886-.698l-.015-.008c-.798-.48-1.419-1.135-1.818-1.963l-.004-.008a5.815 5.815 0 0 1-.548-2.512c0-.286.017-.567.053-.843a1.255 1.255 0 0 1-.333-.086l-.166-.004c-.223 0-.426.062-.643.228-.03.024-.142.139-.142.59v3.883a1.255 1.255 0 0 1-1.256 1.256h-1.777a1.255 1.255 0 0 1-1.256-1.256V15.69l-.032.057a4.778 4.778 0 0 1-1.86 1.833 5.04 5.04 0 0 1-2.484.634 4.47 4.47 0 0 1-1.935-.424 1.252 1.252 0 0 1-.764.258h-1.71a1.255 1.255 0 0 1-1.256-1.255V7.687a2.402 2.402 0 0 1-.428.625c.253.23.412.561.412.93v7.553a1.255 1.255 0 0 1-1.256 1.255h-1.843a1.25 1.25 0 0 1-.894-.373c-.228.23-.544.373-.894.373H51.32a1.255 1.255 0 0 1-1.256-1.255v-1.251l-.061.117a4.703 4.703 0 0 1-1.782 1.884 4.767 4.767 0 0 1-2.485.67 5.6 5.6 0 0 1-1.485-.188l.009 2.764a1.255 1.255 0 0 1-1.255 1.259h-1.729a1.255 1.255 0 0 1-1.255-1.255v-3.537a1.255 1.255 0 0 1-1.167.793h-1.679a1.25 1.25 0 0 1-.77-.263 4.47 4.47 0 0 1-1.945.429c-.885 0-1.724-.21-2.495-.632l-.017-.01a4.983 4.983 0 0 1-1.081-.836 1.255 1.255 0 0 1-1.254 1.312h-1.81a1.255 1.255 0 0 1-1.228-.99l-.782-3.625-2.044 3.939a1.255 1.255 0 0 1-1.115.676h-.098a1.255 1.255 0 0 1-1.116-.68l-2.061-3.994zM35.92 16.63l.207-.114.223-.15c.329-.237.574-.499.735-.785l.061-.118.033 1.332h1.678V9.242h-1.694l-.033 1.267c-.088-.22-.264-.438-.526-.658l-.032-.028a3.16 3.16 0 0 0-.668-.428l-.27-.12a3.293 3.293 0 0 0-1.235-.23c-.757 0-1.415.163-1.974.493a3.36 3.36 0 0 0-1.3 1.382c-.297.593-.444 1.284-.444 2.074 0 .8.17 1.503.51 2.107a3.795 3.795 0 0 0 1.382 1.381 3.883 3.883 0 0 0 1.893.477c.53 0 1.015-.11 1.455-.33zm-2.789-5.38c-.384.45-.575 1.038-.575 1.762 0 .735.186 1.332.559 1.794.384.45.933.675 1.645.675a2.25 2.25 0 0 0 .934-.19 2.17 2.17 0 0 0 .468-.29l.178-.161a2.163 2.163 0 0 0 .397-.561c.163-.333.244-.717.244-1.15v-.115c0-.472-.098-.894-.296-1.267l-.043-.077a2.211 2.211 0 0 0-.633-.709l-.13-.086-.047-.028a2.099 2.099 0 0 0-1.073-.285c-.702 0-1.244.231-1.629.692zm2.316 2.706c.163-.17.28-.407.28-.83v-.114c0-.292-.06-.508-.15-.68a.958.958 0 0 0-.353-.389.851.851 0 0 0-.464-.127c-.4 0-.56.114-.664.239l-.01.012c-.148.174-.275.45-.275.945 0 .506.122.801.27.99.097.11.266.224.68.224.303 0 .504-.09.687-.269zm7.545 1.705a2.626 2.626 0 0 0 .331.423c.213.22.464.402.755.548l.173.074c.433.17.93.255 1.49.255.68 0 1.295-.165 1.844-.493a3.447 3.447 0 0 0 1.316-1.4c.329-.603.493-1.299.493-2.089 0-1.273-.33-2.243-.988-2.913-.658-.68-1.52-1.02-2.584-1.02-.598 0-1.124.115-1.575.347a2.807 2.807 0 0 0-.415.262l-.199.166a3.35 3.35 0 0 0-.64.82V9.242h-1.712v11.553h1.729l-.017-5.134zm.53-1.138c.137.193.297.36.48.5l.155.11.053.034c.34.197.713.297 1.119.297.714 0 1.262-.225 1.645-.675.385-.46.576-1.048.576-1.762 0-.746-.192-1.338-.576-1.777-.372-.45-.92-.675-1.645-.675-.29 0-.569.053-.835.16a2.366 2.366 0 0 0-.284.136 1.99 1.99 0 0 0-.363.254 2.237 2.237 0 0 0-.46.569l-.082.162a2.56 2.56 0 0 0-.213 1.072v.115c0 .471.098.894.296 1.267l.135.211zm.964-.818a1.11 1.11 0 0 0 .367.385.937.937 0 0 0 .476.118c.423 0 .59-.117.687-.23.159-.194.28-.478.28-.95 0-.53-.133-.8-.266-.952l-.021-.025c-.078-.094-.231-.221-.68-.221a.995.995 0 0 0-.503.135l-.012.007a.859.859 0 0 0-.335.343c-.073.133-.132.324-.132.614v.115a1.43 1.43 0 0 0 .14.66zm15.7-6.222c.232-.23.346-.516.346-.856a1.053 1.053 0 0 0-.345-.79 1.175 1.175 0 0 0-.84-.329c-.34 0-.625.11-.855.33a1.053 1.053 0 0 0-.346.79c0 .34.115.625.346.855.23.23.516.346.856.346.34 0 .62-.115.839-.346zm4.337 9.314.033-1.332c.128.269.324.518.59.747l.098.081a3.727 3.727 0 0 0 .316.224l.223.122a3.21 3.21 0 0 0 1.44.322 3.785 3.785 0 0 0 1.875-.477 3.52 3.52 0 0 0 1.382-1.366c.352-.593.526-1.29.526-2.09 0-.79-.147-1.48-.444-2.073a3.235 3.235 0 0 0-1.283-1.399c-.549-.34-1.195-.51-1.942-.51a3.476 3.476 0 0 0-1.527.344l-.086.043-.165.09a3.412 3.412 0 0 0-.33.214c-.288.21-.507.446-.656.707a1.893 1.893 0 0 0-.099.198l.082-1.283V4.701h-1.744v12.095zm.473-2.509a2.482 2.482 0 0 0 .566.7c.078.065.159.125.245.18l.144.08a2.105 2.105 0 0 0 .975.232c.713 0 1.262-.225 1.645-.675.384-.46.576-1.053.576-1.778 0-.734-.192-1.327-.576-1.777-.373-.46-.921-.692-1.645-.692a2.18 2.18 0 0 0-1.015.235c-.147.075-.285.17-.415.282l-.15.142a2.086 2.086 0 0 0-.42.594c-.149.32-.223.685-.223 1.1v.115c0 .47.097.89.293 1.26zm2.616-.293c.157-.191.28-.479.28-.967 0-.51-.13-.79-.276-.961l-.021-.026c-.082-.1-.232-.225-.67-.225a.868.868 0 0 0-.681.279l-.012.011c-.154.155-.274.38-.274.807v.115c0 .285.057.499.144.669a1.13 1.13 0 0 0 .367.405c.137.082.28.123.455.123.423 0 .59-.118.686-.23zm8.266-3.013c.23-.087.472-.134.724-.14l.069-.002c.329 0 .542.033.642.099l.247-1.794c-.13-.066-.37-.099-.717-.099a2.3 2.3 0 0 0-.545.063 2.086 2.086 0 0 0-.411.148 2.18 2.18 0 0 0-.4.249 2.482 2.482 0 0 0-.485.499 2.659 2.659 0 0 0-.32.581l-.05.137v-1.48h-1.778v7.553h1.777v-3.884c0-.364.053-.678.159-.943a1.49 1.49 0 0 1 .466-.636 2.52 2.52 0 0 1 .399-.253 2.19 2.19 0 0 1 .224-.099zm9.784 2.656.05-.922c0-1.162-.285-2.062-.856-2.698-.559-.647-1.42-.97-2.584-.97-.746 0-1.415.163-2.007.493a3.462 3.462 0 0 0-1.4 1.382c-.329.604-.493 1.306-.493 2.106 0 .714.143 1.371.428 1.975.285.593.73 1.07 1.332 1.432.604.351 1.355.526 2.255.526.649 0 1.204-.062 1.668-.185l.044-.012.135-.04c.409-.122.736-.263.984-.421l-.542-1.267c-.2.108-.415.199-.642.274l-.297.087c-.34.088-.773.131-1.3.131-.636 0-1.135-.147-1.497-.444a1.573 1.573 0 0 1-.192-.193c-.244-.294-.415-.705-.512-1.234l-.004-.021h5.43zm-5.427-1.256-.003.022h3.752v-.138c-.007-.485-.104-.857-.288-1.118a1.056 1.056 0 0 0-.156-.176c-.307-.285-.746-.428-1.316-.428-.657 0-1.155.202-1.494.604-.253.3-.417.712-.494 1.234zm-27.053 2.77V4.7h-1.86v12.095h5.333V15.15zm7.103-5.908v7.553h-1.843V9.242h1.843z' fill='%23000' fill-opacity='.4' fill-rule='evenodd'/%3E%3Cpath d='m19.63 11.151-.757-1.71-.345 1.71-1.12 5.644h-1.827L18.083 4.7h.197l3.325 6.533.988 2.19.988-2.19L26.839 4.7h.181l2.6 12.095h-1.81l-1.218-5.644-.362-1.71-.658 1.71-2.93 5.644h-.098l-2.913-5.644zm14.836 5.81c-.68 0-1.311-.16-1.893-.478a3.795 3.795 0 0 1-1.381-1.382c-.34-.604-.51-1.306-.51-2.106 0-.79.147-1.482.444-2.074a3.364 3.364 0 0 1 1.3-1.382c.559-.33 1.217-.494 1.974-.494a3.293 3.293 0 0 1 1.234.231 3.341 3.341 0 0 1 .97.575c.264.22.44.439.527.659l.033-1.267h1.694v7.553H37.18l-.033-1.332c-.186.395-.526.746-1.02 1.053a3.167 3.167 0 0 1-1.662.444zm.296-1.482c.626 0 1.152-.214 1.58-.642.428-.44.642-1.01.642-1.711v-.115c0-.472-.098-.894-.296-1.267a2.211 2.211 0 0 0-.807-.872 2.098 2.098 0 0 0-1.119-.313c-.702 0-1.245.231-1.629.692-.384.45-.575 1.037-.575 1.76 0 .736.186 1.333.559 1.795.384.45.933.675 1.645.675zm6.521-6.237h1.711v1.4c.604-1.065 1.547-1.597 2.83-1.597 1.064 0 1.926.34 2.584 1.02.659.67.988 1.641.988 2.914 0 .79-.164 1.487-.493 2.09a3.456 3.456 0 0 1-1.316 1.399 3.51 3.51 0 0 1-1.844.493c-.636 0-1.19-.11-1.662-.329a2.665 2.665 0 0 1-1.086-.97l.017 5.134h-1.728V9.242zm4.048 6.22c.714 0 1.262-.224 1.645-.674.385-.46.576-1.048.576-1.762 0-.746-.192-1.338-.576-1.777-.372-.45-.92-.675-1.645-.675-.395 0-.768.098-1.12.296-.34.187-.613.46-.822.823-.197.351-.296.763-.296 1.234v.115c0 .472.098.894.296 1.267.209.362.483.647.823.855.34.197.713.297 1.119.297z' fill='%23fff'/%3E%3Cpath d='M51.325 4.7h1.86v10.45h3.473v1.646h-5.333zm7.12 4.542h1.843v7.553h-1.843zm.905-1.415a1.159 1.159 0 0 1-.856-.346 1.165 1.165 0 0 1-.346-.856 1.053 1.053 0 0 1 .346-.79c.23-.219.516-.329.856-.329.329 0 .609.11.839.33a1.053 1.053 0 0 1 .345.79 1.159 1.159 0 0 1-.345.855c-.22.23-.5.346-.84.346zm7.875 9.133a3.167 3.167 0 0 1-1.662-.444c-.482-.307-.817-.658-1.004-1.053l-.033 1.332h-1.71V4.701h1.743v4.657l-.082 1.283c.186-.438.548-.812 1.086-1.119a3.486 3.486 0 0 1 1.778-.477c.746 0 1.393.17 1.942.51a3.235 3.235 0 0 1 1.283 1.4c.297.592.444 1.282.444 2.072 0 .8-.175 1.498-.526 2.09a3.52 3.52 0 0 1-1.382 1.366 3.785 3.785 0 0 1-1.876.477zm-.296-1.481c.713 0 1.26-.225 1.645-.675.384-.46.577-1.053.577-1.778 0-.734-.193-1.327-.577-1.776-.373-.46-.921-.692-1.645-.692a2.115 2.115 0 0 0-1.58.659c-.428.428-.642.992-.642 1.694v.115c0 .473.098.895.296 1.267a2.385 2.385 0 0 0 .807.872 2.1 2.1 0 0 0 1.119.313zm5.927-6.237h1.777v1.481c.176-.505.46-.91.856-1.217a2.14 2.14 0 0 1 1.349-.46c.351 0 .593.032.724.098l-.247 1.794c-.099-.066-.313-.099-.642-.099-.516 0-.988.164-1.416.494-.417.329-.626.855-.626 1.58v3.883h-1.777V9.242zm9.534 7.718c-.9 0-1.651-.175-2.255-.526-.603-.362-1.047-.84-1.332-1.432a4.567 4.567 0 0 1-.428-1.975c0-.8.164-1.502.493-2.106a3.462 3.462 0 0 1 1.4-1.382c.592-.33 1.262-.494 2.007-.494 1.163 0 2.024.324 2.584.97.57.637.856 1.537.856 2.7 0 .296-.017.603-.05.92h-5.43c.12.67.356 1.153.708 1.45.362.296.86.443 1.497.443.526 0 .96-.044 1.3-.131a4.123 4.123 0 0 0 .938-.362l.542 1.267c-.274.175-.647.329-1.119.46-.472.132-1.042.197-1.711.197zm1.596-4.558c.01-.68-.137-1.158-.444-1.432-.307-.285-.746-.428-1.316-.428-1.152 0-1.815.62-1.991 1.86h3.752z' fill='%23e1e3e9'/%3E%3Cg fill-rule='evenodd' stroke-width='1.036'%3E%3Cpath d='m8.166 16.146-.002.002a1.54 1.54 0 0 1-2.009 0l-.002-.002-.043-.034-.002-.002-.199-.162H4.377a.657.657 0 0 0-.659.659v1.84a.657.657 0 0 0 .659.659h5.565a.657.657 0 0 0 .659-.659v-1.84a.657.657 0 0 0-.659-.659H8.411l-.202.164zm-1.121-.905a.29.29 0 0 0 .113.023.286.286 0 0 0 .189-.07l.077-.063c.634-.508 4.672-3.743 4.672-7.575 0-2.55-2.215-4.625-4.938-4.625S2.221 5.006 2.221 7.556c0 3.225 2.86 6.027 4.144 7.137h.004l.04.038.484.4.077.063a.628.628 0 0 0 .074.047zm-2.52-.548a16.898 16.898 0 0 1-1.183-1.315C2.187 11.942.967 9.897.967 7.555c0-3.319 2.855-5.88 6.192-5.88 3.338 0 6.193 2.561 6.193 5.881 0 2.34-1.22 4.387-2.376 5.822a16.898 16.898 0 0 1-1.182 1.315h.15a1.912 1.912 0 0 1 1.914 1.914v1.84a1.912 1.912 0 0 1-1.914 1.914H4.377a1.912 1.912 0 0 1-1.914-1.914v-1.84a1.912 1.912 0 0 1 1.914-1.914zm3.82-6.935c0 .692-.55 1.222-1.187 1.222s-1.185-.529-1.185-1.222.548-1.222 1.185-1.222c.638 0 1.186.529 1.186 1.222zm-1.186 2.477c1.348 0 2.442-1.11 2.442-2.478S8.507 5.28 7.159 5.28 4.72 6.39 4.72 7.758s1.092 2.477 2.44 2.477zm2.048 7.71H5.114v-.838h4.093z' fill='%23000' fill-opacity='.4'/%3E%3Cpath d='M2.222 7.555c0-2.55 2.214-4.625 4.937-4.625 2.723 0 4.938 2.075 4.938 4.625 0 3.832-4.038 7.068-4.672 7.575l-.077.063a.286.286 0 0 1-.189.07.286.286 0 0 1-.188-.07l-.077-.063c-.634-.507-4.672-3.743-4.672-7.575zm4.937 2.68c1.348 0 2.442-1.11 2.442-2.478S8.507 5.28 7.159 5.28 4.72 6.39 4.72 7.758s1.092 2.477 2.44 2.477z' fill='%23e1e3e9'/%3E%3Cpath d='M4.377 15.948a.657.657 0 0 0-.659.659v1.84a.657.657 0 0 0 .659.659h5.565a.657.657 0 0 0 .659-.659v-1.84a.657.657 0 0 0-.659-.659zm4.83 1.16H5.114v.838h4.093z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E")}}.maplibregl-ctrl.maplibregl-ctrl-attrib{background-color:hsla(0,0%,100%,.5);margin:0;padding:0 5px}@media screen{.maplibregl-ctrl-attrib.maplibregl-compact{background-color:#fff;border-radius:12px;box-sizing:content-box;margin:10px;min-height:20px;padding:2px 24px 2px 0;position:relative}.maplibregl-ctrl-attrib.maplibregl-compact-show{padding:2px 28px 2px 8px;visibility:visible}.maplibregl-ctrl-bottom-left>.maplibregl-ctrl-attrib.maplibregl-compact-show,.maplibregl-ctrl-top-left>.maplibregl-ctrl-attrib.maplibregl-compact-show{border-radius:12px;padding:2px 8px 2px 28px}.maplibregl-ctrl-attrib.maplibregl-compact .maplibregl-ctrl-attrib-inner{display:none}.maplibregl-ctrl-attrib-button{background-color:hsla(0,0%,100%,.5);background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd'%3E%3Cpath d='M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0'/%3E%3C/svg%3E");border:0;border-radius:12px;box-sizing:border-box;cursor:pointer;display:none;height:24px;outline:none;position:absolute;right:0;top:0;width:24px}.maplibregl-ctrl-attrib summary.maplibregl-ctrl-attrib-button{appearance:none;list-style:none}.maplibregl-ctrl-attrib summary.maplibregl-ctrl-attrib-button::-webkit-details-marker{display:none}.maplibregl-ctrl-bottom-left .maplibregl-ctrl-attrib-button,.maplibregl-ctrl-top-left .maplibregl-ctrl-attrib-button{left:0}.maplibregl-ctrl-attrib.maplibregl-compact .maplibregl-ctrl-attrib-button,.maplibregl-ctrl-attrib.maplibregl-compact-show .maplibregl-ctrl-attrib-inner{display:block}.maplibregl-ctrl-attrib.maplibregl-compact-show .maplibregl-ctrl-attrib-button{background-color:rgb(0 0 0/5%)}.maplibregl-ctrl-bottom-right>.maplibregl-ctrl-attrib.maplibregl-compact:after{bottom:0;right:0}.maplibregl-ctrl-top-right>.maplibregl-ctrl-attrib.maplibregl-compact:after{right:0;top:0}.maplibregl-ctrl-top-left>.maplibregl-ctrl-attrib.maplibregl-compact:after{left:0;top:0}.maplibregl-ctrl-bottom-left>.maplibregl-ctrl-attrib.maplibregl-compact:after{bottom:0;left:0}}@media screen and (-ms-high-contrast:active){.maplibregl-ctrl-attrib.maplibregl-compact:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' fill='%23fff'%3E%3Cpath d='M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0'/%3E%3C/svg%3E")}}@media screen and (-ms-high-contrast:black-on-white){.maplibregl-ctrl-attrib.maplibregl-compact:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd'%3E%3Cpath d='M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0'/%3E%3C/svg%3E")}}.maplibregl-ctrl-attrib a{color:rgba(0,0,0,.75);text-decoration:none}.maplibregl-ctrl-attrib a:hover{color:inherit;text-decoration:underline}.maplibregl-attrib-empty{display:none}.maplibregl-ctrl-scale{background-color:hsla(0,0%,100%,.75);border:2px solid #333;border-top:#333;box-sizing:border-box;color:#333;font-size:10px;padding:0 5px}.maplibregl-popup{display:flex;left:0;pointer-events:none;position:absolute;top:0;will-change:transform}.maplibregl-popup-anchor-top,.maplibregl-popup-anchor-top-left,.maplibregl-popup-anchor-top-right{flex-direction:column}.maplibregl-popup-anchor-bottom,.maplibregl-popup-anchor-bottom-left,.maplibregl-popup-anchor-bottom-right{flex-direction:column-reverse}.maplibregl-popup-anchor-left{flex-direction:row}.maplibregl-popup-anchor-right{flex-direction:row-reverse}.maplibregl-popup-tip{border:10px solid transparent;height:0;width:0;z-index:1}.maplibregl-popup-anchor-top .maplibregl-popup-tip{align-self:center;border-bottom-color:#fff;border-top:none}.maplibregl-popup-anchor-top-left .maplibregl-popup-tip{align-self:flex-start;border-bottom-color:#fff;border-left:none;border-top:none}.maplibregl-popup-anchor-top-right .maplibregl-popup-tip{align-self:flex-end;border-bottom-color:#fff;border-right:none;border-top:none}.maplibregl-popup-anchor-bottom .maplibregl-popup-tip{align-self:center;border-bottom:none;border-top-color:#fff}.maplibregl-popup-anchor-bottom-left .maplibregl-popup-tip{align-self:flex-start;border-bottom:none;border-left:none;border-top-color:#fff}.maplibregl-popup-anchor-bottom-right .maplibregl-popup-tip{align-self:flex-end;border-bottom:none;border-right:none;border-top-color:#fff}.maplibregl-popup-anchor-left .maplibregl-popup-tip{align-self:center;border-left:none;border-right-color:#fff}.maplibregl-popup-anchor-right .maplibregl-popup-tip{align-self:center;border-left-color:#fff;border-right:none}.maplibregl-popup-close-button{background-color:transparent;border:0;border-radius:0 3px 0 0;cursor:pointer;position:absolute;right:0;top:0}.maplibregl-popup-close-button:hover{background-color:rgb(0 0 0/5%)}.maplibregl-popup-content{background:#fff;border-radius:3px;box-shadow:0 1px 2px rgba(0,0,0,.1);padding:15px 10px;pointer-events:auto;position:relative}.maplibregl-popup-anchor-top-left .maplibregl-popup-content{border-top-left-radius:0}.maplibregl-popup-anchor-top-right .maplibregl-popup-content{border-top-right-radius:0}.maplibregl-popup-anchor-bottom-left .maplibregl-popup-content{border-bottom-left-radius:0}.maplibregl-popup-anchor-bottom-right .maplibregl-popup-content{border-bottom-right-radius:0}.maplibregl-popup-track-pointer{display:none}.maplibregl-popup-track-pointer *{pointer-events:none;user-select:none}.maplibregl-map:hover .maplibregl-popup-track-pointer{display:flex}.maplibregl-map:active .maplibregl-popup-track-pointer{display:none}.maplibregl-marker{left:0;position:absolute;top:0;will-change:transform}.maplibregl-user-location-dot,.maplibregl-user-location-dot:before{background-color:#1da1f2;border-radius:50%;height:15px;width:15px}.maplibregl-user-location-dot:before{animation:maplibregl-user-location-dot-pulse 2s infinite;content:"";position:absolute}.maplibregl-user-location-dot:after{border:2px solid #fff;border-radius:50%;box-shadow:0 0 3px rgba(0,0,0,.35);box-sizing:border-box;content:"";height:19px;left:-2px;position:absolute;top:-2px;width:19px}@keyframes maplibregl-user-location-dot-pulse{0%{opacity:1;transform:scale(1)}70%{opacity:0;transform:scale(3)}to{opacity:0;transform:scale(1)}}.maplibregl-user-location-dot-stale{background-color:#aaa}.maplibregl-user-location-dot-stale:after{display:none}.maplibregl-user-location-accuracy-circle{background-color:#1da1f233;border-radius:100%;height:1px;width:1px}.maplibregl-crosshair,.maplibregl-crosshair .maplibregl-interactive,.maplibregl-crosshair .maplibregl-interactive:active{cursor:crosshair}.maplibregl-boxzoom{background:#fff;border:2px dotted #202020;height:0;left:0;opacity:.5;position:absolute;top:0;width:0}.maplibregl-cooperative-gesture-screen{align-items:center;background:rgba(0,0,0,.4);bottom:0;color:#fff;display:flex;font-size:1.4em;justify-content:center;left:0;line-height:1.2;opacity:0;padding:1rem;pointer-events:none;position:absolute;right:0;top:0;transition:opacity 1s ease 1s}.maplibregl-cooperative-gesture-screen.maplibregl-show{opacity:1;transition:opacity .05s}.maplibregl-cooperative-gesture-screen .maplibregl-mobile-message{display:none}@media (hover:none),(max-width:480px){.maplibregl-cooperative-gesture-screen .maplibregl-desktop-message{display:none}.maplibregl-cooperative-gesture-screen .maplibregl-mobile-message{display:block}}.maplibregl-pseudo-fullscreen{height:100%!important;left:0!important;position:fixed!important;top:0!important;width:100%!important;z-index:99999}
  .mtk-autocomplete {
    z-index: 1000;
    position: absolute;
    overflow: hidden;
    display: none;
  }
  .mtk-autocomplete.mtk-autocomplete-show {
    display: block;
  }
  .mtk-autocomplete .mtk-autocomplete-suggestion-active {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @-webkit-keyframes pulsate {
    0% {
      -webkit-transform: scale(0.1);
      transform: scale(0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
  }
  
  @keyframes pulsate {
    0% {
      -webkit-transform: scale(0.1);
      transform: scale(0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
  }
  
  .mtk-ping {
    border: 3px solid #fff;
    border-radius: 30px;
    height: 25px;
    width: 25px;
    -webkit-animation: pulsate 1s;
    animation: pulsate 1s;
    opacity: 0.5;
  }
  
  .mtk-ping2 {
    border: 5px solid #fff;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    -webkit-animation: pulsate 1s infinite;
    animation: pulsate 1s infinite;
    opacity: 0.5;
  }
  
  .mtk-popup-hidden {
    visibility: hidden;
  }
  
  .mtk-map-smartscroll {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.35);
    padding: 20px;
    opacity: 0;
    transition: opacity 800ms ease-in-out;
  }
  
  .mtk-map-smartscroll.mtk-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }
  
  .mtk-map-smartscroll > span {
    font-size: 22px;
    color: #fff;
    text-align: center;
  }
  
  .mtk-accessibility-marker {
    display: block;
    width: 50px;
    height: 50px;
    background: transparent;
    margin: 0;
    padding: 0;
    appearance: none;
    border-radius: 0;
    border: none;
    position: fixed;
    cursor: default;
  }
  
  .mtk-accessibility-marker:focus {
    border: 2px solid black;
  }
  
  /* MTK TILT CONTROL */
  .maplibregl-ctrl button.mtk-control-tilt .maplibregl-ctrl-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='15' viewBox='0 0 18.893 14' xmlns='http://www.w3.org/2000/svg' fill='%23ccc'%3E %3Cpath d='M 5.196,0 C 4.3287906,0.00392753 3.5622954,0.56467928 3.296,1.39 l -3.204,10 C -0.312,12.655 0.668,14 1.994,14 h 14.902 c 1.327,0 2.31,-1.346 1.905,-2.61 l -3.203,-10 C 15.330712,0.56366938 14.56248,0.0028275 13.694,0 H 5.198 Z M 5.3,2.2 h 8.194 L 15.797,11 H 3.1 Z'/%3E %3C/svg%3E");
  }
  .maplibregl-ctrl button.mtk-control-tilt.mtk-control-tilt-active .maplibregl-ctrl-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='15' viewBox='0 0 18.893 14' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E %3Cpath d='M 5.196,0 C 4.3287906,0.00392753 3.5622954,0.56467928 3.296,1.39 l -3.204,10 C -0.312,12.655 0.668,14 1.994,14 h 14.902 c 1.327,0 2.31,-1.346 1.905,-2.61 l -3.203,-10 C 15.330712,0.56366938 14.56248,0.0028275 13.694,0 H 5.198 Z M 5.3,2.2 h 8.194 L 15.797,11 H 3.1 Z'/%3E %3C/svg%3E");
  }
  
  /* MTK MAPTYPE CONTROL */
  .maplibregl-ctrl select.mtk-control-maptypes {
    background-color: transparent;
    border: none;
    outline: none;
    height: 29px;
    padding: 0 21px 0 8px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'7'%20height%3D'29'%20viewBox%3D'0%200%207%2029'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20fill%3D'%23333'%3E%3Cpath%20d%3D'M0%2011l3.5%207%203.5-7h-7z'%20%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 8px center;
    -moz-appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }
  .maplibregl-ctrl select.mtk-control-maptypes:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  /* GEOLOCATION CONTROL */
  .maplibregl-ctrl button.mtk-control-geolocate.maplibregl-ctrl-geolocate .maplibregl-ctrl-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='27' height='27' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .maplibregl-ctrl button.mtk-control-geolocate.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-active .maplibregl-ctrl-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='27' height='27' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23448aff'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .maplibregl-ctrl button.mtk-control-geolocate.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-waiting .maplibregl-ctrl-icon {
    animation: mtk-fade-in-out 1s ease-in-out infinite;
  }
  .maplibregl-ctrl button.mtk-control-geolocate.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-error .maplibregl-ctrl-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='27' height='27' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .maplibregl-ctrl button.mtk-control-geolocate.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background .maplibregl-ctrl-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='27' height='27' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23448aff'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2' display='none'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .maplibregl-ctrl button.mtk-control-geolocate.maplibregl-ctrl-geolocate.maplibregl-ctrl-geolocate-background-error .maplibregl-ctrl-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='27' height='27' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2' display='none'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E");
  }
  .mtk-user-location-dot.maplibregl-user-location-dot {
    background-color: #3380e5;
  }
  .mtk-user-location-dot.maplibregl-user-location-dot::before {
    background-color: #3380e5;
  }
  .mtk-user-location-dot.maplibregl-user-location-dot::after {
    border: 2px solid #ffffff;
  }
  .mtk-user-location-accuracy-circle.maplibregl-user-location-accuracy-circle {
    border: 1px solid #3380e5a8;
    background-color: #3380e538;
  }
  @keyframes mtk-fade-in-out {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  /* MTK Logo Control */
  .maplibregl-ctrl.mtk-control-logo {
    margin: 0;
    padding: 2px 5px;
    line-height: 0;
  }
  
  /* DEFAULT CONTROL IMPROVEMENTS: MaplibreGL  */
  .maplibregl-ctrl-group {
    overflow: initial;
  }
  .maplibregl-ctrl-group button:focus {
    box-shadow: none;
  }
  .maplibregl-ctrl-group > button.active {
    box-shadow: 0 0 2px 2px #0096ff;
  }
  .maplibregl-ctrl-group button:first-child {
    border-radius: 4px 4px 0 0;
  }
  .maplibregl-ctrl-group button:last-child {
    border-radius: 0 0 4px 4px;
  }
  .maplibregl-ctrl-group button:first-child:last-child {
    border-radius: 4px;
  }
  .maplibregl-ctrl-group button.active:focus:not(:focus-visible) {
    box-shadow: 0 0 2px 2px #0096ff;
  }
  .maplibregl-ctrl-group select,
  .maplibregl-ctrl-group input {
    border-radius: 4px;
  }
  /* -- horizontal */
  .maplibregl-ctrl-group.maplibregl-ctrl-group-inline {
    line-height: 0;
  }
  .maplibregl-ctrl-group.maplibregl-ctrl-group-inline button {
    display: inline-block;
  }
  .maplibregl-ctrl-group.maplibregl-ctrl-group-inline button + button {
    border-top: unset;
    border-left: 1px solid #ddd;
  }
  .maplibregl-ctrl-group.maplibregl-ctrl-group-inline button:first-child {
    border-radius: 4px 0 0 4px;
  }
  .maplibregl-ctrl-group.maplibregl-ctrl-group-inline button:last-child {
    border-radius: 0 4px 4px 0;
  }
  
  /* 3D Button */
  .mtk-3d-control button {
    color: #333;
    font-weight: bold;
  }
  
  /* Pitch Slider */
  .mtk-pitch-control {
    position: relative;
    pointer-events: auto;
    width: 29px; /* maplibregl default button width */
    height: 0px;
    overflow-y: hidden;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }
  .mtk-pitch-control.mtk-active {
    height: 52px;
    overflow: visible;
  }
  .maplibregl-ctrl.mtk-pitch-control:not(.mtk-active) {
    margin-top: -10px;
  }
  .mtk-pitch-control-slide {
    width: 5px;
    height: 100%;
    margin: 0 12px;
    border: 2px solid #fff;
    border-radius: 3px;
    background: #ddd;
    box-shadow: 0 0 0 2px rgb(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  .mtk-pitch-control-knob {
    cursor: pointer;
    position: absolute;
    width: 14px;
    height: 14px;
    margin: 0px 7px;
    border-radius: 50%;
    background: #ddd;
    box-shadow: 0 0 0 2px rgb(0, 0, 0, 0.1);
    border: 4px solid #fff;
    box-sizing: border-box;
  }
  .mtk-pitch-control-knob:hover {
    background: #ccc;
  }
  .mtk-pitch-control-knob:active {
    background: #bbb;
  }
  
  /* Compass */
  .mtk-compass-control {
    position: relative;
    display: flex;
    align-items: center;
    pointer-events: auto;
    width: 43px;
    height: 43px;
    box-shadow: 0 0 0 2px rgb(0, 0, 0, 0.1);
    border-radius: 50%;
  }
  .maplibregl-ctrl.mtk-compass-control {
    margin-left: 3px;
    margin-right: 3px;
  }
  .mtk-compass-control-img {
    position: absolute;
    width: 43px;
    height: 43px;
    background-image: url("https://static.maptoolkit.net/images/compass.svg");
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .mtk-compass-control-arrow-left {
    cursor: pointer;
    height: 100%;
    background-image: url("https://static.maptoolkit.net/images/compassarrow.svg");
    background-size: 51px;
    background-position: -2px -4px;
    background-repeat: no-repeat;
    flex: 1;
  }
  .mtk-compass-control-arrow-right {
    cursor: pointer;
    height: 100%;
    background-image: url("https://static.maptoolkit.net/images/compassarrow.svg");
    background-size: 51px;
    background-position: -35px -4px;
    background-repeat: no-repeat;
    flex: 1;
  }
  .mtk-compass-control-label {
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    flex: 1;
    flex-shrink: 0;
  }
  .mtk-compass-control-arrow-left:hover,
  .mtk-compass-control-arrow-right:hover,
  .mtk-compass-control-label:hover {
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.4));
  }
  
  .mtk-control-styles {
    position: relative;
  }
  .mtk-control-styles .mtk-control-styles-current {
    width: 75px;
    height: 75px;
  }
  .mtk-control-styles .mtk-control-styles-current .mtk-control-styles-current-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: border-box;
    box-sizing: border-box;
  }
  .mtk-control-styles .mtk-control-styles-current .mtk-control-styles-current-name {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 2px;
    box-sizing: border-box;
  }
  .mtk-control-styles .mtk-control-styles-groups {
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 7px;
    background: #ffffff;
    width: 269px;
    display: none;
    overflow: auto;
  }
  .mtk-control-styles.mtk-control-styles-top-left .mtk-control-styles-groups {
    top: 0;
    left: 0;
    margin: 0 0 0 85px;
  }
  .mtk-control-styles.mtk-control-styles-top-right .mtk-control-styles-groups {
    top: 0;
    right: 0;
    margin: 0 85px 0 0;
  }
  .mtk-control-styles.mtk-control-styles-bottom-left .mtk-control-styles-groups {
    bottom: 0;
    left: 0;
    margin: 0 0 0 85px;
  }
  .mtk-control-styles.mtk-control-styles-bottom-right .mtk-control-styles-groups {
    bottom: 0;
    right: 0;
    margin: 0 85px 0 0;
  }
  @media only screen and (max-width: 768px) {
    .mtk-control-styles.mtk-control-styles-top-left .mtk-control-styles-groups,
    .mtk-control-styles.mtk-control-styles-top-right .mtk-control-styles-groups,
    .mtk-control-styles.mtk-control-styles-bottom-left .mtk-control-styles-groups,
    .mtk-control-styles.mtk-control-styles-bottom-right .mtk-control-styles-groups {
      margin: 0;
    }
  }
  .mtk-control-styles .mtk-control-styles-groups-active {
    display: block;
  }
  .mtk-control-styles .mtk-control-styles-groups button.mtk-control-styles-close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 14px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg' fill='%23555555' transform='rotate(45)'%3E%3Cpath d='M6 0c-.621 0-1.125.504-1.125 1.125v3.75h-3.75a1.125 1.125 0 000 2.25h3.75v3.75a1.125 1.125 0 002.25 0v-3.75h3.75a1.125 1.125 0 000-2.25h-3.75v-3.75C7.125.504 6.621 0 6 0z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 13px 13px;
    width: 13px;
    height: 13px;
  }
  .mtk-control-styles .mtk-control-styles-groups .mtk-control-styles-close:hover {
    background-color: unset;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg' fill='%23000000' transform='rotate(45)'%3E%3Cpath d='M6 0c-.621 0-1.125.504-1.125 1.125v3.75h-3.75a1.125 1.125 0 000 2.25h3.75v3.75a1.125 1.125 0 002.25 0v-3.75h3.75a1.125 1.125 0 000-2.25h-3.75v-3.75C7.125.504 6.621 0 6 0z'%3E%3C/path%3E%3C/svg%3E");
    opacity: 1;
  }
  .mtk-control-styles .mtk-control-styles-groups button.mtk-control-styles-expand {
    bottom: 0;
    right: 0;
    margin: 14px auto 0 auto;
    width: auto;
    height: auto;
    color: #555555;
  }
  .mtk-control-styles .mtk-control-styles-groups button.mtk-control-styles-expand::after {
    content: "";
    display: inline-block;
    width: 13px;
    height: 13px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23555555'%3E%3Cpath d='M3.804 6h12.424a1 1 0 0 1 .72 1.694L9.9 15 3.073 7.682A1 1 0 0 1 3.804 6z'/%3E%3C/svg%3E");
    background-size: 13px 13px;
    margin: 0 0 -3px 3px;
  }
  .mtk-control-styles .mtk-control-styles-groups button.mtk-control-styles-expand:hover {
    color: #000000;
    background-color: unset;
  }
  .mtk-control-styles .mtk-control-styles-groups button.mtk-control-styles-expand:hover::after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23000000'%3E%3Cpath d='M3.804 6h12.424a1 1 0 0 1 .72 1.694L9.9 15 3.073 7.682A1 1 0 0 1 3.804 6z'/%3E%3C/svg%3E");
  }
  .mtk-control-styles .mtk-control-styles-group:not(.mtk-control-styles-group-collapsed) + button.mtk-control-styles-expand {
    display: none;
  }
  .mtk-control-styles .mtk-control-styles-group + .mtk-control-styles-group {
    margin: 14px 0 0 0;
  }
  .mtk-control-styles .mtk-control-styles-group.mtk-control-styles-group-collapsed {
    display: none;
    margin: 0;
  }
  .mtk-control-styles .mtk-control-styles-group-name {
    padding: 0;
    margin: 7px;
  }
  .mtk-control-styles .mtk-control-styles-group-list {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item {
    margin: 5px;
    margin-top: 0;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item button {
    width: 75px;
    height: auto;
    border: none;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item button:hover {
    background-color: unset;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item button:hover .mtk-control-styles-group-list-item-name {
    color: #000000;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item button:hover .mtk-control-styles-group-list-item-image {
    border-color: #000000;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item button * {
    pointer-events: none;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item .mtk-control-styles-group-list-item-image {
    box-sizing: border-box;
    width: 100%;
    height: 75px;
    background-color: #dddddd;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-clip: content-box;
    border-radius: 4px;
    border: 2px solid transparent;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item .mtk-control-styles-group-list-item-name {
    color: #555555;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item-active .mtk-control-styles-group-list-item-image {
    padding: 2px;
    border-color: #000000;
  }
  .mtk-control-styles .mtk-control-styles-group-list-item-active .mtk-control-styles-group-list-item-name {
    color: #000000;
  }
  .mtk-geocoder-magnify {
     position: absolute;
     top: 0;
     left: 0;
     display: block;
     width: 15px;
     height: 15px;
     margin: 7px;
     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.61 13.727l-3.097-3.096a6.837 6.837 0 10-1.885 1.886l3.096 3.096a1.35 1.35 0 001.886 0 1.333 1.333 0 000-1.886zM6.834 2.003a4.833 4.833 0 110 9.667 4.833 4.833 0 010-9.667z'%3E%3C/path%3E%3C/svg%3E");
     background-size: 15px 15px;
   }
   .mtk-geocoder-cancel {
     position: absolute;
     top: 0;
     right: 0;
     display: block;
     width: 13px;
     height: 13px;
     margin: 8px;
     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg' transform='rotate(45)'%3E%3Cpath d='M6 0c-.621 0-1.125.504-1.125 1.125v3.75h-3.75a1.125 1.125 0 000 2.25h3.75v3.75a1.125 1.125 0 002.25 0v-3.75h3.75a1.125 1.125 0 000-2.25h-3.75v-3.75C7.125.504 6.621 0 6 0z'%3E%3C/path%3E%3C/svg%3E");
     background-size: 13px 13px;
     cursor: pointer;
   }
   .mtk-geocoder-loading::after {
     content: "";
     position: absolute;
     top: 0;
     right: 0;
     margin: 7px;
     width: 15px;
     height: 15px;
     box-sizing: border-box;
     background-color: transparent;
     border: 2px solid transparent;
     border-right: 2px solid #000000;
     border-left: 2px solid #000000;
     border-radius: 50%;
     animation: mtk-geocoder-loading 750ms linear infinite;
   }
   @keyframes mtk-geocoder-loading {
     from {
       -webkit-transform: rotate(0deg);
     }
     to {
       -webkit-transform: rotate(360deg);
     }
   }
   .mtk-geocoder input {
     border: none;
     outline: none;
     height: 29px;
     padding: 0 29px 0 29px;
     background-color: transparent;
     font-size: 13px;
   }
  .mtk-geocoder-autocomplete {
     width: 100%;
     background-color: #ffffff;
     border-radius: 4px;
     margin: 10px 0 0 0;
     padding: 0;
     -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
     -webkit-box-shadow: 0 0 2px rgb(0 0 0 / 10%);
     box-shadow: 0 0 0 2px rgb(0 0 0 / 10%);
   }
   .mtk-geocoder-autocomplete li {
     padding: 5px 8px;
     display: flex;
     align-items: center;
   }
   .mtk-geocoder-autocomplete li * {
     pointer-events: none;
   }
   .mtk-geocoder-autocomplete li.mtk-autocomplete-group {
     font-weight: bold;
   }
   .mtk-geocoder-autocomplete li.mtk-autocomplete-suggestion {
     display: list-item;
     line-height: normal;
     padding: 5px 16px;
   }
   .mtk-geocoder-autocomplete li.mtk-autocomplete-suggestion-active {
     background-color: rgba(0, 0, 0, 0.05);
     cursor: pointer;
   }
  `],Le=[s`
  * {
    box-sizing: border-box;
  }
  
  :host {
    display: block;
    height: 31.25rem;
    position: relative;
  }
  
  .maplibregl-map {
    height: 100%;
  }
  
  .maplibregl-popup-content {
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 40%) 0px 3px 14px;
    padding: 2rem 1rem 1rem 1rem;
    font-family: var(--wm-font-stack-default);
    font-size: 1rem;
  }
  
  .maplibregl-popup-close-button {
    align-items: center;
    background-color: var(--wm-color-weiss);
    border-radius: 50%;
    color: var(--wm-color-fastschwarz);
    display: flex;
    font-size: 1.2rem;
    height: 1.6rem;
    justify-content: center;
    line-height: 0.7;
    padding: 0;
    right: 0.3rem;
    top: 0.3rem;
    width: 1.6rem;
  }
  
  .maplibregl-popup-content p {
    line-height: 1.6;
  }
  
  .maplibregl-popup-content p:last-of-type {
    margin-bottom: 0;
  }
  
  h3 {
    font-variation-settings: var(--wm-font-weight-bold);
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 0;
  }
  
  .controls {
    background: #fff;
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    z-index: 1230;
  }
  
  :host(:not([geocoder])) .mapboxgl-ctrl-geocoder {
    display: none;
  }
  `];let Me=class extends Q{get _controls(){return this.renderRoot?.querySelector(".controls")??null}static properties={center:{type:String},id:{type:String},geocoder:{type:Boolean},zoom:{type:Number},_mapLoaded:{type:Boolean,attribute:!1},_markers:{type:Array,attribute:!1},_isInViewport:{type:Boolean}};static styles=[Ae,Le];constructor(){super(),this.center="16.35649860253831, 48.2110270434633",this.id="",this.geocoder=!1,this._mapLoaded=!1,this.zoom=16,this._bounds=[],this._markers={},this._isInViewport=!1,this._checkVisibility()}_checkVisibility(t=.2){new IntersectionObserver(this._handleIntersection.bind(this),{threshold:t}).observe(this)}updated(t){t.has("_isInViewport")&&this._isInViewport&&(this._embedScript("https://static.maptoolkit.net/mtk/v10.1.3/mtk.js",!0),this._embedScript("https://unpkg.com/@maplibre/maplibre-gl-geocoder@1.2.0/dist/maplibre-gl-geocoder.min.js"))}_handleIntersection(t){t.map((t=>{const e=t.target;return t.isIntersecting&&(this._isInViewport=!0,console.log(e)),t})),this._initialized=!0}_getMarkers(){for(let t=0;t<this.querySelectorAll("wm-mapmarker").length;t++){const e=this.querySelectorAll("wm-mapmarker")[t];this.addMarker(`marker_${t}`,e.getAttribute("lng"),e.getAttribute("lat"),e.getAttribute("label"),!1,e.innerHTML)}this.resetBounds()}resetBounds(){Object.keys(this._bounds).length&&this.map.fitBounds(this._bounds,{padding:50})}_coordsToArray(t){return t.replaceAll(" ","").split(",")}_addGeoCoder(){if(this.geocoder){const t=new window.MaplibreGeocoder({forwardGeocode:async t=>{const e=await fetch(`https://geocoder.maptoolkit.net/search?q=${t.query}&language=${t.language[0]}&countrycodes=${t.countries}&api_key=wien`);return{features:(await e.json()).map((t=>({type:"Feature",geometry:{type:"Point",coordinates:[t.lon,t.lat]},place_type:["place"],place_name:t.display_name,text:t.type,properties:t,center:[t.lon,t.lat]})))}}},{showResultsWhileTyping:!0,showResultMarkers:!1,maplibregl,countries:"at",language:"de",marker:!1});t.addTo(this.map),t.on("result",(t=>{this.addMarker(t.result.properties.place_id,t.result.center[0],t.result.center[1],t.result.place_name,!0)}))}}_initMTK(){window.MTK.init({apiKey:"wien"}).createMap(this.shadowRoot.querySelector(`#map_${this.id}`),{map:{location:{center:this._coordsToArray(this.center),zoom:this.zoom,fitBoundsOptions:{padding:50}},mapType:"wien-ther_stadtplan_wien"}},(t=>{this.map=t.gl,this.map.scrollZoom.disable(),this._bounds=new window.maplibregl.LngLatBounds,this._getMarkers(t),this._addEvents(),this._addGeoCoder(),this._mapLoaded=!0,this.dispatchEvent(new CustomEvent("mapReady",{bubbles:!0,composed:!0,detail:{map:this.map}}))}))}_addEvents(){this.map.on("moveend",(()=>{this.dispatchEvent(new CustomEvent("moveend",{bubbles:!0,composed:!0,detail:{map:this.map}}))}))}_setPopupContent(t,e,i,o,r,s,a){const n=document.createElement("div");if(n.innerHTML=`<h3>${o}</h3>\n    ${a||""}\n    ${s?`<p>lng: ${e}<br>lat: ${i}</p>`:""}\n    `,s){const e=document.createElement("button");e.textContent="Löschen",e.addEventListener("click",(()=>{console.log(r),r.remove(),delete this._markers[t],this.dispatchEvent(new CustomEvent("markerRemoved",{bubbles:!0,composed:!0,detail:{markers:this._markers}}))})),n.appendChild(e)}return n}deleteAll(){this._bounds=new window.maplibregl.LngLatBounds;for(const t in this._markers)this._markers[t].marker.remove()}addMarker(t,e,i,o,r=!1,s){const a=new window.maplibregl.Marker({draggable:r}),n=this._setPopupContent(t,e,i,o,a,r,s),l=new window.maplibregl.Popup({offset:25}).setDOMContent(n);a.setLngLat([e,i]).setPopup(l).addTo(this.map);a.on("dragend",(()=>{const e=a.getLngLat(),i=this._setPopupContent(t,e.lng,e.lat,"Aktualisierter Pin",a,r);l.setDOMContent(i)})),a._element.setAttribute("role","button"),this._markers[t]={lng:e,lat:i,label:o,marker:a},this._bounds.extend(new window.maplibregl.LngLat(e,i)),this.dispatchEvent(new CustomEvent("markerAdded",{bubbles:!0,composed:!0,detail:{marker:a,markers:this._markers}}))}_embedScript(t,e=!1){const i=document.createElement("script");e&&(i.onload=this._onLoad.bind(this)),i.src=t,this.append(i)}_onLoad(t){this._initMTK(),t.target.onload=null}reRender(){this.map.resize(),this.resetBounds()}render(){return B`
        ${this.geocoder?B`<div class="controls">
              <link
                rel="stylesheet"
                href="https://unpkg.com/@maplibre/maplibre-gl-geocoder@1.2.0/dist/maplibre-gl-geocoder.css"
              />
            </div>`:""}
        <div id="map_${this.id}"></div>
      `}};customElements.define("wm-map",Me);class Te extends Q{get _dialog(){return this.querySelector("dialog")??null}get _carousel(){return this.querySelector("wm-carousel")??null}get _content(){return this.querySelector(".content-inner")??null}get _captionElement(){return this.querySelector(".caption")??null}static properties={isopen:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},_type:{type:String},_caption:{type:String},_trigger:{type:Node},_thumbs:{type:Array,attribute:!1},_currentThumb:{type:Number}};constructor(){super(),this.isopen=!1,this.size="fit-content",this._type="image",this._caption="",this._thumbs=[],this._currentThumb=0,this._trigger=void 0}_addEvents(){this._dialog.addEventListener("close",this._closeEvent.bind(this))}_addGlovalEvents(){document.body.addEventListener("click",(t=>{this._trigger=t.target.closest("[data-modal]"),t.composedPath().filter((t=>{t.dataset&&"modal"in t.dataset&&(this._trigger=t)})),this._trigger&&this._trigger.dataset.modal&&(t.preventDefault(),this._prepareContent(t.target))}))}_prepareContent(t=null){this._type=this._trigger.dataset.modal,"image"===this._type?this._getImage():(this._getHTML(t),this._getThumbs()),this.open()}toModal(t,e=null){t.addEventListener("click",(i=>{i.preventDefault(),this._trigger=t,this._prepareContent(e)}))}_closeEvent(){this.dispatchEvent(new CustomEvent("closed",{bubbles:!0})),this.close()}_getImage(){const t=new Image;if(t.src=this._trigger.getAttribute("href"),this.alt="",this._trigger.querySelector("[alt]")?this.alt=this._trigger.querySelector("[alt]").getAttribute("alt"):this.alt=this._trigger.textContent,t.alt=this.alt,this._trigger.closest("figure")){const t=this._trigger.closest("figure");this._caption=t.querySelector("figcaption").innerHTML}this._dialog.addEventListener("touchstart",se),t.onload=()=>{this._imageZoom=new re({img:t,container:this._content,zoomedClass:"wm-image--zoomed"}),this._content.style.width=`${t.width}px`,this._content.style.aspectRatio=`${t.width} / ${t.height}`,t.classList.add("wm-image--zoom"),this._captionElement&&(this._captionElement.style.width=`${t.width}px`)},this._content.appendChild(t)}_switchSlide(t){this._carousel.slide(t)}_getThumbs(){if(this._trigger.dataset.thumbs){const t=document.querySelector(`#${this._trigger.dataset.thumbs}`).content.cloneNode(!0).querySelectorAll("img");this._thumbs=Array.from(t),this.querySelector("wm-carousel").addEventListener("slideChanged",(t=>{this._currentThumb=t.detail-1}))}}_getHTML(t){let e=document.querySelector(`#${this._type}`);t.shadowRoot&&(e=t.shadowRoot.querySelector(`#${this._type}`)),this._content.innerHTML=e.innerHTML,this._trigger.dataset.size&&(this.size=this._trigger.dataset.size)}_clickOutSide(t){"DIALOG"===t.target.nodeName&&this.close()}open(){this.isopen=!0,setTimeout((()=>{this._dialog.showModal(),this._dialog.focus()}),0),this.dispatchEvent(new CustomEvent("opened",{bubbles:!0}))}close(){this.isopen&&(this._imageZoom?this._imageZoom.ready&&(this._dialog.removeEventListener("touchstart",se),this._content.removeAttribute("style"),this._imageZoom.resetZoom(),this._imageZoom.destroyEvents(),this._cleanUpAfterClose()):this._cleanUpAfterClose())}_cleanUpAfterClose(){this.isopen=!1,this._dialog.close(),this._content.innerHTML="",this._caption="",this._thumbs=[],this.size="fit-content"}_controlCarousel(t){this._carousel&&("ArrowLeft"===t.code&&this._carousel.prev(),"ArrowRight"===t.code&&this._carousel.next())}firstUpdated(){this._addEvents()}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._addGlovalEvents()}render(){return B`
        <slot></slot>
        <dialog tabindex="-1" aria-modal="true" class="modal-${-1!==this._type.indexOf("image")?"image":"html"}" @click=${this._clickOutSide} @keyup="${this._controlCarousel}">
          <div class="controls">
          ${Bt(this._thumbs,(()=>B`
          <div class="thumbs">
          ${this._thumbs.map(((t,e)=>B`
              <wm-button class="thumb" kind="clean" @click="${this._switchSlide.bind(this,e)}" aria-pressed="${e===this._currentThumb}">
                <button>
                  ${t}
                </button>
              </wm-button>
            `))}
          </div>
          `))}
            <wm-button kind="clean" class="close" @click="${this.close}">
              <button type="button">
                <wm-icon iconid="close" size="32">Close</wm-icon>
              </button>
            </wm-button>
          </div>
          <div class="content html">
            <div class="content-wrapper">
              <div class="content-inner"></div>
              ${Bt(this._caption,(()=>B`
              <div class="caption">
                <wm-toggle full selectable="false">
                  <strong slot="label">Bildbeschreibung</strong>
                  <div slot="content">
                  ${yt(this._caption)}
                  </div>
                </div>`))}
            </div>
          </div>
        </dialog>
      `}}customElements.define("wm-modal",Te);const qe=[s`
  :host {
    --navmain-wrapperwidth: var(--_navmain-wrapperwidth, 70rem);
    --navmain-gap: var(--_navmain-gap, 1rem);
  }`],Be=[s`
    * {
      box-sizing: border-box;
    }
  
    :host {
      /* see header section in /styles/base/page.css for details */
      --_dialog-offset: var(--dialog-offset, var(--header-height-dynamic));
      --_backdrop-offset: var(--dialog-offset, var(--header-height-dynamic));
  
      display: block;
      /* Nav should fill the header */
      height: 100%;
    }
  
    nav {
      /* inherit height from header */
      height: inherit;
    }
    
    dialog {
      background-color: transparent;
      border: 0;
      /* height minus the height of the header */
      height: calc(100dvh - var(--_dialog-offset));
      inset-block-start: var(--_dialog-offset);
      margin-block: 0;
      margin-inline: auto 0;
      max-height: calc(100dvh - var(--_dialog-offset));
      max-width: 100vw;
      overflow: hidden;
      padding: 0;
      scrollbar-gutter: stable;
      width: 100vw;
    }
  
    ::backdrop {
      /* Backdrop doesn't inherit anything, that's why we have to apply this ugly hack
      3.5 equals the header height */
      --_inset-block-start: 3.5rem;
      background: rgb(0 0 0 / 0.5);
      inset-block-start: var(--_inset-block-start);
    }
  
    @media (min-width: 64rem) {
      ::backdrop {
        --_inset-block-start: 6.25rem
      }
    }
  
    /* Content within the dialog is wrapped */
    .wrapper {
      height: 100%;
      margin-inline: auto;
      max-width: var(--navmain-wrapperwidth);
      overflow: hidden;
    }
  
    .wrapper--hidden {
      transform: translateX(100vw);
    }
  
    /* The transition is applied conditionally to avoid quirky behavior */
    .transition {
      transition: transform 0.25s ease-out;
    }
  
    /* Content within the dialog */
    .content {
      --_spacing-inline-end: 0;
      background-color: var(--header-nav-wrapper-background);
      display: flex;
      flex-direction: column;
      height: 100%;
      margin-inline: auto var(--_spacing-inline-end);
      max-width: 25rem;
      width: 100%;
    }
  
    @media (min-width: 34.375rem) {
      .content {
        /* --site-wrapper-width-s + --site-wrapper-padding *2 */
        --_spacing-inline-end: calc(((100vw - var(--site-wrapper-width-s)) / 2) - var(--site-wrapper-padding));
      }
    }
  
    @media (min-width: 48rem) {
      .content {
        --_spacing-inline-end: calc(var(--site-wrapper-padding) / 2);
      }
    }
  
    /* Header within the dialog (contains close button and optionally user name) */
    .header {
      --_padding-inline: var(--site-wrapper-padding);
      align-items: center;
      display: flex;
      min-height: var(--header-nav-height);
      padding-inline: var(--_padding-inline);
      text-align: right;
      justify-content: flex-end;
    }
  
    @media (min-width: 48rem) {
      .header {
        --_padding-inline: calc(var(--site-wrapper-padding) / 2);
      }
    }
  
    /* Wrapper for links */
    .lists {
      flex-grow: 1;
      height: inherit;
    }
  
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    li {
      position: relative;
      height: inherit;
    }
  
    ul ul {
      text-indent: 1rem;
    }
  
    /* Toggle buttons */
    .lists button {
      all: initial;
      font: inherit;
    }
  
    /* General styling for links and buttons */
    .lists :is(a, button) {
      align-items: center;
      box-sizing: border-box;
      padding: 0;
      display: flex;
      justify-content: space-between;
      height: inherit;
      width: 100%;
    }
  
    .lists :is(a, button):is(:link, :visited) {
      color: inherit;
      text-decoration: none;
    }
  
    .lists :is(a, button):focus-visible {
      outline: 3px solid currentColor;
    }
  
    /* Show list when button expanded */
    [aria-expanded="true"] + ul {
      display: block;
    }
  
    /**
     * Variation when links are not hidden “behind a burger”
     */
  
    /* Nav takes up the whole space */ 
    :host([listsVisible]) {
      width: 100%;
    }
  
    /* inherit height from header */
    :host([listsVisible]) ul {
      height: inherit;
    }
  
    :host([listsVisible]) ul ul,
    li li {
      height: auto;
      text-indent: 0;
    }
  
  
    :host([listsVisible]) [aria-expanded="true"] + ul {
      position: absolute;
      background: var(--header-nav-active-link-background);
      top: 100%;
      left: 0;
      width: max-content;
    }
  
    :host([listsVisible]) .lists li li :is(a, button) {
      padding-block: 0.5125rem 0.3875rem;
    }
  
    :host([listsVisible]) .lists li li :is(a, button):hover {
      text-decoration: underline;
    }
  
    :host([listsVisible]) .lists li li :is(a, button) {
      color: var(--header-nav-active-link-color);
    }
  
  
    :host([listsVisible]) .lists li ul {
      padding-block: 0.5rem;
      max-height: calc(100vh - 100%);
      border-image: conic-gradient( var(--header-nav-active-link-background) 0 0) fill 1//0 100vw;
    }
  
    /* Braucht es den Hack? */
    /*
    :host([listsVisible]) .lists li ul::before {
      content: "";
      width: 200vw;
      height: 100%;
      background: var(--header-nav-active-link-background);
      display: block;
      position: fixed;
      left: 0;
      top: 0;
    } 
    */
  
    :host(:not([listsVisible])) .lists {
      overflow: auto;
    }
  
    :host([listsVisible]) wm-icon {
      display: none;
    }
  
    :host([listsVisible]) ul:not([hidden]) {
      display: flex;
      gap: clamp(1rem, 5%, var(--navmain-gap));
    }
  
    /**
     * Variation when links are hidden “behind a burger”
     */
  
    .burger {
      height: 100%;
      display: flex;
      align-items: center;
    }
  
    :host(:not([listsVisible])) [aria-expanded="true"] {
      background-color: var(--header-nav-active-link-background) !important;
      border-image: conic-gradient( var(--header-nav-active-link-background) 0 0) fill 1//0 50vw !important;
      color: var(--header-nav-active-link-color);
    }
  
    /* Underline links */
    :is(a, button):is(:hover, :focus-visible) span,
    :host([listsVisible]) [aria-expanded="true"] span {
      box-shadow: 0 4px 0 0 var(--header-nav-active-link-background);
    }
  
    /* Adapt link and button styling */
    :host(:not([listsVisible])) .lists :is(a, button) {
      text-transform: uppercase;
      padding: 0.8125rem 1.5625rem 0.6875rem;
    }
  
    :host(:not([listsVisible])) .lists :is(a, button):focus-visible {
      outline-offset: -3px;
    }
  `];class Ie extends Q{get _dialog(){return this.renderRoot?.querySelector("dialog")??null}get _content(){return this.renderRoot?.querySelector(".wrapper")??null}get _lists(){return this.renderRoot?.querySelector(".lists")??null}static properties={labelOpen:{type:String},showLabelOpen:{type:String},labelClose:{type:String},type:{type:String,reflect:!0},listsVisible:{type:Boolean,reflect:!0},isopen:{type:Boolean,reflect:!0},_items:{type:Array,attribute:!1},_openItem:{type:Number,attribute:!1},_lastFocusedElement:{type:Node,attribute:!1}};static styles=[qe,Be];constructor(){super(),this.labelOpen="Menü",this.labelClose="Schließen",this.showLabelOpen="true",this._items=[],this.isopen=!1,this.type="visible",this.listsVisible=!1,this._openItem=void 0,this._lastFocusedElement=void 0,this._nativeCloseEvent=this._nativeClose.bind(this),this._closeOnTransitionEndEvent=this._closeOnTransitionEnd.bind(this),this.addEventListener("mouseleave",(()=>{this.listsVisible&&this._closeSub(this._openItem)}))}connectedCallback(){super.connectedCallback(),this._getLayout(),this._addGlovalEvents()}updated(t){t.has("isopen")&&(this.isopen?this.open():this.close())}_addGlovalEvents(){this.addEventListener("keydown",(t=>{"Escape"===t.code&&(t.preventDefault(),void 0!==this._openItem&&this._closeSub(this._openItem),this.isopen=!1,this._moveFocus())}))}_moveFocus(){this._lastFocusedElement&&(this._lastFocusedElement.focus(),this._lastFocusedElement=void 0)}_handleClickOutside(t){t.target.classList.contains("wrapper")&&(this.isopen=!1)}_addEvents(){setTimeout((()=>{this._dialog&&(this._dialog.addEventListener("close",this._nativeCloseEvent),this._content.addEventListener("transitionend",this._closeOnTransitionEndEvent))}),0)}_closeOnTransitionEnd(t){t.target.classList.contains("wrapper--hidden")&&(this._dialog.close(),this._content.classList.remove("wrapper--hidden"))}_nativeClose(t){t.target.classList.contains("wrapper--hidden")||this._content.classList.remove("transition")}_getLayout(){"visible"===this.type&&(this.listsVisible=!0);const t=window.matchMedia("(min-width: 64em)"),e=t=>{"hiddenmobile"===this.type&&(this.listsVisible=t.matches),this.listsVisible||(this._addEvents(),"hiddenmobile"===this.type&&(this.isopen=!1))};t.addEventListener("change",e),e(t)}open(){this._content&&(this._content.classList.remove("wrapper--hidden"),this._dialog.showModal(),this._content.classList.add("wrapper--hidden"),setTimeout((()=>{this._content.classList.add("transition"),this._content.classList.remove("wrapper--hidden")}),0))}close(){this._content&&this._content.classList.add("wrapper--hidden")}_getContents(){this._items=[];const t=this.shadowRoot.querySelector("slot").assignedElements(),e=(t,i)=>{const o=i.querySelectorAll(":scope > li");for(let i=0;i<o.length;i++){const r=o[i],s=r.querySelector("a"),a={text:s.textContent,href:s.getAttribute("href"),children:[],collapsed:!0},n=r.querySelector("ul");if(n){const t=[];e(t,n),a.children=t}t.push(a)}};for(let i=0;i<t.length;i++){const o=t[i];e(this._items,o)}}rerender(){this._getContents()}_openCloseSub(t,e){this._lastFocusedElement=e.target,void 0!==this._openItem&&this._openItem!==t&&this._closeSub(this._openItem),this._items[t]&&(this._openItem=t,this._items[t].collapsed=!this._items[t].collapsed,this.requestUpdate(),"visible"===this.type&&(this.isopen=!this._items[t].collapsed))}_openSub(t){void 0!==this._openItem&&this._closeSub(this._openItem),this._openItem=t,this._items[t].collapsed=!1,this.requestUpdate()}_closeSub(t){void 0!==this._openItem&&(this._items[t].collapsed=!0,this.requestUpdate(),this._openItem=void 0)}_openCloseNav(){this.isopen=!this.isopen}_burgerTemplate(){return B`
        <wm-button kind="clean" @click="${this._openCloseNav}" class="burger">
          <button>
            ${"false"===this.showLabelOpen?B`<span class="wm-h-vh">${this.labelOpen}</span>`:`${this.labelOpen}`}
            <wm-icon iconid="burger"></wm-icon>
          </button>
        </wm-button>
      `}_handleKeyDown(t){if("Tab"===t.key){const e=t.target.parentNode.parentNode;(!t.shiftKey&&t.target===e.lastElementChild.querySelector("a")||t.shiftKey&&t.target===e.firstElementChild.querySelector("a"))&&this._closeSub(this._openItem)}}_handleButtonMouseOver(t,e){this.listsVisible&&this._openSub(t,e)}_handleLinkMouseOver(t){this.listsVisible&&this._closeSub(this._openItem,t)}_listsTemplate(){return B`
        <div class="lists">
          <ul>
            ${this._items.map(((t,e)=>B`
              <li>
                ${Bt(!t.children.length,(()=>B`
                  <a href="${t.href}" @mouseover="${this._handleLinkMouseOver.bind(this)}">
                    <span>
                    ${t.text}
                    </span>
                  </a>
                `),(()=>B`
                  <button aria-expanded="${!t.collapsed}" @click="${this._openCloseSub.bind(this,e)}" @mouseover="${this._handleButtonMouseOver.bind(this,e)}">
                    <span>${t.text}</span>
                    <wm-icon iconid="chevron-down"></wm-icon>
                  </button>
              
                  <ul hidden>
                    ${t.children.map((t=>B`
                        <li>
                          <a href="${t.href}" @keydown="${this._handleKeyDown}">
                            <span>
                              ${t.text}
                            </span>
                          </a>
                        </li>`))}
                  </ul>
                `))} 
              </li>
            `))}
          </ul>
          <slot hidden @slotchange="${this.rerender}"></slot>
        </div>
      `}render(){return B`
        <nav>
          ${this.listsVisible?"":this._burgerTemplate()}
  
          ${this.listsVisible?B`${this._listsTemplate()}`:B`
            <dialog @click="${this._handleClickOutside}">
              <div class="wrapper">
                <div class="content">
                  <div class="header">
                    <wm-button kind="clean" @click="${this._openCloseNav}">
                      <button>
                        <span class="wm-h-vh">${this.labelClose}</span>
                        <wm-icon iconid="close"></wm-icon>
                      </button>
                    </wm-button>
                  </div>
                  ${this._listsTemplate()}
                </div>
              </div>
            </dialog>
          `}
        </nav>
      `}}customElements.define("wm-nav-main",Ie);const He=[s`
  :host {
    --quicklinks-gap: var(--_quicklinks-gap, 2rem);
  }`],Ne=[s`
  :host {
    --_column-count: 1;
    --_max-width: var(--content-text-max-width);
  
    display: block;
  }
  
  @container(min-width: 48rem) {
    :host([cols="2"]),
    :host([cols="3"])  {
      --_column-count: 2;
    }
  }
  
  @container(min-width: 64rem) {
    :host([cols="3"])  {
      --_column-count: 3;
    }
  }
  
  :host(:not([cols])) {
    max-width: var(--_max-width);
  }
  
  ::slotted(:is(ul, ol)) {
    column-count: var(--_column-count);
    column-gap: var(--quicklinks-gap);
    list-style: none;
    margin: 0;
    padding: 0 !important;
  }
  `];customElements.define("wm-quicklinks",class extends Q{static properties={cols:{type:Number,reflect:!0}};static styles=[He,Ne];constructor(){super(),this.cols=1}render(){return B`
        <slot></slot>
      `}});class Ve extends(ce(Q)){static properties={checked:{type:Boolean,reflect:!0}};static styles=[xt,pe,ge];constructor(){super(),this.checked=!1,this.type="radio"}_handleClick(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("wm-change",{detail:this.checked,bubbles:!0,composed:!0}))}render(){return this._renderItem(B`
        <input 
          autocomplete=${It(this.autocomplete)}
          type="${this.type}" 
          .indeterminate=${de(this.indeterminate)}
          .checked=${de(this.checked)}
          aria-describedby="${It(this._hasHint||this._hasError?"message":void 0)}"
          aria-disabled="${It(!!this.disabled||void 0)}"
          aria-invalid="${It(!!this._hasError||void 0)}"
          ?required=${this.required}
          id="${this._id}"
          ?name="${It(this.name)}"
          .value=${de(this.value)}
          @input="${this._handleInput}" 
          @click="${this._handleClick}" 
        >
      `)}}customElements.define("wm-radio",Ve);const Oe=[s`
  :host {
    --section-background: var(--_section-background, transparent);
    --section-border-color: var(--_section-border-color, var(--site-color-secondary));
    --section-border-width: var(--_section-border-width, 12px 0);
    --section-padding: var(--_section-padding, 0);
    --section-padding-highlight: var(--_section-padding-highlight, 1rem);
    --section-padding-highlight-large: var(--_section-padding-highlight-large, 2rem);
    --section-background-highlight: var(--_section-background-highlight, transparent);
    --section-nav-shadow: var(--_section-nav-shadow, none);
    --section-nav-link-padding: var(--_section-nav-link-padding, 0.8rem var(--site-wrapper-padding));
    --section-nav-link-highlight: var(--_section-nav-link-highlight, gray);
    --section-nav-link-highlight-large: var(--_section-nav-link-highlight-large, gray);
    --section-nav-background: var(--_section-nav-background, gray);
    --section-nav-background-large: var(--_section-nav-background-large, #fff);
  }`],Re=[s`
    * {
      box-sizing: border-box;
    }
  
    :host {
      --background: var(--section-background);
      --padding: var(--section-padding);
  
      background: var(--background);
      /* solid color image that fills the entire element and extends by 0px above an below and by 50vw to its sides */
      /* https://codepen.io/SelenIT/pen/bGLmGVq?editors=1100 */
      container-type: inline-size;
      display: block;
      padding-block: var(--padding);
      width: 100%;
    }
  
    /*
     * Sections with background color
     */
   :host([highlight]) {
      --background: var(--section-background-highlight);
      --padding: var(--section-padding-highlight);
      --accent-color: initial;
  
      border-image: conic-gradient( var(--background) 0 0) fill 1//0 50vw;
      border-width: var(--section-border-width);
      border-color: var(--section-border-color);
      border-style: solid;
      accent-color: var(--accent-color);
    }
  
    @media(min-width: 64em) {
      :host([highlight]) {
        --padding:  var(--section-padding-highlight-large);
      }
    }
  
    :host([highlight="morgenrot"]) {
      --background: var(--wm-color-morgenrot-light);
      --accent-color: var(--wm-color-morgenrot);
    }
  
    :host([highlight="abendstimmung"]) {
      --background: var(--wm-color-abendstimmung-light);
      --accent-color: var(--wm-color-abendstimmung);
      --input-checkbox-icon:  url('/wiener-melange/assets/icons/check-light.svg');
    }
  
    :host([highlight="goldgelb"]) {
      --background: var(--wm-color-goldgelb-light);
      --accent-color: var(--wm-color-goldgelb);
    }
  
    :host([highlight="flieder"]) {
      --background: var(--wm-color-flieder-light);
      --accent-color: var(--wm-color-flieder);
    }
  
    :host([highlight="wasserblau"]) {
      --background: var(--wm-color-wasserblau-light);
      --accent-color: var(--wm-color-wasserblau);
    }
  
    :host([highlight="frischgruen"]) {
      --background: var(--wm-color-frischgruen-light);
      --accent-color: var(--wm-color-frischgruen);
    }
  
    :host([contentsize="text"]) .section-content {
      max-inline-size: var(--content-text-max-width);
    }
  
    /*
     * Full-width sections
     */
    :host([type="full"]) {
      display: grid;
      grid-template-columns: 5rem 1fr 5rem;
      margin-inline: calc(var(--site-wrapper-padding) * -1);
      width: calc(100% + (var(--site-wrapper-padding) * 2));
    }
  
    ::slotted(*) {
      grid-column: 2;
    }
  
    ::slotted(:last-child) {
      grid-column: 1 / -1;
    }
  
    :host([nav]) {
      align-items: start;
      position: relative;
      display: flex;
      justify-content: space-between;
    }
  
    nav {
      --_nav-pos: fixed;
      --_nav-width: 100vw;
      
      --_nav-inset: var(--header-height-total) 0 0;
      --_nav-height: calc(100vh - var(--header-height-total));
      --_nav-background: var(--section-nav-background);
      --_nav-link: var(--section-nav-link-highlight);
      --_nav-transform: 0;
  
      background: var(--_nav-background);
      box-shadow: var(--section-nav-shadow);
      height: var(--_nav-height);
      inset: var(--_nav-inset);
      max-width: var(--_nav-width);
      position: var(--_nav-pos);
      transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
      transform: translateY(var(--_nav-transform));
      width: 100%;
      z-index: 1220;
    }
  
    :host([nav="toggle"]) .nav-hidden {
      opacity: 0;
      visibility: hidden;
    }
  
    :host([nav="scroll"]) {
      container-type: normal;
      --header-nav-sec-height: 3.4rem;
    }
  
    :host([nav="scroll"]) nav {
      --_nav-height: var(--header-nav-sec-height);
    }
  
    :host([nav="scroll"]) ul {
      display: flex;
      margin: 0;
      overflow: auto;
    }
  
    :host([nav="scroll"]) li {
      flex-shrink: 0;
    }
  
    @media(min-width: 64em) {
      nav,
      :host([nav]) nav {
        --header-nav-sec-height: auto;
        --_nav-pos: sticky;
        --_nav-height: auto;
        --_nav-width: 20.5rem;
        --_nav-inset: calc(var(--header-height) + var(--header-nav-height) + 2rem) 0 auto auto;
        --_nav-background: var(--section-nav-background-large);
        --_nav-link: var(--section-nav-link-highlight-large);
        transform: none;
      }
  
      :host([nav="toggle"]) .nav-hidden {
        opacity: 1;
        visibility: visible;
      }
  
      :host([nav="scroll"]) ul {
        display: block;
        margin: 1.4rem 0;
      }
    }
  
    nav ul {
      list-style: none;
      margin: 1.4rem 0;
      padding: 0;
    }
  
    nav a {
      color: inherit;
      display: block;
      padding:  var(--section-nav-link-padding);
      text-decoration: none;
      transition: background-color 100ms;
    }
  
    nav a[aria-current],
    nav a:hover {
      background-color: var(--_nav-link)
    }
  
    .section-content {
      grid-column: 1 / -1;
    }
  `];customElements.define("wm-section",class extends Q{static properties={highlight:{type:String,reflect:!0},type:{type:String,reflect:!0},nav:{type:String,reflect:!0},contentsize:{type:String,reflect:!0},_links:{type:Array,attribute:!1}};static styles=[Oe,Re];get _headings(){return this.querySelectorAll(':is(h2[id], h3[id], [data-heading]):not([data-heading="false"])')??null}get _nav(){return this.shadowRoot.querySelector("nav")??null}get _toggleButton(){return document.querySelector(".wm-section-toggle button")??null}constructor(){super(),this.highlight=void 0,this.type=void 0,this.nav=void 0,this.contentsize="full",this._links=[],this._options={offset:0}}updated(t){t.has("nav")&&this._addControls(),t.has("nav")&&document.documentElement.classList.add(`wm-has-nav-${this.nav}`)}connectedCallback(){super.connectedCallback(),this._getItems(),this._addGlobalEvents()}_getOffsetFromTopEdge(){this._options.offset=16*(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))+parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-nav-height"))+parseFloat(getComputedStyle(this).getPropertyValue("--header-nav-sec-height"))+2)}_addControls(){if("toggle"===this.nav){const t=document.querySelector("wm-header"),e=this.shadowRoot.querySelector("#toggle-button").content.cloneNode(!0).children[0],i=e.querySelector("button");e.addEventListener("click",(()=>{this._nav.classList.toggle("nav-hidden"),document.documentElement.classList.toggle("wm-is-locked");const t="true"===i.getAttribute("aria-expanded");i.setAttribute("aria-expanded",!t),t||setTimeout((()=>{this.shadowRoot.querySelectorAll("a")[0].focus()}),100)})),t.addAction(e)}}_addGlobalEvents(){let t;this._getOffsetFromTopEdge(),window.addEventListener("scroll",(()=>{if(this._getSectionInView()){this.shadowRoot.querySelectorAll("[aria-current]").forEach((t=>t.removeAttribute("aria-current")));this.shadowRoot.querySelector(`[href="#${this._getSectionInView().getAttribute("id")}"]`).setAttribute("aria-current",!0),window.clearTimeout(t),t=setTimeout((()=>{"scroll"===this.nav&&this._nav.querySelector("ul").scrollTo({top:0,left:this.shadowRoot.querySelector("[aria-current]").offsetLeft,behavior:"smooth"})}),150)}}));window.matchMedia("(min-width: 64em)").addListener((t=>{t.matches&&(this._removeLock(),this._nav&&this._nav.classList.remove("nav-hidden"))})),this.addEventListener("keyup",(t=>{"Escape"===t.code&&(this._closeNav(),this._toggleButton.focus())}))}_getSectionInView(){for(let t=0;t<this._headings.length;t++){const e=this._headings[t].offsetTop,i=this._headings[t+1]?this._headings[t+1].offsetTop:this.getBoundingClientRect().height,o=(document.documentElement.scrollTop||document.body.scrollTop)-(this.getBoundingClientRect().top+window.pageYOffset)+(this._options.offset+1);if(o>e&&o<=i)return this._headings[t]}}_getItems(){this._headings.forEach((t=>{let e=t.getAttribute("id"),i=t.textContent;e||(e=rt(),t.setAttribute("id",e)),t.dataset.heading&&(i=t.dataset.heading),this._links.push({label:i,id:e})}))}_removeLock(){document.documentElement.classList.remove("wm-is-locked")}_closeNav(){this._removeLock(),this._nav&&this._nav.classList.add("nav-hidden"),"toggle"===this.nav&&this._toggleButton.setAttribute("aria-expanded",!1)}render(){return B`
        <div class="section-content">
          <slot></slot>
        </div>
        ${Bt(void 0!==this.nav,(()=>B`<nav class="nav-hidden" part="nav">
          <ul>
            ${this._links.map((t=>B`
                <li>
                  <a href="#${t.id}" @click="${this._closeNav}">
                    ${t.label}
                  </a>
                </li>
              `))}
          </ul>
        </nav>`),(()=>B``))}
        <template id="toggle-button">
          <wm-button kind="clean" class="wm-section-toggle">
            <button aria-expanded="false">
              Thema wählen
              <wm-icon iconid="chevron-down"></wm-icon>
            </button>
          </wm-button>
        </template>
      `}});class Pe extends(ce(Q)){get _select(){return this.shadowRoot?.querySelector("select")??null}static properties={size:{type:Number},multiple:{type:Boolean}};static styles=[pe,xt,ge];constructor(){super(),this.size=void 0,this.multiple=!1}firstUpdated(){const t=Array.from(this.children).filter((t=>!t.hasAttribute("slot")));this._select.append(...t)}render(){return this._renderItem(B`
        <select
          id="${this._id}"
          size="${It(this.size)}"
          ?required=${this.required}
          ?multiple=${this.multiple}
          aria-disabled="${It(!!this.disabled||void 0)}"
          aria-invalid="${It(!!this._hasError||void 0)}"
          value="${It(this.value)}"
        >
        </select>
        <slot></slot>
      `)}}customElements.define("wm-select",Pe);const De=[s`
  :host {
    display: flex;
    flex-direction: column;
  }
  
  @media(min-width: 48em) {
    :host {
      flex-direction: row;
    }
  }
  
  :host([vertical]) {
    flex-direction: column;
  }
  
  :host([horizontal="true"]) {
    flex-direction: row;
  }
  
  :host([grow="false"][vertical]) {
    align-items: start;
  }
  
  /* Noch testen, ob das was macht:
  :host([wrap="false"]) ::slotted(*) {
    flex-shrink: 0;
  }
  */
  
  :host {
    --_justify: start;
    --_align: normal;
    --_gap: 0;
  
    justify-content: var(--_justify);
    align-items: var(--_align);
    gap: var(--_gap);
  }
  
  :host([wrap="true"]) {
    flex-wrap: wrap;
  }
  
  :host([wrap="false"]:not([vertical])) {
    overflow: auto;
  }
  
  :host([grow="true"]) ::slotted(*) {
    flex-grow: 1;
  }
  
  :host([equal="true"][grow="true"]) ::slotted(*) {
    flex-shrink: 0;
    min-width: 0;
  }
  
  :host([equal="true"][grow="true"]:not([wrap="true"])) ::slotted(*:not(wm-stack[vertical="false"])) {
    flex-basis: 0px;
  }
  
  :host([gap="xs"]) {
    --_gap: var(--stack-spacing-xs);
  }
  
  :host([gap="s"]) {
    --_gap: var(--stack-spacing-s);
  }
  
  :host([gap="m"]) {
    --_gap: var(--stack-spacing-m);
  }
  
  :host([gap="l"]) {
    --_gap: var(--stack-spacing-l);
  }
  
  :host([gapx]) {
    column-gap: var(--_gapx)
  }
  
  :host([gapx="xs"]) {
    --_gapx: var(--stack-spacing-xs);
  }
  
  :host([gapx="s"]) {
    --_gapx: var(--stack-spacing-s);
  }
  
  :host([gapx="m"]) {
    --_gapx: var(--stack-spacing-m);
  }
  
  :host([gapx="l"]) {
    --_gapx: var(--stack-spacing-l);
  }
  
  :host([gapy]) {
    row-gap: var(--_gapy)
  }
  
  :host([gapy="xs"]) {
    --_gapy: var(--stack-spacing-xs);
  }
  
  :host([gapy="s"]) {
    --_gapy: var(--stack-spacing-s);
  }
  
  :host([gapy="m"]) {
    --_gapy: var(--stack-spacing-m);
  }
  
  :host([gapy="l"]) {
    --_gapy: var(--stack-spacing-l);
  }
  
  :host([justify="center"]) {
    --_justify: center;
  }
  
  :host([justify="space-between"]) {
    --_justify: space-between;
  }
  
  @media(min-width: 48em) {
    :host([alignment="center"]) {
      --_align: center;
    }
  
    :host([alignment="end"]) {
      --_align: end;
    }
  }
  
  ::slotted(img) {
    align-self: start;
  }
  
  ::slotted(*) {
    margin: 0 !important;
  }
  `],Ue=[s`
  :host {
    --stack-spacing-xs: var(--_stack-spacing-xs, 0.625rem);
    --stack-spacing-s: var(--_stack-spacing-s, 0.9375rem);
    --stack-spacing-m: var(--_stack-spacing-m, 1.25rem);
    --stack-spacing-l: var(--_stack-spacing-l, 01.875rem);
  }`];class je extends Q{static properties={gap:{type:String,reflect:!0},gapx:{type:String,reflect:!0},gapy:{type:String,reflect:!0},grow:{type:String,reflect:!0},equal:{type:String,reflect:!0},wrap:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0},horizontal:{type:String,reflect:!0},alignment:{type:String,reflect:!0},justify:{type:String,reflect:!0}};static styles=[Ue,De];constructor(){super(),this.gap="s",this.gapx=void 0,this.gapy=void 0,this.grow=!0,this.equal=!0,this.wrap=void 0,this.vertical=!1,this.horizontal=void 0,this.justify=void 0,this.alignment=void 0}render(){return B`
        <slot></slot>
      `}}customElements.define("wm-stack",je);const Fe=[s`
  :host {
    --switch-background: var(--_switch-background, gray);
    --switch-background-active: var(--_switch-background-active, blue);
    --switch-background-knob: var(--_switch-background-knob, white);
    --switch-border-color: var(--_switch-border-color, gray);
  }`],Ze=[s`
    * {
      box-sizing: border-box;
    }
  
    :host {
      align-items: center;
      gap: 0.5rem;
      display: flex;
    }
  
    [role="switch"] {
      background-color: var(--switch-background);
      border: 1px solid var(--switch-border-color);
      border-radius: 32px;
      border-inline-size: 2px;
      block-size: 1.75rem;
      cursor: pointer;
      inline-size: 3.4375rem;
      padding: 0;
      position: relative;
    }
    
    [aria-checked="true"] {
      --switch-background: var(--switch-background-active);
    }
    
    [role="switch"]::before {
      background-color: var(--switch-background-knob);
      border-radius: 16px;
      block-size: 1.25rem;
      content: "";
      inset-block-start: 3px;
      inset-inline-start: 3px;
      inline-size: 1.25rem;
      position: absolute;
      transition: .2s;
    }
  
    [aria-checked="true"]::before {
      transform: translateX(1.625rem);
    }
  `];class Xe extends Q{static properties={label:{type:String,reflect:!0},active:{type:Boolean}};static styles=[Fe,Ze];constructor(){super(),this.label="Aktivieren",this.active=!1}_toggle(){this.active=!this.active,this.dispatchEvent(new CustomEvent("wm-switched",{detail:this.active,bubbles:!0,composed:!0}))}render(){return B`
      <span id="toggle">${this.label}</span>
      <button role="switch" aria-checked="${this.active}" aria-labelledby="toggle" @click="${this._toggle}"></button>
      `}}customElements.define("wm-switch",Xe);const Ye=[s`
  :host {
    --tag-background: var(--_tag-background, #FFF);
    --tag-background-hover: var(--_tag-background-hover, var(--site-color-secondary));
    --tag-border: var(--_tag-border, var(--site-color-secondary));
    --tag-padding-inline: var(--_tag-padding-inline, 0.8125rem);
    --tag-padding-block: var(--_tag-padding-block, 0.15625rem);
    --tag-padding-inline-large: var(--_tag-padding-inline-large, 0.9375rem);
    --tag-padding-block-large: var(--_tag-padding-block-large, 0.28125rem);
    --tag-gap: var(--_tag-gap, 1rem);
    --tag-min-height: var(--_tag-min-height, 2.1375rem);
    --tag-min-height-large: var(--_tag-min-height-large, 2.5rem);
    --tag-link-color: var(--_tag-link-color, #000);
    --tag-font-size: var(--_tag-font-size, 0.8rem);
  }`],Ge=[s`
  * {
    box-sizing: border-box;
  }
  
  :host {
    /*
    TODO: use tokens instead of vars for each color
    */
    --tag-background-frischgruen: var(--wm-color-frischgruen);
    --tag-border-frischgruen: var(--wm-color-frischgruen);
    --tag-background-interactive: var(--wm-color-ui-interactive);
    --tag-border-interactive: var(--wm-color-ui-interactive);
    --tag-color-interactive: var(--wm-color-weiss);
    --tag-color-interactive-hover: var(--wm-color-ui-interactive);
  }
  
  :host {
    --link-color: var(--tag-link-color);
  
    display: inline-block;
    position: relative;
  }
  
  :host([color=frischgruen]) {
    --tag-background: var(--tag-background-frischgruen);
    --tag-border: var(--tag-border-frischgruen);
  }
  
  :host([color=interactive]){
    --tag-background: var(--tag-background-interactive);
    --tag-border: var(--tag-border-interactive);
    --link-color: var(--tag-color-interactive)
  }
  
  :host([color=interactive]) :is(a, wm-button):where(:hover, :focus){
    --tag-border:var(--tag-background-interactive);
    color: var(--tag-color-interactive-hover);
  }
  
  :host > a, wm-button {
    --_padding: var(--tag-padding-block) var(--tag-padding-inline);
    align-items: center;
    background-color: var(--tag-background) !important;
    border: 1px solid var(--tag-border);
    border-radius: 20px;
    cursor: pointer;
    display: inline-flex;
    font-size: var(--tag-font-size) !important;
    gap: var(--tag-gap);
    min-height: var(--tag-min-height);
    padding: var(--_padding) !important;
    text-decoration: none;
  }
  
  wm-button {
    white-space: nowrap;
  }
  
  :host([open="true"]) {
    z-index: 1;
  }
  
  :host([open="true"]) wm-button {
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  a:is(:link, :visited) {
    color: var(--link-color);
  }
  
  :is(a, wm-button):where(:hover, :focus) {
    --tag-background: var(--tag-background-hover);
  }
  
  :is(a, wm-button):focus-visible {
    outline: var(--site-focus-outline-width) solid var(--wm-color-ui-interactive);
    outline-offset: 3px;
  }
  
  ul {
    background-color: var(--tag-background);
    border: solid var(--tag-border);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-width: 0 1px 1px;
    display: none;
    left: 0;
    list-style: none;
    margin: 0 !important;
    max-height: 12rem;
    overflow: auto;
    overscroll-behavior: contain;
    padding: 0;
    position: absolute;
    scrollbar-gutter: stable;
    top: 100%;
  }
  
  :host([open="true"]) ul {
    display: block;
  }
  
  ul a {
    display: block;
    padding: 0.3rem var(--tag-padding-inline);
    white-space: nowrap;
  }
  
  ul a:is(:hover, :focus) {
    background-color: var(--tag-background-hover)
  }
  
  ul a:is(:link, :visited) {
    text-decoration: none;
  }
  
  @media (min-width: 64em) {
    :host {
      --tag-min-height: var(--tag-min-height-large) !important;
      --_padding: var(--tag-padding-block-large) var(--tag-padding-inline-large) !important;
    }
  }
  `];customElements.define("wm-tag",class extends Q{get _button(){return this.shadowRoot?.querySelector("wm-button")??null}get _list(){return this.shadowRoot?.querySelector("ul")??null}static properties={color:{type:String,reflect:!0}};static styles=[Ye,Ge];constructor(){super(),this.color=""}connectedCallback(){super.connectedCallback(),this.shadowRoot.append(...this.childNodes),this._list&&(this._button.addEventListener("click",this.toggle),this.addEventListener("keyup",this._closeOnEscape),document.addEventListener("click",this._clickOutSide),this._largestItem=this._dropdownTagGetLargestItem(),this.style.width=`${this.offsetWidth}px`)}_closeOnEscape(t){"Escape"===t.code&&this.close()}_clickOutSide=t=>{t.target.closest("wm-tag")||this.close()};_dropdownTagGetLargestItem(){this._list.style.display="block";const t=this._list.offsetWidth;return this._list.removeAttribute("style"),t}toggle=t=>{t&&t.preventDefault();"true"!==this.getAttribute("open")?this.open():this.close()};open(){this.setAttribute("open",!0),this._largestItem<this._button.offsetWidth?this._list.style.width=`${this._button.offsetWidth}px`:this._button.style.width=`${this._largestItem}px`}close(){this.setAttribute("open",!1),this._button.removeAttribute("style")}render(){return B`
        <slot></slot>
      `}});const Ke=[s`
  :host {
    --tabs-alignment: var(--_tabs-alignment, start);
    --tabs-border: var(--_tabs-border, none);
    --tabs-gap: var(--_tabs-gap, 0);
    --tabs-padding: var(--_tabs-padding, 1rem);
    --tabs-spacing: var(--_tabs-spacing, 0);
    --tab-background-color: var(--_tab-background-color, var(--site-color-secondary));
    --tab-background-color-selected: var(--_tab-background-color-selected, transparent);
    --tab-border-width: var(--_tab-border-width, 1px 1px 0 1px);
    --tab-border-color: var(--_tab-border-color, transparent);
    --tab-border-color-selected: var(--_tab-border-color-selected, var(--site-color));
    --tab-font-variation-settings: var(--_tab-font-variation-settings, normal);
    --tab-font-weight: var(--_tab-font-weight, bold);
    --tab-padding: var(--_tab-padding, 0.4rem 0.8rem);
    --tabpanel-padding: var(--_tabpanel-padding, 0.4rem 0.8rem);
    --tabpanel-border-width: var(--_tabpanel-border-width, 1px);
    --tabpanel-border-color: var(--_tabpanel-border-color, var(--site-color));
  }`],We=[s`
  :host {
    border: var(--tabs-border);
    display: block;
    padding: var(--tabs-padding);
    width: 100%;
  }
  
  [role="tablist"] {
    display: flex;
    gap: var(--tabs-gap);
    justify-content: var(--tabs-alignment);
    margin-bottom: var(--tabs-spacing);
    overflow: auto;
  }
  
  ::slotted([aria-hidden="true"]) {
    display: none;
  }
  
  ::slotted([aria-hidden="false"]) {
    display: block;
  }
  `];customElements.define("wm-tabs",class extends Q{get _tabcontainers(){return document.querySelectorAll("wm-tabs")??null}get _tabs(){return this.querySelectorAll(":scope > wm-tab")??null}get _tabpanels(){return this.querySelectorAll(":scope > wm-tabpanel")??null}static properties={selectedIndex:{type:Number,attribute:!1},lastIndex:{type:Number,attribute:!1},id:{type:String,attribute:!1}};static styles=[Ke,We];constructor(){super(),this.id="",this.lastIndex=0,this.selectedIndex=0,this._setParams()}_setParams(){const t=document.location.pathname.split("/");this.searchParams=new URLSearchParams(window.location.search),this.id=`t_${ot(this._tabcontainers,this)}_${t[t.length-2]}`;const e=new URL(document.location).searchParams.get("view")??this.searchParams.get(this.id)??sessionStorage.getItem(`active_tab_${this.id}`);this.lastIndex=e??0,this.selectedIndex=e??0;const i=Array.from(this._tabs).filter((t=>t.hasAttribute("selected"))),o=i.length?i[0]:this._tabs[this.lastIndex];this._selectTab(o),this._selectPanel()}_selectPanel(){this.querySelector(":scope > wm-tabpanel[selected]")&&this.querySelector(":scope > wm-tabpanel[selected]").removeAttribute("selected"),this._tabpanels[this.selectedIndex].setAttribute("selected",!0)}_selectTab(t){this.querySelector(":scope > wm-tab[selected]")&&this.querySelector(":scope > wm-tab[selected]").removeAttribute("selected"),Number.isInteger(t)&&(t=this._tabs[t]?this._tabs[t]:this._tabs[this._tabs.length-1]),t.setAttribute("selected",!0),t.focus(),this.selectedIndex=ot(this._tabs,t),this.dispatchEvent(new CustomEvent("tabChanged",{detail:this.selectedIndex,bubbles:!0})),this.searchParams=new URLSearchParams(window.location.search),this.selectedIndex>0?this.searchParams.set(this.id,this.selectedIndex):this.searchParams.delete(this.id),window.history.replaceState({},"",window.location.pathname+"?"+this.searchParams+window.location.hash)}_switchTab(t){const e=t&&t.type?t.target:t;e.closest("wm-tab")&&(this._selectTab(e),this._selectPanel())}_getNextElement(t){return t<0&&(t=this._tabs.length-1),t>=this._tabs.length&&(t=0),this._tabs[t]}_handleKeydown(t){let e;"ArrowLeft"!==t.code&&"ArrowRight"!==t.code||("ArrowLeft"===t.code&&(e=this.selectedIndex-1),"ArrowRight"===t.code&&(e=this.selectedIndex+1),this._switchTab(this._getNextElement(e)))}_handleClick(t){const e=t&&t.type?t.target:t;e.closest("wm-tab")&&(this._selectTab(e),this._selectPanel(),this.reRenderChildren(),sessionStorage.setItem(`active_tab_${this.id}`,this.selectedIndex))}async reRenderChildren(){await this._tabpanels[this.selectedIndex].updateComplete,this.querySelector("[update]")&&this.querySelector("[update]").reRender()}render(){return B`
        <div>
          <div role="tablist" @click="${this._handleClick}" @keydown="${this._handleKeydown}">
            <slot name="tab"></slot>
          </div>
          <slot></slot>
        </div>
      `}});class Je extends Q{static properties={selected:{type:Boolean,reflect:!0}};static styles=[Ke,s`
        * {
          box-sizing: border-box;
        }
  
        :host {
          --border-color: var(--tab-border-color);
          --background-color: var(--tab-background-color);
  
          background-color: var(--background-color);
          display: block;
          cursor: pointer;
          line-height: 1.4;
          border-style: solid;
          border-width: var(--tab-border-width);
          border-color: var(--border-color);
          font-variation-settings: var(--tab-font-variation-settings);
          font-weight: var(--tab-font-weight);
          padding: var(--tab-padding);
          min-width: fit-content;
        }
  
        :host([selected]) {
          --border-color: var(--tab-border-color-selected);
          --background-color: var(--tab-background-color-selected);
        }
  
        :host(:hover) {
          --background-color: var(--tab-background-color-selected);
        }
  
        :host(:focus-visible) {
          outline-offset: calc(var(--site-focus-outline-width) * -1) !important;
        }
      `];constructor(){super(),this.selected=!1,this.setAttribute("role","tab")}updated(){this.setAttribute("aria-selected",this.hasAttribute("selected")),this.setAttribute("tabindex",this.hasAttribute("selected")?0:-1)}render(){return B`
        <slot></slot>
      `}}customElements.define("wm-tab",Je);class Qe extends Q{static properties={selected:{type:Boolean,reflect:!0}};static styles=[Ke,s`
        * {
          box-sizing: border-box;
        }
  
        :host {
          display: block;
          border-style: solid;
          border-color: var(--tabpanel-border-color);
          border-width: var(--tabpanel-border-width);
          padding: var(--tabpanel-padding);
        }
      `];constructor(){super(),this.selected=!1,this.setAttribute("role","tabpanel"),this.setAttribute("aria-hidden","true")}updated(){this.setAttribute("aria-hidden",this.hasAttribute("selected")?"false":"true")}render(){return B`
        <slot></slot>
      `}}customElements.define("wm-tabpanel",Qe);class ti extends(ke(Q)){render(){return this._renderElement(B`
      <textarea
        autocomplete=${It(this.autocomplete)}
        aria-describedby="${It(this._hasHint||this._hasError?"message":void 0)}"
        aria-disabled="${It(!!this.disabled||void 0)}"
        aria-invalid="${It(!!this._hasError||void 0)}"
        placeholder="${It(this.placeholder)}"
        ?required=${this.required}
        maxlength="${It(this.maxlength)}"
        rows="7"
        value="${It(this.value)}"
        ></textarea>
      `)}}customElements.define("wm-textarea",ti);const ei=[s`
  * {
    box-sizing: border-box;
  }
  
  :host {
    display: block;
  }
  
  ::slotted(ul) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wm-spacing-xs);
    list-style: none;
    margin: 0;
    padding: 0 !important;
  }
  
  :host([scrollable]) ::slotted(ul) {
    flex-wrap: nowrap;
    overflow: auto;
  }
  `];class ii extends Q{static properties={scrollable:{type:Boolean}};static styles=[ei];constructor(){super(),this.scrollable=!1}render(){return B`
        <slot></slot>
      `}}customElements.define("wm-tag-list",ii);const oi=[s`
    :host {
      --_toggle-height: 0fr;
  
      align-content: start;
      align-items: start;
      border: var(--toggle-border);
      display: inline-grid;
      grid-template-rows: auto var(--_toggle-height);
      overflow: hidden;
      padding: var(--toggle-padding);
      transition: grid-template-rows 0.3s, visibility 0.3s;
    }
  
    :host([selectable="false"]) {
       /* create new stacking context */
       transform: rotate(0);
    }
  
    :host([selectable="false"]) button::before {
      content: "";
      inset: 0;
      position: fixed;
    } 
  
    :host([open]) {
      --_toggle-height: 1fr;
    }
  
    :host([full]) {
      display: grid;
    }
  
    wm-button {
      display: inline-flex;
    }
  
    button {
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--site-color);
      display: flex;
      font: inherit;
      font-family: var(--site-font-family);
      justify-content: space-between;
      padding: var(--toggle-padding-button);
      position: relative;
    }
  
    button:focus-visible {
      outline: var(--site-focus-outline)
    }
  
    button::after {
      background: var(--toggle-icon) no-repeat center right !important;
      background-size: contain !important;
      content: "";
      display: block;
      height: 1.4em;
      transition: transform 0.3s;
      width: 1.2em;
    }
  
    [aria-expanded="true"]::after{
      transform: rotate(180deg)
    }
  
    :host([full]) button {
      justify-content: space-between;
      width: 100%;
    }
  
    :host([full]) wm-button {
      display: flex;
    }
  
    .button--hidden {
      display: none !important;
    }
    
    .content {
      transition: all 0.3s;
      overflow: hidden;
      visibility: hidden;
    }
    
    :host([open]) .content {
      visibility: visible;
    }
  
    .wrap {
      padding: var(--toggle-padding-content);
    }
  `],ri=[s`
  :host {
    --toggle-border: var(--_toggle-border, none);
    --toggle-icon: var(--_toggle-icon, none);
    --toggle-padding: var(--_toggle-padding, 0);
    --toggle-padding-button: var(--_toggle-padding-button, 0);
    --toggle-padding-content: var(--_toggle-padding-content, 0);
  }`];class si extends Q{static properties={full:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},min:{type:String,reflect:!0},selectable:{type:Boolean,reflect:!0},_active:{type:Boolean}};static styles=[ri,oi];get _content(){return this.renderRoot.querySelector(".content")??null}get _wrap(){return this.renderRoot.querySelector(".wrap")??null}constructor(){super(),this.full=void 0,this.open=void 0,this.min=void 0,this._active=!0,this.selectable=void 0}connectedCallback(){super.connectedCallback(),this.min&&this._isActive()}_toggle(){this.open=!this.open}_isActive(){const t=window.matchMedia(`(min-width: ${this.min})`),e=t=>{this._active=t.matches};t.addEventListener("change",e),e(t)}render(){const t={"button--hidden":!this._active};return B`
        <wm-button @click="${this._toggle}" ?full="${this.full}" class="${Vt(t)}">
          <button aria-expanded="${this.open}">
            <slot name="label"></slot>
          </button>
        </wm-button>
        
        <div class="content">
          <div class="wrap">
            <slot name="content"></slot>
          </div>
        </div>
      `}}customElements.define("wm-toggle",si)}();
  