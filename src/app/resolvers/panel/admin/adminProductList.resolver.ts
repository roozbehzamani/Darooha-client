import { Injectable } from '@angular/core';
import { ProductList } from 'src/app/models/panel/admin/product/product-list';
import { AdminProductService } from 'src/app/Services/panel/admin/admin-product/admin-product.service';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdminProductListResolver implements Resolve<ProductList[]> {
    constructor(private adminProductService: AdminProductService,
                private alertService: ToastrService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ProductList[]> {
        return this.adminProductService.getAllproduct(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
