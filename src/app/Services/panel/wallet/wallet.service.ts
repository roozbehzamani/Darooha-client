import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/panel/';
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }
  walletForm: FormGroup = this.formBuilder.group({
    id: [],
    inventory: ['', [Validators.required]],
  });

  getWallet(id: string): Observable<Wallet> {
    return this.http.post<Wallet>(this.baseUrl + 'wallet/' + id, null);
  }

  addToWallet(wallet: Wallet, id: string): Observable<Wallet> {
    return this.http.put<Wallet>(this.baseUrl + 'wallet/' + id, wallet);
  }

  populateForm(wallet: Wallet) {
    this.walletForm.setValue(wallet);
  }

}
