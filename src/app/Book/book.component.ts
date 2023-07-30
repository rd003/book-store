import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { BookService } from './book.service';

@Component({
  selector: 'book-store-book',
  standalone: true,
  imports: [CommonModule, BookListComponent],
  template: `
    <div class="book-container">
      <h2>Books</h2>
      <ng-container *ngIf="books$ | async as books">
        <book-store-book-list [books]="books" />
      </ng-container>
    </div>
  `,
  styles: [
    `
      .book-container {
        padding: 20px 30px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  private readonly bookService = inject(BookService);
  books$ = this.bookService.books$;
}
