import { css } from 'lit'

export const styles = [css`
* {
  box-sizing: border-box;
}

:host {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--wm-spacing-xs);
}

span {
  align-items: center;
  display: inline-flex;
  gap: 0.6rem;
}

.status {
  --_color: #d6d1ca;
  background: var(--_color);
  block-size: 1.6rem;
  border-radius: 50%;
  display: inline-block;
  inline-size: 1.6rem;
}

.status-0 {
  --_color: #292929;
}

.status-1 {
  --_color: #82d282;
}

.status-2 {
  --_color: #e6c828;
}

.status-3 {
  --_color: #e6b728;
}
.status-4 {
  --_color: #e68a28;
}

.status-5 {
  --_color: #cc0000;
}

strong {
  font-weight: var(--content-font-weight);
  font-variation-settings: var(--content-font-variation-settings);
}
`]
