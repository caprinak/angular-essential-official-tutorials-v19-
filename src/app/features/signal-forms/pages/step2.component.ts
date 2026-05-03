import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-sf-step2',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  template: `
    <div class="demo-container">
      <h2>Step 2: Connect Form Template</h2>
      <p class="step-description">Bind form inputs to the model using two-way binding. Changes in the inputs update the signal model in real time.</p>
      <div class="demo-box">
        <form>
          <div class="field">
            <label>Email</label>
            <input type="email" [(ngModel)]="loginModel().email" name="email"
                   (ngModelChange)="updateField('email', $event)" />
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" [(ngModel)]="loginModel().password" name="password"
                   (ngModelChange)="updateField('password', $event)" />
          </div>
          <div class="field checkbox">
            <input type="checkbox" [(ngModel)]="loginModel().rememberMe" name="rememberMe"
                   (ngModelChange)="updateField('rememberMe', $event)" />
            <label>Remember me</label>
          </div>
        </form>
        <div class="form-debug">
          <h4>Current Form Values:</h4>
          <p>Email: {{ loginModel().email || '(empty)' }}</p>
          <p>Password: {{ loginModel().password ? '••••••••' : '(empty)' }}</p>
          <p>Remember me: {{ loginModel().rememberMe ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 540px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    .field { margin-bottom: 12px; }
    .field label { display: block; font-weight: 500; margin-bottom: 4px; }
    .field input[type="email"], .field input[type="password"] { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; }
    .checkbox { display: flex; align-items: center; gap: 8px; }
    .checkbox label { margin: 0; }
    .form-debug { padding: 12px; background: #f5f5f5; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 16px; }
    .form-debug h4 { margin: 0 0 8px; color: #666; font-size: 0.9rem; }
    .form-debug p { margin: 4px 0; color: #333; }
  `]
})
export class Step2Component {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  updateField(field: keyof LoginData, value: any) {
    this.loginModel.update(model => ({ ...model, [field]: value }));
  }
}
