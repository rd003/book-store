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
  selector: 'book-store-book-detail-display',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RupeeSymbolPipe,
    RouterLink,
    MatIconModule,
  ],
  template: `
    <ng-container *ngIf="book">
      <div class="book-details">
        <div class="book-image">
          <img src="assets/images/fairy-tales.jpg" alt="Fairy Tales" />
        </div>
        <div class="book-info">
          <h1 class="book-title">{{ book.Title }}</h1>
          <p class="book-author">Author: {{ book.Author }}</p>
          <p class="book-country">Country: {{ book.Country }}</p>
          <p class="book-language">Language: {{ book.Language }}</p>
          <p class="book-pages">Pages: {{ book.Pages }}</p>
          <p class="book-year">Year: {{ book.Year }}</p>
          <p class="book-price">Price: {{ book.Price | toRupee }}</p>
          <div class="my-2">
            <button mat-button color="primary" (click)="selectBook.emit(book)">
              <mat-icon>shopping_cart</mat-icon>
              Add to cart
            </button>
          </div>
          <div class="my-2">
            <a class="btn full-button" [href]="book.Link">Wiki</a>
            <a class="btn full-button" routerLink="/books" color="primary">
              Back
            </a>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .book-image {
        width: 220px;
        /* center the image within the container */
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid;
      }

      .book-image img {
        /* Set a max width for the image to prevent it from overflowing */
        max-width: 100%;
        /* Set a max height to maintain the aspect ratio of the image */
        max-height: 300px;
      }

      .book-info {
        border: 1px solid;
        width: 400px;
        padding: 10px;
      }

      .book-title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .book-author,
      .book-country,
      .book-language,
      .book-pages,
      .book-year,
      .book-price {
        font-size: 20px;
        margin: 5px 0;
      }
      .book-details {
        display: flex;
        gap: 20px;
        height: 330px;
        justify-content: center;
        padding: 20px;
      }

      @media (max-width: 600px) {
        .book-details {
          height: 260px;
        }

        .book-image img {
          /* Set a max width for the image to prevent it from overflowing */
          max-width: 90%;
          /* Set a max height to maintain the aspect ratio of the image */
          max-height: 300px;
        }
        .book-details {
          gap: 10px;
        }
        .book-title {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .book-author,
        .book-country,
        .book-language,
        .book-pages,
        .book-year,
        .book-price {
          font-size: 14px;
          margin: 5px 0;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailDisplayComponent {
  @Input() book!: Book;
  @Output() selectBook = new EventEmitter<Book>();
}
