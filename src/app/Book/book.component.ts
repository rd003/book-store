import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { BookFilterComponent } from './book-filter.component';
import { BookListComponent } from './book-list.component';
import { BookService } from './book.service';

@Component({
  selector: 'book-store-book',
  standalone: true,
  imports: [CommonModule, BookListComponent, BookFilterComponent],
  template: `
    <div class="book-container">
      <h2 class="title">Books</h2>
      <book-store-book-filter />
      <ng-container *ngIf="books$ | async as books">
        <book-store-book-list
          [books]="books"
          (bookSelect)="addToCart($event)"
        />
      </ng-container>
    </div>
  `,
  styles: [
    `
      @media (max-width: 600px) {
        .book-container {
          text-align: center;
        }
      }
      .book-container {
        padding: 20px 30px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  private readonly bookService = inject(BookService);
  private readonly cartService = inject(CartService);

  books$ = this.bookService.filteredBooks$;

  addToCart(bookId: string) {
    this.cartService.addItem({ bookId, quantity: 1 });
  }
  //filters$ = this.bookService.searchFilter$;
}
