import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/models/slider';
import { Product } from 'src/app/models/product';
import { SpecialProduct } from 'src/app/models/special-product';
import { Menu } from 'src/app/models/menu';

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
  getNewMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.baseUrl + 'Home/NewMenus');
  }
}
