import { LitElement, html } from 'lit'
import { when } from 'lit/directives/when.js'

export class FilterSelection extends LitElement {
  static properties = {
    filterid: { type: String, reflect: true },
    resetlabel: { type: String, reflect: true },
    _selectedElements: { type: Array }
  }

  constructor () {
    super()

    /**
     * @type {String} - ids der Filter, die abgebildet werden sollen
     * @summary Komma-separierte Liste
     */
    this.filterid = undefined

    /** @type {String} - Label für den Zurücksetzen Button */
    this.resetLabel = 'Alle entfernen'

    /**
    * @type {Array} - Filtered elements
    * @private
    */
    this._selectedElements = []
  }

  connectedCallback () {
    super.connectedCallback()

    if (!this.filterid) {
      console.error('Bitte filterid angeben.')
    }

    this._addEvents()
  }

  /**
   * Add events from filters
   * @private
   */
  _addEvents () {
    const filters = this.filterid.replaceAll(' ', '').split(',')

    filters.forEach(filter => {
      document.querySelector(`#${filter}`).addEventListener('filter-selected', this._getSelections.bind(this))
    })
  }

  /**
   * Add events from filters
   * @private
   */
  _getSelections (e) {
    /* groups holds data about each fieldset within a filter */
    const groups = e.detail
    /* get all checked items in each group */
    groups.forEach(group => {
      this._selectedElements = [...this._selectedElements, ...group.items.filter(item => item.checked)]
    })

    /* Remove duplicates */
    this._selectedElements = [...new Map(this._selectedElements.map(v => [v.id, v])).values()]
  }

  /**
   * Remove items from list and filter
   * @private
   */
  _remove (e) {
    let detail = e.target.dataset.id

    /* If there's an id, remove the specific element */
    if (e.target.dataset.id) {
      this._selectedElements = this._selectedElements.filter(item => item.id !== e.target.dataset.id)
    /* If the value is 0, remove everything */
    } else {
      this._selectedElements = []
      detail = 0
    }

    /* Send the info back to each filter */
    const filters = e.target.dataset.parentid.replaceAll(' ', '').split(',')
    filters.forEach(filter => {
      document.querySelector(`#${filter}`).dispatchEvent(new CustomEvent('filter-selection-removed', {
        detail,
        bubbles: true,
        composed: true
      }))
    })

    /* Event in the element itself to communicate to the outside that an updated happended */
    this.dispatchEvent(new CustomEvent('filter-updated', {
      detail: '',
      bubbles: true,
      composed: true
    }))
  }

  createRenderRoot () {
    return this
  }

  render () {
    return html`
    <div>
      <wm-stack grow="false" gapx="s" gapy="xs" wrap="true">
        ${this._selectedElements.map(item => {
          return html`
            <wm-button kind="clean">
              <button @click="${this._remove}" data-id="${item.id}" data-parentid="${item.parentid}" type="button">
                ${item.parentlabel}: ${item.label}
                <wm-icon iconid="close" width="16" height="16"></wm-icon>
              </button>
              </wm-button>
          `
}
        )}
      
        ${when(this._selectedElements.length, () => html`
          <wm-button kind="tertiary">
            <button @click="${this._remove}" data-parentid="${this.filterid}" type="button">
              ${this.resetLabel}
            </button>
          </wm-button>
        `)}
      </wm-stack>
      
      <slot></slot>
    </div>
    `
  }
}

customElements.define('wm-filter-selection', FilterSelection)
