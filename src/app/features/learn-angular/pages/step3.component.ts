import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div class="user-card">
      <span class="avatar">👤</span>
      <div>
        <p class="name">{{ username }}</p>
        <p class="role">Angular Developer</p>
      </div>
    </div>
  `,
  styles: [`
    .user-card {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .avatar { font-size: 2rem; }
    .name { font-weight: 600; margin-bottom: 2px; }
    .role { color: var(--text-muted); font-size: 0.875rem; }
  `]
})
export class UserCardComponent {
  username = 'coderThanThanh';
}

@Component({
  selector: 'app-la-step3',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 3: Composing Components</h2>
      <p class="step-description">You can nest components by adding them to the imports array and using their selector in the template.</p>
      <div class="demo-box">
        <app-user-card />
      </div>
    </div>
  `,
  imports: [UserCardComponent],
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box {
      padding: 24px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
    }
  `]
})
export class Step3Component {}
