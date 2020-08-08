import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../Services/auth/auth.service';
import { Orderitem } from '../models/orderitem';
import { OrderService } from '../Services/panel/order/order.service';

@Injectable()
export class OrderItemResolver implements Resolve<Orderitem[]> {
    constructor(private orderService: OrderService, private router: Router,
                private alertService: ToastrService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Orderitem[]> {
        return this.orderService.getItems(this.authService.decodedToken.nameid, route.params['orderId']).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
