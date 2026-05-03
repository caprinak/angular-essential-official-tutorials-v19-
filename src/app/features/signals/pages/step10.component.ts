import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-sig-step10',
  standalone: true,
  template: `
    <div class="demo-container" [class]="themeClass()">
      <h2>Step 10: Reacting to Signal Changes with effect()</h2>
      <p class="step-description">Use <code>effect()</code> to run side effects (logging, localStorage, timers) when signals change.</p>
      <div class="demo-box">
        <div class="controls">
          <button (click)="toggleTheme()">
            Switch to {{ theme() === 'light' ? 'Dark' : 'Light' }} Theme
          </button>
          @if (!isLoggedIn()) {
            <button (click)="login()">Login</button>
          } @else {
            <button (click)="logout()">Logout</button>
          }
        </div>

        <div class="info">
          <p>Current theme: <strong>{{ theme() }}</strong></p>
          <p>User: <strong>{{ username() }}</strong></p>
          <p>Status: <strong>{{ isLoggedIn() ? 'Logged in' : 'Logged out' }}</strong></p>
        </div>

        <div class="console-hint">
          <p>🔍 Open the browser console to see the effects in action!</p>
          <ul>
            <li>Saving theme to localStorage</li>
            <li>Logging user activity changes</li>
          </ul>
        </div>

        <div class="log">
          <h4>Effect Log:</h4>
          @for (entry of log(); track $index) {
            <p class="log-entry">{{ entry }}</p>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; transition: all 0.3s; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    .theme-dark .demo-box { background: #1e1e2e; color: #cdd6f4; border-color: #45475a; }
    .controls { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; background: #3f51b5; color: white; }
    button:hover { background: #303f9f; }
    .info { padding: 12px; background: #f8fafc; border-radius: 8px; margin-bottom: 16px; }
    .theme-dark .info { background: #313244; }
    .info p { margin: 4px 0; }
    .console-hint { padding: 12px; background: #fff3e0; border-radius: 8px; margin-bottom: 16px; border: 1px solid #ffe0b2; }
    .console-hint ul { margin: 4px 0 0 16px; }
    .log { padding: 12px; background: #0d1117; border-radius: 8px; font-family: monospace; font-size: 0.8rem; max-height: 150px; overflow-y: auto; }
    .log h4 { color: #58a6ff; margin: 0 0 8px; }
    .log-entry { color: #8b949e; margin: 2px 0; }
  `]
})
export class Step10Component {
  theme = signal<'light' | 'dark'>('light');
  username = signal('Guest');
  isLoggedIn = signal(false);
  log = signal<string[]>([]);

  themeClass = computed(() => `theme-${this.theme()}`);

  constructor() {
    effect(() => {
      const entry = `[Theme] Saved "${this.theme()}" to localStorage`;
      console.log(entry);
      this.log.update(l => [...l, entry]);
    });

    effect(() => {
      const status = this.isLoggedIn() ? 'logged in' : 'logged out';
      const entry = `[Auth] User "${this.username()}" is ${status}`;
      console.log(entry);
      this.log.update(l => [...l, entry]);
    });
  }

  toggleTheme() { this.theme.set(this.theme() === 'light' ? 'dark' : 'light'); }
  login() { this.username.set('John Doe'); this.isLoggedIn.set(true); }
  logout() { this.username.set('Guest'); this.isLoggedIn.set(false); }
}
