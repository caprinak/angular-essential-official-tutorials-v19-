import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-architecture-patterns',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="demo-container">
      <h2>Advanced Architecture Patterns</h2>
      <p class="step-description">Migration of core patterns from the official <code>angular.dev</code> codebase.</p>

      <div class="card">
        <h3>1. Custom Title Strategy</h3>
        <p>Instead of setting titles manually in every component, <code>adev</code> uses a global <code>TitleStrategy</code>.</p>
        <div class="demo-area">
          <p>Current Page Title: <b>{{ title.getTitle() }}</b></p>
          <span class="hint">Look at your browser tab! It was formatted automatically by <code>LabTitleStrategy</code>.</span>
        </div>
      </div>

      <div class="card">
        <h3>2. The 'inject()' Pattern</h3>
        <p>Adev uses the <code>inject()</code> function exclusively for dependency injection. This makes code cleaner and easier to refactor than constructor-based DI.</p>
        <pre><code>// Adev Style
private title = inject(Title);

// Legacy Style (Avoid in new code)
constructor(private title: Title) &#123; &#125;</code></pre>
      </div>

      <div class="card">
        <h3>3. Dark Mode Management</h3>
        <p>We've migrated the <code>ThemeService</code> logic from adev. It handles:</p>
        <ul>
          <li>Persistence in LocalStorage.</li>
          <li>System preference detection (prefers-color-scheme).</li>
          <li>Reactive UI updates using Signals.</li>
        </ul>
        <div class="demo-area">
          <p>Try the toggle in the header to see it in action!</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 800px; }
    .card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; margin-bottom: 24px; }
    .demo-area { margin-top: 16px; padding: 16px; background: rgba(0,0,0,0.02); border-radius: 8px; border: 1px dashed var(--border-color); }
    pre { background: #1e293b; color: #f8fafc; padding: 16px; border-radius: 8px; overflow-x: auto; margin-top: 12px; font-size: 0.9rem; border: 1px solid #334155; }
    ul { padding-left: 20px; margin-top: 12px; }
    li { margin-bottom: 8px; }
    .hint { font-size: 0.8rem; color: #64748b; font-style: italic; display: block; margin-top: 8px; }
  `]
})
export class ArchitecturePatternsComponent {
  title = inject(Title);
}
