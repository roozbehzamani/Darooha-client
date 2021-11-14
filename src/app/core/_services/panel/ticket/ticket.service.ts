import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/data/models/userPanel/ticket';
import { TicketContent } from 'src/app/data/models/userPanel/ticketContent';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

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

  getTickets(page: number, userId: string = this.userId): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl + 'userId/' + userId + '/tickets/page/' + page);
  }

  getTicket(ticketId: string, userId: string = this.userId): Observable<Ticket> {
    return this.http.get<Ticket>(this.baseUrl + 'users/' + userId + '/tickets/' + ticketId);
  }

  addTicket(ticket: any, userId: string = this.userId): Observable<Ticket> {
    return this.http.post<Ticket>(this.baseUrl + 'users/' + userId + '/tickets', ticket);
  }
  addTicketContent(ticketContent: any, id: string, userId: string = this.userId): Observable<TicketContent> {
    return this.http.post<TicketContent>(this.baseUrl + 'users/' + userId + '/tickets/' + id + '/ticketcontents', ticketContent);
  }
}
