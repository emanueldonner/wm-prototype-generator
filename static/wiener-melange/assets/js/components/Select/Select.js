/* @copyright Stadt Wien - Wiener Melange v2 */
import{y as e,s as t}from"../../lit-element-a22611a3.js";import{FormItem as s}from"../misc/form-item.js";import{f as i,h as r}from"../../helpers.styles-24557fa6.js";import{f as l}from"../../form.styles-8cbc7814.js";import{l as o}from"../../if-defined-133e139e.js";import"../../when-c8427aa9.js";import"../../class-map-50dbd9fb.js";import"../../directive-19e462f3.js";import"../misc/utils.js";import"../misc/slot.js";class m extends(s(t)){get _select(){return this.shadowRoot?.querySelector("select")??null}static properties={size:{type:Number},multiple:{type:Boolean}};static styles=[i,l,r];constructor(){super(),this.size=void 0,this.multiple=!1}firstUpdated(){const e=Array.from(this.children).filter((e=>!e.hasAttribute("slot")));this._select.append(...e)}render(){return this._renderItem(e`
      <select
        id="${this._id}"
        size="${o(this.size)}"
        ?required=${this.required}
        ?multiple=${this.multiple}
        aria-disabled="${o(!!this.disabled||void 0)}"
        aria-invalid="${o(!!this._hasError||void 0)}"
        value="${o(this.value)}"
      >
      </select>
      <slot></slot>
    `)}}customElements.define("wm-select",m);export{m as Select};
