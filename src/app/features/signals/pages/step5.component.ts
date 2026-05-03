import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div class="product-card" [class.highlighted]="isHighlighted">
      <h3>{{ name() }}</h3>
      <p class="price">\${{ price() }}</p>
      <p class="status">
        Status:
        @if (available()) {
          <span class="available">Available</span>
        } @else {
          <span class="unavailable">Out of Stock</span>
        }
      </p>
    </div>
  `,
  styles: [`
    .product-card { padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; transition: all 0.3s; }
    .product-card.highlighted { border-color: #3f51b5; box-shadow: 0 0 12px rgba(63,81,181,0.3); }
    .price { font-size: 1.25rem; font-weight: 700; color: #2e7d32; }
    .available { color: #2e7d32; font-weight: 600; }
    .unavailable { color: #c62828; font-weight: 600; }
  `]
})
export class ProductCardComponent {
  name = input.required<string>();
  price = input.required<number>();
  available = input<boolean>(true);
  isHighlighted = false;

  highlight() {
    this.isHighlighted = true;
    setTimeout(() => this.isHighlighted = false, 1500);
  }
}

@Component({
  selector: 'app-sig-step5',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <div class="demo-container">
      <h2>Step 5: Component Communication with Signals</h2>
      <p class="step-description">Use signal-based <code>input()</code> to pass data from parent to child components.</p>
      <div class="demo-box">
        <app-product-card
          [name]="productName()"
          [price]="productPrice()"
          [available]="productAvailable()"
        />
        <div class="controls">
          <button (click)="updateProduct()">Update Product Data</button>
          <button (click)="toggleAvailability()">Toggle Availability</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    .controls { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; background: #3f51b5; color: white; }
    button:hover { background: #303f9f; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step5Component {
  productName = signal('Demo Product');
  productPrice = signal(99);
  productAvailable = signal(true);

  updateProduct() {
    this.productName.set(`Product ${Math.floor(Math.random() * 100)}`);
    this.productPrice.set(Math.floor(Math.random() * 500) + 50);
  }

  toggleAvailability() {
    this.productAvailable.set(!this.productAvailable());
  }
}
