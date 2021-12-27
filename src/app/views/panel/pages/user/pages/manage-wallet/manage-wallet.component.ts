import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Wallet } from 'src/app/data/models/userPanel/wallet';
import { AddWalletComponent } from './pages/add-wallet/add-wallet.component';

@Component({
  selector: 'app-manage-wallet',
  templateUrl: './manage-wallet.component.html',
  styleUrls: ['./manage-wallet.component.css']
})
export class ManageWalletComponent implements OnInit {

  formTitle: string;
  wallet: Wallet;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private alertService: ToastrService) { }

  ngOnInit() {
    this.loadAddress();
  }
  loadAddress() {
    this.route.data.subscribe(data => {
      this.wallet = data.wallet;
    });
  }
  onCreate() {
    this.formTitle = 'افزودن به کیف پول';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddWalletComponent, dialogConfig);

    const sub = dialogRef.componentInstance.updateWallet.subscribe((data) => {
      this.insertAddress(data);
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });

  }
  insertAddress(wallet: Wallet) {
    this.wallet.push({
      id: wallet.id,
      inventory: wallet.inventory
    });
  }
}
