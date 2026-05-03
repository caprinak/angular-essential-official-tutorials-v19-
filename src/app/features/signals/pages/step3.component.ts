import { Component, computed, signal } from '@angular/core';

/**
 * Step 3: Linked Signals — Angular 19 compatible adaptation.
 * The official tutorial uses `linkedSignal()` (Angular 19+).
 * We use a writable signal that we manually sync for compatibility.
 */
@Component({
  selector: 'app-sig-step3',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 3: Linked Signals</h2>
      <p class="step-description">A <code>linkedSignal</code> is like a computed signal, but writable. It re-derives when its source changes, yet you can override it locally.</p>
      <div class="demo-box">
        <div class="status-indicator" [class]="userStatus()">
          <span class="status-dot"></span>
          Status: {{ userStatus() }}
        </div>
        <div class="info">
          <p>
            <strong>Notifications:</strong> {{ notificationsEnabled() ? 'Enabled' : 'Disabled' }}
            <button (click)="toggleNotifications()" class="small-btn">
              {{ notificationsEnabled() ? 'Disable' : 'Enable' }}
            </button>
          </p>
          <p><strong>Message:</strong> {{ statusMessage() }}</p>
        </div>
        <div class="controls">
          <button (click)="goOnline()" [disabled]="userStatus() === 'online'">Go Online</button>
          <button (click)="goAway()" [disabled]="userStatus() === 'away'">Set Away</button>
          <button (click)="goOffline()" [disabled]="userStatus() === 'offline'">Go Offline</button>
        </div>
        <p class="note">Try: Click "Go Online" → Notifications auto-enable. Then manually "Disable" them. Then switch status — they re-derive!</p>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    .status-indicator { display: flex; align-items: center; gap: 8px; padding: 12px; margin-bottom: 16px; border-radius: 8px; font-weight: 500; }
    .status-dot { width: 12px; height: 12px; border-radius: 50%; }
    .online { background: #e8f5e9; color: #2e7d32; } .online .status-dot { background: #4caf50; }
    .away { background: #fff3e0; color: #ef6c00; } .away .status-dot { background: #ff9800; }
    .offline { background: #ffebee; color: #c62828; } .offline .status-dot { background: #f44336; }
    .info { padding: 12px; background: #f8fafc; border-radius: 8px; margin-bottom: 16px; }
    .info p { margin: 4px 0; display: flex; align-items: center; gap: 8px; }
    .controls { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
    button:not(:disabled) { background: #3f51b5; color: white; }
    button:disabled { background: #e0e0e0; color: #9e9e9e; cursor: not-allowed; }
    .small-btn { padding: 4px 10px; font-size: 0.8rem; background: #78909c !important; color: white !important; }
    .note { font-size: 0.8rem; color: var(--text-muted); font-style: italic; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step3Component {
  userStatus = signal<'online' | 'offline' | 'away'>('offline');

  // Simulate linkedSignal: writable, but re-derives when userStatus changes
  private notificationsOverride = signal<boolean | null>(null);
  notificationsEnabled = computed(() => {
    const override = this.notificationsOverride();
    if (override !== null) return override;
    return this.userStatus() === 'online';
  });

  statusMessage = computed(() => {
    switch (this.userStatus()) {
      case 'online': return 'Available for meetings and messages';
      case 'away': return 'Temporarily away, will respond soon';
      case 'offline': return 'Not available, check back later';
      default: return 'Status unknown';
    }
  });

  toggleNotifications() {
    this.notificationsOverride.set(!this.notificationsEnabled());
  }

  goOnline() { this.userStatus.set('online'); this.notificationsOverride.set(null); }
  goAway() { this.userStatus.set('away'); this.notificationsOverride.set(null); }
  goOffline() { this.userStatus.set('offline'); this.notificationsOverride.set(null); }
}
