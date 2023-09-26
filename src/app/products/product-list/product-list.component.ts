import { Component } from '@angular/core';
import { products } from '../interface';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: any[] = [];
  searchTerm: string = '';

  constructor(
    private _productsService: ProductsService,
    private _CartService: CartService,
    private _Router: Router
  ) {}

  ngOnInit() {
    this._productsService.getProductList().subscribe((data) => {
      this.products = data.products;
      this.products.forEach((product: any) => {
        Object.assign(product, { quantity: 1, total: product.price });
      });
    });
  }

  redirectToDetails(id: number) {
    this._Router.navigate(['details', +id]);
  }

  addProduct(product: products) {
    this._CartService.addToCart(product);
  }
}
