import { Component, Host, h, Prop, Element, Watch, State } from '@stencil/core';

@Component({
  tag: 'mx-select',
  shadow: false,
})
export class MxSelect {
  selectElem!: HTMLSelectElement;
  textArea!: HTMLTextAreaElement;

  /** Helpful text to show below the select */
  @Prop() assistiveText: string;
  @Prop() dense: boolean = false;
  @Prop() disabled: boolean = false;
  /** Style with a 1dp elevation */
  @Prop() elevated: boolean = false;
  /** Style with a "flat" border color */
  @Prop() flat: boolean = false;
  @Prop() label: string;
  @Prop() ariaLabel: string;
  /** The `id` attribute for the select element */
  @Prop() selectId: string;
  @Prop() name: string;
  /** Text shown to the left of the arrow */
  @Prop() suffix: string;
  @Prop({ mutable: true }) error: boolean = false;
  /** Additional classes for the label */
  @Prop({ mutable: true }) labelClass: string = '';
  @Prop({ mutable: true }) value: any;

  @State() isFocused: boolean = false;

  @Element() element: HTMLMxSelectElement;

  componentDidLoad() {
    this.updateSelectValue();
  }
  @Watch('value')
  onValueChange() {
    this.updateSelectValue();
  }

  updateSelectValue() {
    this.selectElem.value = this.value;
  }

  onFocus() {
    this.isFocused = true;
    this.error = false;
  }

  onBlur() {
    this.isFocused = false;
  }

  onInput(e: InputEvent) {
    this.value = (e.target as HTMLSelectElement).value;
  }

  get hasValue() {
    return this.value !== null && this.value !== '' && this.value !== undefined;
  }

  get selectWrapperClass() {
    let str = 'mx-select-wrapper flex items-center relative h-48 border rounded-lg';
    str += this.dense ? ' h-36' : ' h-48';
    if (this.elevated) str += ' elevated shadow-1';
    if (this.flat) str += ' flat';
    if (this.error || this.isFocused) str += ' border-2';
    if (this.error) str += ' error';
    if (this.disabled) str += ' disabled';
    return str;
  }

  get selectClass() {
    let str =
      'absolute inset-0 w-full pl-16 overflow-hidden outline-none appearance-none bg-transparent cursor-pointer disabled:cursor-auto';
    if (this.isFocused) str += ' -m-1'; // prevent shifting due to border-width change
    return str;
  }

  get labelClassNames() {
    let str = 'absolute block pointer-events-none mt-0 left-12 px-4';
    if (this.dense) str += ' dense text-sm';
    if (this.isFocused || this.hasValue) str += ' floating';
    if (this.isFocused) str += ' -ml-1'; // prevent shifting due to border-width change
    return (str += ' ' + this.labelClass);
  }

  get iconSuffixClass() {
    let str = 'absolute flex items-center h-full right-16 space-x-8 pointer-events-none';
    if (this.isFocused) str += ' -mr-1'; // prevent shifting due to border-width change
    return str;
  }

  get iconEl() {
    let icon = (
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.9654 0.757212C9.93099 0.681077 9.87273 0.616004 9.79798 0.57022C9.72323 0.524437 9.63535 0.5 9.54545 0.5H0.454547C0.364646 0.5 0.276763 0.524437 0.202012 0.570222C0.127262 0.616007 0.0690015 0.681082 0.0345985 0.757219C0.000195557 0.833357 -0.00880479 0.917136 0.00873577 0.997962C0.0262763 1.07879 0.0695701 1.15303 0.133142 1.2113L4.67859 5.37795C4.7208 5.41665 4.77091 5.44734 4.82605 5.46828C4.8812 5.48922 4.94031 5.5 5 5.5C5.05969 5.5 5.1188 5.48922 5.17394 5.46828C5.22909 5.44734 5.2792 5.41665 5.3214 5.37795L9.86686 1.2113C9.93043 1.15303 9.97372 1.07879 9.99126 0.997958C10.0088 0.917131 9.9998 0.833351 9.9654 0.757212Z"
          fill="currentColor"
        />
      </svg>
    );
    if (this.error) icon = <i class="ph-warning-circle -mr-4"></i>;
    return icon;
  }

  render() {
    return (
      <Host class="mx-select">
        <div class={this.selectWrapperClass}>
          <select
            aria-label={this.label || this.ariaLabel}
            class={this.selectClass}
            disabled={this.disabled}
            id={this.selectId}
            name={this.name}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
            onInput={this.onInput.bind(this)}
            ref={el => (this.selectElem = el)}
          >
            <slot></slot>
          </select>
          {this.label && <label class={this.labelClassNames}>{this.label}</label>}
          <span class={this.iconSuffixClass}>
            {this.suffix && <span class="suffix flex items-center h-full px-4">{this.suffix}</span>}
            {this.iconEl}
          </span>
        </div>
        {this.assistiveText && <div class="assistive-text text-xs mt-4 ml-16">{this.assistiveText}</div>}
      </Host>
    );
  }
}
