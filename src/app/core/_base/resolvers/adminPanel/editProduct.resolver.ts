import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { AdminProductService } from 'src/app/core/_services/panel/admin/admin-product/admin-product.service';
import { AddProduct } from 'src/app/data/models/adminPanel/product/add-product';

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
