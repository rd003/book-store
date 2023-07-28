import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'book-store-root',
  template: `
    <book-store-header />
    <router-outlet />
    <book-store-footer />
  `,
  styles: [],
})
export class AppComponent {}
