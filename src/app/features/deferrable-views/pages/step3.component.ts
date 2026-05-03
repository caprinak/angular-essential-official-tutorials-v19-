import { Component } from '@angular/core';
import { ArticleCommentsComponent } from '../components/article-comments.component';

@Component({
  selector: 'app-dv-step3',
  standalone: true,
  imports: [ArticleCommentsComponent],
  template: `
    <div class="demo-container">
      <h2>Step 3: Defer Triggers</h2>
      <p class="step-description">Use <code>on</code> and <code>when</code> triggers to control exactly when lazy content is loaded.</p>
      <div class="demo-box">
        <article>
          <p>
            Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
            feature that makes defer loading content the easiest and most ergonomic it could possibly
            be.
          </p>
        </article>

        <div class="controls">
          <button type="button" #showComments class="primary-btn">Click to Show Comments</button>
          <span class="hint">Or hover over this area!</span>
        </div>

        @defer (on hover; on interaction(showComments)) {
          <app-article-comments />
        } @placeholder (minimum 500ms) {
          <div class="placeholder-box">
            <p>Hover me OR click the button above to load comments.</p>
          </div>
        } @loading (minimum 1s) {
          <div class="loading-box">
            <p>⏳ Loading...</p>
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
    .controls { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
    .primary-btn {
      padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;
    }
    .hint { font-size: 0.9rem; color: #64748b; font-style: italic; }
    .placeholder-box {
      padding: 32px; border-radius: 8px; border: 2px dashed #e2e8f0; text-align: center; color: #64748b; background: #f8fafc;
      transition: all 0.2s; cursor: help;
    }
    .placeholder-box:hover { border-color: #3b82f6; background: #eff6ff; }
    .loading-box { padding: 20px; text-align: center; color: #3b82f6; font-weight: 500; }
  `]
})
export class Step3Component {}
