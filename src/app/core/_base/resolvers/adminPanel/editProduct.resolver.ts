import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminProductService } from 'src/app/core/_services/panel/admin/admin-product/admin-product.service';
import { AddProduct } from 'src/app/data/models/adminPanel/product/add-product';

@Injectable()
export class EditProductResolver implements Resolve<AddProduct> {
    constructor(
        private adminProductService: AdminProductService,
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<AddProduct> {
        return this.adminProductService.getProduct(route.params.productId);
        // .pipe(
        //     catchError(error => {
        //         this.alertService.error(error, 'خطا');
        //         return of(null);
        //     })
        // );
    }
}
