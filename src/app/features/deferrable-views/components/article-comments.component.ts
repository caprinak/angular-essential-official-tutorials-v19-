import { Component } from '@angular/core';

@Component({
  selector: 'app-article-comments',
  standalone: true,
  template: `
    <div class="comments-section">
      <h3>Comments</h3>
      <ul>
        <li>Amazing post! Angular is evolving fast.</li>
        <li>I love the new &#64;defer syntax, it's so much cleaner than manually managing lazy loading.</li>
        <li>Can't wait to try this out in my production apps.</li>
      </ul>
    </div>
  `,
  styles: [`
    .comments-section {
      margin-top: 24px;
      padding: 16px;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }
    h3 { margin-top: 0; color: #334155; }
    ul { padding-left: 20px; color: #475569; }
    li { margin-bottom: 8px; }
  `]
})
export class ArticleCommentsComponent {}
