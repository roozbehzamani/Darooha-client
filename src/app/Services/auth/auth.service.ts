import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;
  photoUrl = new BehaviorSubject<string>('../../../assets/img/default-profile.png');
  currentPhotoUrl = this.photoUrl.asObservable();

  constructor(private http: HttpClient, private alertService: ToastrService, private router: Router) { }

  changeUserPhoto(photoUrl: string) {
    this.photoUrl.next(photoUrl);
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((resp: any) => {
        const user = resp;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('refreshToken', user.refresh_token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.currentUser = user.user;
          this.changeUserPhoto(this.currentUser.imageURL);
        }
      })
    );
  }

  register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // tslint:disable-next-line: triple-equals
    if (token != null || token != undefined) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('refreshToken');
    this.decodedToken = null;
    this.currentUser = null;
    this.router.navigate(['/auth/login']);
    this.alertService.warning('با موفقیت خارج شدید', 'موفق');
  }

  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles = this.decodedToken.role as Array<string>;
    allowedRoles.forEach(element => {
      if (userRoles.includes(element)) {
        isMatch = true;
        return;
      }
    });
    return isMatch;
  }

  getDashboardUrl(): string {
    const userRoles = this.decodedToken.role as Array<string>;
    if (userRoles.includes('Admin')) {
      return 'panel/admin/dashboard';
    } else if (userRoles.includes('Accountant')) {
      return 'panel/accountant/dashboard';
    } else if (userRoles.includes('Blog')) {
      return 'panel/blog/dashboard';
    } else {
      return 'panel/user/dashboard';
    }
  }

  getNewRefreshToken(): Observable<any> {
    const user: User = JSON.parse(localStorage.getItem('user'));
    const username = user.mobPhone;
    const refreshToken = localStorage.getItem('refreshToken');
    const granttype = 'refresh_token';
    return this.http.post<any>(this.baseUrl + 'login', {username, refreshToken, granttype}).pipe(
      map(result => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          this.decodedToken = this.jwtHelper.decodeToken(result.token);
        }
        return result as any;
      })
    );
  }
}
