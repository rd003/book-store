import { Route } from '@angular/router';
import { BookComponent } from './Book/book.component';
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
    component: BookComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
