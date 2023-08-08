import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
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
      <div class="items">
        <!-- loop over on element below -->
        <!-- <ng-container *ngIf="cartItems$ | async as cartItems">
          <book-store-cart-item
            class="item-card"
            *ngFor="let cartItem of cartItems"
            [cartItem]="cartItem"
          />
        </ng-container> -->
        <book-store-cart-item class="item-card" />
      </div>
      <!-- summary starts -->
      <book-store-cart-summary class="summary" />
      <!-- summary ends -->
    </section>
  `,
  styles: [
    `
      .cart-section {
        padding: 20px;
        display: flex;
        gap: 20px;
      }

      .items {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 65%;
      }

      .item-card {
        display: flex;
        border: 1px solid;
        gap: 15px;
        height: 90px; /* Adjust the height as needed */
        background-color: rgb(249, 249, 249);
        border-radius: 10px;
        border: 1px solid rgb(78, 78, 78);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a shadow */
      }
      .card-item {
        font-size: 20px;
        display: flex;
        align-self: center;
        justify-self: center;
        padding-left: 5px;
      }
      .card-item img {
        max-width: 80px;
        max-height: 80px;
        height: auto;
        width: auto;
        object-fit: contain; /* Maintain aspect ratio and fit the entire image within the container */
      }

      .summary {
        background-color: rgb(249, 249, 249);
        flex-grow: 1;
        height: 300px;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid rgb(78, 78, 78);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a shadow */
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .summary-item {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .summary-key {
        font-size: 22px;
        font-weight: bold;
      }
      .summary-value {
        font-size: 20px;
      }
      .bolder {
        font-size: 30px;
      }

      @media (max-width: 600px) {
        .cart-section {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .items {
          width: 100%;
        }
        .card-item {
          font-size: 13px;
        }
        .summary {
          height: auto;
        }

        .summary-key {
          font-size: 16px;
          font-weight: bold;
        }
        .summary-value {
          font-size: 14px;
        }
        .bolder {
          font-size: 20px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private readonly cartService = inject(CartService);
  cartItems$ = this.cartService.cartItems$;
}
