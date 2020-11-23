import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { Orderitem } from 'src/app/models/orderitem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/';
  constructor(private http: HttpClient) { }

  getOrders(id: string): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + id + '/Orders');
  }
  getItems(userid: string, id: string): Observable<Orderitem[]> {
    return this.http.get<Orderitem[]>(this.baseUrl + userid + '/Orders/' + id + '/OrderItems');
  }
}
