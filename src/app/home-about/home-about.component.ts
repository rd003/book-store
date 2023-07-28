import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'book-store-home-about',
  imports: [],
  template: `
    <div class="about-us-section">
      <div class="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to Book-Store! We are passionate about books and believe in
          the power of literature to transform lives and broaden horizons. Our
          mission is to provide a wide selection of high-quality books across
          various genres and interests, catering to readers of all ages.
        </p>
        <p>
          At Book-Store, we strive to create an enriching reading experience for
          our customers. Whether you're a lifelong book lover or just starting
          your reading journey, we have something for everyone.
        </p>
        <p>
          Our dedicated team of book enthusiasts is always ready to assist you
          in finding the perfect book that matches your interests. We value our
          customers and aim to provide exceptional service with every
          interaction.
        </p>
        <p>
          Thank you for choosing Book-Store as your literary companion. Happy
          reading!
        </p>
      </div>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HomeAboutComponent {
  constructor() {
    console.log('jell');
  }
}
