import{r as l,h as t,H as e,g as s}from"./p-b8da063f.js";const i=class{constructor(t){l(this,t),this.value=null,this.appearDelay=0}connectedCallback(){this.appearDelay&&(this.element.classList.remove("block"),this.element.classList.add("hidden"),this.delayTimeout=setTimeout((()=>{this.element.classList.remove("hidden"),this.element.classList.add("block")}),this.appearDelay))}disconnectedCallback(){clearTimeout(this.delayTimeout)}get determinateBarStyle(){return{transform:`translateX(${this.value-100}%)`,transition:"transform 0.4s linear"}}render(){return t(e,{class:"mx-linear-progress block h-4 w-full rounded-sm overflow-hidden pointer-events-none",role:"progressbar","aria-valuenow":null!=this.value?Math.round(this.value):null,"aria-valuemin":null!=this.value?0:null,"aria-valuemax":null!=this.value?100:null},t("div",{class:"relative h-full"},null!=this.value?t("div",{"data-testid":"determinate",class:"fill h-4 absolute inset-0 rounded-sm",style:this.determinateBarStyle}):[t("div",{"data-testid":"indeterminate1",class:"indeterminate1 absolute h-full w-full"},t("div",{class:"fill absolute w-full h-full rounded-sm"})),t("div",{"data-testid":"indeterminate2",class:"indeterminate2 absolute h-full w-full"},t("div",{class:"fill absolute w-full h-full rounded-sm"}))]))}get element(){return s(this)}};export{i as mx_linear_progress}