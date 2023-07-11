import { css } from 'lit'

export const styles = [css`
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
    /* Nav should fill the header */
    height: 100%;
  }

  nav {
    /* inherit height from header */
    height: inherit;
  }
  
  dialog {
    background-color: transparent;
    border: 0;
    /* height minus the height of the header */
    height: calc(100dvh - var(--header-height-dynamic));
    inset-block-start: var(--header-height-dynamic);
    margin-inline: auto 0;
    max-height: calc(100dvh - var(--header-height-dynamic));
    max-width: 100vw;
    overflow: hidden;
    padding: 0;
    scrollbar-gutter: stable;
    width: 100vw;
  }

  ::backdrop {
    /* Backdrop doesn't inherit anything, that's why we have to apply this ugly hack */
    --_inset-block-start: 3.75rem;
    background: rgb(0 0 0 / 0.5);
    inset-block-start: var(--_inset-block-start);
  }

  @media (min-width: 64rem) {
    ::backdrop {
      --_inset-block-start: 6.25rem
    }
  }

  /* Content within the dialog is wrapped */
  .wrapper {
    height: 100%;
    margin-inline: auto;
    max-width: var(--navmain-wrapperwidth);
    overflow: hidden;
  }

  .wrapper--hidden {
    transform: translateX(100vw);
  }

  /* The transition is applied conditionally to avoid quirky behavior */
  .transition {
    transition: transform 0.25s ease-out;
  }

  /* Content within the dialog */
  .content {
    --_spacing-inline-end: 0;
    background-color: var(--header-nav-wrapper-background);
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-inline: auto var(--_spacing-inline-end);
    max-width: 25rem;
    width: 100%;
  }

  @media (min-width: 34.375rem) {
    .content {
      /* --site-wrapper-width-s + --site-wrapper-padding *2 */
      --_spacing-inline-end: calc(((100vw - var(--site-wrapper-width-s)) / 2) - var(--site-wrapper-padding));
    }
  }

  @media (min-width: 48rem) {
    .content {
      --_spacing-inline-end: calc(var(--site-wrapper-padding) / 2);
    }
  }

  /* Header within the dialog (contains close button and optionally user name) */
  .header {
    --_padding-inline: var(--site-wrapper-padding);
    align-items: center;
    display: flex;
    min-height: var(--header-nav-height);
    padding-inline: var(--_padding-inline);
    text-align: right;
    justify-content: flex-end;
  }

  @media (min-width: 48rem) {
    .header {
      --_padding-inline: calc(var(--site-wrapper-padding) / 2);
    }
  }

  /* Wrapper for links */
  .lists {
    flex-grow: 1;
    height: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    height: inherit;
  }

  /* Toggle buttons */
  .lists button {
    all: initial;
    font: inherit;
  }

  /* General styling for links and buttons */
  .lists :is(a, button) {
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    display: flex;
    justify-content: space-between;
    height: inherit;
    width: 100%;
  }

  .lists :is(a, button):is(:link, :visited) {
    color: inherit;
    text-decoration: none;
  }

  .lists :is(a, button):focus-visible {
    outline: 3px solid currentColor;
  }

  /* Show list when button expanded */
  [aria-expanded="true"] + ul {
    display: block;
  }

  /**
   * Variation when links are not hidden “behind a burger”
   */

  /* Nav takes up the whole space */ 
  :host([listsVisible]) {
    width: 100%;
  }

  /* inherit height from header */
  :host([listsVisible]) ul {
    height: inherit;
  }

  :host([listsVisible]) ul ul,
  li li {
    height: auto;
  }


  :host([listsVisible]) [aria-expanded="true"] + ul {
    position: absolute;
    background: var(--header-nav-active-link-background);
    top: 100%;
    left: 0;
    width: max-content;
  }

  :host([listsVisible]) .lists li li :is(a, button) {
    padding-block: 0.5125rem 0.3875rem;
  }

  :host([listsVisible]) .lists li li :is(a, button):hover {
    text-decoration: underline;
  }

  :host([listsVisible]) .lists li li :is(a, button) {
    color: var(--header-nav-active-link-color);
  }


  :host([listsVisible]) .lists li ul {
    padding-block: 0.5rem;
    max-height: calc(100vh - 100%);
    border-image: conic-gradient( var(--header-nav-active-link-background) 0 0) fill 1//0 100vw;
  }

  /* Braucht es den Hack? */
  /*
  :host([listsVisible]) .lists li ul::before {
    content: "";
    width: 200vw;
    height: 100%;
    background: var(--header-nav-active-link-background);
    display: block;
    position: fixed;
    left: 0;
    top: 0;
  } 
  */

  :host(:not([listsVisible])) .lists {
    overflow: auto;
  }

  :host([listsVisible]) wm-icon {
    display: none;
  }

  :host([listsVisible]) ul:not([hidden]) {
    display: flex;
    gap: clamp(1rem, 5%, var(--navmain-gap));
  }

  /**
   * Variation when links are hidden “behind a burger”
   */

  .burger {
    height: 100%;
    display: flex;
    align-items: center;
  }

  :host(:not([listsVisible])) [aria-expanded="true"] {
    background-color: var(--header-nav-active-link-background) !important;
    border-image: conic-gradient( var(--header-nav-active-link-background) 0 0) fill 1//0 50vw !important;
    color: var(--header-nav-active-link-color);
  }

  /* Underline links */
  :is(a, button):is(:hover, :focus-visible) span,
  :host([listsVisible]) [aria-expanded="true"] span {
    box-shadow: 0 4px 0 0 var(--header-nav-active-link-background);
  }

  /* Adapt link and button styling */
  :host(:not([listsVisible])) .lists :is(a, button) {
    text-transform: uppercase;
    padding: 0.8125rem 1.5625rem 0.6875rem;
  }

  :host(:not([listsVisible])) .lists :is(a, button):focus-visible {
    outline-offset: -3px;
  }
`]
