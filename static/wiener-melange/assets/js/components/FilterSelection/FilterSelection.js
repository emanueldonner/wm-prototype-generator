/* @copyright Stadt Wien - Wiener Melange v2 */
import{s as e,y as t}from"../../lit-element-a22611a3.js";import{n as s}from"../../when-c8427aa9.js";class i extends e{static properties={filterid:{type:String,reflect:!0},resetlabel:{type:String,reflect:!0},_selectedElements:{type:Array}};constructor(){super(),this.filterid=void 0,this.resetLabel="Alle entfernen",this._selectedElements=[]}connectedCallback(){super.connectedCallback(),this.filterid||console.error("Bitte filterid angeben."),this._addEvents()}_addEvents(){this.filterid.replaceAll(" ","").split(",").forEach((e=>{document.querySelector(`#${e}`).addEventListener("filter-selected",this._getSelections.bind(this))}))}_getSelections(e){e.detail.forEach((e=>{this._selectedElements=[...this._selectedElements,...e.items.filter((e=>e.checked))]})),this._selectedElements=[...new Map(this._selectedElements.map((e=>[e.id,e]))).values()]}_remove(e){let t=e.target.dataset.id;e.target.dataset.id?this._selectedElements=this._selectedElements.filter((t=>t.id!==e.target.dataset.id)):(this._selectedElements=[],t=0);e.target.dataset.parentid.replaceAll(" ","").split(",").forEach((e=>{document.querySelector(`#${e}`).dispatchEvent(new CustomEvent("filter-selection-removed",{detail:t,bubbles:!0,composed:!0}))})),this.dispatchEvent(new CustomEvent("filter-updated",{detail:"",bubbles:!0,composed:!0}))}createRenderRoot(){return this}render(){return t`
    <div>
      <wm-stack grow="false" gapx="s" gapy="xs" wrap="true">
        ${this._selectedElements.map((e=>t`
            <wm-button kind="clean">
              <button @click="${this._remove}" data-id="${e.id}" data-parentid="${e.parentid}" type="button">
                ${e.parentlabel}: ${e.label}
                <wm-icon iconid="close" width="16" height="16"></wm-icon>
              </button>
              </wm-button>
          `))}
      
        ${s(this._selectedElements.length,(()=>t`
          <wm-button kind="tertiary">
            <button @click="${this._remove}" data-parentid="${this.filterid}" type="button">
              ${this.resetLabel}
            </button>
          </wm-button>
        `))}
      </wm-stack>
      
      <slot></slot>
    </div>
    `}}customElements.define("wm-filter-selection",i);export{i as FilterSelection};
