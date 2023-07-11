import { LitElement, html } from 'lit'
import { tokens } from './styles/badge.tokens'
import { styles } from './styles/badge.styles'

/**
 * Badge in Cards
 *
 * @slot default - Text
 */

/**
* @cssprop --badge-color-success - Farbe für Erfolg-Badge
* @cssprop --badge-color-error - Farbe für Error-Badge
* @cssprop --badge-font-variation-settings - Schriftstärke für WM Variablefont
* @cssprop --badge-font-weight - Standard-Schriftstärke
*/

export class Badge extends LitElement {
  static properties = {
    color: { type: String, reflect: true }
  }

  static styles = [tokens, styles]

  constructor () {
    super()

    /**
     * @type {string} - Textfarbe
     * @summary <code>success</code>, <code>error</code>
     */
    this.color = undefined
  }

  render () {
    return html`
      <slot></slot>
    `
  }
}

customElements.define('wm-badge', Badge)

export const tagName = 'wm-badge'
