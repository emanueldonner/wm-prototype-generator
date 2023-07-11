import { LitElement, html } from 'lit'
import { tokens } from './styles/navmain.tokens'
import { styles } from './styles/navmain.styles'
import { when } from 'lit/directives/when.js'

/**
 * Hauptmenü
 *
 * @slot default - Liste
 *
 */

/**
* @cssprop --navmain-wrapperwidth - Breite des Wrappers im Menü
* @cssprop --navmain-gap - Abstand zwischen Menüpunkten auf der ersten Ebene
*/

export class NavMain extends LitElement {
  get _dialog () {
    return this.renderRoot?.querySelector('dialog') ?? null
  }

  get _content () {
    return this.renderRoot?.querySelector('.wrapper') ?? null
  }

  get _lists () {
    return this.renderRoot?.querySelector('.lists') ?? null
  }

  static properties = {
    labelOpen: { type: String },
    showLabelOpen: { type: String },
    labelClose: { type: String },
    type: { type: String, reflect: true },
    listsVisible: { type: Boolean, reflect: true },
    isopen: { type: Boolean, reflect: true },
    _items: { type: Array, attribute: false },
    _openItem: { type: Number, attribute: false },
    _lastFocusedElement: { type: Node, attribute: false }
  }

  static styles = [tokens, styles]

  constructor () {
    super()

    /** @type {String} - Label Menü geschlossen */
    this.labelOpen = 'Menü'

    /** @type {String} - Label Menü offen */
    this.labelClose = 'Schließen'

    /** @type {String} - Soll das Label angezeigt werden */
    this.showLabelOpen = 'true'

    /**
     * Contains items to display in the accordion
     * @private
     */
    this._items = []

    /** @type {String} - Menü offen oder zu */
    this.isopen = false

    /**
     * @type {String} - Art des Menüs
     * @summary hidden, visible, hiddenmobile
     */
    this.type = 'visible'

    /**
     * @type {String} - Is the navigation hidden behind a burger or not
     * @private
     */
    this.listsVisible = false

    /**
     * @type {String} - Which item with children is currently expanded
     * @private
     */
    this._openItem = undefined

    /**
     * @type {String} - the last button that opended a submenu
     * @private
     */
    this._lastFocusedElement = undefined

    /* Event references */
    this._nativeCloseEvent = this._nativeClose.bind(this)
    this._closeOnTransitionEndEvent = this._closeOnTransitionEnd.bind(this)

    /* Close the navigation when the mouse leaves the navigation */
    this.addEventListener('mouseleave', e => {
      if (this.listsVisible) {
        this._closeSub(this._openItem)
      }
    })
  }

  connectedCallback () {
    super.connectedCallback()

    this._getLayout()
    this._addGlovalEvents()
  }

  updated (changedProperties) {
    /* Listen to changes to this.isopen and open/close the nav accordingly */
    if (changedProperties.has('isopen')) {
      if (this.isopen) {
        this.open()
      } else {
        this.close()
      }
    }
  }

