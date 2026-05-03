import { Component, Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective {
  color = input<string>('yellow');
  intensity = input<number>(0.3);

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.hexToRgba(this.color(), this.intensity());
    this.el.nativeElement.style.transition = 'background-color 0.2s';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

  private hexToRgba(color: string, alpha: number): string {
    const colors: Record<string, string> = {
      blue: `rgba(63, 81, 181, ${alpha})`,
      green: `rgba(76, 175, 80, ${alpha})`,
      yellow: `rgba(255, 235, 59, ${alpha})`,
      red: `rgba(244, 67, 54, ${alpha})`,
    };
    return colors[color] || `rgba(158, 158, 158, ${alpha})`;
  }
}

@Component({
  selector: 'app-sig-step8',
  standalone: true,
  imports: [HighlightDirective],
  template: `
    <div class="demo-container">
      <h2>Step 8: Using Signals with Directives</h2>
      <p class="step-description">Use signal-based <code>input()</code> in custom directives for reactive attribute binding.</p>
      <div class="demo-box">
        <div highlight color="blue" [intensity]="0.2" class="highlight-box">
          Hover me — Blue highlight
        </div>
        <div highlight color="green" [intensity]="0.4" class="highlight-box">
          Hover me — Green highlight
        </div>
        <div highlight color="yellow" [intensity]="0.6" class="highlight-box">
          Hover me — Yellow highlight
        </div>
        <div highlight color="red" [intensity]="0.3" class="highlight-box">
          Hover me — Red highlight
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); display: flex; flex-direction: column; gap: 8px; }
    .highlight-box { padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; cursor: pointer; font-weight: 500; text-align: center; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step8Component {}
