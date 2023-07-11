import { LitElement, css, html } from 'lit'
import { tokens } from './styles/tabs.tokens.js'

/**
 * Reiter
 *
 * @slot default - Bezeichnung
 *
 */

export class Tab extends LitElement {
  static properties = {
    selected: { type: Boolean, reflect: true }
  }

  static styles = [
    tokens,
    css`
      * {
        box-sizing: border-box;
      }

      :host {
        --border-color: var(--tab-border-color);
        --background-color: var(--tab-background-color);

        background-color: var(--background-color);
        display: block;
        cursor: pointer;
        line-height: 1.4;
        border-style: solid;
        border-width: var(--tab-border-width);
        border-color: var(--border-color);
        font-variation-settings: var(--tab-font-variation-settings);
        font-weight: var(--tab-font-weight);
        padding: var(--tab-padding);
        min-width: fit-content;
      }

      :host([selected]) {
        --border-color: var(--tab-border-color-selected);
        --background-color: var(--tab-background-color-selected);
      }

      :host(:hover) {
        --background-color: var(--tab-background-color-selected);
      }

      :host(:focus-visible) {
        outline-offset: calc(var(--site-focus-outline-width) * -1) !important;
      }
    `
  ]

  constructor () {
    super()

    this.selected = false
    this.setAttribute('role', 'tab')
  }

  updated () {
    this.setAttribute('aria-selected', this.hasAttribute('selected'))
    this.setAttribute('tabindex', this.hasAttribute('selected') ? 0 : -1)
  }

  render () {
    return html`
      <slot></slot>
    `
  }
}

customElements.define('wm-tab', Tab)
