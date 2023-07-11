import { css } from 'lit';

export const tokens = [css`
:host {
  --badge-color-success: var(--_badge-color-success, green);
  --badge-color-error: var(--_badge-color-error, red);
  --badge-font-variation-settings: var(--_badge-font-variation-settings, normal);
  --badge-font-weight: var(--_badge-font-weight, bold);
}`]