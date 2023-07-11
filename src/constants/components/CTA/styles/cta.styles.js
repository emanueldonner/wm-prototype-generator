import { css } from 'lit'

export const styles = [css`
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
    font-variation-settings:  var(--wm-font-weight-normal);
  }

  ::slotted(a:is(:link, :visited)) {
    --link-color: var(--cta-color-link) !important;
    --link-color-visited: var(--cta-color-visited) !important;
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
`]
