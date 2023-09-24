import { Component } from '@angular/core';
import { products } from '../interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: products[] = [];

  constructor(private _productList: ProductsService) {}

  ngOnInit() {
    this._productList.getProductList().subscribe((data) => {
      this.products = data.products;
    });
  }
}
