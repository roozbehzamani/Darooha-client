import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/models/site/product';
import { ProductImage } from 'src/app/data/models/site/product-image';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/app/';
  constructor(private http: HttpClient) { }

  getProductList(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'Home/ProductList/' + id);
  }
  getSingleProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'Home/Product/' + id);
  }
  getSingleProductImages(id: string): Observable<ProductImage[]> {
    return this.http.get<ProductImage[]>(this.baseUrl + 'Home/ProductImages/' + id);
  }
}
