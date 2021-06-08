import{r as t,h as s,H as e,g as i}from"./p-9b4e8809.js";const l=class{constructor(s){t(this,s),this.dense=!1,this.disabled=!1,this.elevated=!1,this.flat=!1,this.error=!1,this.labelClass="",this.isFocused=!1}componentDidLoad(){this.updateSelectValue()}onValueChange(){this.updateSelectValue()}updateSelectValue(){this.selectElem.value=this.value}onFocus(){this.isFocused=!0,this.error=!1}onBlur(){this.isFocused=!1}get hasValue(){return null!==this.value&&""!==this.value&&void 0!==this.value}get selectWrapperClass(){let t="mx-select-wrapper flex items-center relative h-48 border rounded-lg";return t+=this.dense?" h-36":" h-48",this.elevated&&(t+=" elevated shadow-1"),this.flat&&(t+=" flat"),(this.error||this.isFocused)&&(t+=" border-2"),this.error&&(t+=" error"),this.disabled&&(t+=" disabled"),t}get selectClass(){let t="absolute inset-0 w-full pl-16 overflow-hidden outline-none appearance-none bg-transparent cursor-pointer disabled:cursor-auto";return this.isFocused&&(t+=" -m-1"),t}get labelClassNames(){let t="absolute block pointer-events-none mt-0 left-12 px-4";return this.dense&&(t+=" dense text-sm"),(this.isFocused||this.hasValue)&&(t+=" floating"),this.isFocused&&(t+=" -ml-1"),t+" "+this.labelClass}get iconSuffixClass(){let t="icon-suffix absolute flex items-center h-full right-16 space-x-8 pointer-events-none";return this.isFocused&&(t+=" -mr-1"),t}get iconEl(){let t=s("svg",{"data-testid":"arrow",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M9.9654 0.757212C9.93099 0.681077 9.87273 0.616004 9.79798 0.57022C9.72323 0.524437 9.63535 0.5 9.54545 0.5H0.454547C0.364646 0.5 0.276763 0.524437 0.202012 0.570222C0.127262 0.616007 0.0690015 0.681082 0.0345985 0.757219C0.000195557 0.833357 -0.00880479 0.917136 0.00873577 0.997962C0.0262763 1.07879 0.0695701 1.15303 0.133142 1.2113L4.67859 5.37795C4.7208 5.41665 4.77091 5.44734 4.82605 5.46828C4.8812 5.48922 4.94031 5.5 5 5.5C5.05969 5.5 5.1188 5.48922 5.17394 5.46828C5.22909 5.44734 5.2792 5.41665 5.3214 5.37795L9.86686 1.2113C9.93043 1.15303 9.97372 1.07879 9.99126 0.997958C10.0088 0.917131 9.9998 0.833351 9.9654 0.757212Z",fill:"currentColor"}));return this.error&&(t=s("i",{"data-testid":"error-icon",class:"ph-warning-circle -mr-4"})),t}render(){return s(e,{class:"mx-select"},s("div",{class:this.selectWrapperClass},s("select",{"aria-label":this.label||this.ariaLabel,class:this.selectClass,disabled:this.disabled,id:this.selectId,name:this.name,onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),ref:t=>this.selectElem=t},s("slot",null)),this.label&&s("label",{class:this.labelClassNames},this.label),s("span",{class:this.iconSuffixClass},this.suffix&&s("span",{class:"suffix flex items-center h-full px-4"},this.suffix),this.iconEl)),this.assistiveText&&s("div",{class:"assistive-text text-xs mt-4 ml-16"},this.assistiveText))}get element(){return i(this)}static get watchers(){return{value:["onValueChange"]}}};export{l as mx_select}