import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../Services/auth/auth.service';
import { Order } from '../models/order';
import { OrderService } from '../Services/panel/order/order.service';

@Injectable()
export class OrderResolver implements Resolve<Order[]> {
    constructor(private orderService: OrderService,
                private alertService: ToastrService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Order[]> {
        return this.orderService.getOrders(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
