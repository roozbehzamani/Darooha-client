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

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl);
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
