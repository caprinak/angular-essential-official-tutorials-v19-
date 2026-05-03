import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="coming-soon">
      <div class="coming-soon-icon">🚧</div>
      <h2>{{ title || 'Coming Soon' }}</h2>
      <p>This tutorial step is under construction. Check back later!</p>
    </div>
  `,
  styles: [`
    .coming-soon {
      text-align: center;
      padding: 80px 40px;
    }
    .coming-soon-icon {
      font-size: 3rem;
      margin-bottom: 16px;
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--text-main);
    }
    p {
      color: var(--text-muted);
      font-size: 0.875rem;
    }
  `]
})
export class ComingSoonComponent {
  @Input() title = '';
}
