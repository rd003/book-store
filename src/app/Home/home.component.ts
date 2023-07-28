import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HomeAboutComponent } from './home-about/home-about.component';

@Component({
  selector: 'book-store-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, HomeAboutComponent],
  template: `
    <book-store-hero />
    <book-store-home-about />
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
