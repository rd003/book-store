import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RupeeSymbolPipe } from '@book-store/shared-models';
import { CartService } from './cart.service';

@Component({
  selector: 'book-store-cart-summary',
  standalone: true,
  imports: [AsyncPipe, NgIf, RupeeSymbolPipe],
  template: `
    <div class="summary-item" *ngIf="subTotal$ | async as subTotal">
      <div class="summary-key">Subtotal</div>
      <div class="summary-value">{{ subTotal | toRupee }}</div>
    </div>
    <div class="summary-item" *ngIf="deliveryCharge$ | async as deliveryCharge">
      <div class="summary-key">Delivery</div>
      <div class="summary-value">{{ deliveryCharge | toRupee }}</div>
    </div>

    <div class="summary-item" *ngIf="tax$ | async as tax">
      <div class="summary-key">Tax</div>
      <div class="summary-value">{{ tax | toRupee }}</div>
    </div>

    <div class="summary-item" *ngIf="total$ | async as total">
      <div class="summary-key bolder">Total</div>
      <div class="summary-value bolder">{{ total | toRupee }}</div>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSummary {
  private readonly cartService = inject(CartService);
  subTotal$ = this.cartService.subTotal$;
  deliveryCharge$ = this.cartService.deliveryCharge$;
  tax$ = this.cartService.tax$;
  total$ = this.cartService.total$;
}
