import { css } from 'lit'

export const styles = [css`
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

`]
