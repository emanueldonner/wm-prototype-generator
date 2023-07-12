/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as o,s as r,y as e}from"../../lit-element-a22611a3.js";const t=[o`
:host {
  --badge-color-success: var(--_badge-color-success, green);
  --badge-color-error: var(--_badge-color-error, red);
  --badge-font-variation-settings: var(--_badge-font-variation-settings, normal);
  --badge-font-weight: var(--_badge-font-weight, bold);
}`],s=[o`
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

`];class a extends r{static properties={color:{type:String,reflect:!0}};static styles=[t,s];constructor(){super(),this.color=void 0}render(){return e`
      <slot></slot>
    `}}customElements.define("wm-badge",a);const c="wm-badge";export{a as Badge,c as tagName};
