import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sig-step1',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 1: Creating Your First Signal</h2>
      <p class="step-description">Signals are reactive primitives. Use <code>signal()</code>, <code>.set()</code>, and <code>.update()</code>.</p>
      <div class="demo-box">
        <div class="status-indicator" [class]="userStatus()">
          <span class="status-dot"></span>
          Status: {{ userStatus() }}
        </div>
        <div class="controls">
          <button (click)="goOnline()" [disabled]="userStatus() === 'online'">Go Online</button>
          <button (click)="goOffline()" [disabled]="userStatus() === 'offline'">Go Offline</button>
          <button (click)="toggleStatus()" class="toggle-btn">Toggle Status</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    .status-indicator { display: flex; align-items: center; gap: 8px; padding: 12px; margin-bottom: 16px; border-radius: 8px; font-weight: 500; }
    .status-dot { width: 12px; height: 12px; border-radius: 50%; }
    .online { background: #e8f5e9; color: #2e7d32; }
    .online .status-dot { background: #4caf50; }
    .offline { background: #ffebee; color: #c62828; }
    .offline .status-dot { background: #f44336; }
    .controls { display: flex; gap: 8px; flex-wrap: wrap; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: background 0.2s; }
    button:not(:disabled) { background: #3f51b5; color: white; }
    button:disabled { background: #e0e0e0; color: #9e9e9e; cursor: not-allowed; }
    .toggle-btn { background: #2e7d32 !important; color: white !important; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step1Component {
  userStatus = signal<'online' | 'offline'>('offline');

  goOnline() { this.userStatus.set('online'); }
  goOffline() { this.userStatus.set('offline'); }
  toggleStatus() { this.userStatus.update(c => c === 'online' ? 'offline' : 'online'); }
}
