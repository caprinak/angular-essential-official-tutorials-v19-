import { Component } from '@angular/core';

@Component({
  selector: 'app-la-step4',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 4: Control Flow — &#64;if</h2>
      <p class="step-description">Use the &#64;if block to conditionally show or hide elements based on a boolean expression.</p>
      <div class="demo-box">
        <button (click)="isLoggedIn = !isLoggedIn" class="toggle-btn">
          Toggle Login
        </button>

        @if (isLoggedIn) {
          <p class="status online">✅ Welcome back, user!</p>
        } @else {
          <p class="status offline">🔒 Please log in to continue.</p>
        }
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
    .toggle-btn {
      padding: 8px 20px;
      border: none;
      border-radius: 6px;
      background: #3f51b5;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
      margin-bottom: 16px;
    }
    .toggle-btn:hover { background: #303f9f; }
    .status { font-size: 1rem; padding: 12px; border-radius: 8px; }
    .online { background: #e8f5e9; color: #2e7d32; }
    .offline { background: #ffebee; color: #c62828; }
  `]
})
export class Step4Component {
  isLoggedIn = false;
}
