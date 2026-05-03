import { Component } from '@angular/core';

@Component({
  selector: 'app-fa-step1',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 1: Hello World</h2>
      <p class="step-description">The starting point of the Homes app. A simple component with a title.</p>
      <div class="demo-box">
        <main>
          <header class="brand-name">
            <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>
          <section class="content">
            <h1>Hello World</h1>
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 800px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; }
    .demo-box { background: white; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); }
    .brand-name { padding: 12px; border-bottom: 1px solid #e2e8f0; }
    .brand-logo { height: 30px; }
    .content { padding: 24px; }
    h1 { color: #3f51b5; margin: 0; }
  `]
})
export class Step1Component {}
