import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Book } from '@book-store/shared-models';
import { Observable } from 'rxjs';
import { CartItem } from './cart';
import { CartItemComponent } from './cart-item.component';
import { CartSummary } from './cart-summary.component';
import { CartService } from './cart.service';

@Component({
  selector: 'book-store-cart',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, CartItemComponent, CartSummary],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="cart-section">
      <ng-container *ngIf="cartItems$ | async as cartItems; else no_items">
        <!-- cartItem$ is subscribed, but its length===0; eg. all items removed from cart-item -->
        <ng-container *ngIf="cartItems.length > 0; else all_item_removed">
          <div class="items">
            <!-- loop over on element below -->
            <book-store-cart-item
              class="item-card"
              *ngFor="let cartItem of cartItems"
              [cartItem]="cartItem"
              (selectBook)="removeCartItem($event)"
              (selectQuantity)="updateCartItem($event)"
            />
            <!-- <book-store-cart-item class="item-card" /> -->
          </div>
          <book-store-cart-summary class="summary" />
        </ng-container>
        <ng-template #all_item_removed>
          <h2>Cart is empty</h2>
        </ng-template>
      </ng-container>
      <ng-template #no_items>
        <h2>No Items in cart</h2>
      </ng-template>
    </section>
  `,
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private readonly cartService = inject(CartService);
  cartItems$: Observable<CartItem[]> = this.cartService.cartItems$;

  removeCartItem(book: Book) {
    this.cartService.removeItem(book);
  }

  updateCartItem(obj: { book: Book; quantity: number }) {
    const cartItem: CartItem = { book: obj.book, quantity: obj.quantity };
    this.cartService.updateItem(cartItem);
  }
}
