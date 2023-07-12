/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as t,s as e,y as o}from"../../lit-element-a22611a3.js";import{o as n}from"../../class-map-50dbd9fb.js";import"../../directive-19e462f3.js";const i=[t`
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
`],l=[t`
:host {
  --toggle-border: var(--_toggle-border, none);
  --toggle-icon: var(--_toggle-icon, none);
  --toggle-padding: var(--_toggle-padding, 0);
  --toggle-padding-button: var(--_toggle-padding-button, 0);
  --toggle-padding-content: var(--_toggle-padding-content, 0);
}`];class a extends e{static properties={full:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},min:{type:String,reflect:!0},selectable:{type:Boolean,reflect:!0},_active:{type:Boolean}};static styles=[l,i];get _content(){return this.renderRoot.querySelector(".content")??null}get _wrap(){return this.renderRoot.querySelector(".wrap")??null}constructor(){super(),this.full=void 0,this.open=void 0,this.min=void 0,this._active=!0,this.selectable=void 0}connectedCallback(){super.connectedCallback(),this.min&&this._isActive()}_toggle(){this.open=!this.open}_isActive(){const t=window.matchMedia(`(min-width: ${this.min})`),e=t=>{this._active=t.matches};t.addEventListener("change",e),e(t)}render(){const t={"button--hidden":!this._active};return o`
      <wm-button @click="${this._toggle}" ?full="${this.full}" class="${n(t)}">
        <button aria-expanded="${this.open}">
          <slot name="label"></slot>
        </button>
      </wm-button>
      
      <div class="content">
        <div class="wrap">
          <slot name="content"></slot>
        </div>
      </div>
    `}}customElements.define("wm-toggle",a);const s="wm-toggle";export{a as Toggle,s as tagName};
