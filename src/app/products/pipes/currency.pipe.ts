import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeCurrency',
})
export class CurrencyPipe implements PipeTransform {
  transform(price: number, change: number): number {
    return Math.round(price * change);
  }
}
