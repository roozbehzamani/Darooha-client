import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserAddress } from 'src/app/models/useraddress';
import { AddressService } from 'src/app/Services/panel/address/address.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditUserAddressComponent } from '../edit-user-address/edit-user-address.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  @Input() address: UserAddress;
  @Output() deleteAddress = new EventEmitter<UserAddress>();

  constructor(private addressSercise: AddressService, private dialog: MatDialog, private alertService: ToastrService) { }

  ngOnInit() {
  }

  onEdit(address: UserAddress) {
    this.addressSercise.populateForm(address);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditUserAddressComponent, dialogConfig);

    const sub = dialogRef.componentInstance.updateAddress.subscribe((data) => {
      this.updateAddress(data);
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

  updateAddress(address: UserAddress) {
    this.address = address;
  }

  onDelete(address: UserAddress) {
    if (confirm('آیا از حذف این آدرس مطمئن هستید ؟')) {
      this.addressSercise.deleteUserAddress(address.id).subscribe(() => {
        this.alertService.success('آدرس  شما با موفقیت حذف شد', 'موفق');
        this.deleteAddress.emit(address);
      }, error => {
        this.alertService.error(error, 'خطا در حذف آدرس');
      });
    }
  }
}
