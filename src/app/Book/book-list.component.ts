import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book, RupeeSymbolPipe } from '@book-store/shared-models';

@Component({
  selector: 'book-store-book-list',
  standalone: true,
  imports: [CommonModule, RupeeSymbolPipe],
  template: `
    <div class="book-list-container">
      <div *ngFor="let book of books; trackBy: trackById" class="book-card">
        <img class="book-image" [src]="book.ImageLink" alt="book image" />
        <h2 class="title">{{ book.Title }}</h2>
        <p>
          <b>Author :</b>
          {{ book.Author }}
        </p>
        <p>
          <b>Language:</b>
          {{ book.Language }}
        </p>
        <p>
          <b>Price</b>
          {{ book.Price | toRupee }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .book-list-container {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }

      .book-card {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        width: 159px;
        margin: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        text-align: center;
      }

      .book-image {
        max-width: 159px;
        height: auto;
      }

      .title {
        font-weight: bold;
        font-size: 18px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {
  @Input() books!: Book[];

  trackById(index: number, book: Book) {
    return book.Id;
  }
}
