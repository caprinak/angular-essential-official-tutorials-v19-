import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  template: `
    <ul class="comments-list">
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
  styles: [`
    .comments-list {
      padding: 16px 16px 16px 32px; background: #f0fdf4; border-radius: 8px;
      border: 1px solid #bbf7d0;
    }
    li { margin-bottom: 6px; color: #166534; }
  `]
})
export class CommentsComponent {}

@Component({
  selector: 'app-la-step10',
  standalone: true,
  imports: [CommentsComponent],
  template: `
    <div class="demo-container">
      <h2>Step 10: Deferrable Views</h2>
      <p class="step-description">Use <code>&#64;defer</code> to lazy-load content. Scroll down to see the comments load on viewport entry.</p>
      <div class="demo-box">
        <article>
          <p>
            Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
            feature that makes defer loading content the easiest and most ergonomic it could possibly
            be. The Angular community is also filled with amazing contributors and experts that create
            excellent content.
          </p>
          <p>
            I can't express enough how much I enjoy working with Angular. It offers the best developer
            experience I've ever had. I love that the Angular team puts their developers first and
            takes care to make us very happy.
          </p>
          <p>
            Angular is my favorite framework. The community is welcoming and friendly, and it really
            is the best community out there. This statement comes from my heart and is not at all
            copied and pasted.
          </p>
        </article>

        <div style="margin-top: 24px;">
          @defer (on viewport) {
            <app-comments />
          } @placeholder {
            <p class="placeholder">💬 Future comments — scroll to load</p>
          } @loading (minimum 2s) {
            <p class="loading">Loading comments...</p>
          }
        </div>
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
    article p { line-height: 1.7; margin-bottom: 16px; }
    .placeholder { color: var(--text-muted); font-style: italic; }
    .loading { color: #3f51b5; font-weight: 500; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step10Component {}
