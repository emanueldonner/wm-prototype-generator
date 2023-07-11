import { LitElement, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { tokens } from './styles/carousel.tokens'
import { styles } from './styles/carousel.styles'
import { WmImageZoom, preventPinchZoom } from '../misc/image-zoom'
import { isDoubleTap } from '../misc/utils.js'

/**
 * Bilder oder Card-Carousel.
 *
 * @slot default - Cards oder Bilder
 *
 */

/**
* @cssprop --carousel-ratio - Seitenverhältnis der einzelnen Slides
* @cssprop --carousel-item-inner-padding - Innenabstand in einzelnen Slides
* @cssprop --carousel-shadow-offset - Platz um das Karussell für Schatten
* @cssprop --carousel-gap - Abstand zwischen Elementen
* @cssprop --carousel-control-bg - Hintergrundfarbe der Controls
* @cssprop --carousel-control-bg-start - Hintergrundbild des ersten Buttons
* @cssprop --carousel-control-bg-end - Hintergrundbild des zweiten Buttons
*/

export class Carousel extends LitElement {
  /** @private */
  get _items () {
    return this.renderRoot?.querySelector('.inner').querySelector('slot').assignedElements()
  }

  /** @private */
  get _wrapper () {
    return this.renderRoot?.querySelector('.strip') ?? null
  }

  /** @private */
  get _visible () {
    return this.querySelectorAll('.active') ?? null
  }

  /** @private */
  get _current () {
    return this.querySelector('.current') ?? null
  }

  /** @private */
  get _lastSlide () {
    return this.querySelector('.last') ?? null
  }

  /** @private */
  get _firstSlide () {
    return this.querySelector('.frst') ?? null
  }

  /** @private */
  get _output () {
    return document.querySelector('[role="status"]') ?? null
  }

  static properties = {
    nextLabel: { type: String },
    prevLabel: { type: String },
    single: { type: String, reflect: true },
    _initialized: { type: Boolean, attribute: false },
    _currentSlide: { type: Number, attribute: false },
    _offset: { type: String, attribute: false },
    _first: { type: String, attribute: false },
    _last: { type: String, attribute: false },
    _focusMode: { type: Boolean, attribute: false },
    _canMove: { type: Boolean, attribute: false },
    _imageZoom: { type: Object, attribute: false },
    _touchstartX: { type: Number },
    _touchstartY: { type: Number },
    _touches: { type: Number },
    _swipeTreshold: { type: Number }
  }

  static styles = [tokens, styles]

  constructor () {
    super()

    /**
     * @type {String} - Nur ein Element anzeigen
     * @summary Breite in Pixel
     */
    this.single = undefined

    /**
     * @type {String} - Label für den Button rechts
     */
    this.nextLabel = 'Nächstes'

    /**
     * @type {String} - Label für den Button links
     */
    this.prevLabel = 'Vorheriges'

    /**
     * @type {String} - Erstes Element aktiv?
     * @private
     */
    this._first = true

    /**
     * @type {String} - Letztes Element aktiv?
     * @private
     */
    this._last = false

    /**
     * @type {Number} - Aktueller Slide
     * @private
     */
    this._currentSlide = 1

    /**
     * @type {Number} - Versatz
     * @private
     */
    this._offset = 0

    /**
     * @type {Boolean} - Determine
     * @private
     */
    this._focusMode = false

    /**
     * @type {Boolean} - Is it okay to move to the next slide?
     * @private
     */
    this._canMove = true

    /**
   * @type {Boolean} - Is carousel ready
   * @private
   */
    this._initialized = false

    /** Container for image zoom settings
     * @private
     */
    this._imageZoom = {}

    /** Determines when a swipe is a swipe and not a tap
     * @private
     */
    this._swipeTreshold = 80

    /** Touch x pos for image zoom
     * @private
     */
    this._touchstartX = 0

    /** Touch y pos for image zoom
     * @private
     */
    this._touchstartY = 0

    /** How many fingers are on the screen
     * @private
     */
    this._touches = 0
  }

  /**
   * @summary Move carousel
   * @private
   * @param {string} elemdirectionent - 'next' or 'prev'
   */
  _move (direction) {
    if (this._canMove) {
      this._canMove = false
      let item = this._current.nextElementSibling

      if (direction === 'prev') {
        item = this._current.previousElementSibling
      }

      if (Number.isInteger(direction)) {
        item = this._items[direction]
      }

      // Get offset for shadows
      const shadowOffset = parseInt(getComputedStyle(this).getPropertyValue('--carousel-shadow-offset'))

      // Get position of next item
      this._offset += item.getBoundingClientRect().left - this.getBoundingClientRect().left
      this._offset = this._offset - shadowOffset

      // Scroll
      this._wrapper.style.transform = `translateX(${(this._offset) * -1}px)`

      // Swap current items
      this._current.classList.remove('current')
      item.classList.add('current', 'active')
      item.removeAttribute('inert')

      if (direction === 'prev') {
        this._currentSlide--
      } else if (direction === 'next') {
        this._currentSlide++
      } else {
        this._currentSlide = direction + 1
      }

      // console.log(`move ${direction}`)
      // console.log(`Current slide: ${this._currentSlide}`)

      let output = `Element ${this._currentSlide}`

      if (this._items[this._currentSlide - 1].getAttribute('alt')) {
        output = this._items[this._currentSlide - 1].getAttribute('alt')
      }

      this._output.innerHTML = output

      this._wrapper.addEventListener('transitionend', e => {
        this._canMove = true
      })
    }
  }

  /**
   * @summary Is the current currentSlide the first or the last slide
   * @private
   */
  _firstOrLast () {
    this._last = (this._lastSlide.classList.contains('active'))
    this._first = !(this._currentSlide > 1)

    if (this._initialized) {
      if (this._last) {
        this.renderRoot.querySelector('.control--prev').focus()
      }

      if (!this._last && this._first) {
        this.renderRoot.querySelector('.control--next').focus()
      }
    }
  }

  /**
   * @summary Nächster Slider
   * @private
   */
  _prev = () => {
    if (this._currentSlide === 1) {
      return
    }

    this._move('prev')
    this._changeSlide()
  }

  /**
   * @summary Vorheriger Slider
   * @private
   */
  _next = () => {
    if (this._lastSlide.classList.contains('active')) {
      return
    }

    this._move('next')
    this._changeSlide()
  }

  slide (n) {
    if (this._items[n] && n !== this._currentSlide - 1) {
      this._move(n)
      this._changeSlide(n + 1)
    }
  }

  /**
   * @summary Change the current slide
   * @private
   */
  _changeSlide (slide) {
    /** @type {CustomEvent} Slide wurde gewechselt */
    this.dispatchEvent(new CustomEvent('slideChanged', {
      detail: this._currentSlide,
      bubbles: true
    })
    )

    this._lazyLoadContent(slide || this._currentSlide + 1)
  }

  /**
   * If there's an img or iframe with data-src, load it
   * @summary Load lazy content
   * @private
   */
  _lazyLoadContent (index) {
    const element = this._items[index - 1]
    if (element) {
      if (element.hasAttribute('data-src') || element.querySelector('[data-src]')) {
        const lazyElement = element.querySelector('[data-src]') ?? element

        lazyElement.onload = e => {
          lazyElement.classList.add('loaded')
        }
        lazyElement.setAttribute('src', lazyElement.getAttribute('data-src'))
        lazyElement.removeAttribute('data-src')
      }
    }
  }

  firstUpdated () {
    this.shadowRoot.querySelector('slot').addEventListener('slotchange', e => {
      this._setWidth()
      this._observeItems()
      this._setItemClasses()
      this._lazyLoadContent(2)
      this._addEvents()
    })
  }

  disconnectedCallback () {
    super.disconnectedCallback()
    this._removeEvents()

    if (Object.keys(this._imageZoom).length) {
      this._imageZoom.resetZoom()
    }
  }

  /**
   * @summary add key events
   * @private
   */
  _keyEvents (e) {
    if (e.code === 'ArrowRight') {
      this._next()
    }
    if (e.code === 'ArrowLeft') {
      this._prev()
    }
  }

  /**
   * @summary remove events
   * @private
   */
  _removeEvents () {
    this.removeEventListener('keyup', this._keyEvents)
  }

  _handleTouch (e) {
    if (e.touches.length === 2 || isDoubleTap()) {
      e.preventDefault()
      if (!this._focusMode) {
        console.info('👉 Start touch in Carousel.')
        this._initFocusMode(e)
      }
    }

    this._touchstartX = e.changedTouches[0].clientX
    this._touchstartY = e.changedTouches[0].clientY
    this._touches = e.touches.length
  }

  _handleTouchEnd (e) {
    setTimeout(() => {
      if (this._imageZoom.ready) {
        this._imageZoom.endHandler()
      }
    }, 150)

    this._touchendX = e.changedTouches[0].clientX
    this._touchendY = e.changedTouches[0].clientY

    if (this._touches < 2) {
      this._handleSwipe()
    }
  }

  _handleSwipe () {
    if (!this._focusMode) {
      if (this._touchendX + this._swipeTreshold < this._touchstartX) {
        this._next()
      }
      if (this._touchendX - this._swipeTreshold > this._touchstartX) {
        this._prev()
      }
    }
  }

  _leaveFocusMode (e) {
    if (this._focusMode) {
      console.log('👉 Stop focusmode')

      this._focusMode = false
      this.classList.remove('focusmode')

      this._items.forEach(item => {
        item.removeAttribute('hidden')
        item.classList.remove('wm-image--zoom')

        if (item.querySelector('img')) {
          item.querySelector('img').classList.remove('wm-image--zoom')
        }
      })

      const container = e.target
      container.style.removeProperty('width')
      container.style.removeProperty('aspect-ratio')

      this._imageZoom.destroyEvents()

      setTimeout(() => {
        this.classList.remove('notransition')
      }, 300)
    }
  }

  _initFocusMode (e) {
    const target = e.target
    if (!this._focusMode) {
      console.log('👉 Start focusmode')

      if (target.nodeName === 'IMG') {
        this._focusMode = true
        this.classList.add('focusmode')
        this.classList.add('notransition')

        const image = target
        this._items.forEach(item => {
          if (item !== this._current) {
            item.hidden = true
          }
        })

        const imageWrapper = image.closest('.content-inner')
        imageWrapper.addEventListener('reset', this._leaveFocusMode.bind(this))

        this._imageZoom = new WmImageZoom({
          img: image,
          container: imageWrapper,
          zoomedClass: 'wm-image--zoomed'
        })

        imageWrapper.style.width = `${image.width}px`
        imageWrapper.style.aspectRatio = `${image.width} / ${image.height}`
        image.classList.add('wm-image--zoom')

        setTimeout(() => {
          this._imageZoom.startHandler(e, true)
        }, 150)
      }
    }
  }

  /**
   * @summary add events
   * @private
   */
  _addEvents () {
    this.addEventListener('keyup', this._keyEvents)

    if (document.querySelector('dialog')) {
      document.querySelector('dialog').addEventListener('touchstart', preventPinchZoom)
    }

    this.addEventListener('touchstart', this._handleTouch)
    this.addEventListener('touchend', this._handleTouchEnd)
  }

  /**
   * @summary set current, last, and first classes
   * @private
   */
  _setItemClasses () {
    this._items[0].classList.add('current', 'first')
    this._items[this._items.length - 1].classList.add('last')
  }

  /**
   * @summary observe item visibility with 90% visibility within root
   * @private
   */
  _observeItems () {
    const observer = new IntersectionObserver(this._handleIntersection.bind(this), {
      root: this,
      threshold: 0.9
    })

    for (let i = 0; i < this._items.length; i++) {
      const item = this._items[i]

      observer.observe(item)
    }
  }

  /**
   * @summary set the width of each item for single carousels
   * @private
   */
  _setWidth () {
    if (this.single) {
      this.style.width = `${this.single}px`
    }
  }

  /**
   * @summary Make slides active/inactive
   * @private
   */
  // TODO intersection letzte card, nicht vollstandig in carouselcontainer - nicht clickbar!
  _handleIntersection (entries) {
    // The callback will return an array of entries, even if you are only observing a single item
    entries.map((entry) => {
      const target = entry.target

      if (!target.classList.contains('wm-image--zoom')) {
        // _observeItems () threshold set to 90% intersection
        if (entry.isIntersecting) {
          // console.log(entry.intersectionRatio)
          target.classList.add('active')
          target.removeAttribute('inert')
        } else {
          target.setAttribute('inert', '')
          target.classList.remove('active')
        }
      }

      this._firstOrLast()
      return entry
    })

    this._initialized = true
  }

  render () {
    const nextButtonClass = { 'control--inactive': this._last }
    const prevButtonClass = { 'control--inactive': this._first }

    return html`
      <div>
        <button class="control control--prev ${classMap(prevButtonClass)}" aria-label="${this.prevLabel}" @click="${this._prev}"></button>
        <button class="control control--next ${classMap(nextButtonClass)}" aria-label="${this.nextLabel}" @click="${this._next}"></button>
      </div>
      <div class="inner">
        <div class="strip">
          <slot></slot>
        </div>
      </div>

    `
  }
}

customElements.define('wm-carousel', Carousel)

export const tagName = 'wm-carousel'
