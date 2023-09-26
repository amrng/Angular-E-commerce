import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  api: string = 'https://dummyjson.com/products';

  getProductList(): Observable<any> {
    return this.http.get(this.api);
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }
}
