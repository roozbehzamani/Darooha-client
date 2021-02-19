import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/data/models/adminPanel/Brand/brand';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/';
  constructor(private http: HttpClient) { }

  getAllBrand(userId: string): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.baseUrl + userId + '/Admin/AllBrandList');
  }

  addBrand(id: string, brand: any): Observable<Brand> {
    return this.http.post<Brand>(this.baseUrl + 'admin/' + id + '/brands', brand);
  }

  deleteBrand(id: string, userId: string) {
    return this.http.delete(this.baseUrl + userId + '/Admin/deleteBrand/' + id);
  }
}