  /**
   * Add global events to the document
   * @private
   */
  _addGlovalEvents () {
    this.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        e.preventDefault()

        if (this._openItem !== undefined) {
          this._closeSub(this._openItem)
        }

        this.isopen = false
        this._moveFocus()
      }
    })
  }

  /**
   * @summary Move focus to last clicked button
   * @private
   */
  _moveFocus () {
    if (this._lastFocusedElement) {
      this._lastFocusedElement.focus()
      this._lastFocusedElement = undefined
    }
  }

  /**
   * @summary Close on click outside of .content
   * @private
   */
  _handleClickOutside (e) {
    if (e.target.classList.contains('wrapper')) {
      this.isopen = false
    }
  }

  /**
   * @summary Events hinzufügen
   * @private
   */
  _addEvents () {
    setTimeout(() => {
      if (this._dialog) {
        this._dialog.addEventListener('close', this._nativeCloseEvent)
        this._content.addEventListener('transitionend', this._closeOnTransitionEndEvent)
      }
    }, 0)
  }

  /**
   * @summary Fire the native close event when the nav is out of view
   * @private
   */
  _closeOnTransitionEnd (e) {
    if (e.target.classList.contains('wrapper--hidden')) {
      this._dialog.close()
      this._content.classList.remove('wrapper--hidden')
    }
  }

  /**
   * @summary Remove transition class when the native close event fires
   * @private
   */
  _nativeClose (e) {
    if (!e.target.classList.contains('wrapper--hidden')) {
      this._content.classList.remove('transition')
    }
  }

  /**
   * @summary Determine the layout of the nav based on setting and viewport viel (mobile, desktop, or mobile and desktop)
   * @private
   */
  _getLayout () {
    /* When type visible, always show the nav */
    if (this.type === 'visible') {
      this.listsVisible = true
    }

    /* Fires at viewport width of 1024px */
    const mql = window.matchMedia('(min-width: 64em)')

    const checkViewportWidth = (e) => {
      /* show nav when > 1024px, hide it when lower */
      if (this.type === 'hiddenmobile') {
        this.listsVisible = e.matches
      }

      if (!this.listsVisible) {
        /* Add close events when nav hidden */
        this._addEvents()

        /* Make sure the nav is hidden, when resizing the window in hiddenmobile mode */
        if (this.type === 'hiddenmobile') {
          this.isopen = false
        }
      }
    }

    mql.addEventListener('change', checkViewportWidth)
    checkViewportWidth(mql)
  }

  /**
   * @summary Menü öffnen
   */
  open () {
    if (this._content) {
      /* Remove class first to avoid glitches in animation */
      this._content.classList.remove('wrapper--hidden')
      /* show modal, but hide nav */
      this._dialog.showModal()
      this._content.classList.add('wrapper--hidden')

      /* Wait for updated DOM and slide nav in */
      setTimeout(() => {
        this._content.classList.add('transition')
        this._content.classList.remove('wrapper--hidden')
      }, 0)
    }
  }

  /**
   * @summary Menü schließen
   */
  close () {
    if (this._content) {
      this._content.classList.add('wrapper--hidden')
    }
  }

  /**
   * @summary Take the slotted content and wrap it in the new markup
   * @private
   */
  _getContents () {
    this._items = []
    const lists = this.shadowRoot.querySelector('slot').assignedElements()

    const _getData = (arr, list) => {
      const items = list.querySelectorAll(':scope > li')

      for (let j = 0; j < items.length; j++) {
        const item = items[j]
        const link = item.querySelector('a')

        const data = {
          text: link.textContent,
          href: link.getAttribute('href'),
          children: [],
          collapsed: true
        }

        const sublist = item.querySelector('ul')
        if (sublist) {
          const subdata = []
          _getData(subdata, sublist)
          data.children = subdata
        }
        arr.push(data)
      }
    }

    for (let i = 0; i < lists.length; i++) {
      const list = lists[i]
      _getData(this._items, list)
    }
  }

  /**
   * Get data from slotted content
   * @private
   */
  _rerender () {
    this._getContents()
  }

  /**
   * @summary Toggle sub menus
   * @private
   */
  _openCloseSub (i, e) {
    this._lastFocusedElement = e.target

    /* Is there a submenu already open? close it! */
    if (this._openItem !== undefined && this._openItem !== i) {
      this._closeSub(this._openItem)
    }

    /* Does the element actually exists */
    if (this._items[i]) {
      /* Make it the current item */
      this._openItem = i

      /* Update array that contains all item */
      this._items[i].collapsed = !this._items[i].collapsed
      this.requestUpdate()

      if (this.type === 'visible') {
        this.isopen = !this._items[i].collapsed
      }
    }
  }

  /**
   * @summary Open sub menus
   * @private
   */
  _openSub (i, e) {
    if (this._openItem !== undefined) {
      this._closeSub(this._openItem)
    }
    this._openItem = i
    this._items[i].collapsed = false
    this.requestUpdate()
  }

  /**
   * @summary Close sub menus
   * @private
   */
  _closeSub (i, e) {
    if (this._openItem !== undefined) {
      this._items[i].collapsed = true
      this.requestUpdate()
      this._openItem = undefined
    }
  }

  /**
   * @summary Close sub menus
   * @private
   */
  _openCloseNav () {
    this.isopen = !this.isopen
  }

  /**
   * @summary Markup for the burger/close icon
   * @private
   */
  _burgerTemplate () {
    return html`
      <wm-button kind="clean" @click="${this._openCloseNav}" class="burger">
        <button>
          ${this.showLabelOpen === 'false'
          ? html`<span class="wm-h-vh">${this.labelOpen}</span>`
          : `${this.labelOpen}`
          }
          <wm-icon iconid="burger"></wm-icon>
        </button>
      </wm-button>
    `
  }

  /**
   * @summary Close submenus automatically when leaving sub menu list using the keyboard
   * @private
   */
  _handleKeyDown (e) {
    if (e.key === 'Tab') {
      const parentItem = e.target.parentNode
      const parentList = parentItem.parentNode

      if ((!e.shiftKey && e.target === parentList.lastElementChild.querySelector('a')) ||
      (e.shiftKey && e.target === parentList.firstElementChild.querySelector('a'))) {
        this._closeSub(this._openItem)
      }
    }
  }

  /**
   * @summary Show submenu on mouseover
   * @private
   */
  _handleButtonMouseOver (i, e) {
    if (this.listsVisible) {
      this._openSub(i, e)
    }
  }

  /**
   * @summary Close open submenüs when hovering a link on the same level
   * @private
   */
  _handleLinkMouseOver (e) {
    if (this.listsVisible) {
      this._closeSub(this._openItem, e)
    }
  }

  _listsTemplate () {
    return html`
      <div class="lists">
        <ul>
          ${this._items.map((item, i) => {
            return html`
            <li>
              ${when(!item.children.length, () => html`
                <a href="${item.href}" @mouseover="${this._handleLinkMouseOver.bind(this)}">
                  <span>
                  ${item.text}
                  </span>
                </a>
              `, () => html`
                <button aria-expanded="${!item.collapsed}" @click="${this._openCloseSub.bind(this, i)}" @mouseover="${this._handleButtonMouseOver.bind(this, i)}">
                  <span>${item.text}</span>
                  <wm-icon iconid="chevron-down"></wm-icon>
                </button>
            
                <ul hidden>
                  ${item.children.map((subitem, subi) => {
                    return html`
                      <li>
                        <a href="${subitem.href}" @keydown="${this._handleKeyDown}">
                          <span>
                            ${subitem.text}
                          </span>
                        </a>
                      </li>`
                    })}
                </ul>
              `)} 
            </li>
          `
})}
        </ul>
        <slot hidden @slotchange="${this._rerender}"></slot>
      </div>
    `
  }

  render () {
    return html`
      <nav>
        ${!this.listsVisible ? this._burgerTemplate() : ''}

        ${!this.listsVisible
? html`
          <dialog @click="${this._handleClickOutside}">
            <div class="wrapper">
              <div class="content">
                <div class="header">
                  <wm-button kind="clean" @click="${this._openCloseNav}">
                    <button>
                      <span class="wm-h-vh">${this.labelClose}</span>
                      <wm-icon iconid="close"></wm-icon>
                    </button>
                  </wm-button>
                </div>
                ${this._listsTemplate()}
              </div>
            </div>
          </dialog>
        `
: html`${this._listsTemplate()}`}
      </nav>
    `
  }
}

customElements.define('wm-nav-main', NavMain)
