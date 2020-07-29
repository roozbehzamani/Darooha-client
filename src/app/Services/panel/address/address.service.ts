import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAddress } from 'src/app/models/useraddress';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/';
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }
  addressForm: FormGroup = this.formBuilder.group({
    id: [],
    addressName: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });

  getAllAddress(id: string): Observable<UserAddress[]> {
    return this.http.get<UserAddress[]>(this.baseUrl + 'users/' + id + '/alluseraddress');
  }

  addUserAddress(address: UserAddress, id: string): Observable<UserAddress> {
    return this.http.post<UserAddress>(this.baseUrl + 'users/' + id + '/useraddress', address);
  }

  updateUserAddress(address: UserAddress) {
    return this.http.put(this.baseUrl + 'useraddress/' + address.id, address);
  }

  deleteUserAddress(id: string) {
    return this.http.delete(this.baseUrl + 'useraddress/' + id);
  }

  populateForm(address: UserAddress) {
    this.addressForm.setValue(address);
  }

}
