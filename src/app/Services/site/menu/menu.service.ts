import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Menu } from 'src/app/models/menu';
import { Observable } from 'rxjs';
import { TitleMenu } from 'src/app/models/title-menu';
import { SubMenu } from 'src/app/models/sub-menu';
import { SubMenuItem } from 'src/app/models/sub-menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/app/';
  constructor(private http: HttpClient) { }

  getAllMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.baseUrl + 'menu');
  }
  getAllSubMenu(id: string): Observable<SubMenu[]> {
    return this.http.get<SubMenu[]>(this.baseUrl + 'SubMenu/' + id);
  }
  getAllSubMenuTitle(id: string): Observable<TitleMenu[]> {
    return this.http.get<TitleMenu[]>(this.baseUrl + 'TitleSubMenu/' + id);
  }
  getAllSubMenuItem(id: string): Observable<SubMenuItem[]> {
    return this.http.get<SubMenuItem[]>(this.baseUrl + 'SubMenuItem/' + id);
  }
}
