import { Component, Input } from '@angular/core';
import { products } from '../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: products;

  constructor(private router: Router) {}

  redirectToDetails(id: number) {
    this.router.navigate(['details', +id]);
  }
}
