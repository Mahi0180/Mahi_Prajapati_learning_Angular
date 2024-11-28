import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  // Input property to customize the highlight color
  @Input('appHighlightOnFocus') focusColor: string = 'lightblue'; // Default color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Apply highlight when the element gains focus
  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'outline', `2px solid ${this.focusColor}`);
  }

  // Remove highlight when the element loses focus
  @HostListener('blur') onBlur() {
    this.renderer.removeStyle(this.el.nativeElement, 'outline');
  }
}
