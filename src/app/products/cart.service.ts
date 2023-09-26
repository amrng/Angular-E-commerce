import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { products } from './interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemList: any[] = [];
  productList = new BehaviorSubject<products[]>([]);

  constructor() {}

  getCartItems() {
    return this.productList.asObservable();
  }

  addToCart(product: products) {
    const foundItem = this.cartItemList.find((item) => item.id == product.id);

    if (foundItem) {
      if (foundItem.quantity < product.stock) {
        foundItem.quantity++;
      }
    } else {
      if (product.stock > 0) {
        this.cartItemList.push({ ...product, quantity: 1 });
      }
    }

    this.productList.next(this.cartItemList);
    this.getItemPrice();
    console.log(this.cartItemList);
    console.log(this.productList.value);
  }

  getItemPrice(): number {
    let totalPrice = 0;
    this.cartItemList.map((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }

  updateCartItemQuantity(productId: number, counter: number) {
    const updated = this.cartItemList.map((item) => {
      if (item.id == productId) {
        item.quantity += counter;
      }
      return item;
    });
    // console.log(foundItem);
    // if (foundItem) {
    //   foundItem.quantity = counter;
    // }
    this.cartItemList = updated;
    this.productList.next(this.cartItemList);
  }

  removeCartItem(product: products) {
    this.cartItemList.map((item: any, index: any) => {
      if (product.id === item.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
