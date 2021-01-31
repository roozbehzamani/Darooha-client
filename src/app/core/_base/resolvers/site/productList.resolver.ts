import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/core/_services/site/product/product.service';
import { Product } from 'src/app/data/models/site/product';

@Injectable()
export class ProductListResolver implements Resolve<Product[]> {
    pageNumber = 1;
    pageSize = 2;
    constructor(private productService: ProductService, private router: Router,
                private alertService: ToastrService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {
        // tslint:disable-next-line:no-string-literal
        return this.productService.getProductList(route.params['menuId'], this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
