import { Route } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { NotFoundComponent } from './not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./Book/book.component').then((m) => m.BookComponent),
  },
  {
    path: 'books/:id',
    loadComponent: () =>
      import('./Book/book-detail.component').then((m) => m.BookDetailComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
