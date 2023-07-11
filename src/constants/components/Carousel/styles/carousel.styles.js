import { css } from 'lit'

export const styles = [css`
* {
  box-sizing: border-box;
}

:host(:not(.focusmode)) {
  max-inline-size: calc(100% + (var(--carousel-shadow-offset) * 2));
  margin-inline: calc(var(--carousel-shadow-offset) * -1);
  max-height: inherit;
  position: relative;
}

:host {
  display: block;
  pointer-events: all; /* Needed for carousels within modals */
}

:host(:not(.focusmode)) .inner {
  max-height: inherit;
  min-height: 100px;
  overflow: hidden;
  padding: 0 var(--carousel-shadow-offset) var(--carousel-shadow-offset);
  position: relative;
}

:host(:not(.focusmode)) .strip {
  display: flex;
  gap: var(--carousel-gap);
  max-height: inherit;
  min-width: 100%;
}

:host(:not(.notransition)) .strip {
  transition: 0.2s ease-in-out;

}

:host(.focusmode) .strip {
  transform: none !important;
}

:host([single]) .strip {
  align-items: center;
}

.strip > ::slotted(*) {
  flex-shrink: 0;
}

.control {
  --_size: 2.75rem;
  --_display: none; 

  position: absolute;
  background: var(--carousel-control-bg) no-repeat center;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0,0,0,.16);
  display: var(--_display);
  height: var(--_size);
  inset-block-start: 50%;
  opacity: 1;
  padding: 0;
  transform-origin: center center;
  transition: scale 0.3s, opacity 0.3s;
  width: var(--_size);
  z-index: 1;
}

@media (min-width: 48em) {
  .control {
    --_size: 3.75rem;
    --_display: inline-flex; 
  }
}

.control--prev {
  background-image: var(--carousel-control-bg-start);
  inset-inline-start: 0;
  translate: -50% -50%;
}

.control--next {
  background-image: var(--carousel-control-bg-end);
  inset-inline-end: 0;
  translate: 50% -50%;
}

:host(.focusmode) .control,
.control--inactive {
  opacity: 0;
  visibility: hidden;
}

.control:is(:hover, :focus) {
  scale: 1.1;
}

img {
  max-height: inherit;
}

wm-modal img[src],
.loaded {
  min-height: 0;
  max-height: 100%;
}

::slotted(img) {
  width: initial;
}
`]
