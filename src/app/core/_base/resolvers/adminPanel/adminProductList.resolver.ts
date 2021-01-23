import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { AdminProductService } from 'src/app/core/_services/panel/admin/admin-product/admin-product.service';
import { ProductList } from 'src/app/data/models/adminPanel/product/product-list';

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
