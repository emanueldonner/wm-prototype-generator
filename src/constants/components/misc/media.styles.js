import { css } from 'lit'

export const mediastyles = [css`
  img,
  picture,
  svg,
  video {
    display: block;
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
    display: block;
    max-width: 100%;
  }

  iframe[src*="youtube"] {
    aspect-ratio: 560 / 315;
  }

  iframe:not([height]) {
    aspect-ratio: 16 / 9;
  }

  figure {
    display: inline-flex;
    flex-direction: column;
    margin: 0;
    max-inline-size: 100%;
  }

  figcaption {
    background-color: var(--media-figcaption-background);
    padding: var(--media-figcaption-padding);
  }
`]
