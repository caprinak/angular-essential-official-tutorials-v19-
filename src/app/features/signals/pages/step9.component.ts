import { Component, computed, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-cart-summary-demo',
  standalone: true,
  template: `
    <div class="cart-summary" [class.checkout]="isCheckingOut">
      <p>Items: {{ itemCount() }} | Total: \${{ total() }}</p>
      @if (isCheckingOut) {
        <p class="checkout-msg">✅ Processing checkout...</p>
      }
    </div>
  `,
  styles: [`
    .cart-summary { padding: 16px; background: #f0f4ff; border-radius: 8px; border: 1px solid #c5cae9; }
    .checkout { background: #e8f5e9; border-color: #a5d6a7; }
    .checkout-msg { color: #2e7d32; font-weight: 600; margin-top: 8px; }
  `]
})
export class CartSummaryComponent {
  itemCount = signal(0);
  total = signal(0);
  isCheckingOut = false;

  initiateCheckout() {
    this.isCheckingOut = true;
    setTimeout(() => this.isCheckingOut = false, 2000);
  }
}

@Component({
  selector: 'app-sig-step9',
  standalone: true,
  imports: [CartSummaryComponent],
  template: `
    <div class="demo-container">
      <h2>Step 9: Signal Queries (viewChild)</h2>
      <p class="step-description">Use <code>viewChild()</code> to query and interact with child component instances via signals.</p>
      <div class="demo-box">
        <div class="controls">
          <button (click)="initiateCheckout()">Initiate Checkout</button>
          <button (click)="updateQuantity(1)">+ Add Item</button>
          <button (click)="updateQuantity(-1)" [disabled]="cartQuantity() <= 0">- Remove Item</button>
        </div>

        <app-cart-summary-demo />

        <div class="info">
          <p>Quantity: <strong>{{ cartQuantity() }}</strong></p>
          <p>Total: <strong>\${{ totalPrice() }}</strong></p>
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
    button:disabled { background: #e0e0e0; color: #9e9e9e; cursor: not-allowed; }
    .info { padding: 12px; background: #f8fafc; border-radius: 8px; margin-top: 16px; }
    .info p { margin: 4px 0; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step9Component {
  cartQuantity = signal(2);
  totalPrice = computed(() => this.cartQuantity() * 999);

  cartSummary = viewChild(CartSummaryComponent);

  updateQuantity(change: number) {
    const next = this.cartQuantity() + change;
    if (next >= 0 && next <= 10) {
      this.cartQuantity.set(next);
      const summary = this.cartSummary();
      if (summary) {
        summary.itemCount.set(next);
        summary.total.set(next * 999);
      }
    }
  }

  initiateCheckout() {
    const summary = this.cartSummary();
    if (summary) {
      summary.initiateCheckout();
    }
  }
}
