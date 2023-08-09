import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Book } from '@book-store/shared-models';
import { tap, throttleTime } from 'rxjs';
import { RupeeSymbolPipe } from '../../../shared-models/src/lib/rupee-symbol.pipe';
import { CartItem } from './cart';

@Component({
  selector: 'book-store-cart-item',
  standalone: true,
  template: `
    <div class="card-item">
      <img [src]="cartItem.book.ImageLink" />
    </div>
    <div class="card-item">{{ cartItem.book.Title }}</div>
    <div class="card-item">{{ cartItem.book.Author }}</div>
    <div class="card-item">{{ cartItem.book.Price | toRupee }}</div>
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
      <button mat-icon-button (click)="selectBook.emit(cartItem.book)">
        <mat-icon color="danger">delete</mat-icon>
      </button>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    NgFor,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RupeeSymbolPipe,
  ],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  @Output() selectBook = new EventEmitter<Book>();
  @Output() selectQuantity = new EventEmitter<{
    book: Book;
    quantity: number;
  }>();
  quantityArray = [1, 2, 3, 4, 5];
  trackByFn(index: number, qty: number) {
    return qty;
  }
  quantity = new FormControl<number>(1);

  ngOnInit(): void {
    this.quantity.setValue(this.cartItem.quantity, { emitEvent: false });
  }

  constructor() {
    this.quantity.valueChanges
      .pipe(
        throttleTime(300),
        tap((qty) => {
          this.selectQuantity.emit({
            book: this.cartItem.book,
            quantity: qty!,
          });
        }),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
