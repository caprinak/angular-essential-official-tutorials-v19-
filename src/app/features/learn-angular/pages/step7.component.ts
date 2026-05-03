import { Component } from '@angular/core';

@Component({
  selector: 'app-la-step7',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 7: Event Handling</h2>
      <p class="step-description">Use parentheses to listen to DOM events and call component methods.</p>
      <div class="demo-box">
        <section (mouseover)="showSecretMessage()" class="hover-zone">
          There's a secret message for you, hover to reveal:
          <span class="secret">{{ message }}</span>
        </section>
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
    .hover-zone {
      padding: 24px; border-radius: 8px; background: #f0f4ff;
      border: 2px dashed #94a3b8; cursor: pointer; text-align: center; font-size: 1.1rem;
    }
    .hover-zone:hover { border-color: #3f51b5; background: #e8eaf6; }
    .secret { display: block; margin-top: 12px; font-size: 1.5rem; font-weight: 700; color: #3f51b5; }
  `]
})
export class Step7Component {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}
