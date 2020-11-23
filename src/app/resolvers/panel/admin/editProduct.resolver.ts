import { Injectable } from '@angular/core';
import { AdminProductService } from 'src/app/Services/panel/admin/admin-product/admin-product.service';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AddProduct } from 'src/app/models/panel/admin/product/add-product';

@Injectable()
export class EditProductResolver implements Resolve<AddProduct> {
    constructor(private adminProductService: AdminProductService, private router: Router,
                private alertService: ToastrService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<AddProduct> {
        console.log(this.adminProductService.getProduct('ali', 'goli'));
        console.log(this.adminProductService.getProduct(this.authService.decodedToken.nameid, route.params['productId']));
        return this.adminProductService.getProduct(this.authService.decodedToken.nameid, route.params['productId']);
        // .pipe(
        //     catchError(error => {
        //         this.alertService.error(error, 'خطا');
        //         return of(null);
        //     })
        // );
    }
}
