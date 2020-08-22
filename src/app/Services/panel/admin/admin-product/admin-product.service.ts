import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductList } from 'src/app/models/panel/admin/product/product-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/';
  constructor(private http: HttpClient) { }

  getAllproduct(userId: string): Observable<ProductList[]> {
    return this.http.get<ProductList[]>(this.baseUrl + userId + '/Admin/AllProductList');
  }

  // addUserAddress(address: UserAddress, id: string): Observable<UserAddress> {
  //   return this.http.post<UserAddress>(this.baseUrl + 'users/' + id + '/useraddress', address);
  // }

  // updateUserAddress(address: UserAddress) {
  //   return this.http.put(this.baseUrl + 'useraddress/' + address.id, address);
  // }

  // deleteUserAddress(id: string) {
  //   return this.http.delete(this.baseUrl + 'useraddress/' + id);
  // }

}
