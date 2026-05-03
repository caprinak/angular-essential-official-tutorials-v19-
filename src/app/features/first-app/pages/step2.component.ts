import { Component } from '@angular/core';

@Component({
  selector: 'app-home-simple',
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- Housing locations will go here -->
    </section>
  `,
  styles: [`
    input[type="text"] { border: solid 1px var(--primary-color); padding: 10px; border-radius: 8px; margin-right: 4px; display: inline-block; width: 30%; }
    button { padding: 10px; border-radius: 8px; border: none; background-color: var(--primary-color); color: white; cursor: pointer; }
    .results { display: grid; column-gap: 14px; row-gap: 14px; grid-template-columns: repeat(auto-fill, minmax(400px, 400px)); margin-top: 50px; justify-content: center; }
  `]
})
export class HomeSimpleComponent {}

@Component({
  selector: 'app-fa-step2',
  standalone: true,
  imports: [HomeSimpleComponent],
  template: `
    <div class="demo-container">
      <h2>Step 2: Home Component</h2>
      <p class="step-description">Create a Home component to contain the main search interface.</p>
      <div class="demo-box">
        <main>
          <header class="brand-name">
            <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>
          <section class="content">
            <app-home-simple />
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 800px; }
    .demo-box { background: white; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); --primary-color: #3f51b5; }
    .brand-name { padding: 12px; border-bottom: 1px solid #e2e8f0; }
    .brand-logo { height: 30px; }
    .content { padding: 24px; }
  `]
})
export class Step2Component {}
