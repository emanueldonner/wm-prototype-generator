/* @copyright Stadt Wien - Wiener Melange v2 */
import{s as e,y as t}from"../../lit-element-a22611a3.js";class r extends e{static properties={color:{type:String,reflect:!0}};constructor(){super(),this.color=void 0}_rerender(){console.log("re")}render(){return t`
      <slot @slotchange="${this._rerender}"></slot>
    `}}customElements.define("wm-test",r);const o="wm-test";export{r as Test,o as tagName};
