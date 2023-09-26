import { Pipe, PipeTransform } from '@angular/core';
import { products } from '../interface';

@Pipe({
  name: 'search',
})
export class FilterPipe implements PipeTransform {
  transform(products: products[], searchTerm: string): products[] {
    return products.filter((product) => {
      product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
