import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'book-store-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="footer">
      Built with Angular and ❤️ by
      <a href="https://twitter.com/ravi_devrani" target="_blank">
        Ravindra Devrani
      </a>
    </div>
  `,
  styles: [
    `
      .footer {
        font: 16px; /* Add a unit, e.g., "px" for pixels */
        text-align: center;
        color: black;
        padding-bottom: 2px;
        padding: 15px 0px;
      }

      .footer a {
        text-decoration: underline;
        color: black;
        font: 16px; /* Add a unit, e.g., "px" for pixels */
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
