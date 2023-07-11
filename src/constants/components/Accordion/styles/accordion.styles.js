import { css } from 'lit'

export const styles = [css`
* {
  box-sizing: border-box;
}

:host {
  display: block;
}

.heading {
  margin: 0;
}

button[aria-controls] {
  all: unset !important;
  background-color: var(--accordion-background) !important;
  box-sizing: border-box !important;;
  cursor: pointer !important;;
  font-size: 1.1rem !important;;
  font-variation-settings: "wght" 600 !important;;
  font-weight: 400 !important;;
  padding-block: var(--accordion-padding-block) !important;;
  padding-inline: var(--accordion-padding-inline) !important;;
  position: relative !important;;
  width: 100% !important;;
}

button[aria-controls]::after {
  content: "";
  background: var(--accordion-icon) no-repeat center right;
  background-size: cover;
  display: inline-block;
  height: var(--accordion-icon-size);
  inset-inline-end: var(--accordion-padding-inline);
  inset-block: 0;
  margin: auto;
  position: absolute;
  transition: 0.2s all ease-in-out;
  width: var(--accordion-icon-size);
}

button:where(:hover, :focus-visible)::after {
  transform: rotate(-90deg);
}

[aria-expanded="true"]::after {
  transform: rotate(-180deg);
}

.panel {
  background-color: var(--accordion-background);
  display: none;
  overflow: hidden;
  padding-block: var(--accordion-padding-block);
  padding-inline: var(--accordion-padding-inline);
}

.panel > *:first-child {
  margin-block-start: 0;
}

.open {
  display: block;
  margin-bottom: 10px;
}

figcaption {
  --media-figcaption-background: var(--accordion-contrast);
}

a[href]:not(:where(
    /* exclude hash only links */
    [href^="#"],
    /* exclude relative but not double slash only links */
    [href^="/"]:not([href^="//"]),
    /* domains to exclude */
    [href*="wien.gv.at"],
    [href*="facebook"],
    [href*="instagram"],
    [href*="youtube"],
    [href*="xing"],
    [href*="linkedin"]
    [href*="tel:"]
  ))::after {
    background-image: url('data:image/svg+xml,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 200 200" xml:space="preserve"> <path stroke="currentColor" fill="none" style="stroke-miterlimit: 10; stroke-width: 10;" d="M83.2 116.6l61.1-61M145.3 93.4c0-.1 1.1-6.9 1.6-15.2.6-9.2.2-16.3-1-21l-3.2-3.2c-4.7-1.2-11.8-1.5-21-1-7.9.5-14.5 1.5-15.3 1.6M147.2 104.3v43H52.8V53h42.8"/></svg>');
    background-position: 100% 100%;
    background-repeat: no-repeat;
    content: "";
    display: inline-block;
    height: 1.4em;
    margin-left: .1em;
    vertical-align: text-bottom;
    width: 1.4em;
  }
`]
