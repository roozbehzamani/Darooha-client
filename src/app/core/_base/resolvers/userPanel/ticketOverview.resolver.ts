import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { TicketService } from 'src/app/core/_services/panel/ticket/ticket.service';
import { Ticket } from 'src/app/data/models/userPanel/ticket';

@Injectable()
export class TicketOverviewResolver implements Resolve<Ticket> {
    constructor(
        private ticketService: TicketService,
        private router: Router,
        private alertService: ToastrService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Ticket> {
        return this.ticketService.getTicket(route.params.ticketId).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
