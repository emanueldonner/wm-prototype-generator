/* @copyright Stadt Wien - Wiener Melange v2 */
import{s as t,y as e}from"../../lit-element-a22611a3.js";import{o as i}from"../../unsafe-html-a853c1af.js";import{n as s}from"../../when-c8427aa9.js";import{preventPinchZoom as o,WmImageZoom as n}from"../misc/image-zoom.js";import"../../directive-19e462f3.js";class r extends t{get _dialog(){return this.querySelector("dialog")??null}get _carousel(){return this.querySelector("wm-carousel")??null}get _content(){return this.querySelector(".content-inner")??null}get _captionElement(){return this.querySelector(".caption")??null}static properties={isopen:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},_type:{type:String},_caption:{type:String},_trigger:{type:Node},_thumbs:{type:Array,attribute:!1},_currentThumb:{type:Number}};constructor(){super(),this.isopen=!1,this.size="fit-content",this._type="image",this._caption="",this._thumbs=[],this._currentThumb=0,this._trigger=void 0}_addEvents(){this._dialog.addEventListener("close",this._closeEvent.bind(this))}_addGlovalEvents(){document.body.addEventListener("click",(t=>{this._trigger=t.target.closest("[data-modal]"),t.composedPath().filter((t=>{t.dataset&&"modal"in t.dataset&&(this._trigger=t)})),this._trigger&&this._trigger.dataset.modal&&(t.preventDefault(),this._prepareContent(t.target))}))}_prepareContent(t=null){this._type=this._trigger.dataset.modal,"image"===this._type?this._getImage():(this._getHTML(t),this._getThumbs()),this.open()}toModal(t,e=null){t.addEventListener("click",(i=>{i.preventDefault(),this._trigger=t,this._prepareContent(e)}))}_closeEvent(){this.dispatchEvent(new CustomEvent("closed",{bubbles:!0})),this.close()}_getImage(){const t=new Image;if(t.src=this._trigger.getAttribute("href"),this.alt="",this._trigger.querySelector("[alt]")?this.alt=this._trigger.querySelector("[alt]").getAttribute("alt"):this.alt=this._trigger.textContent,t.alt=this.alt,this._trigger.closest("figure")){const t=this._trigger.closest("figure");this._caption=t.querySelector("figcaption").innerHTML}this._dialog.addEventListener("touchstart",o),t.onload=()=>{this._imageZoom=new n({img:t,container:this._content,zoomedClass:"wm-image--zoomed"}),this._content.style.width=`${t.width}px`,this._content.style.aspectRatio=`${t.width} / ${t.height}`,t.classList.add("wm-image--zoom"),this._captionElement&&(this._captionElement.style.width=`${t.width}px`)},this._content.appendChild(t)}_switchSlide(t){this._carousel.slide(t)}_getThumbs(){if(this._trigger.dataset.thumbs){const t=document.querySelector(`#${this._trigger.dataset.thumbs}`).content.cloneNode(!0).querySelectorAll("img");this._thumbs=Array.from(t),this.querySelector("wm-carousel").addEventListener("slideChanged",(t=>{this._currentThumb=t.detail-1}))}}_getHTML(t){let e=document.querySelector(`#${this._type}`);t.shadowRoot&&(e=t.shadowRoot.querySelector(`#${this._type}`)),this._content.innerHTML=e.innerHTML,this._trigger.dataset.size&&(this.size=this._trigger.dataset.size)}_clickOutSide(t){"DIALOG"===t.target.nodeName&&this.close()}open(){this.isopen=!0,setTimeout((()=>{this._dialog.showModal(),this._dialog.focus()}),0),this.dispatchEvent(new CustomEvent("opened",{bubbles:!0}))}close(){this.isopen&&(this._imageZoom?this._imageZoom.ready&&(this._dialog.removeEventListener("touchstart",o),this._content.removeAttribute("style"),this._imageZoom.resetZoom(),this._imageZoom.destroyEvents(),this._cleanUpAfterClose()):this._cleanUpAfterClose())}_cleanUpAfterClose(){this.isopen=!1,this._dialog.close(),this._content.innerHTML="",this._caption="",this._thumbs=[],this.size="fit-content"}_controlCarousel(t){this._carousel&&("ArrowLeft"===t.code&&this._carousel.prev(),"ArrowRight"===t.code&&this._carousel.next())}firstUpdated(){this._addEvents()}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._addGlovalEvents()}render(){return e`
      <slot></slot>
      <dialog tabindex="-1" aria-modal="true" class="modal-${-1!==this._type.indexOf("image")?"image":"html"}" @click=${this._clickOutSide} @keyup="${this._controlCarousel}">
        <div class="controls">
        ${s(this._thumbs,(()=>e`
        <div class="thumbs">
        ${this._thumbs.map(((t,i)=>e`
            <wm-button class="thumb" kind="clean" @click="${this._switchSlide.bind(this,i)}" aria-pressed="${i===this._currentThumb}">
              <button>
                ${t}
              </button>
            </wm-button>
          `))}
        </div>
        `))}
          <wm-button kind="clean" class="close" @click="${this.close}">
            <button type="button">
              <wm-icon iconid="close" size="32">Close</wm-icon>
            </button>
          </wm-button>
        </div>
        <div class="content html">
          <div class="content-wrapper">
            <div class="content-inner"></div>
            ${s(this._caption,(()=>e`
            <div class="caption">
              <wm-toggle full selectable="false">
                <strong slot="label">Bildbeschreibung</strong>
                <div slot="content">
                ${i(this._caption)}
                </div>
              </div>`))}
          </div>
        </div>
      </dialog>
    `}}customElements.define("wm-modal",r);const l="wm-modal";export{r as Modal,l as tagName};
