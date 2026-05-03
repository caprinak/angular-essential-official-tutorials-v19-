import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-sig-step2',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 2: Computed Signals</h2>
      <p class="step-description">Use <code>computed()</code> to derive read-only state from other signals.</p>
      <div class="demo-box">
        <div class="status-indicator" [class]="userStatus()">
          <span class="status-dot"></span>
          Status: {{ userStatus() }}
        </div>
        <div class="info">
          <p><strong>Notifications:</strong> {{ notificationsEnabled() ? 'Enabled' : 'Disabled' }}</p>
          <p><strong>Message:</strong> {{ statusMessage() }}</p>
          <p><strong>Working Hours:</strong> {{ isWithinWorkingHours() ? 'Yes' : 'No' }}</p>
        </div>
        <div class="controls">
          <button (click)="goOnline()" [disabled]="userStatus() === 'online'">Go Online</button>
          <button (click)="goAway()" [disabled]="userStatus() === 'away'">Set Away</button>
          <button (click)="goOffline()" [disabled]="userStatus() === 'offline'">Go Offline</button>
          <button (click)="toggleStatus()" class="toggle-btn">Cycle Status</button>
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
    .online { background: #e8f5e9; color: #2e7d32; } .online .status-dot { background: #4caf50; }
    .away { background: #fff3e0; color: #ef6c00; } .away .status-dot { background: #ff9800; }
    .offline { background: #ffebee; color: #c62828; } .offline .status-dot { background: #f44336; }
    .info { padding: 12px; background: #f8fafc; border-radius: 8px; margin-bottom: 16px; }
    .info p { margin: 4px 0; }
    .controls { display: flex; gap: 8px; flex-wrap: wrap; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
    button:not(:disabled) { background: #3f51b5; color: white; }
    button:disabled { background: #e0e0e0; color: #9e9e9e; cursor: not-allowed; }
    .toggle-btn { background: #2e7d32 !important; color: white !important; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step2Component {
  userStatus = signal<'online' | 'away' | 'offline'>('offline');
  notificationsEnabled = computed(() => this.userStatus() === 'online');
  statusMessage = computed(() => {
    switch (this.userStatus()) {
      case 'online': return 'Available for meetings and messages';
      case 'away': return 'Temporarily away, will respond soon';
      case 'offline': return 'Not available, check back later';
      default: return 'Status unknown';
    }
  });
  isWithinWorkingHours = computed(() => {
    const now = new Date();
    const hour = now.getHours();
    const isWeekday = now.getDay() > 0 && now.getDay() < 6;
    return isWeekday && hour >= 9 && hour < 17 && this.userStatus() !== 'offline';
  });

  goOnline() { this.userStatus.set('online'); }
  goAway() { this.userStatus.set('away'); }
  goOffline() { this.userStatus.set('offline'); }
  toggleStatus() {
    const s = this.userStatus();
    this.userStatus.set(s === 'offline' ? 'online' : s === 'online' ? 'away' : 'offline');
  }
}
