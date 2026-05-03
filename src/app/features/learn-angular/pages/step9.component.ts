import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child-emitter',
  standalone: true,
  template: `<button class="add-btn" (click)="addItem()">Add Item 🐢</button>`,
  styles: [`
    .add-btn {
      padding: 8px 20px; border: none; border-radius: 6px;
      background: #3f51b5; color: white; font-weight: 600; cursor: pointer;
    }
    .add-btn:hover { background: #303f9f; }
  `]
})
export class ChildEmitterComponent {
  readonly addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

@Component({
  selector: 'app-la-step9',
  standalone: true,
  imports: [ChildEmitterComponent],
  template: `
    <div class="demo-container">
      <h2>Step 9: &#64;Output with Signal Outputs</h2>
      <p class="step-description">Use <code>output()</code> to send events from a child component to the parent.</p>
      <div class="demo-box">
        <app-child-emitter (addItemEvent)="addItem($event)" />
        <p class="result">🐢 all the way down {{ items.length }}</p>
        <div class="items">
          @for (item of items; track $index) {
            <span>{{ item }}</span>
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
    .result { font-size: 1.1rem; margin: 12px 0 8px; font-weight: 500; }
    .items { display: flex; gap: 4px; flex-wrap: wrap; font-size: 1.5rem; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step9Component {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}
