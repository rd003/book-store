import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { debounceTime, tap } from 'rxjs';
import { BookService } from './book.service';

@Component({
  selector: 'book-store-book-filter',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ],
  template: `
    <div class="filter-container">
      <div class="search-filter">
        <mat-form-field appearance="outline">
          <mat-label>Search by title/author</mat-label>
          <input matInput [formControl]="searchTerm" />
          <mat-icon matPrefix>search</mat-icon>
        </mat-form-field>
      </div>
      <div class="language-filter">
        <mat-form-field appearance="outline">
          <mat-label>Language</mat-label>
          <mat-select [formControl]="language">
            <mat-option value="1">Option 1</mat-option>
            <mat-option value="2">Option 2</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [
    `
      .filter-container {
        margin: 10px 0px;
        display: flex;
        gap: 8px;
      }
      .search-filter {
        width: 350px;
      }
      mat-form-field {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookFilterComponent {
  searchTerm = new FormControl('');
  language = new FormControl('');
  private readonly bookService = inject(BookService);

  constructor() {
    this.searchTerm.valueChanges
      .pipe(
        tap((value) => {
          this.bookService.setSearchTerm(value ?? '');
        }),
        debounceTime(200),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
