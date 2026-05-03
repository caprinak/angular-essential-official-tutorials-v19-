import { Component } from '@angular/core';

@Component({
  selector: 'app-la-step5',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 5: Control Flow — &#64;for</h2>
      <p class="step-description">Use &#64;for to iterate over a collection and render a template for each item.</p>
      <div class="demo-box">
        <ul class="user-list">
          @for (user of users; track user.id) {
            <li class="user-item">
              <span class="user-name">{{ user.name }}</span>
              <span class="user-id">#{{ user.id }}</span>
            </li>
          } @empty {
            <li class="empty">No users found.</li>
          }
        </ul>
        <button (click)="addUser()" class="add-btn">+ Add User</button>
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
    .user-list { list-style: none; padding: 0; margin: 0 0 16px 0; }
    .user-item {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 14px; border-radius: 8px; margin-bottom: 6px;
      background: #f8fafc; border: 1px solid #e2e8f0;
    }
    .user-name { font-weight: 500; }
    .user-id { color: var(--text-muted); font-size: 0.8125rem; }
    .empty { color: var(--text-muted); padding: 12px; text-align: center; }
    .add-btn {
      padding: 8px 20px; border: none; border-radius: 6px;
      background: #3f51b5; color: white; font-weight: 600;
      cursor: pointer; transition: background 0.2s;
    }
    .add-btn:hover { background: #303f9f; }
  `]
})
export class Step5Component {
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  private nextId = 4;

  addUser(): void {
    const names = ['Diana', 'Eve', 'Frank', 'Grace', 'Hank'];
    const name = names[Math.floor(Math.random() * names.length)];
    this.users = [...this.users, { id: this.nextId++, name }];
  }
}
