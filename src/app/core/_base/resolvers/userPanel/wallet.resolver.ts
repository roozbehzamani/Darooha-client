import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WalletService } from 'src/app/core/_services/panel/wallet/wallet.service';
import { Wallet } from 'src/app/data/models/userPanel/wallet';

@Injectable()
export class WalletResolver implements Resolve<Wallet> {
    constructor(
        private walletService: WalletService,
        private alertService: ToastrService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Wallet> {
        return this.walletService.getWallet().pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
