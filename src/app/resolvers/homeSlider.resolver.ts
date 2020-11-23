import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Slider } from '../models/slider';
import { HomeService } from '../Services/site/home/home.service';

@Injectable()
export class HomeSliderResolver implements Resolve<Slider[]> {
    constructor(private alertService: ToastrService, private homeService: HomeService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Slider[]> {
        return this.homeService.getSliderItems().pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                return of(null);
            })
        );
    }
}
