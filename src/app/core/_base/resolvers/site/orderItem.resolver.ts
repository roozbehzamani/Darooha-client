import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { OrderService } from 'src/app/core/_services/panel/order/order.service';
import { Orderitem } from 'src/app/data/models/userPanel/orderitem';

@Injectable()
export class OrderItemResolver implements Resolve<Orderitem[]> {
    constructor(private orderService: OrderService, private router: Router,
                private alertService: ToastrService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Orderitem[]> {
        // tslint:disable-next-line:no-string-literal
        return this.orderService.getItems(this.authService.decodedToken.nameid, route.params['orderId']).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
