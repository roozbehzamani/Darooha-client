import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../Services/auth/auth.service';
import { Ticket } from '../models/ticket';
import { TicketService } from '../Services/panel/ticket/ticket.service';

@Injectable()
export class TicketOverviewResolver implements Resolve<Ticket> {
    constructor(private ticketService: TicketService, private router: Router,
                private alertService: ToastrService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Ticket> {
        return this.ticketService.getTicket(this.authService.decodedToken.nameid, route.params['ticketId']).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
