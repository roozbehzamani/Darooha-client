import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from 'src/app/core/_services/panel/wallet/wallet.service';
import { Wallet } from 'src/app/data/models/userPanel/wallet';
import { AddWalletComponent } from '../add-wallet/add-wallet.component';

@Component({
  selector: 'app-user-wallet',
  templateUrl: './user-wallet.component.html',
  styleUrls: ['./user-wallet.component.css']
})
export class UserWalletComponent implements OnInit {

  @Input() wallet: Wallet;

  constructor(private walletService: WalletService, private dialog: MatDialog, private alertService: ToastrService) { }

  ngOnInit() {
  }


  updateAddress(wallet: Wallet) {
    this.wallet = wallet;
  }
}
