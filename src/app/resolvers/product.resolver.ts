import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from '../Services/site/product/product.service';
import { Product } from '../models/product';

@Injectable()
export class ProductResolver implements Resolve<Product> {
    constructor(private productService: ProductService, private router: Router,
                private alertService: ToastrService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        return this.productService.getSingleProduct(route.params['productId']).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
