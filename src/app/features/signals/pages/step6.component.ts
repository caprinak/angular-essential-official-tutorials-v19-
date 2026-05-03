import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  template: `
    <label class="checkbox-label">
      <input type="checkbox" [checked]="checked()" (change)="onToggle()" />
      {{ label() }}
    </label>
  `,
  styles: [`
    .checkbox-label { display: flex; align-items: center; gap: 8px; padding: 8px 0; cursor: pointer; font-weight: 500; }
    input[type="checkbox"] { width: 18px; height: 18px; cursor: pointer; }
  `]
})
export class CustomCheckboxComponent {
  checked = signal(false);
  label = signal('');

  onToggle() {
    this.checked.set(!this.checked());
  }
}

@Component({
  selector: 'app-sig-step6',
  standalone: true,
  imports: [CustomCheckboxComponent],
  template: `
    <div class="demo-container">
      <h2>Step 6: Two-Way Binding with Model Signals</h2>
      <p class="step-description">Use <code>model()</code> for two-way binding between parent and child components.</p>
      <div class="demo-box">
        <app-custom-checkbox #terms />
        <app-custom-checkbox #notifs />

        <div class="info">
          <p>Terms agreed: <strong>{{ terms.checked() ? 'Yes' : 'No' }}</strong></p>
          <p>Notifications: <strong>{{ notifs.checked() ? 'Enabled' : 'Disabled' }}</strong></p>
        </div>
        <div class="controls">
          <button (click)="terms.checked.set(!terms.checked())">Toggle Terms from Parent</button>
          <button (click)="terms.checked.set(false); notifs.checked.set(false)">Reset All</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    .info { padding: 12px; background: #f8fafc; border-radius: 8px; margin: 16px 0; }
    .info p { margin: 4px 0; }
    .controls { display: flex; gap: 8px; flex-wrap: wrap; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; background: #3f51b5; color: white; }
    button:hover { background: #303f9f; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step6Component {}
