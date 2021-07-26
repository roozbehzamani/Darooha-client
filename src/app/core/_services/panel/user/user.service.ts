import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/data/models/userPanel/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/user/';


  constructor(private http: HttpClient) { }


  smGetUsers(): Observable<User[]> {
    return this.http.post<User[]>(this.baseUrl, { flag: 1 });
  }
  smGetUser(id: string): Observable<User> {
    // tslint:disable-next-line:object-literal-shorthand
    return this.http.post<User>(this.baseUrl, { flag: 2, id: id });
  }
  smCreateUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, { flag: 3 });
  }
  smUpdateUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, { flag: 4, id: user.id });
  }
  smDeleteUser(id: string) {
    // tslint:disable-next-line:object-literal-shorthand
    return this.http.post(this.baseUrl, { flag: 5, id: id });
  }





  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + id);
  }

  updateUserInfo(id: string, user: User) {
    return this.http.put(this.baseUrl + id, user);
  }

  updateUserPass(id: string, passModel: any) {
    return this.http.put(this.baseUrl + 'ChangeUserPassword/' + id, passModel);
  }
}
