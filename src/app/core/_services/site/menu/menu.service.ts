import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllMenu } from 'src/app/data/models/site/allMenu';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class MenuService {

  baseUrl = environment.apiUrl + environment.apiV1 + 'site/app/';

  constructor(private http: HttpClient) { }

  getAllMenu(): Observable<AllMenu[]> {
    return this.http.get<AllMenu[]>(this.baseUrl + 'Menu/AllMenu');
  }

}
