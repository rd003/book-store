import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'book-store-book-filter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  template: `
    <div class="filter-container">
      <div class="search-filter">
        <mat-form-field>
          <mat-label>Search by title/author</mat-label>
          <input matInput />
        </mat-form-field>
      </div>
      <div class="language-filter"></div>
    </div>
  `,
  styles: [
    `
      .filter-container {
        margin: 10px 0px;
        display: flex;
      }
      .search-filter {
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookFilterComponent {}
