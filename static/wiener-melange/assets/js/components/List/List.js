/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as t,s as e,y as s}from"../../lit-element-a22611a3.js";const l=[t`
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
`],o=[t`
:host {
  --list-border: var(--_list-border, 1px solid);
  --list-border-color: var(--_list-border-color, var(--site-color));
  --list-gap: var(--_list-gap, 0.5rem);
  --list-link-bg: var(--_list-link-bg, none);
}`];class r extends e{static properties={alignment:{type:String,reflect:!0},block:{type:Boolean,reflect:!0},clean:{type:Boolean,reflect:!0},gap:{type:String,reflect:!0},separator:{type:String,reflect:!0},type:{type:String,reflect:!0}};static styles=[o,l];constructor(){super(),this.clean=void 0,this.gap=void 0,this.type=void 0,this.separator=void 0,this.alignment=void 0,this.block=!1}render(){return s`
      <slot></slot>
    `}}customElements.define("wm-list",r);const i="wm-list";export{r as List,i as tagName};
