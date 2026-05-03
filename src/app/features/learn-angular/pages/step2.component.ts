import { Component } from '@angular/core';

@Component({
  selector: 'app-la-step2',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 2: Updating the Component Class</h2>
      <p class="step-description">Components have a class where you define properties and methods. The template can read them using interpolation.</p>
      <div class="demo-box">
        <p>City: {{ city }}</p>
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
      font-size: 1.1rem;
    }
  `]
})
export class Step2Component {
  city = 'San Francisco';
}
