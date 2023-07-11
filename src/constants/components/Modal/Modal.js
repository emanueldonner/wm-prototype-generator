import { LitElement, html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { when } from 'lit/directives/when.js'
import { WmImageZoom, preventPinchZoom } from '../misc/image-zoom'

/**
* @cssprop --modal-max-width - Maximalbreite
* @cssprop --modal-button-background-color - Hintergrundfarbe des Buttons
* @cssprop --modal-button-border-color - Rahmenfarbe des Buttons
* @cssprop --modal-button-background-image - Hintergrundbild des Buttons
*/

export class Modal extends LitElement {
  /** @private */
  get _dialog () {
    return this.querySelector('dialog') ?? null
  }

  /** @private */
  get _content () {
    return this.querySelector('.content-inner') ?? null
  }

  /** @private */
  get _captionElement () {
    return this.querySelector('.caption') ?? null
  }

  static properties = {
    isopen: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
    _type: { type: String },
    _caption: { type: String },
    _trigger: { type: Node },
    _thumbs: { type: Array, attribute: false },
    _currentThumb: { type: Number }
  }

  constructor () {
    super()

    /** @type {Boolean} - Is Modal geöffnet oder nicht */
    this.isopen = false

    /**
     * @type {String} - Art der Größe
     * @summary fit-content, max-content
     */
    this.size = 'fit-content'

    /**
    * @type {Boolean} - Type of content to attach
    * @private
    * @summary image or html
    */
    this._type = 'image'

    /**
     * @type {Boolean} - Type of content to attach
     * @private
     * @summary image or html
     */
    this._caption = ''

    /**
     * @type {Boolean} - Array of thumb element
     * @private
     */
    this._thumbs = []

    /**
     * @type {Boolean} - The selected thumb
     * @private
     */
    this._currentThumb = 0

    /**
     * @type {Node} - The element that triggered the modal
     * @private
     */
    this._trigger = undefined
  }

  /**
 * Add events
 * @private
 */
  _addEvents () {
    this._dialog.addEventListener('close', this._closeEvent.bind(this))
  }

  /**
 * Add gloval events
 * @private
 */
  _addGlovalEvents () {
    document.body.addEventListener('click', (e) => {
      this._trigger = e.target.closest('[data-modal]')

      if (this._trigger && this._trigger.dataset.modal) {
        e.preventDefault()

        this._type = this._trigger.dataset.modal

        if (this._type === 'image') {
          this._getImage()
        } else {
          this._getHTML()
          this._getThumbs()
        }
        this.open()
      }
    })
  }

  /**
   * Fired when the modal gets closed
   * @private
   */
  _closeEvent () {
    /** @type {CustomEvent} Wenn das Modal geschlossen wurde. */
    this.dispatchEvent(
      new CustomEvent('closed', {
        bubbles: true
      })
    )

    this.close()
  }

  /**
   * Get image from href an append it to the modal
   * @private
   */
  _getImage () {
    const image = new Image()
    image.src = this._trigger.getAttribute('href')

    this.alt = ''

    // Is there an image with alt text? Use the alt text
    if (this._trigger.querySelector('[alt]')) {
      this.alt = this._trigger.querySelector('[alt]').getAttribute('alt')
      // Use the link text instead
    } else {
      this.alt = this._trigger.textContent
    }

    image.alt = this.alt

    if (this._trigger.closest('figure')) {
      const figure = this._trigger.closest('figure')
      this._caption = figure.querySelector('figcaption').innerHTML
    }

    this._dialog.addEventListener('touchstart', preventPinchZoom)
    image.onload = () => {
      this._imageZoom = new WmImageZoom({
        img: image,
        container: this._content,
        zoomedClass: 'wm-image--zoomed'
      })

      this._content.style.width = `${image.width}px`
      this._content.style.aspectRatio = `${image.width} / ${image.height}`

      if (this._captionElement) {
        this._captionElement.style.width = `${image.width}px`
      }

      image.classList.add('wm-image--zoom')
    }

    this._content.appendChild(image)
  }

  /**
   * Move slide if it's a modal carouseö
   * @private
   */
  _switchSlide (n, e) {
    this.querySelector('wm-carousel').slide(n)
  }

  /**
   * Collect thumbs if present
   * @private
   */
  _getThumbs () {
    if (this._trigger.dataset.thumbs) {
      const images = document.querySelector(`#${this._trigger.dataset.thumbs}`).content.cloneNode(true).querySelectorAll('img')
      this._thumbs = Array.from(images)

      this.querySelector('wm-carousel').addEventListener('slideChanged', e => {
        this._currentThumb = e.detail - 1
      })
    }
  }

  /**
   * Append html from template
   * @private
   */
  _getHTML () {
    this._content.innerHTML = document.querySelector(
      `#${this._type}`
    ).innerHTML

    if (this._trigger.dataset.size) {
      this.size = this._trigger.dataset.size
    }
  }

  /**
   * Close when clicking somewhere outside the dialog
   * @private
   */
  _clickOutSide (e) {
    if (e.target.nodeName === 'DIALOG') {
      this.close()
    }
  }

  /**
   * @summary Modal öffnen
   */
  open () {
    this.isopen = true

    setTimeout(() => {
      this._dialog.showModal()
      this._dialog.focus()
    }, 0)

    /** @type {CustomEvent} Wenn das Modal geöffnet wurde. */
    this.dispatchEvent(
      new CustomEvent('opened', {
        bubbles: true
      })
    )
  }

  /**
   * @summary Modal schließen
   */
  close () {
    if (this.isopen) {
      if (this._imageZoom) {
        if (this._imageZoom.ready) {
          this._dialog.removeEventListener('touchstart', preventPinchZoom)
          this._content.removeAttribute('style')

          this._imageZoom.resetZoom()
          this._imageZoom.destroyEvents()
          this._cleanUpAfterClose()
        }
      } else {
        this._cleanUpAfterClose()
      }
    }
  }

  /**
   * Dispatch event helper
   * @private
   */
  _cleanUpAfterClose () {
    this.isopen = false
    this._dialog.close()
    this._content.innerHTML = ''
    this._caption = ''
    this._thumbs = []
    this.size = 'fit-content'
  }

  firstUpdated () {
    this._addEvents()
  }

  /**
   * @private
   */
  createRenderRoot () {
    return this
  }

  connectedCallback () {
    super.connectedCallback()

    this._addGlovalEvents()
  }

  render () {
    return html`
      <slot></slot>
      <dialog tabindex="-1" aria-modal="true" class="${this._type.indexOf('image') !== -1 ? 'image' : 'html'}" @click=${this._clickOutSide}>
        <div class="controls">
        ${when(this._thumbs, () => html`
        <div class="thumbs">
        ${this._thumbs.map((thumb, i) => {
          return html`
            <wm-button class="thumb" kind="clean" @click="${this._switchSlide.bind(this, i)}" aria-pressed="${i === this._currentThumb}">
              <button>
                ${thumb}
              </button>
            </wm-button>
          `
        })}
        </div>
        `)}
          <wm-button kind="clean" class="close" @click="${this.close}">
            <button type="button">
              <wm-icon iconid="close" size="32">Close</wm-icon>
            </button>
          </wm-button>
        </div>
        <div class="content html">
          <div class="content-inner"></div>
          ${when(this._caption, () => html`<div class="caption">${unsafeHTML(this._caption)}</div>`)}
        </div>
      </dialog>
    `
  }
}

customElements.define('wm-modal', Modal)

export const tagName = 'wm-modal'
