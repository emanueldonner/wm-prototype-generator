/* @copyright Stadt Wien - Wiener Melange v2 */
import{i}from"./lit-element-a22611a3.js";const r=[i`
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
  }

  .has-error {
    color: var(--wm-color-ui-error);
  }

  .info {
    --_height: 0fr;
    
    display: grid;
    grid-template-rows: var(--_height);
    transition: grid-template-rows 0.3s;
    margin-block-start: 0.2rem;
  }
  
  .info-inner {
    overflow:hidden;
  }

  .info-visible {
    --_height: 1fr;
  }

  .info-button {
    position: relative;
    inset-block-start: 0.35rem;
    flex-grow: 0 !important;
  }
`],o=[i`
    .wm-h-vh {
      position: absolute;
      white-space: nowrap;
      width: 1px;
      height: 1px;
      overflow: hidden;
      border: 0;
      padding: 0;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      margin: -1px;
    }
  `];export{r as f,o as h};
