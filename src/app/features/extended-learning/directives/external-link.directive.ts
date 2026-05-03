import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: 'a[href]',
  standalone: true
})
export class ExternalLinkDirective implements OnChanges {
  @Input() href!: string;

  @HostBinding('attr.target') target: string | null = null;
  @HostBinding('attr.rel') rel: string | null = null;

  ngOnChanges() {
    if (this.isExternal()) {
      this.target = '_blank';
      this.rel = 'noopener noreferrer';
    } else {
      this.target = null;
      this.rel = null;
    }
  }

  private isExternal() {
    return this.href && (this.href.startsWith('http') || this.href.startsWith('//'));
  }
}
