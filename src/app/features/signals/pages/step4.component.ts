import { Component, computed, signal } from '@angular/core';

interface UserData {
  name: string;
  email: string;
}

const MOCK_USERS: Record<number, UserData> = {
  1: { name: 'Alice Johnson', email: 'alice@example.com' },
  2: { name: 'Bob Smith', email: 'bob@example.com' },
};

function getUserData(id: number): Promise<UserData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = MOCK_USERS[id];
      if (user) resolve(user);
      else reject(new Error(`User ${id} not found`));
    }, 800);
  });
}

/**
 * Step 4: Async Data with Signals.
 * The official tutorial uses `resource()` (Angular 19 experimental).
 * We simulate it with manual signal management for stability.
 */
@Component({
  selector: 'app-sig-step4',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 4: Managing Async Data with Signals</h2>
      <p class="step-description">Use signals to manage loading states, errors, and async data fetching.</p>
      <div class="demo-box">
        <div class="controls">
          <button (click)="loadUser(1)">Load User 1</button>
          <button (click)="loadUser(2)">Load User 2</button>
          <button (click)="loadUser(999)">Load Invalid User</button>
        </div>
        <div class="status">
          @if (isLoading()) {
            <p class="loading">Loading user...</p>
          } @else if (error()) {
            <p class="error">Error: {{ error() }}</p>
          } @else if (userData()) {
            <div class="user-info">
              <h3>{{ userData()!.name }}</h3>
              <p>{{ userData()!.email }}</p>
            </div>
          } @else {
            <p class="hint">Click a button to load user data.</p>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    .controls { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; background: #3f51b5; color: white; }
    button:hover { background: #303f9f; }
    .status { min-height: 60px; }
    .loading { color: #3f51b5; font-weight: 500; }
    .error { color: #c62828; padding: 12px; background: #ffebee; border-radius: 8px; }
    .user-info { padding: 16px; background: #e8f5e9; border-radius: 8px; }
    .user-info h3 { margin: 0 0 4px; color: #2e7d32; }
    .user-info p { margin: 0; color: #388e3c; }
    .hint { color: var(--text-muted); font-style: italic; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step4Component {
  userData = signal<UserData | null>(null);
  isLoading = signal(false);
  error = signal<string | null>(null);

  async loadUser(id: number) {
    this.isLoading.set(true);
    this.error.set(null);
    this.userData.set(null);
    try {
      const data = await getUserData(id);
      this.userData.set(data);
    } catch (err: any) {
      this.error.set(err.message);
    } finally {
      this.isLoading.set(false);
    }
  }
}
