import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NotFoundPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ProductsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
