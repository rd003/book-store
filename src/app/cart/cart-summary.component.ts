import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'book-store-cart-summary',
  standalone: true,
  template: `
    <div class="summary-item">
      <div class="summary-key">Subtotal</div>
      <div class="summary-value">100</div>
    </div>
    <div class="summary-item">
      <div class="summary-key">Delivery</div>
      <div class="summary-value">10</div>
    </div>

    <div class="summary-item">
      <div class="summary-key">Tax</div>
      <div class="summary-value">5</div>
    </div>

    <div class="summary-item">
      <div class="summary-key bolder">Total</div>
      <div class="summary-value bolder">115</div>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSummary {}
