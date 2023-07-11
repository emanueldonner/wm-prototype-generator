import { LitElement, html } from 'lit'
// import { meta, properties } from './filter-dropdown.meta.js'
import { when } from 'lit/directives/when.js'
import { ifDefined } from 'lit/directives/if-defined.js'

export class Filter extends LitElement {
  /** Slotted Groups of checkboxes
   * @private
   **/
  get _fieldsets () {
    return this.querySelectorAll('fieldset') ?? null
  }

  /** Rendered lists of checkboxes
   * @private
   **/
  get _lists () {
    return this.querySelectorAll('.list') ?? null
  }

  /** Toggle in dropdown filters
   * @private
   **/
  get _toggles () {
    return this.querySelectorAll('wm-toggle') ?? null
  }

  /** Checkboxes
   * @private
   **/
  get _inputs () {
    return this.querySelectorAll('input:not(.check-all)') ?? null
  }

  static properties = {
    label: { type: String, reflect: true },
    searchlabel: { type: String, reflect: true },
    dismisslabel: { type: String, reflect: true },
    type: { type: String, reflect: true },
    open: { type: Boolean, reflect: true },
    controls: { type: Boolean, reflect: true },
    totals: { type: Object, attribute: false },
    _selection: { type: Array, attribute: false },
    _newSelection: { type: Array, attribute: false, reflect: true }
  }

  constructor () {
    super()

    /**
     * @type {String} - Bezeichnung für das Dropdown
     * @summary Erweiterte Filter
     */
    this.label = 'Erweiterte Filter'

    /**
     * @type {String} - Text für Suchen-Button
     * @summary Anwenden
     */
    this.searchlabel = 'Anwenden'

    /**
     * @type {String} - Text für Abbrechen-Button
     * @summary Abbrechen
     */
    this.dismisslabel = 'Abbrechen'

    /**
     * @type {String} - Art des Filters
     * @summary dropdown
     */
    this.type = undefined

    /**
     * @type {Boolean} - Ist das Dropdown geöffnet
     */
    this.open = undefined

    /**
     * @type {Boolean} - Buttons zu Senden/Schließen/Abbrechen anzeigen
     */
    this.controls = undefined

    /**
     * @type {Object} - Anzahl der Elemente insgesamt und der ausgewählten
     */
    this.totals = {
      all: {
        total: this._inputs.length,
        checked: 0
      }
    }

    /**
     * @type {Boolean} - Array that holds information about all checkboxes
     * @private
     */
    this._selection = []

    /**
     * @type {Boolean} - Array that holds information about all selected, but not yet confirmed checkboxes
     * @private
     */
    this._newSelection = []
  }

  connectedCallback () {
    super.connectedCallback()

    this._registerCheckboxes()
    this._updateTotalChecked()
  }

  updated (changedProperties) {
    /* Listen to changes to this._newSelection */
    if (changedProperties.has('_newSelection')) {
      this._updateCheckboxes()
      this._updateTotalChecked()
    }
  }

  firstUpdated () {
    this._addEvents()
  }

  /**
   * Update totals
   * @private
   */
  _updateTotalChecked () {
    this.totals.all.checked = 0
    Array.from(this._fieldsets).forEach((fieldset, idx) => {
      this._newSelection[idx].checked = Array.from(fieldset.querySelectorAll('input')).filter(input => input.checked).length
      this.totals.all.checked += this._newSelection[idx].checked
    })

    this.requestUpdate()
  }

  /**
   * Add events
   * @private
   */
  _addEvents () {
    /* Listen to click on checkboxes */
    this.addEventListener('change', this._check)
    /* Listen to FilterSelection events */
    this.addEventListener('filter-selection-removed', this._uncheck)
    /* Close on click outside */
    document.addEventListener('click', this._clickOutSide.bind(this))
  }

  /**
   * Close when clicking somewhere outside the dialog
   * @private
   */
  _clickOutSide (e) {
    if (!e.target.closest('wm-filter') && this.open) {
      this._toggleDropdown()
    }
  }

