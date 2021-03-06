import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mx-switch',
  shadow: false,
})
export class MxSwitch {
  @Prop() name: string = '';
  @Prop() value: string = '';
  @Prop() labelName: string = '';
  @Prop() checked: boolean = false;

  render() {
    return (
      <Host class="mx-switch">
        <label class="relative inline-flex flex-nowrap align-center items-center cursor-pointer text-4 w-36 h-14">
          <input
            class="absolute h-0 w-0 opacity-0"
            role="switch"
            type="checkbox"
            name={this.name}
            checked={this.checked}
          />
          <span class="slider round"></span>
          <div class="pl-48 inline-block whitespace-nowrap" data-testid="labelName">
            {this.labelName}
          </div>
        </label>
      </Host>
    );
  }
}
