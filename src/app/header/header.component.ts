import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'book-store-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule,
  ],
  standalone: true,
  template: `
    <mat-toolbar color="primary">
      <span class="brand">Book-Store</span>
      <div style="display: flex;gap:4px;margin-left:10px">
        <button
          class="nav-link"
          routerLink="/home"
          routerLinkActive="active"
          mat-button
        >
          Home
        </button>
        <button
          class="nav-link"
          mat-button
          routerLink="/books"
          routerLinkActive="active"
        >
          Books
        </button>
      </div>
      <span class="example-spacer"></span>
      <button mat-icon-button class="mx-2" color="secondary">
        <mat-icon
          matBadge="8"
          matBadgePosition="above after"
          matBadgeColor="accent"
        >
          shopping_cart
        </mat-icon>
      </button>
      <button class="full-button" mat-button>Login</button>
    </mat-toolbar>
  `,
  styles: [
    `
      .nav-link {
        font-size: 16px;
      }

      @media (max-width: 600px) {
        .nav-link {
          font-size: 14px;
        }

        .brand {
          font-size: 14px;
        }
      }

      .full-button {
        background-color: #542a97;
      }

      .full-button:hover {
        background-color: #6131ad;
      }
      .example-spacer {
        flex: 1 1 auto;
      }
      .active {
        background-color: #542a97;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
