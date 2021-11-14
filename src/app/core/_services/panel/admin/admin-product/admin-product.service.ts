import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddProduct } from 'src/app/data/models/adminPanel/product/add-product';
import { ProductList } from 'src/app/data/models/adminPanel/product/product-list';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/';
  userId: string;

  constructor(
    private http: HttpClient,
    private store: Store<fromStore.State>
  ) {
    this.store.select(fromStore.getUserId).subscribe(data => {
      this.userId = data;
    });
  }

  getAllproduct(userId: string = this.userId): Observable<ProductList[]> {
    return this.http.get<ProductList[]>(this.baseUrl + userId + '/Admin/AllProductList');
  }

  getProduct(productId: string, userId: string = this.userId): Observable<AddProduct> {
    return this.http.get<AddProduct>(this.baseUrl + userId + '/Admin/SingleProduct/' + productId);
  }

  createNewProduct(addProduct: AddProduct, userId: string = this.userId): Observable<AddProduct> {
    return this.http.post<AddProduct>(this.baseUrl + userId + '/Admin/AddProduct', addProduct);
  }

  // updateUserAddress(address: UserAddress) {
  //   return this.http.put(this.baseUrl + 'useraddress/' + address.id, address);
  // }

  // deleteUserAddress(id: string) {
  //   return this.http.delete(this.baseUrl + 'useraddress/' + id);
  // }

}
