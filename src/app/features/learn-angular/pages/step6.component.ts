import { Component } from '@angular/core';

@Component({
  selector: 'app-la-step6',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 6: Property Binding</h2>
      <p class="step-description">Use square brackets to bind a DOM property to a component class field.</p>
      <div class="demo-box">
        <div [contentEditable]="isEditable" class="editable-box">
          Click here and type! This div is editable because [contentEditable] is bound to <code>true</code>.
        </div>
        <button (click)="isEditable = !isEditable" class="toggle-btn">
          Toggle Editable (currently: {{ isEditable }})
        </button>
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
    .editable-box {
      padding: 16px; border: 2px dashed #94a3b8; border-radius: 8px;
      margin-bottom: 16px; min-height: 60px; outline: none;
    }
    .editable-box:focus { border-color: #3f51b5; background: #f0f4ff; }
    .toggle-btn {
      padding: 8px 20px; border: none; border-radius: 6px;
      background: #3f51b5; color: white; font-weight: 600; cursor: pointer;
    }
    .toggle-btn:hover { background: #303f9f; }
  `]
})
export class Step6Component {
  isEditable = true;
}
