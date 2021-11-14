import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/data/models/adminPanel/Brand/brand';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

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

  getAllBrand(userId: string = this.userId): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.baseUrl + userId + '/Admin/AllBrandList');
  }

  getBrand(id: string, userId: string = this.userId): Observable<Brand> {
    return this.http.get<Brand>(this.baseUrl + userId + '/Admin/getBrand/' + userId);
  }

  addBrand(brand: any, userId: string = this.userId): Observable<Brand> {
    return this.http.post<Brand>(this.baseUrl + 'admin/' + userId + '/brands', brand);
  }

  deleteBrand(id: string, userId: string = this.userId) {
    return this.http.delete(this.baseUrl + userId + '/Admin/deleteBrand/' + id);
  }

  editBrand(brand: any, id: string, userId: string = this.userId) {
    return this.http.put(this.baseUrl + userId + '/Admin/UpdateBrand/' + id, brand);
  }
}
