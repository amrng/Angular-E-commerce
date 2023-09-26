import { Component } from '@angular/core';
import { CartService } from 'src/app/products/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  totalItems: number = 0;

  constructor(private _cartServie: CartService) {}

  ngOnInit() {
    this._cartServie.getCartItems().subscribe((data: any) => {
      this.totalItems = data.length;
    });
  }
}
