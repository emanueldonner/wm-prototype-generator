import { LitElement, html } from 'lit'
import { _stringToObject } from '../misc/utils.js'
/**
 * Daten von einer API holen.
 *
 * @slot results - Ausgabe der Daten
 *
 */

/**
* @cssprop --fetch-gap - Abstand zwischen Komponenten
*/

export class Fetch extends LitElement {
  static properties = {
    url: { type: String, reflect: true },
    dataset: { type: String },
    pagination: { type: String },
    itemsperpage: { type: Number, reflect: true },
    _itemsPerSet: { type: Number, reflect: true },
    _results: { type: Array }
  }

  /**
   * @private
   */
  get _resultsContainer () {
    return this.querySelector('[slot="results"]') ?? null
  }

  /**
   * @private
   */
  get _content () {
    return this._resultsContainer?.querySelector('[data-fetch-content]') ?? null
  }

  /**
   * @private
   */
  get _attributes () {
    return this._resultsContainer?.querySelectorAll('[data-fetch-attributes]') ?? null
  }

  /**
   * @private
   */
  get _template () {
    return this.querySelector('template') ?? null
  }

  constructor () {
    super()

    /** @type {String} - Url zur API */
    this.url = ''

    /** @type {String} - Feld im Datensatz in dem sich die Ergebnisse befinden */
    this.dataset = undefined

    /**
     * @type {String} - All results
     * @private
     */
    this._results = ''

    /** @type {String} - Wieviele Ergebnisse sollen pro Seite angezeigt werden */
    this.itemsperpage = 5

    /**
     * @type {String} - Items per set, equals either itemPerPage or less
     * @private
     */
    this._itemsPerSet = this.itemsperpage

    /** @type {String} - Art der Paginierung */
    this.pagination = 'none'

    // this._addEvents()
    // this._results = []
    // this.skeleton = "false"
    // this.fetchSource = ''
    // this.fetchTarget = ''
  }

  /**
   * @private
   */
  createRenderRoot () {
    return this
  }

  updated (changedProperties) {
    if (changedProperties.has('itemsperpage')) {
      this._itemsPerSet = this.itemsperpage
    }

    if (changedProperties.has('url')) {
      this._fetchData()
    }
  }

  /**
   * @summary Fetch data from the API
   * @private
   */
  _fetchData () {
    fetch(this.url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this._results = this.dataset ? data[this.dataset] : data
        this._displayData(true)
        // this._updateMap();

        /**
         * @type {CustomEvent} Daten wurden erfolgreich geladen
         * @summary Anzahl der Ergebnisse
         */
        this.dispatchEvent(new CustomEvent('fetched', {
          detail: this._results.length,
          bubbles: true,
          composed: true
        }))
      })
  }

  /**
   * Takes markup from the slotted template and replaces fields and attributes with data
   * @summary Display results
   * @private
   */
  _displayData (initial = false) {
    if (this._content) {
      this._content.innerHTML = ''
      for (let i = 0; i < this._itemsPerSet; i++) {
        const result = this._results[i]
        if (result) {
          const template = this._template.content.cloneNode(true).children[0]

          // console.log(template)

          // Finds and parse fields
          const fields = template.querySelectorAll('[data-fetch-field]')
          for (let i = 0; i < fields.length; i++) {
            const field = fields[i]
            field.textContent = _stringToObject(field.dataset.fetchField, result)
          }

          // Finds and parse attributes
          this._replaceAttributes(template.querySelectorAll('[data-fetch-attribute]'), result)

          //  if (this.skeleton === "true" && initial) {
          //    template.style.transition = 'opacity 0.3s'
          //    template.style.opacity = '0'
          //  }

          this._content.appendChild(template)

          //  setTimeout(() => {
          //    template.style.opacity = '1'
          //  }, 0);
        }
      }
    } else if (this._attributes) {
      this._replaceAttributes(this._attributes, this._results[0])
    }
  }

  /** Scans template for attributes
   * @private
   */
  _replaceAttributes (attributes, result) {
    for (let i = 0; i < attributes.length; i++) {
      const element = attributes[i]
      for (const d in element.dataset) {
        if (d.indexOf('fetchAttribute') !== -1) {
          if (element.dataset[d]) {
            const attrAndValue = element.dataset[d].split(':')
            element.setAttribute(attrAndValue[0], _stringToObject(attrAndValue[1], result))
          }
        }
      }
    }
  }

  /**
   * @summary Load and display the next set of entries
   * @private
   */
  _loadMore () {
    this._itemsPerSet = this._itemsPerSet + this.itemsperpage
    this._displayData()
  }

  connectedCallback () {
    super.connectedCallback()
  }

  render () {
    return html`
      <wm-stack vertical="true" gap="xs">
        <div><slot name="results"></slot></div>
        <div><slot name="template"></slot></div>
        ${this.pagination === 'button' && (this._itemsPerSet < this._results.length)
? html`
          <wm-button @click="${this._loadMore}">
            <button>Mehr laden</button>
          </wm-button>`
: ''}
      </wm-stack>
    `
  }
}

customElements.define('wm-fetch', Fetch)

export const tagName = 'wm-fetch'
