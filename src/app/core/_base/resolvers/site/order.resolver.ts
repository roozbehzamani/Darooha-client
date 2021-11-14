import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrderService } from 'src/app/core/_services/panel/order/order.service';
import { Order } from 'src/app/data/models/userPanel/order';

@Injectable()
export class OrderResolver implements Resolve<Order[]> {
    constructor(
        private orderService: OrderService,
        private alertService: ToastrService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Order[]> {
        return this.orderService.getOrders().pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
