import { LitElement, html } from 'lit'
import { styles } from './styles/card.styles'
import { tokens } from './styles/card.tokens.js'
import { when } from 'lit/directives/when.js'
import { ifDefined } from 'lit/directives/if-defined.js'

/**
 * Komponente zur Darstellung von Inhalten als Card.
 *
 * @slot heading - Überschrift
 * @slot media - Bild oder Video
 * @slot eyecatcher - Störer
 * @slot content - Inhalts der Card
 * @slot postcontent - Zusätzlicher Inhalt am Ende der Card, z.B. Tags
 *
 */

/**
* @cssprop --card-background - Hintergrundfarbe der Card
* @cssprop --card-border - Rahmen der Card
* @cssprop --card-eyecatcher-spacing - Abstand des Störers zum Rand
* @cssprop --card-eyecatcher-padding - Innenabstand im Störer
* @cssprop --card-eyecatcher-fontsize - Schriftgröße im Störer
* @cssprop --card-media-background - Hintergrundfarbe
* @cssprop --card-media-color - Textfarbe
* @cssprop --card-spacing - Innenabstand in der Card
* @cssprop --card-spacing-large - Innenabstand in der Card auf großen Bildschirmen
* @cssprop --card-shadow - Schatten um die Card
*/

export class Card extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
    _hasMedia: { type: String, attribute: false },
    _flipcard: { type: Boolean },
    flipped: { type: Boolean, reflect: true },
    blocklink: { type: Boolean, reflect: true },
    color: { type: String },
    position: { type: String, reflect: true },
    type: { type: String }
  }

  static styles = [tokens, styles]

  constructor () {
    super()

    /**
     * @type {string} - Gibt die Maximalbreite der Card an.
     * @summary <code>s</code>, <code>m</code>, <code>l</code>, <code>full</code>
     * */
    this.size = 'm'

    /**
     * @type {string} - Gibt die Art der Karte an
     * @summary <code>eyecatcher-default</code>, <code>eyecatcher-round</code>
     * */
    this.type = ''

    /**
     * @type {string} - Gibt die Farbe der Canvascard oder des Störeres an
     * @summary <code>bottom</code>, <code>top</code>, <code>left</code>, <code>right</code>
     * */
    this.position = undefined

    /**
     * @type {string} - Gibt die Farbe der Canvascard oder des Störeres an
     * @summary <code>abendstimmung</code>, <code>flieder</code>, <code>frischgruen</code>, <code>goldgelb</code>, <code>morgenrot</code>, <code>nebelgrau</code>, <code>wasserblau</code>
     * */
    this.color = 'frischgruen'

    /**
     * @type {string} - Cards mit Bildern werden automatisch verlinkt, wenn es innerhalb der Card nur maximal einen Link gibt.
     * @summary  Gesamte Card verlinken
     * */
    this.blocklink = undefined

    /**
     * @private
     */
    this._hasMedia = null

    /**
     * @private
     */
    this._flipcard = false

    this.flipped = undefined
  }

  /**
   * If there's an image, link the entire Card.
   */
  firstUpdated () {
    this.shadowRoot.querySelector('slot[name="media"]').addEventListener('slotchange', e => {
      this._hasMedia = this.shadowRoot.querySelector('slot[name="media"]').assignedNodes().length

      if (this._hasMedia) {
        this._linkCard()
      }
    })
  }

  /**
   * If there's only one link and this link is whithin a h2, h3, or h4, link the entire card.
   * @private
   */
  _linkCard () {
    if (this.querySelectorAll('a').length < 2 && this.querySelectorAll('h2 a, h3 a, h4 a').length === 1) {
      if (!this.blocklink) {
        this.blocklink = true
      }
    }
  }

  _onflipChange () {
    this._flipcard = true
  }

  render () {
    return html`
      <div class="card-inner">
        <div class="header" inert="${ifDefined(this.flipped ? 'inert' : undefined)}">
          <slot name="heading"></slot>

          ${when(this._flipcard, () => html`
          <wm-button kind="clean">
            <button @click="${() => this.flipped = true}" aria-expanded="${this.flipped}">
              <wm-icon iconid="embed"></wm-icon>
              Teilen
            </button>
          <wm-button>
          `)}
        </div>

        <div class="media" ?hidden=${!this._hasMedia}>
          <slot name="media"></slot>
          <div class="eyecatcher">
            <strong><slot name="eyecatcher"></slot></strong>
          </div>
        </div>
        
        <div class="content wm-h-vs" inert="${ifDefined(this.flipped ? 'inert' : undefined)}">
          <slot name="content"></slot>
        </div>
        
        <div class="postcontent" inert="${ifDefined(this.flipped ? 'inert' : undefined)}">
          <slot name="postcontent"></slot>
        </div>

        <div class="flip" inert="${ifDefined(!this.flipped ? 'inert' : undefined)}">
          <div class="flip-header">
            <wm-button kind="clean">
              <button @click="${() => this.flipped = false}" aria-expanded="${this.flipped}">
                <wm-icon iconid="close">Schließen</wm-icon>
              </button>
            <wm-button>
          </div>

          <slot name="flip" @slotchange="${this._onflipChange}"></slot>
        </div>
      </div>
    `
  }
}
customElements.define('wm-card', Card)

export const tagName = 'wm-card'
