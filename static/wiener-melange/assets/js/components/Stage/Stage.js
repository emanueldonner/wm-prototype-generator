/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as e,s as t,y as i}from"../../lit-element-a22611a3.js";import{o as a}from"../../class-map-50dbd9fb.js";import{n as o}from"../../when-c8427aa9.js";import"../../directive-19e462f3.js";const s=[e`
:host {
  --stage-background-color: var(--_stage-background-color, rgb(255 255 255));
  --stage-content-padding: var(--_stage-content-padding, 2rem);
  --stage-heading-small: var(--_stage-heading-small, 2rem);
  --stage-margin: var(--_stage-margin, 1rem);
  --stage-margin-large: var(--_stage-margin-large, 1.25rem);
}`],r=[e`
* {
  box-sizing: border-box;
}

[hidden] {
  display: none !important;
}

:host {
  --_margin: var(--stage-margin);

  display: grid;
  grid-column: 1 / -1 !important;
  grid-template-columns: var(--site-wrapper-padding) 1fr var(--site-wrapper-padding);
  margin-block-end: var(--_margin);
  position: relative;
}

@media (min-width: 48em) {
  :host {
    --_margin: var(--stage-margin-large);
  }
}

.content {
  z-index: 1210;
  grid-column: 2;
}

.content--media {
  --_pos: start;
  align-self: end;
  background-color: var(--stage-background-color);
  grid-row: 1;
  justify-self: var(--_pos);
  padding: var(--stage-content-padding);
  max-width: 40ch;
}

:host([justify="end"]) .content--media {
  --_pos: end
}

.media {
  aspect-ratio: 1200 / 450;
  grid-column: 1 / -1;
  grid-row: 1;
  object-position: top left;
  overflow: hidden;
}

::slotted(video),
::slotted(img) {
  height: 100% !important;
  object-fit: cover !important;
  width: 100% !important;
}

.video-controls {
  background-color: rgb(0 0 0 / 0.6);
  display: flex;
  gap: 0.3rem;
  inset-inline-end: 0;
  padding: 0.5rem;
  opacity: 0;
  position: absolute;
  transition: opacity 0.3s;
  z-index: 1;
}

@media(min-width: 48em) {
  .video-controls {
    inset-block-end: 0;
  }
}

:host(:is(:hover, :focus-within)) .video-controls {
  opacity: 1;
}

.video-controls button {
  align-items: center;
  block-size: 2rem;
  inline-size: 2rem;
  background-color: rgb(255 255 255 / 0.7);
  border: none;
  cursor: pointer;
}

.video-controls button:is(:hover, :focus-visible) {
  outline-color: #fff;
}

/* TODO fix break-word needs testing -> bug when there is a very long stage title  */
::slotted(h1) {
  margin-block-end: 0 !important;
  -webkit-hyphens: auto;
  hyphens: auto;
}

@media(max-width: 48em) {
  ::slotted(h1) {
    font-size: var(--stage-heading-small) !important;
  }

  .content--media {
    grid-row: auto;
    max-width: 100%;
    padding: 1rem 0;
  }
}

[data-modal] {
  display: block;
  height: 100%;
  }

[data-modal]:focus-visible {
  outline: var(--site-focus-outline-width) solid var(--wm-color-ui-interactive);
  outline-offset: -3px;
}
`];class n extends t{get _galleryTrigger(){return this.shadowRoot?.querySelector("[data-modal]")??null}get _video(){return this?.querySelector("video")??null}get _gallery(){return this.shadowRoot?.querySelector("#images")??null}get _media(){return this.shadowRoot?.querySelector('slot[name="media"]')}static properties={align:{type:String,reflect:!0},_hasMedia:{type:Boolean,attribute:!1},_playing:{type:Boolean,attribute:!1,reflect:!0},playButtonLabel:{type:String}};static styles=[s,r];constructor(){super(),this.align=void 0,this._hasMedia=!1,this._hasVideo=!1,this._playing=!1,this.playButtonLabel="Video abspielen"}firstUpdated(){this._hasMedia=this._media.assignedNodes().length,this._media.addEventListener("slotchange",(()=>{this._hasMedia?(this._video&&this._video.autoplay&&(this._playing=!0),document.documentElement.classList.add("wm-has-stage")):document.documentElement.classList.remove("wm-has-stage")})),this._hasMedia>1&&this._renderMultipleImages()}_renderMultipleImages(){const e=this._media.assignedNodes();this._galleryTrigger.href=e[0].getAttribute("src"),this._galleryTrigger.querySelector("img").src=e[0].getAttribute("src");for(let t=0;t<e.length;t++){const i=e[t];i.removeAttribute("slot"),t>0&&(i.dataset.src=i.getAttribute("src"),i.removeAttribute("src")),this._gallery.content.querySelector("wm-carousel").append(i)}}_playVideo(){this._playing=!this._playing,this._playing?this._video.play():this._video.pause()}render(){const e={"content--media":this._hasMedia};return i`
			<div class="content ${a(e)}">
				<slot name="heading"></slot>
				<slot name="content"></slot>
			</div>
			<div class="media" ?hidden=${!this._hasMedia}>
				${o(this._video,(()=>i`
						<div class="video-controls">
							<wm-button @click="${this._playVideo}">
								<button aria-pressed="${this._playing}">
									<wm-icon iconid="${this._playing?"pause":"play"}"
										>${this.playButtonLabel}</wm-icon
									>
								</button>
							</wm-button>
						</div>
					`))}

				<a href="#" data-modal="images" ?hidden=${this._hasMedia<2}>
					<img src="#" width="1200" height="450" alt="" />
				</a>

				<template id="images">
					<wm-carousel
						single="1070"
						style="--carousel-shadow-offset: 0px"
					></wm-carousel>
				</template>

				<slot name="media" ?hidden=${this._hasMedia>1}></slot>
			</div>
		`}}customElements.define("wm-stage",n);const d="wm-stage";export{n as Stage,d as tagName};
