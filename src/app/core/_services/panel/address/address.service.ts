import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserAddress } from 'src/app/data/models/userPanel/useraddress';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/';
  userId: string;

  constructor(
    private http: HttpClient,
    private store: Store<fromStore.State>,
    private formBuilder: FormBuilder
  ) {
    this.store.select(fromStore.getUserId).subscribe(data => {
      this.userId = data;
    });
  }

  addressForm: FormGroup = this.formBuilder.group({
    id: [],
    addressName: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });

  getAllAddress(userId: string = this.userId): Observable<UserAddress[]> {
    return this.http.get<UserAddress[]>(this.baseUrl + 'users/' + userId + '/alluseraddress');
  }

  addUserAddress(address: UserAddress, userId: string = this.userId): Observable<UserAddress> {
    return this.http.post<UserAddress>(this.baseUrl + 'users/' + userId + '/useraddress', address);
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
