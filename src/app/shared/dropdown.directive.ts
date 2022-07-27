import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) appDropdown(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;

    // if (this.elementRef.nativeElement.classList.contains('open')) {
    //     this.renderer.addClass(this.elementRef, 'open');
    // } else {
    //   this.renderer.addClass(this.elementRef, 'open');
    // }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
