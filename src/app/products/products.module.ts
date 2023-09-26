import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SalePipe } from './pipes/sale.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent,
    ProductListComponent,
    ProductDetailsComponent,
    SalePipe,
    CurrencyPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [CartComponent, ProductListComponent, ProductDetailsComponent],
})
export class ProductsModule {}
