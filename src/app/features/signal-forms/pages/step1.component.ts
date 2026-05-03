import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-sf-step1',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="demo-container">
      <h2>Step 1: Setup Form Model</h2>
      <p class="step-description">Create a signal-based form model. We use <code>signal()</code> to hold our form data as a reactive model.</p>
      <div class="demo-box">
        <form>
          <div class="field">
            <label>Email</label>
            <input type="email" [value]="loginModel().email" disabled />
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" [value]="loginModel().password" disabled />
          </div>
          <div class="field checkbox">
            <input type="checkbox" [checked]="loginModel().rememberMe" disabled />
            <label>Remember me</label>
          </div>
        </form>
        <div class="form-debug">
          <h4>Current Form Model (signal):</h4>
          <pre>{{ loginModel() | json }}</pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 540px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    form { margin-bottom: 16px; }
    .field { margin-bottom: 12px; }
    .field label { display: block; font-weight: 500; margin-bottom: 4px; }
    .field input[type="email"], .field input[type="password"] { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; }
    .checkbox { display: flex; align-items: center; gap: 8px; }
    .checkbox label { margin: 0; }
    .form-debug { padding: 12px; background: #f5f5f5; border-radius: 8px; font-family: monospace; font-size: 0.85rem; }
    .form-debug h4 { margin: 0 0 8px; color: #666; font-size: 0.9rem; }
    .form-debug pre { margin: 0; white-space: pre-wrap; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step1Component {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });
}
