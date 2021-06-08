import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { WalletService } from 'src/app/core/_services/panel/wallet/wallet.service';
import { Wallet } from 'src/app/data/models/userPanel/wallet';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss']
})
export class AddWalletComponent implements OnInit {

  @Output() updateWallet = new EventEmitter<Wallet>();
  wallet: Wallet;

  constructor(
    private authService: AuthService,
    public walletService: WalletService,
    private alertService: ToastrService,
    private matdialogRef: MatDialogRef<AddWalletComponent>
  ) { }

  ngOnInit() {
  }
  onClear() {
    this.walletService.walletForm.reset();
    this.matdialogRef.close();
  }
  onSubmitAdd() {
    if (this.walletService.walletForm.valid) {
      this.wallet = Object.assign({}, this.walletService.walletForm.value);
      this.walletService.addToWallet(this.wallet, this.authService.decodedToken.nameid).subscribe((data) => {
        this.alertService.success('آدرس شما با موفقیت ثبت شد', 'موفق');
        this.onClear();
        this.updateWallet.emit(data);
      }, error => {
        this.alertService.error(error, 'خطا در ثبت کارت جدید');
      });
    } else {
      this.alertService.warning('اطلاعات کارت را به درستی وارد کنید', 'خطا');
    }
  }
}
