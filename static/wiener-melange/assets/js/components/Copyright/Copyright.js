/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as t,s as e,y as s}from"../../lit-element-a22611a3.js";const i=[t`
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
    align-self: start;
    text-align: left;
  }

  [hidden] {
    display: none !important;
  }
`];class l extends e{get _images(){return document.querySelectorAll('img[title^="copyright:"]')??null}static properties={_credits:{type:Array}};static styles=[i];constructor(){super(),this._credits=[]}connectedCallback(){super.connectedCallback();for(const t of this._images){const e=t.getAttribute("title");this._credits.push(e.split("copyright: ")[1])}}render(){return s`
      <wm-toggle ?hidden="${!this._credits.length}">
        <strong slot="label">Foto-Credits:</strong>
        <div slot="content">
          <wm-list>
            <ul>
              ${this._credits.map((t=>s`<li>${t}</li>`))}
            </ul>
          </wm-list>
        </div>
      </wm-toggle>
    `}}customElements.define("wm-copyright",l);const o="wm-copyright";export{l as Copyright,o as tagName};
