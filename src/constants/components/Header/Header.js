import { LitElement, html } from 'lit'
import { styles } from './styles/header.styles'
import { throttle } from '../misc/utils'
import { ifDefined } from 'lit/directives/if-defined.js'

/**
 * Header der Website. Alternative zu <header>.
 * Wird automatisch kleiner auf großen Viewports, wenn die Seite gescrolled wurde.
 *
 * @slot default - Ein oder zwei divs
 *
 */
export class Header extends LitElement {
  static properties = {
    microsite: { type: String },
    _hasNavOrAction: { type: Boolean },
    _scrolledOffset: { type: Number }
  }

  static styles = [
    styles
  ]

  constructor () {
    super()

    /** @type {Boolean} Header mit oder ohne Microsite Menü */
    this.microsite = true

    /**
     * @type {Boolean} Is a nav or actions present
     * @private
     **/
    this._hasNavOrAction = false

    /**
     * @type {Number} When should the header expand/shrink
     * @private
     **/
    this._scrolledOffset = 30
  }

  connectedCallback () {
    super.connectedCallback()

    this._addGlobalEvents()

    // Turn generic element into banner landmark
    this.setAttribute('role', 'banner')

    // Determine appropriate height
    this._setHeaderHeight()

    // Scroll header if necessary
    this._scrollHeader()
  }

  _addGlobalEvents () {
    // Add/remove `.wm-window-was-scrolled` on the root if the page has been scrolled
    this._lastKnownScrollPosition = window.pageYOffset

    window.addEventListener('scroll', this._scrollHeader.bind(this))
  }

  /**
   * Check if page scrolled and apply or remove class that shrinks or expands the header
   * @private
   */
  _scrollHeader () {
    this._lastKnownScrollPosition = window.pageYOffset

    if (this._lastKnownScrollPosition > this._scrolledOffset) {
      document.documentElement.classList.add('wm-window-was-scrolled')
    } else {
      document.documentElement.classList.remove('wm-window-was-scrolled')
    }
  }

  firstUpdated () {
    /**
    * Add class to <html> to differentiate between Microsites and normal site
    */
    if (this.microsite === 'false') {
      document.documentElement.classList.add('wien')
    }
  }

  /**
   * Eine Action von außen hinzufügen
   * @param {Node} node
   */
  addAction (node) {
    console.log('add action')
    if (this.querySelector('[slot="actions"]')) {
      this.querySelector('[slot="actions"]').appendChild(node)
      this._hasNavOrAction = true
      this._setHeaderHeight()
    }
  }

  /**
   * Watch changes to slot
   * @private
   */
  _onSlotChange (e) {
    const childNodes = e.target.assignedElements({ flatten: true })[0]

    if (childNodes.querySelectorAll('*').length) {
      this._hasNavOrAction = true
      this._setHeaderHeight()
    }
  }

  /**
   * Check if nav or actions present, and set document class accordingly
   * @private
   */
  _setHeaderHeight () {
    const root = document.documentElement

    if (!this._hasNavOrAction) {
      root.classList.add('wien')
    } else {
      root.classList.remove('wien')
    }
  }

  render () {
    return html`
    <div>
      <slot name="header"></slot>
    </div>
    <div class="nav-actions" hidden=${ifDefined(!this._hasNavOrAction ? 'hidden' : undefined)}">
      <slot name="nav" @slotchange="${this._onSlotChange}"></slot>
      <slot name="actions" @slotchange="${this._onSlotChange}"></slot>
    </div>
    `
  }
}

customElements.define('wm-header', Header)

export const tagName = 'wm-header'
