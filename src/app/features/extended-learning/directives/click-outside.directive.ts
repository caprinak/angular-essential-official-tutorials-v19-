import { Directive, ElementRef, Output, EventEmitter, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  private elementRef = inject(ElementRef);
  @Output() clickOutside = new EventEmitter<void>();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
