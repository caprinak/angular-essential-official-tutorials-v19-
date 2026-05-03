import { Component, signal, viewChild, ElementRef, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-practices',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="demo-container">
      <h2>Best Practices from angular.dev (adev)</h2>
      <p class="step-description">Patterns used by the Angular core team to build their own documentation site.</p>

      <div class="card">
        <h3>1. Signal-Based View Queries</h3>
        <p>Instead of <code>&#64;ViewChild('ref')</code>, use <code>viewChild('ref')</code> which returns a Signal.</p>
        <div class="demo-area">
          <input #searchBox type="text" placeholder="Type something..." (input)="onInput()" />
          <p>Input Width Signal: <b>{{ inputWidth() }}px</b></p>
          <div class="ref-indicator" [style.width.px]="inputWidth()"></div>
        </div>
      </div>

      <div class="card">
        <h3>2. Derived State with computed()</h3>
        <p>Adev uses <code>computed</code> extensively to keep state logic pure and performant.</p>
        <div class="demo-area">
          <button (click)="count.set(count() + 1)">Count: {{ count() }}</button>
          <p>Double Count (Computed): <b>{{ doubleCount() }}</b></p>
        </div>
      </div>

      <div class="card">
        <h3>3. Standardized CSS Variables</h3>
        <p>Adev relies on a strict set of CSS tokens for theming.</p>
        <div class="theme-grid">
          <div class="color-box primary">Primary</div>
          <div class="color-box secondary">Secondary</div>
          <div class="color-box warning">Warning</div>
          <div class="color-box danger">Danger</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 800px; }
    .card { background: white; border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; margin-bottom: 24px; }
    .demo-area { margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1; }
    input { padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1; width: 100%; margin-bottom: 12px; }
    .ref-indicator { height: 4px; background: var(--primary-color); border-radius: 2px; transition: width 0.2s; }
    .theme-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 16px; }
    .color-box { padding: 12px; border-radius: 6px; text-align: center; color: white; font-weight: 600; font-size: 0.8rem; }
    .primary { background: #3f51b5; }
    .secondary { background: #607d8b; }
    .warning { background: #ff9800; }
    .danger { background: #f44336; }
  `]
})
export class BestPracticesComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  searchBox = viewChild<ElementRef<HTMLInputElement>>('searchBox');
  inputWidth = signal(0);

  onInput() {
    const el = this.searchBox()?.nativeElement;
    if (el) {
      this.inputWidth.set(el.offsetWidth);
    }
  }
}
