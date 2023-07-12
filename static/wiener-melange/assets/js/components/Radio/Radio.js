/* @copyright Stadt Wien - Wiener Melange v2 */
import{y as e,s as i}from"../../lit-element-a22611a3.js";import{FormItem as t}from"../misc/form-item.js";import{l as s}from"../../if-defined-133e139e.js";import{l as r}from"../../live-031d7a84.js";import{f as o,h as a}from"../../helpers.styles-24557fa6.js";import{f as m}from"../../form.styles-8cbc7814.js";import"../../when-c8427aa9.js";import"../../class-map-50dbd9fb.js";import"../../directive-19e462f3.js";import"../misc/utils.js";import"../misc/slot.js";class d extends(t(i)){static properties={checked:{type:Boolean,reflect:!0}};static styles=[m,o,a];constructor(){super(),this.checked=!1,this.type="radio"}_handleClick(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("wm-change",{detail:this.checked,bubbles:!0,composed:!0}))}render(){return this._renderItem(e`
      <input 
        autocomplete=${s(this.autocomplete)}
        type="${this.type}" 
        .indeterminate=${r(this.indeterminate)}
        .checked=${r(this.checked)}
        aria-describedby="${s(this._hasHint||this._hasError?"message":void 0)}"
        aria-disabled="${s(!!this.disabled||void 0)}"
        aria-invalid="${s(!!this._hasError||void 0)}"
        ?required=${this.required}
        id="${this._id}"
        ?name="${s(this.name)}"
        .value=${r(this.value)}
        @input="${this._handleInput}" 
        @click="${this._handleClick}" 
      >
    `)}}customElements.define("wm-radio",d);const h="wm-radio";export{d as Radio,h as tagName};
