import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { products } from '../interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  counter: number = 0;
  activeId!: string;
  selectedProduct!: products;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {}

  ngOnInit() {
    this.activeId = this.activatedRoute.snapshot.params['id'];

    this._ProductsService.getProductDetails(+this.activeId).subscribe((res) => {
      this.selectedProduct = res;
    });
  }
}
