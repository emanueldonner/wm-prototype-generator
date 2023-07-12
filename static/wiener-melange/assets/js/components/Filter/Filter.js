/* @copyright Stadt Wien - Wiener Melange v2 */
import{s as e,y as t}from"../../lit-element-a22611a3.js";import{n as i}from"../../when-c8427aa9.js";import{l as s}from"../../if-defined-133e139e.js";class l extends e{get _fieldsets(){return this.querySelectorAll("fieldset")??null}get _lists(){return this.querySelectorAll(".list")??null}get _toggles(){return this.querySelectorAll("wm-toggle")??null}get _inputs(){return this.querySelectorAll("input:not(.check-all)")??null}static properties={label:{type:String,reflect:!0},searchlabel:{type:String,reflect:!0},dismisslabel:{type:String,reflect:!0},type:{type:String,reflect:!0},open:{type:Boolean,reflect:!0},controls:{type:Boolean,reflect:!0},totals:{type:Object,attribute:!1},_selection:{type:Array,attribute:!1},_newSelection:{type:Array,attribute:!1,reflect:!0}};constructor(){super(),this.label="Erweiterte Filter",this.searchlabel="Anwenden",this.dismisslabel="Abbrechen",this.type=void 0,this.open=void 0,this.controls=void 0,this.totals={all:{total:this._inputs.length,checked:0}},this._selection=[],this._newSelection=[]}connectedCallback(){super.connectedCallback(),this._registerCheckboxes(),this._updateTotalChecked()}updated(e){e.has("_newSelection")&&(this._updateCheckboxes(),this._updateTotalChecked())}firstUpdated(){this._addEvents()}_updateTotalChecked(){this.totals.all.checked=0,Array.from(this._fieldsets).forEach(((e,t)=>{this._newSelection[t].checked=Array.from(e.querySelectorAll("input")).filter((e=>e.checked)).length,this.totals.all.checked+=this._newSelection[t].checked})),this.requestUpdate()}_addEvents(){this.addEventListener("change",this._check),this.addEventListener("filter-selection-removed",this._uncheck),document.addEventListener("click",this._clickOutSide.bind(this))}_clickOutSide(e){!e.target.closest("wm-filter")&&this.open&&this._toggleDropdown()}_uncheck(e){Array.from(this._newSelection).forEach(((t,i)=>{t.items.forEach((t=>{if(0===e.detail){t.checked=!1,this.querySelector(`#${t.id}`).checked=!1;const e=new URL(document.location).searchParams;e.delete(t.name),window.history.replaceState(null,"",`${window.location.origin}${window.location.pathname}?${e}`)}else t.id===e.detail&&(t.checked=!1,this.querySelector(`#${t.id}`).checked=!1,window.history.replaceState(null,"",`${window.location.origin}${window.location.pathname}${window.location.search.replace(`${encodeURI(t.name)}=${t.value}`,"")}`))})),this._updateParentCheckbox(i)})),this._selection=JSON.parse(JSON.stringify(this._newSelection)),this._updateTotalChecked()}_check(e){if(e.target.classList.contains("check-all"))return;const t=e.target.dataset.index;this._newSelection[t].items.map((t=>(t.value===e.target.value&&(t.checked=!t.checked),t))),this._updateParentCheckbox(t),this._updateTotalChecked()}_updateParentCheckbox(e){const t=this._newSelection[e].items.filter((e=>e.checked)).length,i=this._lists[e].querySelector(".check-all");i.indeterminate=!1,i.checked=!0,0===t?i.checked=!1:this._newSelection[e].items.length!==t&&(i.indeterminate=!0)}_registerCheckboxes(){for(let e=0;e<this._fieldsets.length;e++){const t=this._fieldsets[e],i=t.querySelector("legend"),s=t.querySelectorAll('input[type="checkbox"], input[type="radio"]'),l=new URL(document.location).searchParams.getAll(s[0].name);this._selection.push({total:s.length,checked:0,items:[]});for(let n=0;n<s.length;n++){const o=s[n];o.dataset.index=e,this._selection[e].items.push({id:o.id,parentid:this.id,parentlabel:i.textContent,value:o.value,name:o.name,label:t.querySelector(`[for="${o.id}"]`).textContent,checked:-1!==l.indexOf(o.value)})}}this._newSelection=JSON.parse(JSON.stringify(this._selection)),this._showSelection(this._newSelection)}_checkAll(e,t){this._newSelection[e].items=this._newSelection[e].items.filter((e=>(e.checked=t.target.checked,e)));const i=this._newSelection;this._newSelection=[],this._newSelection=i}_updateCheckboxes(){Array.from(this._newSelection).forEach(((e,t)=>{e.items.forEach(((e,i)=>{this._fieldsets[t].querySelectorAll("input")[i].checked=e.checked})),this._updateParentCheckbox(t)}))}_abort(){this._newSelection=JSON.parse(JSON.stringify(this._selection)),"dropdown"===this.type&&this._toggleDropdown()}submit(){this._selection=JSON.parse(JSON.stringify(this._newSelection)),this._showSelection(this._selection),"dropdown"===this.type&&this.open&&this._toggleDropdown()}_showSelection(e){setTimeout((()=>{this.dispatchEvent(new CustomEvent("filter-selected",{detail:e,bubbles:!0,composed:!0}))}),0)}_toggleDropdown(){this.open=!this.open,this.open&&(document.querySelector("wm-filter[open]")&&document.querySelector("wm-filter[open]")._toggleDropdown(),setTimeout((()=>{this._toggles.forEach((e=>e.updateHeight()))}),0))}_renderCheckboxes(){return t`
      <div>
        ${Array.from(this._fieldsets).map(((e,l)=>{const n=e.querySelector("legend");return n.classList.add("wm-h-vh"),t`
          <div class="list">
            <input type="checkbox" class="check-all" id="check_${l}" @change="${this._checkAll.bind(this,l)}" indeterminate="true">
            <label for="check_${l}" class="wm-h-vh">${n.textContent}</label>

            <wm-toggle full open=${s(1===this._fieldsets.length||void 0)}">
              <span slot="label">
                <strong>${n.textContent}</strong> 
                ${i(this._newSelection[l].checked,(()=>t`(${this._newSelection[l].checked} von ${this._newSelection[l].items.length})`))}
                </span>
              <div slot="content">
                ${e}
              </div>
            </wm-toggle>
          </div>
          `}))}
      </div>
    `}_renderTotalSelected(){return t`
      ${i(this.totals.all.checked>0,(()=>t`
        (${this.totals.all.checked} von ${this.totals.all.total})
      `),(()=>{}))}
    `}_renderFilterControls(){return t`${i(this.controls,(()=>t`
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
    `))}`}_renderFilters(){return t`
    ${i("dropdown"===this.type,(()=>t`
      <strong aria-hidden="true">${this.label}</strong>

      <div class="filter-dropdown-wrapper">
        <button class="filter-dropdown-button" aria-expanded="${this.open}" @click="${this._toggleDropdown}" type="button">
          ${this.label}
          ${this._renderTotalSelected()}
        </button>

        <div class="filter-dropdown-content" hidden>
          <wm-stack vertical gap="xs">
            ${this._renderCheckboxes()}
            ${i(this.totals.all.checked>0,(()=>t`
              ${this._renderFilterControls()}
            `),(()=>t`

            ${i(this.controls,(()=>t`<wm-button full kind="primary" color="nebelgrau">
              <button @click="${this._toggleDropdown}"  type="button">
                Schliessen
              </button>
            </wm-button>`))}
          `))}
          </wm-stack>
        </div>
      </div>

    `),(()=>t`
      <wm-stack vertical gap="xs">
        <h3>${this.label} ${this._renderTotalSelected()}</h3>

        ${this._renderCheckboxes()}
        ${this._renderFilterControls()}
      </wm-stack>
    
    `))}
    `}createRenderRoot(){return this}render(){return t`
      ${this._renderFilters()}
      <slot></slot>
    `}}customElements.define("wm-filter",l);export{l as Filter};
