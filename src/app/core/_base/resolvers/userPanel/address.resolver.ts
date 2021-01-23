import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { AddressService } from 'src/app/core/_services/panel/address/address.service';
import { UserAddress } from 'src/app/data/models/userPanel/useraddress';

@Injectable()
export class AddressResolver implements Resolve<UserAddress[]> {
    constructor(private addressService: AddressService,
                private alertService: ToastrService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<UserAddress[]> {
        return this.addressService.getAllAddress(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
