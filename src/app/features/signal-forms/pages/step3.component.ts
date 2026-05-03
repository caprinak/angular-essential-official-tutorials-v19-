import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-sf-step3',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="demo-container">
      <h2>Step 3: Add Validation</h2>
      <p class="step-description">Derive validation state from the form model signal using <code>computed()</code>.</p>
      <div class="demo-box">
        <form>
          <div class="field">
            <label>Email</label>
            <input type="email" [ngModel]="loginModel().email" name="email"
                   (ngModelChange)="updateField('email', $event)" />
            @if (emailErrors().length > 0 && touched().email) {
              <div class="error">
                @for (err of emailErrors(); track err) {
                  <span>{{ err }}</span>
                }
              </div>
            }
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" [ngModel]="loginModel().password" name="password"
                   (ngModelChange)="updateField('password', $event)"
                   (blur)="markTouched('password')" />
            @if (passwordErrors().length > 0 && touched().password) {
              <div class="error">
                @for (err of passwordErrors(); track err) {
                  <span>{{ err }}</span>
                }
              </div>
            }
          </div>
          <div class="field checkbox">
            <input type="checkbox" [ngModel]="loginModel().rememberMe" name="rememberMe"
                   (ngModelChange)="updateField('rememberMe', $event)" />
            <label>Remember me</label>
          </div>
        </form>
        <div class="form-debug">
          <h4>Validation Status:</h4>
          <p>Form valid: <strong [class.valid]="isFormValid()" [class.invalid]="!isFormValid()">{{ isFormValid() ? 'Yes' : 'No' }}</strong></p>
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
    .error { color: #d32f2f; font-size: 0.85rem; margin-top: 4px; }
    .error span { display: block; }
    .form-debug { padding: 12px; background: #f5f5f5; border-radius: 8px; font-family: monospace; font-size: 0.85rem; margin-top: 16px; }
    .form-debug h4 { margin: 0 0 8px; color: #666; }
    .valid { color: #2e7d32; }
    .invalid { color: #c62828; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step3Component {
  loginModel = signal<LoginData>({ email: '', password: '', rememberMe: false });
  touched = signal<Record<string, boolean>>({ email: false, password: false });

  emailErrors = computed(() => {
    const errors: string[] = [];
    const email = this.loginModel().email;
    if (!email) errors.push('Email is required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email address');
    return errors;
  });

  passwordErrors = computed(() => {
    const errors: string[] = [];
    if (!this.loginModel().password) errors.push('Password is required');
    return errors;
  });

  isFormValid = computed(() => this.emailErrors().length === 0 && this.passwordErrors().length === 0);

  updateField(field: keyof LoginData, value: any) {
    this.loginModel.update(m => ({ ...m, [field]: value }));
    this.touched.update(t => ({ ...t, [field]: true }));
  }

  markTouched(field: string) {
    this.touched.update(t => ({ ...t, [field]: true }));
  }
}
