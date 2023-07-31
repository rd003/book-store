import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { debounceTime, tap } from 'rxjs';
import { getBookLanguages } from '../utils/book.util';
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
          <mat-select [formControl]="language" multiple="">
            <mat-option
              *ngFor="let lang of languages; trackBy: trackByLang"
              [value]="lang"
            >
              {{ lang }}
            </mat-option>
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
      .search-filter,
      .language-filter {
        width: 300px;
      }

      mat-form-field {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookFilterComponent {
  searchTerm = new FormControl<string>('');
  language = new FormControl<string[]>([]);
  private readonly bookService = inject(BookService);
  languages = getBookLanguages();

  trackByLang(index: number, lang: string) {
    return lang;
  }

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

    this.language.valueChanges
      .pipe(
        tap((langs) => {
          if (langs) {
            this.bookService.setLanguageFilter(langs);
          }
        }),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
