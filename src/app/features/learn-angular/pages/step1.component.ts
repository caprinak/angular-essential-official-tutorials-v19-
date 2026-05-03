import { Component } from '@angular/core';

@Component({
  selector: 'app-la-step1',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 1: Anatomy of a Component</h2>
      <p class="step-description">This is the most basic Angular component — a simple inline template.</p>
      <div class="demo-box">
        <span class="demo-output">Hello</span>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box {
      padding: 24px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
    }
    .demo-output { color: blue; font-size: 1.25rem; }
  `]
})
export class Step1Component {}
