import { Component } from '@angular/core';
import { ArticleCommentsComponent } from '../components/article-comments.component';

@Component({
  selector: 'app-dv-step2',
  standalone: true,
  imports: [ArticleCommentsComponent],
  template: `
    <div class="demo-container">
      <h2>Step 2: Loading / Error / Placeholder</h2>
      <p class="step-description">Configure what to show while the content is loading, if it fails, or before it's triggered.</p>
      <div class="demo-box">
        <article>
          <p>
            Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
            feature that makes defer loading content the easiest and most ergonomic it could possibly
            be.
          </p>
        </article>

        @defer {
          <app-article-comments />
        } @placeholder (minimum 1s) {
          <div class="placeholder-box">
            <p>💬 Comments will appear here...</p>
          </div>
        } @loading (minimum 1s; after 500ms) {
          <div class="loading-box">
            <p>⏳ Loading comments from the network...</p>
          </div>
        } @error {
          <div class="error-box">
            <p>❌ Failed to load comments. Try refreshing.</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    article p { line-height: 1.7; margin-bottom: 16px; color: #334155; }
    .placeholder-box, .loading-box, .error-box {
      margin-top: 24px; padding: 20px; border-radius: 8px; border: 1px dashed #cbd5e1; text-align: center; color: #64748b;
    }
    .loading-box { background: #f0f9ff; color: #0369a1; border-style: solid; border-color: #bae6fd; }
    .error-box { background: #fef2f2; color: #b91c1c; border-style: solid; border-color: #fecaca; }
  `]
})
export class Step2Component {}
