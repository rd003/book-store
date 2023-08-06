import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@book-store/shared-models';
import { Observable, map, switchMap } from 'rxjs';
import { BookDetailDisplayComponent } from './book-detail-display.component';
import { BookService } from './book.service';

@Component({
  selector: 'book-store-book-detail',
  standalone: true,
  imports: [CommonModule, BookDetailDisplayComponent],
  template: `
    <div class="book-detail">
      <ng-container *ngIf="book$ | async as book">
        <book-store-book-detail-display [book]="book" />
      </ng-container>
    </div>
  `,
  styles: [
    `
      .book-detail {
        padding: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailComponent {
  private readonly _bookService = inject(BookService);
  private readonly _route = inject(ActivatedRoute);

  id$: Observable<string | null> = this._route.paramMap.pipe(
    map((a) => a.get('id'))
  );
  book$: Observable<Book> = this.id$.pipe(
    switchMap((id) => this._bookService.bookById(id))
  );
  constructor() {}
}
