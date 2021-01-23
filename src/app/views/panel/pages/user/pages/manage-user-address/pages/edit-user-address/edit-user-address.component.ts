import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { AddressService } from 'src/app/core/_services/panel/address/address.service';
import { UserAddress } from 'src/app/data/models/userPanel/useraddress';

@Component({
  selector: 'app-edit-user-address',
  templateUrl: './edit-user-address.component.html',
  styleUrls: ['./edit-user-address.component.css']
})
export class EditUserAddressComponent implements OnInit {

  @Output() newAddress = new EventEmitter<UserAddress>();
  @Output() updateAddress = new EventEmitter<UserAddress>();
  address: UserAddress;

  constructor(private authService: AuthService, public addressService: AddressService,
              private alertService: ToastrService, private matdialogRef: MatDialogRef<EditUserAddressComponent>) { }

  ngOnInit() {
  }
  onClear() {
    this.addressService.addressForm.reset();
    this.matdialogRef.close();
  }
  onSubmitAdd() {
    if (this.addressService.addressForm.valid) {
      this.address = Object.assign({}, this.addressService.addressForm.value);
      if (this.addActive()) {
        this.addressService.addUserAddress(this.address, this.authService.decodedToken.nameid).subscribe((data) => {
          this.alertService.success('آدرس شما با موفقیت ثبت شد', 'موفق');
          this.onClear();
          this.newAddress.emit(data);
        }, error => {
          this.alertService.error(error, 'خطا در ثبت کارت جدید');
        });
      } else {
        this.addressService.updateUserAddress(this.address).subscribe(() => {
          this.alertService.success('آدرس شما با موفقیت ویرایش شد', 'موفق');
          this.onClear();
          this.updateAddress.emit(this.address);
        }, error => {
          this.alertService.error(error, 'خطا در ویرایش کارت');
        });
      }
    } else {
      this.alertService.warning('اطلاعات کارت را به درستی وارد کنید', 'خطا');
    }
  }

  addActive(): boolean {
    return (this.addressService.addressForm.get('id').value === null ||
      this.addressService.addressForm.get('id').value === undefined);
  }
}
