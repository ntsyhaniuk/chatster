import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[custom-highlight]'
})

export class HighlightDirective {

  private isHighlighted: boolean = false;

  constructor(private el: ElementRef) {}

  @HostListener('click')  public highlightToggle(): void {
    this.isHighlighted = !this.isHighlighted;
    this.el.nativeElement.style.backgroundColor = this.isHighlighted ? '#3b3e99' : null;
  }
}
