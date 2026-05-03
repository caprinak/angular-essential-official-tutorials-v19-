import { Component } from '@angular/core';
import { ArticleCommentsComponent } from '../components/article-comments.component';

@Component({
  selector: 'app-dv-step1',
  standalone: true,
  imports: [ArticleCommentsComponent],
  template: `
    <div class="demo-container">
      <h2>Step 1: What Are Deferrable Views</h2>
      <p class="step-description">Use <code>&#64;defer</code> to lazy-load parts of your template automatically.</p>
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
        }
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    article p { line-height: 1.7; margin-bottom: 16px; color: var(--text-main); }
  `]
})
export class Step1Component {}
