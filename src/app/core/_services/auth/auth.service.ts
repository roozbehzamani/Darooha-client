import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/data/models/userPanel/user';
import * as fromStore from '../../../store';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/auth/';
  jwtHelper = new JwtHelperService();
  userRoles: string[] = [];

  constructor(
    private http: HttpClient,
    private alertService: ToastrService,
    private router: Router,
    private store: Store<fromStore.State>
  ) {
    const token = localStorage.getItem('token');
    if (token) {
      this.userRoles = this.jwtHelper.decodeToken(token).role as Array<string>;
    }
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((resp: any) => {
        const user = resp;
        if (user) {
          // store
          this.store.dispatch(new fromStore.EditLoggedUser(user.user));
          const decodedToken = this.jwtHelper.decodeToken(user.token);
          this.store.dispatch(new fromStore.EditDecodedToken(decodedToken));
          this.userRoles = decodedToken.role as Array<string>;
          localStorage.setItem('token', user.token);
          localStorage.setItem('refreshToken', user.refresh_token);
        }
      })
    );
  }

  register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.store.dispatch(new fromStore.ResetDecodedToken());
    this.store.dispatch(new fromStore.ResetLoggedUser());
    this.userRoles = [];
    this.router.navigate(['/auth/login']);
    this.alertService.warning('با موفقیت خارج شدید', 'موفق');
  }

  logoutRefreshToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.store.dispatch(new fromStore.ResetDecodedToken());
    this.store.dispatch(new fromStore.ResetLoggedUser());
    this.userRoles = [];
    this.router.navigate(['/auth/login']);
    this.alertService.error('خطا در اعتبار سنجی خودکار', 'خطا');
    this.alertService.warning('با موفقیت خارج شدید', 'موفق');
  }

  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles = this.userRoles;
    if (Array.isArray(userRoles)) {
      allowedRoles.forEach(element => {
        if (userRoles.includes(element)) {
          isMatch = true;
          return;
        }
      });
    } else {
      allowedRoles.forEach(element => {
        if (userRoles === element) {
          isMatch = true;
          return;
        }
      });
    }
    return isMatch;
  }

  getDashboardUrl(): string {
    const userRoles = this.userRoles;

    if (Array.isArray(userRoles)) {
      if (userRoles.includes('Admin')) {
        return 'panel/admin/dashboard';
      } else if (userRoles.includes('Accountant')) {
        return 'panel/accountant/dashboard';
      } else if (userRoles.includes('Blog') || userRoles.includes('AdminBlog')) {
        return 'panel/blog/dashboard';
      } else {
        return 'panel/user/dashboard';
      }
    } else {
      if (userRoles === 'Admin') {
        return 'panel/admin/dashboard';
      } else if (userRoles === 'Accountant') {
        return 'panel/accountant/dashboard';
      } else if (userRoles === 'Blog' || userRoles === 'AdminBlog') {
        return 'panel/blog/dashboard';
      } else {
        return 'panel/user/dashboard';
      }
    }

  }

  getNewRefreshToken(): Observable<any> {
    const user: User = JSON.parse(localStorage.getItem('user'));
    const username = user.mobPhone;
    const refreshToken = localStorage.getItem('refreshToken');
    const granttype = 'refresh_token';
    return this.http.post<any>(this.baseUrl + 'login', { username, refreshToken, granttype }).pipe(
      map(result => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          const decodedToken = this.jwtHelper.decodeToken(result.token);
          this.store.dispatch(new fromStore.EditDecodedToken(decodedToken));
          this.userRoles = decodedToken.role as Array<string>;
        }
        return result as any;
      })
    );

  }
}
