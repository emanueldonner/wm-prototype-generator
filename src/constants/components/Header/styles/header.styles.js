import { css } from 'lit'

export const styles = [css`
  * {
    box-sizing: border-box;
  }
  
  :host {
    --_width: calc(var(--site-wrapper-width-s) + var(--site-wrapper-padding) * 2);
    --header-nav-active-link-color: var(--_header-nav-active-link-color, var(--wm-color-fastschwarz));
    --header-nav-active-link-background: var(--wm-color-nebelgrau);
    --header-nav-active-list-background: var(--wm-color-nebelgrau);
    transition: transform 0.3s;
    z-index: 1230;
  }

  @media(min-width: 48em) {
    :host {
      --_width: var(--site-wrapper-width);
    }
  }

  :host([color="flieder"]) {
    --header-nav-wrapper-background: var(--wm-color-flieder-light) !important;
    --header-nav-active-link-background: var(--wm-color-flieder);
    --header-nav-active-list-background: var(--wm-color-flieder);
  }

  :host([color="goldgelb"]) {
    --header-nav-wrapper-background: var(--wm-color-goldgelb-light) !important;
    --header-nav-active-link-background: var(--wm-color-goldgelb);
    --header-nav-active-list-background: var(--wm-color-goldgelb);
  }

  :host([color="abendstimmung"]) {
    --header-nav-wrapper-background: var(--wm-color-abendstimmung-light) !important;
    --header-nav-active-link-background: var(--wm-color-abendstimmung);
    --_header-nav-active-link-color: var(--wm-color-weiss);
    --header-nav-active-list-background: var(--wm-color-abendstimmung);
  }

  :host([color="morgenrot"]) {
    --header-nav-wrapper-background: var(--wm-color-morgenrot-light) !important;
    --header-nav-active-link-background: var(--wm-color-morgenrot);
    --header-nav-active-list-background: var(--wm-color-morgenrot);
  }

  :host([color="frischgruen"]) {
    --header-nav-wrapper-background: var(--wm-color-frischgruen-light) !important;
    --header-nav-active-link-background: var(--wm-color-frischgruen);
    --header-nav-active-list-background: var(--wm-color-frischgruen);
  }
  
  :host([color="wasserblau"]) {
    --header-nav-wrapper-background: var(--wm-color-wasserblau-light) !important;
    --header-nav-active-link-background: var(--wm-color-wasserblau);
    --header-nav-active-list-background: var(--wm-color-wasserblau);
  }

  .nav-actions {
    --_layout: row-reverse;
    align-items: center;
    background: red;
    border-image: conic-gradient( var(--header-nav-wrapper-background) 0 0) fill 1//0 50vw;
    display: flex;
    flex-direction: var(--_layout);
    justify-content: space-between;
    min-height: var(--header-nav-height);
    padding-inline: var(--site-wrapper-padding);
    margin-inline: var(--site-wrapper-margin-inline);
  }

  @media (min-width: 64em) {
    .nav-actions {
      --_layout: row;
    }
  }
  
  :host > * {
    width: 100%;
    max-width: var(--_width);
    margin-inline: auto;
  }

  [hidden] {
    display: none !important;
  }
`]
