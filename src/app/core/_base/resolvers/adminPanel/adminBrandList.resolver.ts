import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { Brand } from 'src/app/data/models/adminPanel/Brand/brand';
import { BrandService } from 'src/app/core/_services/panel/admin/brand/brand.service';

@Injectable()
export class AdminBrandListResolver implements Resolve<Brand[]> {
    constructor(private brandService: BrandService,
        private alertService: ToastrService, private authService: AuthService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Brand[]> {
        return this.brandService.getAllBrand(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
