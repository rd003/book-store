import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'book-store-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="hero-section">
      <div class="hero-content">
        <h1>Welcome to Book-Store</h1>
        <p>
          Explore a vast collection of books to enrich your knowledge and
          imagination.
        </p>
        <button class="explore-button mat-button">Explore Now</button>
      </div>
    </div>
  `,
  styles: [
    `
      .hero-section {
        background-image: url('assets/bookstore.jpg');
        height: 60vh;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .hero-content {
        max-width: 800px;
        padding: 20px;
        color: #fff;
      }

      .hero-content h1 {
        font-size: 3rem;
        margin-bottom: 20px;
      }

      .hero-content p {
        font-size: 1.2rem;
        margin-bottom: 30px;
      }

      .explore-button {
        font-size: 1rem;
        background-color: #380dc6;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .explore-button:hover {
        background-color: #2c09a0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
