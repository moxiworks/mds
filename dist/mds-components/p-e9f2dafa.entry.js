import{r as t,c as s,h as e,H as i,g as h}from"./p-658186fd.js";const l=class{constructor(e){t(this,e),this.mxInput=s(this,"mxInput",7)}onValueChange(){this.updateChildChips()}connectedCallback(){this.updateChildChips()}onChipClick(t){const s=t.target.closest("mx-chip");s&&(this.toggleValue(s.value),this.mxInput.emit(this.value))}toggleValue(t){this.value=this.value!==t?t:null}updateChildChips(){this.element.querySelectorAll("mx-chip").forEach((t=>{t.choice=!0,t.clickable=!0,t.selected=t.value===this.value}))}render(){return e(i,{class:"inline-flex",role:"radio-group"},e("slot",null))}get element(){return h(this)}static get watchers(){return{value:["onValueChange"]}}};export{l as mx_chip_group}