/* @copyright Stadt Wien - Wiener Melange v2 */
import{y as e,i as t,s as i}from"../../lit-element-a22611a3.js";import{getNodeIndex as n}from"../misc/utils.js";import{o}from"../../unsafe-html-a853c1af.js";import{f as a}from"../../form.styles-8cbc7814.js";import"../../directive-19e462f3.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=Symbol.for(""),s=e=>{if((null==e?void 0:e.r)===r)return null==e?void 0:e._$litStatic$},l=e=>({_$litStatic$:e,r}),c=new Map,d=(p=e,(e,...t)=>{const i=t.length;let n,o;const a=[],r=[];let l,d=0,h=!1;for(;d<i;){for(l=e[d];d<i&&void 0!==(o=t[d],n=s(o));)l+=n+e[++d],h=!0;r.push(o),a.push(l),d++}if(d===i&&a.push(e[i]),h){const i=a.join("$$lit$$");void 0===(e=c.get(i))&&(a.raw=a,c.set(i,e=a)),t=r}return p(e,...t)});var p;const h=[t`
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
`],g=[t`
:host {
  --accordion-background: var(--_accordion-background, transparent);
  --accordion-contrast: var(--_accordion-contrast, #FFF);
  --accordion-padding-inline: var(--_accordion-padding-inline, 0);
  --accordion-padding-block: var(--_accordion-padding-block, 0);
  --accordion-icon: var(--_accordion-icon, none);
  --accordion-icon-size: var(--_accordion-icon-size, 0);
  --accordion-gap: var(--_accordion-gap, 0);
}`],u=[t`
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
`],m=[t`
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
`];class b extends i{get _panels(){return this.shadowRoot?.querySelectorAll(".panel")??null}get _buttons(){return this.shadowRoot?.querySelectorAll("button")??null}static properties={open:{type:String,reflect:!0},multiple:{type:String,reflect:!0},_previousIndex:{type:Number,attribute:!1},_showMultiple:{type:Boolean,attribute:!1},_items:{type:Array,attribute:!1}};static styles=[a,u,m,g,h];constructor(){super(),this.open=!1,this.multiple="false",this._previousIndex=NaN,this._showMultiple=!1,this._items=[],this._tagName="h3"}firstUpdated(){this._registerEvents()}updated(e){e.has("multiple")&&(this._showMultiple="false"!==this.multiple),e.has("open")&&this._openOrCloseItems(),e.has("_items")&&this._openOrCloseItems()}_openOrCloseItems(){const e=this._openByDefaultIndex();if(-1===e||isNaN(e)){const t=isNaN(e)?"close":"open";for(let e=0;e<this._buttons.length;e++)this._openOrClose(e,t)}else this._openOrClose(this._openByDefaultIndex())}_openOrClose(e,t="toggle",i=!1){if(isNaN(e)){if(this.renderRoot?.querySelectorAll(".open").length)for(let e=0;e<this.renderRoot?.querySelectorAll(".open").length;e++){this.collapse(e,!1)}}else if(e<this._panels.length){const n=this._buttons[e],o=this._panels[e],a="false"!==n.getAttribute("aria-expanded");a?"open"!==t&&(n.setAttribute("aria-expanded","false"),o.classList.remove("open")):"close"!==t&&(n.setAttribute("aria-expanded","true"),o.classList.add("open")),this._showMultiple||isNaN(this._previousIndex)||this._previousIndex===e||this.collapse(this._previousIndex,!1),a||(this._previousIndex=e);const r={bubbles:!0,composed:!0,detail:{id:n.getAttribute("aria-controls"),index:e}};i&&(a?this.dispatchEvent(new CustomEvent("collapsed",r)):this.dispatchEvent(new CustomEvent("expanded",r)))}else console.log("Dieser Panel existiert nicht")}_registerEvents(){this.shadowRoot.addEventListener("click",(e=>{const t=e.target.closest("button");if(t){const e=t.getAttribute("aria-controls"),i=parseInt(e.split("_")[1]);this._openOrClose(i,"toggle",!0)}}))}_openByDefaultIndex(){let e;return e=""===this.open||"true"===this.open?0:isNaN(parseInt(this.open))?NaN:parseInt(this.open),e-1}_getContents(){this._items=[];const e=this.querySelectorAll('[slot="heading"]'),t=this.querySelectorAll('[slot="content"]');for(let i=0;i<e.length;i++){const n=e[i],o=t[i];this._items.push({text:n.textContent,content:o.innerHTML}),0===i&&(this._tagName=n.nodeName)}}_getPanel(e){const t=typeof e;let i;return"number"===t?i=e:"string"===t?i=n(this._panels,this.renderRoot?.querySelector(e)):"object"===t?i=n(this._panels,e):isNaN(e)&&(i=NaN),i}expand(e,t=!0){const i=this._getPanel(e);this._openOrClose(i,"open",t)}collapse(e,t=!0){const i=this._getPanel(e);this._openOrClose(i,"close",t)}_rerender(){this._getContents();this.dispatchEvent(new CustomEvent("contentchanged",{bubbles:!0,composed:!0,detail:{}}))}connectedCallback(){super.connectedCallback()}render(){return d`
    ${this._items.map(((e,t)=>d`<${l(this._tagName)} class="heading">
      <wm-button clean>
        <button aria-expanded="false" aria-controls="panel_${t}">
          ${e.text}
        </button>
      </wm-button>
      </${l(this._tagName)}>

      <div id="panel_${t}" class="panel">
        <div class="panel-inner">
          <div class="panel-content">
            ${o(e.content)}
          </div>
        </div>
      </div>
      `))}
      <slot name="heading" @slotchange="${this._rerender}" hidden></slot>
      <slot name="content" hidden></slot>
    `}}customElements.define("wm-accordion",b);const f="wm-accordion";export{b as Accordion,f as tagName};
