import { LitElement, html } from 'lit'
import { styles } from './styles/status.styles'

export const tagName = 'wm-status'

export class Status extends LitElement {
  static properties = {
    label: { type: String, reflect: true },
    loading: { type: String, reflect: true },
    status: { type: String, reflect: true },
    statusText: { type: String, reflect: true }
  }

  static styles = [styles]

  constructor () {
    super()

    /**
     * @type {String} Der Text vor der Statusanzeige
     */
    this.label = 'Auslastung:'

    /**
     * @type {String} Text der angezeigt wird solange Daten laden
     */
    this.loading = 'Lade Auslastung…'

    /**
     * @type {String} id des jeweiligen Status.
     * @summary 0 = Schwarz, 1 = Grün, 2 = Gelb, 3 = Dunkelgelb, 4 = Orange, 5 = Rot, 6 = Hellgrau
     */
    this.status = 6

    /**
     * @type {String} Text der neben der visuellen Anzeige dargestellt wird.
     */
    this.statusText = ''
  }

  render () {
    return html`
      <strong>${this.label}</strong>
      <span>
        <span class="status status-${this.status}"></span>${this.statusText ? html`${this.statusText}` : html`${this.loading}`}
      </span>
      <slot></slot>
    `
  }
}

customElements.define('wm-status', Status)
