import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero/hero.component';
import { HomeAboutComponent } from './home-about/home-about.component';

@Component({
  standalone: true,
  imports: [ RouterModule,HeaderComponent,HeroComponent,HomeAboutComponent],
  selector: 'book-store-root',
  template: `
   <book-store-header/>
   <book-store-hero/>
   <book-store-home-about/>
   <router-outlet/>
`,
  styles: [],
})
export class AppComponent {
}
