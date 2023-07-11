import { css } from 'lit'

export const styles = [css`
  :host {
    display: block;
    border: var(--toggle-border);
    padding: var(--toggle-padding);
  }

  :host([full]) {
    display: block;
  }

  wm-button {
    display: inline-flex;
  }

  button {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
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
  }
  
  .content--hidden {
    height: 0;
    visibility: hidden;
  }

  .content--open {
    overflow: visible;
  }

  :host([open]) .content {
    visibility: visible;
  }

  .wrap {
    padding: var(--toggle-padding-content);
  }
`]
