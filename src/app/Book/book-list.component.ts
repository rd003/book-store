import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Book, RupeeSymbolPipe } from '@book-store/shared-models';

@Component({
  selector: 'book-store-book-list',
  standalone: true,
  imports: [
    CommonModule,
    RupeeSymbolPipe,
    RouterLink,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <div class="book-list-container">
      <div *ngFor="let book of books; trackBy: trackById" class="book-card">
        <div class="book-card-content">
          <div class="card-image" [routerLink]="'/books/' + book.Id">
            <img class="book-image" [src]="book.ImageLink" alt="book image" />
          </div>
          <div class="card-details">
            <h2 class="title">{{ book.Title }}</h2>
            <p>{{ book.Author }}</p>
            <p>{{ book.Language }}</p>
            <p>{{ book.Price | toRupee }}</p>
            <p>
              <button mat-button (click)="bookSelect.emit(book.Id)">
                <mat-icon>shopping_cart</mat-icon>
                Add to cart
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .book-list-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
      }

      .book-card {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        width: 159px; /* You can adjust the card width as needed */
        margin: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }

      .book-card-content {
        display: flex;
        flex-wrap: wrap;
      }

      .card-image {
        flex: 0 0 150px; /* Set the width of the image container */
        margin-right: 10px;
      }

      .book-image {
        width: 100%;
        height: auto;
      }

      .card-details {
        flex: 1 1 150px; /* Set the width of the content container */
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: center;
      }

      .title {
        font-weight: bold;
        font-size: 18px;
      }

      /* Media Queries */

      /* For screens with a width less than 600px */
      @media (max-width: 600px) {
        .book-card {
          width: 90%; /* Adjust the width to your preference */
        }

        .card-image {
          flex: 0 0 120px; /* Adjust the width of the image container for mobile */
          margin-right: 0;
        }

        .card-details {
          flex: 1 1 120px; /* Adjust the width of the content container for mobile */
          text-align: left;
          padding-left: 10px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {
  @Input() books!: Book[];
  @Output() bookSelect = new EventEmitter<string>();

  trackById(index: number, book: Book) {
    return book.Id;
  }
}
