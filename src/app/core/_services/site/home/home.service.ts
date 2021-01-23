import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/models/site/product';
import { Slider } from 'src/app/data/models/site/slider';
import { SpecialProduct } from 'src/app/data/models/site/special-product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/app/';
  constructor(private http: HttpClient) { }

  getNewProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'Home/NewProduct');
  }
  getSliderItems(): Observable<Slider[]> {
    return this.http.get<Slider[]>(this.baseUrl + 'Home/Slider');
  }
  getSingleProduct(): Observable<SpecialProduct> {
    return this.http.get<SpecialProduct>(this.baseUrl + 'Home/SingleProduct');
  }
}
