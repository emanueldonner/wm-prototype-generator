/* @copyright Stadt Wien - Wiener Melange v2 */
import{y as e,s as t}from"../../lit-element-a22611a3.js";import{FormText as s}from"../misc/form-text.js";import{l as i}from"../../if-defined-133e139e.js";import"../../helpers.styles-24557fa6.js";import"../../form.styles-8cbc7814.js";import"../misc/form-item.js";import"../../when-c8427aa9.js";import"../../class-map-50dbd9fb.js";import"../../directive-19e462f3.js";import"../misc/utils.js";import"../misc/slot.js";class r extends(s(t)){render(){return this._renderElement(e`
    <textarea
      autocomplete=${i(this.autocomplete)}
      aria-describedby="${i(this._hasHint||this._hasError?"message":void 0)}"
      aria-disabled="${i(!!this.disabled||void 0)}"
      aria-invalid="${i(!!this._hasError||void 0)}"
      placeholder="${i(this.placeholder)}"
      ?required=${this.required}
      maxlength="${i(this.maxlength)}"
      rows="7"
      value="${i(this.value)}"
      ></textarea>
    `)}}customElements.define("wm-textarea",r);export{r as Textarea};
