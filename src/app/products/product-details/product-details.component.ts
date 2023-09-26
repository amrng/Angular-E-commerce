import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../interface';
import { ProductsService } from '../products.service';
import { CounterService } from '../counter.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  counter!: number;
  activeId: any;
  selectedProduct!: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService,
    private _CounterService: CounterService,
    private _CartService: CartService
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.activeId = params.get('id');
    });

    this._ProductsService.getProductDetails(this.activeId).subscribe((res) => {
      this.selectedProduct = res;
    });

    this._CounterService.getCounter().subscribe((counter) => {
      this.counter = counter;
    });
  }

  addProduct(product: products) {
    this._CartService.addToCart(product);
  }

  increase() {
    if (
      this.selectedProduct.stock > 0 &&
      this.counter < this.selectedProduct.stock
    ) {
      return this._CounterService.setCounter(++this.counter);
    } else if (this.selectedProduct.stock <= 0) {
      return this._CounterService.setCounter(0);
    }
  }

  decrease() {
    if (this.counter > 0) {
      return this._CounterService.setCounter(--this.counter);
    }
  }
}
