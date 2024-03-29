import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrderService } from 'src/app/core/_services/panel/order/order.service';
import { Orderitem } from 'src/app/data/models/userPanel/orderitem';

@Injectable()
export class OrderItemResolver implements Resolve<Orderitem[]> {
    constructor(
        private orderService: OrderService,
        private alertService: ToastrService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Orderitem[]> {
        return this.orderService.getItems(route.params.orderId).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
