import { css } from 'lit'

export const styles = [css`
* {
  box-sizing: border-box;
}

:host {
  display: inline-flex;
}

.wm-icon-wrapper {
  block-size: fit-content;
  display: flex;
  gap: var(--wm-spacing-xs);
}
`]
