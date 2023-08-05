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
      <a
        mat-icon-button
        class="mx-2"
        color="secondary"
        href="https://github.com/rd003/book-store"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
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
