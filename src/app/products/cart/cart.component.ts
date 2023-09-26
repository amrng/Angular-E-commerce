import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: any;
  totalPrice!: number;
  constructor(private _cartServie: CartService) {}

  ngOnInit() {
    this._cartServie.getCartItems().subscribe((data) => {
      this.products = data;
      this.totalPrice = this._cartServie.getItemPrice();
    });
  }

  updateQuantity(productId: number, counter: number): void {
    this._cartServie.updateCartItemQuantity(productId, counter);
    this._cartServie.getCartItems().subscribe((val) => (this.products = val));
    console.log(this.products);
  }

  removeItem(product: any) {
    this._cartServie.removeCartItem(product);
  }

  emptyCart() {
    this._cartServie.removeAllCart();
  }

  getItemPrice() {
    this.totalPrice = this._cartServie.getItemPrice();
  }
}
