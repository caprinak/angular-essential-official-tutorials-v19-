import { Component, signal, linkedSignal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-components',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="demo-container">
      <h2>Advanced Components (Angular 19+)</h2>
      <p class="step-description">Using modern APIs like <code>linkedSignal</code> for sophisticated state management.</p>

      <div class="card">
        <h3>1. State Resetting with linkedSignal</h3>
        <p>A <code>linkedSignal</code> automatically resets when its source signal changes. Perfect for "resetting" child component state from a parent selection.</p>
        
        <div class="demo-area">
          <div class="selector">
            <label>Select User:</label>
            <button *ngFor="let user of users" 
                    (click)="selectedUser.set(user)"
                    [class.active]="selectedUser() === user">
              {{ user }}
            </button>
          </div>

          <div class="child-state">
            <h4>Draft for {{ selectedUser() }}:</h4>
            <input type="text" [value]="draftMessage()" (input)="onInput($event)" placeholder="Type a message..." />
            <p>Draft value: <i>{{ draftMessage() }}</i></p>
            <span class="hint">(Draft resets when you switch users!)</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h3>2. Derived State with computed()</h3>
        <p>Efficiently calculate values based on other signals.</p>
        <div class="demo-area">
          <div class="stats">
            <p>Active User: <b>{{ selectedUser() }}</b></p>
            <p>Message Length: <b>{{ messageLength() }}</b></p>
            <p>Status: <b [class]="statusClass()">{{ status() }}</b></p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 800px; }
    .card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; margin-bottom: 24px; }
    .demo-area { margin-top: 16px; padding: 16px; background: rgba(0,0,0,0.02); border-radius: 8px; border: 1px dashed var(--border-color); }
    .selector { display: flex; gap: 8px; align-items: center; margin-bottom: 16px; }
    button { padding: 6px 12px; border: 1px solid var(--border-color); border-radius: 6px; background: var(--bg-card); color: var(--text-main); cursor: pointer; transition: all 0.2s; }
    button.active { background: var(--primary-color); color: white; border-color: var(--primary-color); }
    .child-state input { width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border-color); margin-top: 8px; background: var(--bg-card); color: var(--text-main); }
    .hint { font-size: 0.8rem; color: #64748b; font-style: italic; display: block; margin-top: 8px; }
    .stats p { margin: 4px 0; }
    .valid { color: #2e7d32; }
    .invalid { color: #d32f2f; }
  `]
})
export class AdvancedComponentsComponent {
  users = ['Alice', 'Bob', 'Charlie'];
  selectedUser = signal(this.users[0]);

  // draftMessage resets to empty string whenever selectedUser changes!
  draftMessage = linkedSignal({
    source: this.selectedUser,
    computation: () => '' 
  });

  messageLength = computed(() => this.draftMessage().length);
  status = computed(() => this.messageLength() > 0 ? 'Ready' : 'Waiting...');
  statusClass = computed(() => this.messageLength() > 0 ? 'valid' : 'invalid');

  onInput(event: Event) {
    this.draftMessage.set((event.target as HTMLInputElement).value);
  }
}
