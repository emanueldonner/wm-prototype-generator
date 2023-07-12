/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as e,s as i,y as t}from"../../lit-element-a22611a3.js";import{n as a}from"../../when-c8427aa9.js";import{l as r}from"../../if-defined-133e139e.js";import{SlotController as o}from"../misc/slot.js";const n=[e`
  * {
    box-sizing: border-box;
  }

:host {
  --_spacing: var(--card-spacing);
  --_max-width: none;
  --_grid-columns: var(--_spacing) 1fr var(--_spacing);
  --_grid-rows: repeat(4, min-content) 1fr;

  display: block;
  max-width: var(--_max-width);
  /*height: 100%;*/
  width: 100%;

  perspective: 1000px;
}

:host([flipped]) .card-inner  {
  transform: rotateY(180deg);
}

.card-inner {
  align-content: start;
  background-color: var(--card-background);
  border: var(--card-border);
  box-shadow: var(--card-shadow);
  display: grid;
  block-size: 100%;
  grid-template-columns: var(--_grid-columns);
  grid-template-rows: var(--_grid-rows);
  padding-block: var(--_spacing);
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

:host([size="s"]) {
  --_max-width: 16.25rem;
}

:host([size="m"]) {
  --_max-width: 21.875rem;
}

:host([size="l"]) {
  --_max-width: 33.125rem;
}

@media(min-width: 64em) {
  :host(:not([size="s"])) {
    --_spacing: var(--card-spacing-large);
  }
}

::slotted(:is(img, picture)) {
  display: block;
  height: 100% !important;
  object-fit: cover;
  width: 100%;
}

::slotted(*) {
  grid-column: 2;
  min-width: 0;
}

::slotted(:is(img, picture)),
::slotted(div[slot]) {
  margin: 0 !important;
}

::slotted(:is(h1, h2, h3, h4)) {
  -webkit-hyphens: auto;
  hyphens: auto;
}

.header {
  background-color: inherit;
  align-items: center;
  display: flex;
  grid-column: 2;
  grid-row: 3;
  justify-content: space-between;
  z-index: 1;
}

.media {
  aspect-ratio: 16 / 9;
  grid-column: 1 / -1;
  grid-row: 1;
  margin-block-end: var(--_spacing);
  margin-block-start: calc(var(--_spacing) * -1);
  position: relative;
}

.content ::slotted(*:not(:last-of-type)) {
  margin-block-end: var(--_spacing) !important;
}

.content {
  background-color: inherit;
  grid-column: 2;
  grid-row: 4;
  z-index: 1;
}

.precontent {
  grid-column: 2;
  grid-row: 2;
  margin-block-end: 0.5em;
  z-index: 1;
}

.postcontent {
  grid-column: 2;
  grid-row: -1;
  z-index: 1;
}

.flip {
  background-color: inherit;
  block-size: 100%;
  inline-size: 100%;
  grid-column: 2 / -2;
  grid-row: 1 / -1;
  transform:translateZ(-1px) rotateY(180deg);
  z-index: 1;
}

.flip:focus-visible {
  outline: var(--site-focus-outline);
}

.flip-header {
  display: flex;
  justify-content: flex-end;
  padding-block: 0.7rem;
}

.eyecatcher {
  background: var(--card-media-background);
  color: var(--card-media-color);
  font-size: var(--card-eyecatcher-fontsize);
  font-weight: normal;
  padding: 0 var(--card-eyecatcher-padding);
  position: absolute;
}

:host([color="goldgelb"]) {
  --card-media-background: var(--wm-color-goldgelb) !important;
}

:host([color="wasserblau"]) {
  --card-media-background: var(--wm-color-wasserblau) !important;
}

:host([color="morgenrot"]) {
  --card-media-background: var(--wm-color-morgenrot) !important;
}

:host([color="flieder"]) {
  --card-media-background: var(--wm-color-flieder) !important;
}

:host([color="nebelgrau"]) {
  --card-media-background: var(--wm-color-nebelgrau) !important;
}

:host([color="abendstimmung"]) {
  --card-media-background: var(--wm-color-abendstimmung) !important;
  --card-media-color: var(--wm-color-weiss) !important;
}

:host(:not([position])) .eyecatcher {
  inset-block-end: var(--card-eyecatcher-spacing);
  inset-inline-end: 0;
} 

:host([position*="block-end"]) .eyecatcher {
  inset-block-end: var(--card-eyecatcher-spacing);
} 

:host([position*="block-start"]) .eyecatcher {
  inset-block-start: var(--card-eyecatcher-spacing);
} 

:host([position*="inline-start"]) .eyecatcher {
  inset-inline-start: 0;
} 

:host([position*="inline-end"]) .eyecatcher {
  inset-inline-end: 0;
} 

:host([position*="inline-start"][type="eyecatcher-round"]) .eyecatcher {
  inset-inline-start: var(--card-eyecatcher-spacing);
} 

:host([position*="inline-end"][type="eyecatcher-round"]) .eyecatcher {
  inset-inline-end: var(--card-eyecatcher-spacing);
} 

:host([type="eyecatcher-round"]) .eyecatcher {
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 3.5em;
  justify-content: center;
  padding: 0;
  transform: rotate(-20deg);
  width: 3.5em;
}

:host([canvas]) .media ::slotted(:is(h2, h3)) {
  margin: 0 !important;
}

:host([canvas]) .media {
  --_align-items: center;
  --_justify-content: center;

  align-items: var(--_align-items);
  background-color: var(--card-media-background);
  display: flex;
  justify-content: var(--_justify-content);
  padding: var(--_spacing);
}

:host([canvas][position*="block-end"]) .media {
  --_align-items: end;
}
:host([canvas][position*="block-start"]) .media {
  --_align-items: start;
}
:host([canvas][position*="inline-end"]) .media {
  --_justify-content: end;
}
:host([canvas][position*="inline-start"]) .media {
  --_justify-content: start;
}

@media(min-width: 64em) {
  :host([size="full-responsive"]) {
    --_grid-columns: 1fr 1fr;
    --_grid-rows: 1fr;
    --_spacing: var(--wm-spacing-xl);
  }
  
  :host([size="full-responsive"]) .card-inner {
    --_media-col: 1 / 2;
    --_media-pos: 0;
    --_content-col: 2;
    column-gap: var(--_spacing);
    padding: var(--_spacing);
  }

  :host([size="full-responsive"]) .header {
    grid-row: auto;
    grid-column: var(--_content-col);
  }

  :host([size="full-responsive"]) .media {
    grid-column: var(--_media-col);
    grid-row: 1;
    position: absolute;
    inset-inline-end: var(--_media-pos);
    inset-block-start: calc(var(--_spacing) * -1);
    height: calc(100% + var(--_spacing));
    width: calc(100% + var(--_spacing));
    margin: 0;
  }

  :host([size="full-responsive"]) .content {
    grid-column: var(--_content-col);
  }

  :host([size="full-responsive"][size="inline-end"]) .header {
    grid-column: var(--_content-col);
  }

  @container style(--card-style: reverse) {
    :host([size="full-responsive"]) .card-inner {
      --_content-col: 1;
      --_media-col: -1 / 2;
      --_media-pos: calc(var(--_spacing) * -1);
    }
  }
}

`],s=[e`
:host {
  --card-background: var(--_card-background, #FFFFFF);
  --card-border: var(--_card-border, 1px solid var(--site-color));
  --card-eyecatcher-spacing: var(--_card-eyecatcher-spacing, 1rem);
  --card-eyecatcher-padding: var(--_card-eyecatcher-padding, 0.5rem);
  --card-eyecatcher-fontsize: var(--_card-eyecatcher-fontsize, 1.5rem);
  --card-media-background: var(--_card-media-background, hsl(0 0% 0%));
  --card-media-color: var(--_card-media-color, hsl(0 0% 100%));
  --card-spacing: var(--_card-spacing, 1rem);
  --card-spacing-large: var(--_card-spacing-large, 1.5rem);
  --card-shadow: var(--_card-shadow, none);
}`];class c extends i{get _flipShow(){return this.shadowRoot?.querySelector("#flip-show")}get _flipSide(){return this.shadowRoot?.querySelector(".flip")}static properties={size:{type:String,reflect:!0},_hasMedia:{type:String,attribute:!1},_flipcard:{type:Boolean},flipped:{type:Boolean,reflect:!0},blocklink:{type:Boolean,reflect:!0},canvas:{type:Boolean,reflect:!0},color:{type:String,reflect:!0},position:{type:String,reflect:!0},type:{type:String}};static styles=[s,n];constructor(){super(),this.size="m",this.type=void 0,this.position=void 0,this.color=void 0,this.blocklink=!1,this.canvas=!1,this._hasMedia=null,this._flipcard=!1,this.flipped=!1,this._slotController=new o(this)}firstUpdated(){this.shadowRoot.querySelector('slot[name="media"]').addEventListener("slotchange",(()=>{this._hasMedia=this.shadowRoot.querySelector('slot[name="media"]').assignedNodes().length,this._hasMedia&&this._linkCard()}))}updated(e){e.has("canvas")&&this.canvas&&(this._hasMedia=!0)}_linkCard(){this.querySelectorAll("a").length<2&&1===this.querySelectorAll("h2 a, h3 a, h4 a").length&&(this.blocklink||(this.blocklink=!0))}_onFlip(){this._flipcard=!0}_flipTheCard(){this.flipped=!this.flipped,setTimeout((()=>{this.flipped?this._flipSide.focus():this._flipShow.focus()}),0)}render(){return t`
      <div class="card-inner">
        <div class="header" inert="${r(this.flipped?"inert":void 0)}">
          <slot name="heading"></slot>

          ${a(this._flipcard,(()=>t`
							<wm-button kind="clean">
								<button
									@click="${this._flipTheCard}"
									aria-expanded="${this.flipped}"
									id="flip-show"
								>
									<wm-icon iconid="embed"></wm-icon>
									Teilen
								</button>
								<wm-button> </wm-button
							></wm-button>
						`))}
        </div>

        <div class="media" ?hidden=${!this._hasMedia}>
          <slot name="media"></slot>

          <div class="eyecatcher">
            <strong><slot name="eyecatcher"></slot></strong>
          </div>
        </div>
          
        ${a(this._slotController.hasNamedSlot("precontent"),(()=>t`
						<div
							class="precontent"
							inert="${r(this.flipped?"inert":void 0)}"
						>
							<slot name="precontent"></slot>
						</div>
					`))}
        
        <div class="content" inert="${r(this.flipped?"inert":void 0)}">
          <slot name="content"></slot>
        </div>
        <div class="postcontent" inert="${r(this.flipped?"inert":void 0)}">
          <slot name="postcontent"></slot>
        </div>

				${a(this._slotController.hasNamedSlot("flip"),(()=>t`
        <div class="flip" inert="${r(this.flipped?void 0:"inert")}" aria-label="Teilen" role="region" tabindex="0">
          <div class="flip-header">
            <wm-button kind="clean">
              <button @click="${this._flipTheCard}" aria-expanded="${this.flipped}" class="flip-hide">
                <wm-icon iconid="close">Schließen</wm-icon>
              </button>
            <wm-button>
          </div>

          <slot name="flip" @slotchange="${this._onFlip}"></slot>
        </div>
				`))}
      </div>
    `}}customElements.define("wm-card",c);const d="wm-card";export{c as Card,d as tagName};
