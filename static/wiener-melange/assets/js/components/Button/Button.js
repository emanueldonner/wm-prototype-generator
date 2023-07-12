/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as t,s as o,y as r}from"../../lit-element-a22611a3.js";const n=[t`
:host {
  --button-background: var(--_button-background, gray);
  --button-border: var(--_button-border, gray);
  --button-color: var(--_button-color, #000000);
  --button-text-transform: var(--_button-text-transform, none);
}`],s=[t`

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
`];class e extends o{static properties={alignment:{type:String,reflect:!0},color:{type:String,reflect:!0},kind:{type:String,reflect:!0},full:{type:Boolean,reflect:!0},size:{type:String,reflect:!0}};static styles=[n,s];constructor(){super(),this.kind=void 0,this.full=!1,this.alignment=void 0,this.color=void 0,this.size=void 0}render(){return r`
      <slot></slot>
    `}}customElements.define("wm-button",e);const a="wm-button";export{e as Button,a as tagName};
