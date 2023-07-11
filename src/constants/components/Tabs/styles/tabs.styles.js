import { css } from 'lit'

export const styles = [css`
:host {
  border: var(--tabs-border);
  display: block;
  padding: var(--tabs-padding);
  width: 100%;
}

[role="tablist"] {
  display: flex;
  gap: var(--tabs-gap);
  justify-content: var(--tabs-alignment);
  margin-bottom: var(--tabs-spacing);
  overflow: auto;
}

::slotted([aria-hidden="true"]) {
  display: none;
}

::slotted([aria-hidden="false"]) {
  display: block;
}
`]
