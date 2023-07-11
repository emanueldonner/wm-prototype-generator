import { LitElement, html } from 'lit'
import { styles } from './styles/toggle.styles'
import { tokens } from './styles/toggle.tokens.js'
import { classMap } from 'lit/directives/class-map.js'
import { throttle } from '../misc/utils'

/**
 * Disclosure Widget
 *
 * @slot default - Text or Text in HTML
 *
 */

/**
* @cssprop --toggle-border - Rahmen
* @cssprop --toggle-icon - Dropdown Icon
* @cssprop --toggle-padding - Innenabstand
* @cssprop --toggle-padding-button - Innenabstand im Button
* @cssprop --toggle-padding-content - Innenabstand im Inhalt
*/

export class Toggle extends LitElement {
  static properties = {
    full: { type: Boolean, reflect: true },
    open: { type: Boolean, reflect: true },
    min: { type: String, reflect: true },
    _active: { type: Boolean },
    _height: { type: String }
  }

  static styles = [tokens, styles]

  /**
   * @type {string} - content
   * @private
   * */
  get _content () {
    return this.renderRoot.querySelector('.content') ?? null
  }

  /**
   * @type {Node} - content wrapper
   * @private
   * */
  get _wrap () {
    return this.renderRoot.querySelector('.wrap') ?? null
  }

  constructor () {
    super()

    /** @type {string} - Über die volle Breite anzeigen */
    this.full = undefined

    /** @type {string} - Offen oder nicht */
    this.open = undefined

    /** @type {string} - Wenn erst ab einer bestimmten Viewportbreite getoggelt werden soll
     * @summary z.b. 48em, 64em
     */
    this.min = undefined

    /**
     * @type {string} - Height of .content
     * @private
     * */
    this._height = ''

    /**
     * @type {string} - Is the toggle active or not
     * @private
     * */
    this._active = true
  }

  connectedCallback () {
    super.connectedCallback()

    if (this.min) {
      this._isActive()
    }

    window.addEventListener('resize', throttle(this.updateHeight.bind(this), 200))
  }

  firstUpdated () {
    this.updateHeight()
    this._content.addEventListener('transitionend', e => {
      if (e.propertyName === 'height') {
        if (this.open) {
          this._content.classList.add('content--open')
        }
      }
    })
  }

  updated (changedProperties) {
    if (changedProperties.has('_active')) {
      if (!this._active) {
        this._content.style.removeProperty('height')
      }
    }

    if (changedProperties.has('open')) {
      if (!this.open) {
        this._content.classList.remove('content--open')
        this._content.style.removeProperty('height')
      } else {
        this._setHeight()
      }
    }
  }

  /**
   * @summary Höhe des Toggles holen und setzen
   */
  updateHeight () {
    if (this._active) {
      this._getHeight()

      if (this.open) {
        this._setHeight()
      }
    }
  }

  /**
 * Get height of the toggle content to allow animation
 * @private
 */
  _getHeight () {
    if (this._content) {
      this._height = `${this._wrap.scrollHeight}px`
    }
  }

  /**
 * Set height of the toggle content to allow animation
 * @private
 */
  _setHeight () {
    if (this._content) {
      this._content.style.height = this._height
    }
  }

  /**
 * Toggle visibility
 * @private
 */
  _toggle () {
    this.open = !this.open
  }

  /**
 * Add breakpoint and (de)activate component accordingly
 * @private
 */
  _isActive () {
    const mql = window.matchMedia(`(min-width: ${this.min})`)

    const checkViewportWidth = (e) => {
      this._active = e.matches
    }

    mql.addEventListener('change', checkViewportWidth)
    checkViewportWidth(mql)
  }

  render () {
    const buttonClass = { 'button--hidden': !this._active }
    const contentClass = { 'content--hidden': this._active && !this.open }

    return html`
      <wm-button @click="${this._toggle}" full="${this.full}" class="${classMap(buttonClass)}">
        <button aria-expanded="${this.open}">
          <slot name="label"></slot>
        </button>
      </wm-button>
      
      <div class="content ${classMap(contentClass)}">
        <div class="wrap">
          <slot name="content"></slot>
        </div>
      </div>
    `
  }
}

customElements.define('wm-toggle', Toggle)

export const tagName = 'wm-toggle'
