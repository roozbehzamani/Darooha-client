import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/data/models/userPanel/order';
import { Orderitem } from 'src/app/data/models/userPanel/orderitem';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

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

  getOrders(userId: string = this.userId): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + userId + '/Orders');
  }
  getItems(id: string, userId: string = this.userId): Observable<Orderitem[]> {
    return this.http.get<Orderitem[]>(this.baseUrl + userId + '/Orders/' + id + '/OrderItems');
  }
}
