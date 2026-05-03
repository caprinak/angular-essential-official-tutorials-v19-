import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `<p class="user-display">The user's name is <strong>{{ name() }}</strong></p>`,
  styles: [`
    .user-display {
      padding: 12px 16px; border-radius: 8px;
      background: #e8f5e9; color: #2e7d32; font-size: 1.1rem;
    }
  `]
})
export class UserComponent {
  readonly name = input<string>();
}

@Component({
  selector: 'app-la-step8',
  standalone: true,
  imports: [UserComponent],
  template: `
    <div class="demo-container">
      <h2>Step 8: &#64;Input with Signal Inputs</h2>
      <p class="step-description">Use <code>input()</code> to receive data from a parent component via signal-based inputs.</p>
      <div class="demo-box">
        <app-user name="Simran" />
        <app-user name="coderThanThanh" />
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
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step8Component {}
