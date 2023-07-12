/* @copyright Stadt Wien - Wiener Melange v2 */
import{y as t}from"../../lit-element-a22611a3.js";import{n as e}from"../../when-c8427aa9.js";import{o as i}from"../../class-map-50dbd9fb.js";import{randomHash as s}from"./utils.js";import{SlotController as r}from"./slot.js";import"../../directive-19e462f3.js";const o=o=>{class n extends o{static properties={autocomplete:{type:String},error:{type:String},disabled:{type:Boolean},hideAsterisk:{type:Boolean},hideLabel:{type:Boolean},hint:{type:String},info:{type:String},id:{type:String},label:{type:String},name:{type:String},required:{type:Boolean},requiredText:{type:String},value:{type:String},_id:{type:String,attribute:!1},_hasError:{type:Boolean},_hasHint:{type:Boolean},_hasInfo:{type:Boolean},_infoOpen:{type:Boolean}};firstUpdated(){""!==this.label&&"true"!==this.label||console.error("Das label muss angegeben werden! Um labels zu verstecken, hideLabel verwenden.")}constructor(){super(),this.autocomplete=void 0,this.disabled=!1,this.error=void 0,this.hint=void 0,this.hideAsterisk=!1,this.hideLabel=!1,this.id=void 0,this.info=void 0,this.label="",this.name=void 0,this.required=!1,this.requiredText="Pflichtfeld",this.value="",this._id=`wm-form_${s()}`,this._hasHint=!1,this._hasInfo=!1,this._infoOpen=!1,this._hasError=!1,this._msgID=!1,this._slotController=new r(this)}updated(t){t.has("id")&&(this._id=this.id),this._hasHint=this.hint||this._slotController.hasNamedSlot("hint"),this._hasInfo=this.info||this._slotController.hasNamedSlot("info"),this._hasError=this.error||this._slotController.hasNamedSlot("error")}_renderLabel(){const s={"has-error":this._hasError,"wm-h-vh":this.hideLabel};return t`
				<label for="${this._id}" class="${i(s)}">
					${this.label}
					${e(this.required,(()=>t`
							${this.hideAsterisk?`(${this.requiredText})`:t`<abbr title="${this.requiredText}">*</abbr>`}
						`))}
				</label>
			`}_renderInfoText(){const e={"info-visible":this._infoOpen};return t`
				<div
					class="info ${i(e)}"
					aria-hidden="${!this._infoOpen}"
				>
					<div class="info-inner">
						<wm-highlight color="frischgruen-light">
              <slot name="info">${this.info}</slot>
						</wm-highlight>
					</div>
				</div>
			`}_renderInfoButton(){return t` <wm-button kind="round" color="success" @click="${this._toggleInfo}" class="info-button">
				<button aria-expanded="${this._infoOpen}">
					<wm-icon iconid="info"></wm-icon>
				</button>
			</wm-button>`}_toggleInfo(){this._infoOpen=!this._infoOpen}_renderItem(i){return t`
				${e("checkbox"===this.type||"radio"===this.type,(()=>t`
						${i} 
						${this._renderLabel()}
						${e(this._hasInfo,(()=>this._renderInfoText()))}
					`),(()=>t`
						${this._renderLabel()}
						<wm-stack equal="false" gap="xs" horizontal="true">
							<div>
								${i}
								${e(this._hasInfo,(()=>this._renderInfoText()))}
							</div>
              ${e(this._hasInfo,(()=>this._renderInfoButton()))}
						</wm-stack>
					`))}
				
				${e(this._hasHint||this._hasError,(()=>t`
						<div class="wm-forms-message" id="message">
							<div class="has-error"><slot name="error">${this.error}</slot></div>
							<div><slot name="hint">${this.hint}</slot></div>
						</div>
					`))}
			`}}return n};export{o as FormItem};