  /**
   * Uncheck checkboxes
   * @private
   */
  _uncheck (e) {
    Array.from(this._newSelection).forEach((group, idx) => {
      group.items.forEach((item, itemidx) => {
        /* If the value coming from outside (e.g. FilterSelection) is 0, uncheck all boxes */
        if (e.detail === 0) {
          item.checked = false
          this.querySelector(`#${item.id}`).checked = false
          /* Update search params */
          const searchParams = (new URL(document.location)).searchParams
          searchParams.delete(item.name)
          history.replaceState(null, '', `${location.origin}${location.pathname}?${searchParams}`)
        } else {
          /* Uncheck selected checkbox */
          if (item.id === e.detail) {
            item.checked = false
            this.querySelector(`#${item.id}`).checked = false
            /* Update search params */
            history.replaceState(null, '', `${location.origin}${location.pathname}${location.search.replace(`${encodeURI(item.name)}=${item.value}`, '')}`)
          }
        }
      })

      this._updateParentCheckbox(idx)
    })

    this._selection = JSON.parse(JSON.stringify(this._newSelection))
    this._updateTotalChecked()
  }

  /**
   * Check checkboxes
   * @private
   */
  _check (e) {
    if (e.target.classList.contains('check-all')) return

    // Get index of parent fieldset
    const idx = e.target.dataset.index

    // Checked the matching checkbox
    this._newSelection[idx].items.map(item => {
      if (item.value === e.target.value) {
        item.checked = !item.checked
      }
      return item
    })

    this._updateParentCheckbox(idx)
    this._updateTotalChecked()
  }

  /**
   * (Un)check “check all” checkbox
   * @private
   */
  _updateParentCheckbox (idx) {
    const totalChecked = this._newSelection[idx].items.filter(item => item.checked).length

    const checkbox = this._lists[idx].querySelector('.check-all')
    checkbox.indeterminate = false
    checkbox.checked = true

    /* None selected */
    if (totalChecked === 0) {
      checkbox.checked = false
    /* At least one, but not all checked */
    } else if (this._newSelection[idx].items.length !== totalChecked) {
      checkbox.indeterminate = true
    }
  }

  /**
   * Gather information about current list of checkboxes
   * @private
   */
  _registerCheckboxes () {
    for (let i = 0; i < this._fieldsets.length; i++) {
      const fieldset = this._fieldsets[i]
      const legend = fieldset.querySelector('legend')
      const inputs = fieldset.querySelectorAll('input[type="checkbox"], input[type="radio"]')

      /* Read url params and get checked checkboxes */
      const searchParams = (new URL(document.location)).searchParams
      const checkedParams = searchParams.getAll(inputs[0].name)

      this._selection.push({
        total: inputs.length,
        checked: 0,
        items: []
      })

      for (let j = 0; j < inputs.length; j++) {
        const input = inputs[j]
        input.dataset.index = i

        this._selection[i].items.push({
          id: input.id,
          parentid: this.id,
          parentlabel: legend.textContent,
          value: input.value,
          name: input.name,
          label: fieldset.querySelector(`[for="${input.id}"]`).textContent,
          checked: checkedParams.indexOf(input.value) !== -1
        })
      }
    }

    /* Update current selection */
    this._newSelection = JSON.parse(JSON.stringify(this._selection))
    /* Send data to FilterSelection */
    this._showSelection(this._newSelection)
  }

  /**
   * Check all boxes at once
   * @private
   */
  _checkAll (idx, e) {
    this._newSelection[idx].items = this._newSelection[idx].items.filter(item => {
      item.checked = e.target.checked
      return item
    })

    /* Looks strange, but it won't trigger an update otherwise */
    const tempArray = this._newSelection
    this._newSelection = []
    this._newSelection = tempArray
  }

  /**
   * (Un)check boxes
   * @private
   */
  _updateCheckboxes () {
    Array.from(this._newSelection).forEach((group, idx) => {
      group.items.forEach((item, itemidx) => {
        this._fieldsets[idx].querySelectorAll('input')[itemidx].checked = item.checked
      })

      this._updateParentCheckbox(idx)
    })
  }

  /**
   * Dismiss current selection
   * @private
   */
  _abort () {
    this._newSelection = JSON.parse(JSON.stringify(this._selection))

    if (this.type === 'dropdown') {
      this._toggleDropdown()
    }
  }

  /**
   * @summary Aktuelle Auswahl speichern
   */
  submit () {
    this._selection = JSON.parse(JSON.stringify(this._newSelection))
    this._showSelection(this._selection)

    /* Close if dropdown open */
    if (this.type === 'dropdown' && this.open) {
      this._toggleDropdown()
    }
  }

