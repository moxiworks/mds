import{r as t,h as s,H as e}from"./p-9b4e8809.js";import{r as i}from"./p-7265bd00.js";const a=class{constructor(s){t(this,s),this.label="",this.ariaLabel="",this.icon="",this.selected=!1,this.badge=!1,this.badgeClass=""}onClick(t){i(t,this.btnElem)}get tabClass(){let t="mx-tab relative inline-flex items-center justify-center min-w-full";return t+=this.label&&this.icon?" h-72":" h-48",this.badge&&this.label&&(t+=" wider"),t}get badgeEl(){return s("mx-badge",{dot:!0,badgeClass:["w-8 h-8",this.badgeClass].join(" ")})}render(){return s(e,{class:this.tabClass},s("button",{ref:t=>this.btnElem=t,role:"tab",type:"button","aria-selected":this.selected,"aria-label":this.label||this.ariaLabel,class:"relative overflow-hidden w-full h-full border border-transparent",onClick:this.onClick.bind(this)},s("div",{class:"relative flex flex-col items-center justify-center space-y-6 pointer-events-none"},s("span",{class:"flex items-center space-x-6"},!this.label&&this.badge&&this.badgeEl,this.icon&&s("i",{class:this.icon+" text-xl"+(this.label?"":" icon-only")})),this.label&&s("span",{class:"flex items-center uppercase text-sm font-semibold leading-4 tracking-1-25 space-x-6"},this.badge&&this.badgeEl,s("span",null,this.label)))),s("span",{class:"active-tab-indicator absolute bottom-0 left-0 w-full h-2 pointer-events-none"+(this.selected?"":" opacity-0")}))}};export{a as mx_tab}