import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'book-store-root',
  template: `
    <div class="container">
      <book-store-header />
      <div class="content-holder">
        <router-outlet />
      </div>
      <book-store-footer />
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .content-holder {
        flex-grow: 1;
      }
    `,
  ],
})
export class AppComponent {}
