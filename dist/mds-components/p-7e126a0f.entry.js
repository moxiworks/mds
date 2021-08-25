import{r as t,h as i,H as s,g as e}from"./p-252a16a5.js";const n=class{constructor(i){t(this,i),this.squared=!1,this.offset=0,this.bottom=!1,this.left=!1}get indicatorSvg(){return"star"===this.indicator?'<svg width="12" height="12" viewBox="0 0 12 12" fill="none">\n  <path d="M6 0.5L7.76336 4.07295L11.7063 4.6459L8.85317 7.42705L9.52671 11.3541L6 9.5L2.47329 11.3541L3.14683 7.42705L0.293661 4.6459L4.23664 4.07295L6 0.5Z" fill="currentColor"/>\n</svg>':"triangle-down"===this.indicator?'<svg width="12" height="10" viewBox="0 0 12 10" fill="none">\n  <path d="M6.00011 10L12 0H0L6.00011 10Z" fill="currentColor"/>\n</svg>':"hexagon"===this.indicator?'<svg width="12" height="12" viewBox="0 0 12 12" fill="none">\n  <path d="M6 0L11.1962 3V9L6 12L0.803848 9V3L6 0Z" fill="currentColor"/>\n</svg>':"triangle-up"===this.indicator?'<svg width="12" height="10" viewBox="0 0 12 10" fill="none">\n  <path d="M6.00011 0L12 10H0L6.00011 0Z" fill="currentColor"/>\n</svg>':"square"===this.indicator?'<svg width="10" height="10" viewBox="0 0 10 10" fill="none">\n  <rect width="10" height="10" fill="currentColor"/>\n</svg>':'<svg width="12" height="12" viewBox="0 0 12 12" fill="none">\n  <circle cx="6" cy="6" r="6" fill="currentColor"/>\n</svg>'}get isStandalone(){return!this.element.firstElementChild}get isIconOnly(){return this.icon&&void 0===this.value}get badgeClassNames(){let t="badge inline-flex items-center justify-center text-4 font-semibold pointer-events-none";return t+=this.isIconOnly?" rounded-full":this.squared?" rounded":" rounded-xl",null!=this.indicator?t+=" w-12 h-12":this.isStandalone?(t+=" h-24",t+=this.isIconOnly?" w-24":" px-8"):(t+=" h-20",t+=this.isIconOnly?" w-20":" px-6"),this.isStandalone||(t+=" absolute transform",this.bottom?(t+=` bottom-${this.offset} translate-y-1/2`,t+=this.left?" origin-bottom-left":" origin-bottom-right"):(t+=` top-${this.offset} -translate-y-1/2`,t+=this.left?" origin-top-left":" origin-top-right"),t+=this.left?` left-${this.offset} -translate-x-1/2`:` right-${this.offset} translate-x-1/2`),[t,this.badgeClass].join(" ")}render(){return i(s,{class:"mx-badge inline-flex relative"},i("slot",null),null!=this.indicator?i("span",{class:this.badgeClassNames,"data-testid":"indicator-"+(this.indicator||"circle"),innerHTML:this.indicatorSvg}):i("span",{class:this.badgeClassNames},this.icon&&i("i",{class:this.icon+(this.isIconOnly?"":" mr-4")}),this.value))}get element(){return e(this)}};export{n as mx_badge}