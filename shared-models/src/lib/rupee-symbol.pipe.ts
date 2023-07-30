import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toRupee',
  standalone: true,
})
export class RupeeSymbolPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof value === 'string') {
      value = parseFloat(value);
    }
    if (isNaN(value)) return '';
    return `₹${value.toFixed(2)}`;
  }
}
