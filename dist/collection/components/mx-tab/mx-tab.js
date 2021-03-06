import { Component, Host, h, Prop } from '@stencil/core';
import ripple from '../../utils/ripple';
export class MxTab {
  constructor() {
    /** Label text to display */
    this.label = '';
    /** If you are not providing a `label`, this should be provided instead for accessibility */
    this.ariaLabel = '';
    /** Class name of icon to display */
    this.icon = '';
    /** Do not set this manually. It will be set automatically based on the `mx-tabs` `value` prop */
    this.selected = false;
    /** Display a circular badge */
    this.badge = false;
    /** Additional classes for the badge */
    this.badgeClass = '';
  }
  componentDidLoad() {
    if (!this.label && !this.ariaLabel) {
      throw new Error('Please provide either a label or an aria-label for each tab.');
    }
  }
  onClick(e) {
    ripple(e, this.btnElem);
  }
  get tabClass() {
    let str = 'mx-tab relative inline-flex items-center justify-center min-w-full';
    str += this.label && this.icon ? ' h-72' : ' h-48';
    if (this.badge && this.label)
      str += ' wider';
    return str;
  }
  get badgeEl() {
    return h("mx-badge", { indicator: true, badgeClass: ['w-8 h-8', this.badgeClass].join(' ') });
  }
  get isTextOnly() {
    return this.label && !this.icon;
  }
  render() {
    return (h(Host, { class: this.tabClass },
      h("button", { ref: el => (this.btnElem = el), role: "tab", type: "button", "aria-selected": this.selected, "aria-label": this.label || this.ariaLabel, class: "relative overflow-hidden w-full h-full border border-transparent", onClick: this.onClick.bind(this) },
        h("div", { class: "relative flex flex-col items-center justify-center space-y-6 pointer-events-none" },
          !this.isTextOnly && (h("span", { class: "flex items-center space-x-6" },
            !this.label && this.badge && this.badgeEl,
            this.icon && h("i", { class: this.icon + ' text-1' + (!this.label ? ' icon-only' : '') }))),
          this.label && (h("span", { class: "flex items-center uppercase text-4 font-semibold leading-4 tracking-1-25 space-x-6" },
            this.badge && this.badgeEl,
            h("span", null, this.label))))),
      h("span", { class: 'active-tab-indicator absolute bottom-0 left-0 w-full h-2 pointer-events-none' +
          (this.selected ? '' : ' opacity-0') })));
  }
  static get is() { return "mx-tab"; }
  static get properties() { return {
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Label text to display"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "ariaLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If you are not providing a `label`, this should be provided instead for accessibility"
      },
      "attribute": "aria-label",
      "reflect": false,
      "defaultValue": "''"
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Class name of icon to display"
      },
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "''"
    },
    "selected": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Do not set this manually. It will be set automatically based on the `mx-tabs` `value` prop"
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "badge": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Display a circular badge"
      },
      "attribute": "badge",
      "reflect": false,
      "defaultValue": "false"
    },
    "badgeClass": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Additional classes for the badge"
      },
      "attribute": "badge-class",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
}
