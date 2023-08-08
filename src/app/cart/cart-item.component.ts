import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CartItem } from './cart';

@Component({
  selector: 'book-store-cart-item',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="card-item">
      <img src="/assets/images/hamlet.jpg" />
    </div>
    <div class="card-item">{{ cartItem.book.Title }}</div>
    <div class="card-item">{{ cartItem.book.Author }}</div>
    <div class="card-item">{{ cartItem.book.Price }}</div>
    <div class="card-item">
      <mat-form-field [subscriptSizing]="'dynamic'">
        <mat-label>Quantity</mat-label>
        <mat-select [formControl]="quantity">
          <mat-option
            *ngFor="let qty of quantityArray; trackBy: trackByFn"
            [value]="qty"
          >
            {{ qty }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <div class="card-item">
      <button mat-button>
        <mat-icon color="danger">delete</mat-icon>
      </button>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  quantityArray = [1, 2, 3, 4, 5];
  trackByFn(index: number, qty: number) {
    return qty;
  }
  quantity = new FormControl<number>(1);

  ngOnInit(): void {
    this.cartItem = {
      book: {
        Id: '8ef9f86b-cdc4-49ab-88de-f641e8d0ab73',
        Author: 'Chinua Achebe',
        Country: 'Nigeria',
        ImageLink: 'assets/images/things-fall-apart.jpg',
        Language: 'English',
        Link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
        Pages: 209,
        Title: 'Things Fall Apart',
        Year: 1958,
        Price: 243,
      },
      quantity: 2,
    };
    this.quantity.setValue(this.cartItem.quantity);
  }
}