  /**
   * Send data to FilterSelection
   * @private
   */
  _showSelection (selection) {
    setTimeout(() => {
      /**
       * @type {CustomEvent} Wenn eine Auswahl getroffen und angewendet worden ist
       * @summary Object mit allen Filter Daten
       */
      this.dispatchEvent(new CustomEvent('filter-selected', {
        detail: selection,
        bubbles: true,
        composed: true
      }))
    }, 0)
  }

  /**
   * Open or close dropdown Filter
   * @private
   */
  _toggleDropdown () {
    this.open = !this.open

    if (this.open) {
      /* If there's another open, close it */
      if (document.querySelector('wm-filter[open]')) {
        document.querySelector('wm-filter[open]')._toggleDropdown()
      }

      /* Hidden toggles need to calculate their height, when they appear */
      setTimeout(() => {
        this._toggles.forEach(toggle => toggle.updateHeight())
      }, 0)
    }
  }

  /**
   * List of checkboxes
   * @private
   */
  _renderCheckboxes () {
    return html`
      <div>
        ${Array.from(this._fieldsets).map((fieldset, idx) => {
          const legend = fieldset.querySelector('legend')
          legend.classList.add('wm-h-vh')
          return html`
          <div class="list">
            <input type="checkbox" class="check-all" id="check_${idx}" @change="${this._checkAll.bind(this, idx)}" indeterminate="true">
            <label for="check_${idx}" class="wm-h-vh">${legend.textContent}</label>

            <wm-toggle full open=${ifDefined(this._fieldsets.length === 1 ? true : undefined)}">
              <span slot="label">
                <strong>${legend.textContent}</strong> 
                ${when(this._newSelection[idx].checked, () => html`(${this._newSelection[idx].checked} von ${this._newSelection[idx].items.length})`)}
                </span>
              <div slot="content">
                ${fieldset}
              </div>
            </wm-toggle>
          </div>
          `
        })}
      </div>
    `
  }

  /**
   * Totals in parenthesis
   * @private
   */
  _renderTotalSelected () {
    return html`
      ${when(this.totals.all.checked > 0, () => html`
        (${this.totals.all.checked} von ${this.totals.all.total})
      `, () => {
        html`ll`
      })}
    `
  }

  /**
   * Search and dismiss button
   * @private
   */
  _renderFilterControls () {
    return html`${when(this.controls, () => html`
      <wm-stack gap="s">
        <wm-button full kind="primary">
          <button @click="${this.submit}">
            ${this.searchlabel}
          </button>
        </wm-button>
        <wm-button full kind="secondary">
          <button @click="${this._abort}" type="button">
            ${this.dismisslabel}
          </button>
        </wm-button>
      </wm-stack>
    `)}`
  }

  /**
   * Filter wrapper
   * @private
   */
  _renderFilters () {
    return html`
    ${when(this.type === 'dropdown', () => html`
      <strong aria-hidden="true">${this.label}</strong>

      <div class="filter-dropdown-wrapper">
        <button class="filter-dropdown-button" aria-expanded="${this.open}" @click="${this._toggleDropdown}" type="button">
          ${this.label}
          ${this._renderTotalSelected()}
        </button>

        <div class="filter-dropdown-content" hidden>
          <wm-stack vertical="true" gap="xs">
            ${this._renderCheckboxes()}
            ${when(this.totals.all.checked > 0, () => html`
              ${this._renderFilterControls()}
            `, () => html`

            ${when(this.controls, () => html`<wm-button full kind="primary" color="nebelgrau">
              <button @click="${this._toggleDropdown}"  type="button">
                Schliessen
              </button>
            </wm-button>`)}
          `)}
          </wm-stack>
        </div>
      </div>

    `, () => html`
      <wm-stack vertical="true" gap="xs">
        <h3>${this.label} ${this._renderTotalSelected()}</h3>

        ${this._renderCheckboxes()}
        ${this._renderFilterControls()}
      </wm-stack>
    
    `)}
    `
  }

  /**
   * @private
   */
  createRenderRoot () {
    return this
  }

  render () {
    return html`
      ${this._renderFilters()}
      <slot></slot>
    `
  }
}

customElements.define('wm-filter', Filter)
