import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
  template: `
    <div class="demo-container">
      <h2>Custom Pipes Demo</h2>
      <p class="step-description">Reusable pipes for data transformation, following Angular's performance-oriented architecture.</p>

      <div class="card">
        <h3>1. TimeAgo Pipe</h3>
        <p>A simple pipe that converts dates into human-readable strings.</p>
        
        <div class="demo-area">
          <ul class="activity-feed">
            <li *ngFor="let item of feed">
              <span class="user">{{ item.user }}</span> {{ item.action }}
              <span class="time">{{ item.date | timeAgo }}</span>
            </li>
          </ul>
          <button (click)="addActivity()">Simulate New Activity</button>
        </div>
      </div>

      <div class="card">
        <h3>2. Best Practice: Pure Pipes</h3>
        <p>Notice how the <code>timeAgo</code> pipe is <code>pure</code> by default. It only re-calculates when the input value (the date) changes, keeping your app blazing fast.</p>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 800px; }
    .card { background: white; border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; margin-bottom: 24px; }
    .demo-area { margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1; }
    .activity-feed { list-style: none; padding: 0; margin-bottom: 16px; }
    .activity-feed li { padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
    .user { font-weight: 700; color: var(--primary-color); }
    .time { color: #64748b; font-size: 0.85rem; margin-left: 8px; }
    button { padding: 8px 16px; background: var(--primary-color); color: white; border: none; border-radius: 6px; cursor: pointer; }
  `]
})
export class CustomPipesComponent {
  feed = [
    { user: 'Alice', action: 'joined the group', date: new Date(Date.now() - 1000 * 60 * 5) },
    { user: 'Bob', action: 'posted a comment', date: new Date(Date.now() - 1000 * 60 * 60 * 2) },
    { user: 'Charlie', action: 'shared a link', date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3) },
  ];

  addActivity() {
    this.feed.unshift({
      user: 'You',
      action: 'clicked the button',
      date: new Date()
    });
  }
}
