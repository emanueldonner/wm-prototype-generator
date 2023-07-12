/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as e,s as t,y as r}from"../../lit-element-a22611a3.js";const i=[e`
:host {
  --switch-background: var(--_switch-background, gray);
  --switch-background-active: var(--_switch-background-active, blue);
  --switch-background-knob: var(--_switch-background-knob, white);
  --switch-border-color: var(--_switch-border-color, gray);
}`],o=[e`
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
`];class s extends t{static properties={label:{type:String,reflect:!0},active:{type:Boolean}};static styles=[i,o];constructor(){super(),this.label="Aktivieren",this.active=!1}_toggle(){this.active=!this.active,this.dispatchEvent(new CustomEvent("wm-switched",{detail:this.active,bubbles:!0,composed:!0}))}render(){return r`
    <span id="toggle">${this.label}</span>
	  <button role="switch" aria-checked="${this.active}" aria-labelledby="toggle" @click="${this._toggle}"></button>
    `}}customElements.define("wm-switch",s);const c="wm-switch";export{s as Switch,c as tagName};
