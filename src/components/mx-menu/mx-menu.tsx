import { Component, Host, h, Prop, Element, Listen, State, Method } from '@stencil/core';
import {
  createPopover,
  PopoverInstance,
  PopoverPlacement,
  convertPlacementToOrigin,
  PopoverOffset,
} from '../../utils/popover';
import { fadeScaleIn, fadeOut } from '../../utils/transitions';

@Component({
  tag: 'mx-menu',
  shadow: false,
})
export class MxMenu {
  popoverInstance: PopoverInstance;
  menuElem: HTMLElement;
  scrollElem: HTMLElement;

  /** The element that will open the menu when clicked */
  @Prop() anchorEl: HTMLElement;
  /** An object with `x` and `y` offsets in pixels */
  @Prop() offset: PopoverOffset;
  /** The placement of the menu.  Defaults to `bottom-start` (or `bottom` when the `anchorEl` is an `mx-input`) */
  @Prop() placement: PopoverPlacement;

  @State() isOpen: boolean = false;

  @Element() element: HTMLMxMenuElement;

  @Listen('mxClick')
  onMenuItemClick() {
    // Close menu when a descendent menu item is clicked
    this.closeMenu();
  }

  @Listen('click', { target: 'document', capture: true })
  onClick(e: MouseEvent) {
    const anchorWasClicked = this.anchorEl && this.anchorEl.contains(e.target as Node);
    if (!this.isOpen && anchorWasClicked) {
      // Open closed menu when the anchorEl is clicked
      this.openMenu();
    } else if (this.isOpen && this.element && !this.element.contains(e.target as Node)) {
      if (this.isSubMenu && anchorWasClicked) return; // Do not close submenu when its anchor is clicked
      // Otherwise, close menu when a click occurs outside the menu
      this.closeMenu();
    }
  }

  @Listen('keydown', { target: 'document' })
  onDocumentKeyDown(e: KeyboardEvent) {
    if (!this.isOpen) return;
    // Close menus on Escape key
    if (e.key === 'Escape') this.closeMenu();
    else if (e.key === 'ArrowDown' && this.anchorEl.contains(e.target as Node)) {
      // If focus is still on anchor, switch focus to first menu item on arrow down
      e.preventDefault();
      e.stopPropagation();
      const enabledMenuItems = this.menuItems.filter(m => !m.disabled);
      enabledMenuItems.length && enabledMenuItems[0].focusMenuItem();
    }
  }

  @Listen('keydown')
  onKeydown(e: KeyboardEvent) {
    if (!this.isOpen) return;
    if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return;
    // Menu item keyboard navigation
    e.preventDefault(); // Prevent scrolling
    e.stopPropagation();
    const menuItems = this.menuItems.filter(m => !m.disabled);
    const focusedIndex = menuItems.findIndex(m => m.contains(document.activeElement));
    if (e.key === 'ArrowDown' && focusedIndex !== menuItems.length - 1) {
      (menuItems[focusedIndex + 1] as HTMLMxMenuItemElement).focusMenuItem();
    } else if (e.key === 'ArrowUp' && focusedIndex !== 0) {
      (menuItems[focusedIndex - 1] as HTMLMxMenuItemElement).focusMenuItem();
    }
  }

  /** Open the menu.  Returns a promise that resolves to false if the menu was already open. */
  @Method()
  async openMenu() {
    if (this.isOpen || !this.anchorEl) return false;
    this.isOpen = true;
    const offset: PopoverOffset = this.offset || (this.isSubMenu ? { x: 0, y: -8 } : null); // Offset submenus by -8px to line up menu items
    const placement = this.placement || this.defaultPlacement;
    this.popoverInstance = await createPopover(this.anchorEl, this.element, placement, offset);
    await fadeScaleIn(this.menuElem, undefined, convertPlacementToOrigin(this.popoverInstance.state.placement));
    return true;
  }

  /** Close the menu.  Returns a promise that resolves to false if the menu was already closed. */
  @Method()
  async closeMenu(): Promise<boolean> {
    if (!this.isOpen) return false;
    this.menuItems.forEach(m => m.closeSubMenu());
    await fadeOut(this.menuElem);
    this.isOpen = false;
    if (!this.popoverInstance) return true;
    this.popoverInstance.destroy();
    this.popoverInstance = null;
    return true;
  }

  connectedCallback() {
    this.anchorEl && this.anchorEl.setAttribute('aria-haspopup', 'true');
  }

  componentWillUpdate() {
    // If any menu item has an icon, ensure that all menu items at least have a null icon.
    // This will ensure the inner text of all the menu items is aligned.
    const anyMenuItemHasIcon = this.menuItems.some(m => !!m.icon);
    if (anyMenuItemHasIcon) {
      this.menuItems.forEach(m => {
        if (m.icon === undefined) m.icon = null;
      });
    }
  }

  get menuItems(): HTMLMxMenuItemElement[] {
    return (Array.from(this.scrollElem.querySelectorAll(':scope > mx-menu-item')) || []) as HTMLMxMenuItemElement[];
  }

  get defaultPlacement() {
    // TODO: exposed dropdown menu
    if (this.anchorEl.tagName === 'MX-INPUT') return 'bottom';
    return 'bottom-start';
  }

  get isSubMenu() {
    return this.element.hasAttribute('slot') && this.element.getAttribute('slot') === 'subMenu';
  }

  render() {
    return (
      <Host class={'mx-menu block z-50 w-screen sm:w-auto max-w-full' + (this.isOpen ? '' : ' hidden')} role="menu">
        <div ref={el => (this.menuElem = el)} class="flex flex-col py-8 z-10 shadow-9 rounded-lg" role="menu">
          <div
            ref={el => (this.scrollElem = el)}
            class="scroll-wrapper overflow-y-auto overflow-x-hidden max-h-216 overscroll-contain"
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
