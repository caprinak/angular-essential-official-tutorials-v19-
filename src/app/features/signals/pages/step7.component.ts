import { Component, computed, inject, Injectable, signal } from '@angular/core';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartStore {
  private items = signal<CartItem[]>([
    { id: '1', name: 'Laptop', price: 999, quantity: 1 },
    { id: '2', name: 'Mouse', price: 29, quantity: 2 },
  ]);

  cartItems = this.items.asReadonly();
  totalQuantity = computed(() => this.items().reduce((sum, i) => sum + i.quantity, 0));
  totalPrice = computed(() => this.items().reduce((sum, i) => sum + i.price * i.quantity, 0));

  addItem(name: string, price: number) {
    this.items.update(items => [...items, { id: Date.now().toString(), name, price, quantity: 1 }]);
  }

  removeItem(id: string) {
    this.items.update(items => items.filter(i => i.id !== id));
  }

  clearCart() {
    this.items.set([]);
  }
}

@Component({
  selector: 'app-sig-step7',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 7: Using Signals with Services</h2>
      <p class="step-description">Inject a signal-based service to share reactive state across components.</p>
      <div class="demo-box">
        <div class="cart-badge">
          🛒 Cart: {{ cartStore.totalQuantity() }} items (\${{ cartStore.totalPrice() }})
        </div>

        <div class="items">
          @for (item of cartStore.cartItems(); track item.id) {
            <div class="cart-item">
              <span>{{ item.name }} × {{ item.quantity }}</span>
              <span class="item-price">\${{ item.price * item.quantity }}</span>
              <button class="remove-btn" (click)="cartStore.removeItem(item.id)">✕</button>
            </div>
          } @empty {
            <p class="empty">Cart is empty</p>
          }
        </div>

        <div class="controls">
          <button (click)="cartStore.addItem('Keyboard', 59)">Add Keyboard ($59)</button>
          <button (click)="cartStore.addItem('Monitor', 299)">Add Monitor ($299)</button>
          <button (click)="cartStore.clearCart()" class="danger-btn">Clear Cart</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .step-description { color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
    .demo-box { padding: 24px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); }
    .cart-badge { padding: 12px; background: #e8f5e9; border-radius: 8px; font-weight: 600; margin-bottom: 16px; color: #2e7d32; }
    .items { margin-bottom: 16px; }
    .cart-item { display: flex; align-items: center; gap: 12px; padding: 8px 12px; border-radius: 6px; background: #f8fafc; margin-bottom: 6px; }
    .item-price { margin-left: auto; font-weight: 600; color: #2e7d32; }
    .remove-btn { background: none; border: none; color: #c62828; cursor: pointer; font-size: 1rem; padding: 2px 6px; }
    .empty { color: var(--text-muted); font-style: italic; text-align: center; padding: 16px; }
    .controls { display: flex; gap: 8px; flex-wrap: wrap; }
    button { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; background: #3f51b5; color: white; }
    button:hover { background: #303f9f; }
    .danger-btn { background: #c62828 !important; }
    .danger-btn:hover { background: #b71c1c !important; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  `]
})
export class Step7Component {
  cartStore = inject(CartStore);
}
