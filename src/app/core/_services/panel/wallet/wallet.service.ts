import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/data/models/userPanel/wallet';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/';
  userId: string;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private store: Store<fromStore.State>
  ) {
    this.store.select(fromStore.getUserId).subscribe(data => {
      this.userId = data;
    });
  }

  walletForm: FormGroup = this.formBuilder.group({
    inventory: ['', [Validators.required]],
  });

  getWallet(userId: string = this.userId): Observable<Wallet> {
    return this.http.post<Wallet>(this.baseUrl + 'wallet/' + userId, null);
  }

  addToWallet(wallet: Wallet, userId: string = this.userId): Observable<Wallet> {
    return this.http.put<Wallet>(this.baseUrl + 'wallet/' + userId, wallet);
  }

  populateForm(wallet: Wallet) {
    this.walletForm.setValue(wallet);
  }

}
