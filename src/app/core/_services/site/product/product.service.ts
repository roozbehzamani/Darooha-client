import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/models/site/product';
import { ProductImage } from 'src/app/data/models/site/product-image';
import { PaginationResult } from 'src/app/data/models/common/paginationResult';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/app/';
  constructor(private http: HttpClient) { }

  getProductList(id: string, page?, itemPerPage?, filter?, sortHe?, sortDir?): Observable<PaginationResult<Product[]>> {
    const paginatedResult: PaginationResult<Product[]> = new PaginationResult<Product[]>();
    let params = new HttpParams();

    if (page != null && itemPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemPerPage);
      params = params.append('filter', filter);
      params = params.append('sortHe', sortHe);
      params = params.append('sortDir', sortDir);
    }
    return this.http.get<Product[]>(this.baseUrl + 'Home/ProductList/' + id, { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
  }
  getSingleProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'Home/Product/' + id);
  }
  getSingleProductImages(id: string): Observable<ProductImage[]> {
    return this.http.get<ProductImage[]>(this.baseUrl + 'Home/ProductImages/' + id);
  }
}
