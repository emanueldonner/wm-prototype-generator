/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as t,s as o,y as s}from"../../lit-element-a22611a3.js";const n=[t`
:host {
  --quicklinks-gap: var(--_quicklinks-gap, 2rem);
}`],c=[t`
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
`];class i extends o{static properties={cols:{type:Number,reflect:!0}};static styles=[n,c];constructor(){super(),this.cols=1}render(){return s`
      <slot></slot>
    `}}customElements.define("wm-quicklinks",i);const l="wm-quicklinks";export{i as Quicklinks,l as tagName};
