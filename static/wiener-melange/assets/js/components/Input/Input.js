/* @copyright Stadt Wien - Wiener Melange v2 */
import{y as t,s as e}from"../../lit-element-a22611a3.js";import{FormText as i}from"../misc/form-text.js";import{l as s}from"../../if-defined-133e139e.js";import{l as r}from"../../live-031d7a84.js";import"../../helpers.styles-24557fa6.js";import"../../form.styles-8cbc7814.js";import"../misc/form-item.js";import"../../when-c8427aa9.js";import"../../class-map-50dbd9fb.js";import"../../directive-19e462f3.js";import"../misc/utils.js";import"../misc/slot.js";class m extends(i(e)){static properties={maxlength:{type:Number},type:{type:String}};constructor(){super(),this.type="text"}render(){return this._renderElement(t`
      <input 
        type="${this.type}" 
        autocomplete=${s(this.autocomplete)}
        aria-describedby="${s(this._hasHint||this._hasError?"message":void 0)}"
        aria-disabled="${s(!!this.disabled||void 0)}"
        aria-invalid="${s(!!this._hasError||void 0)}"
        placeholder="${s(this.placeholder)}"
        ?required=${this.required}
        maxlength="${s(this.maxlength)}"
        id="${this._id}"
        .value=${r(this.value)}
        @input="${this._handleInput}" 
      >
    `)}}customElements.define("wm-input",m);const o="wm-input";export{m as Input,o as tagName};
