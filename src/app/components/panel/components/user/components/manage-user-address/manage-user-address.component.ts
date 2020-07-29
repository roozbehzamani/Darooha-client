import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { UserAddress } from 'src/app/models/useraddress';
import { ActivatedRoute } from '@angular/router';
import { EditUserAddressComponent } from './edit-user-address/edit-user-address.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-user-address',
  templateUrl: './manage-user-address.component.html',
  styleUrls: ['./manage-user-address.component.css']
})
export class ManageUserAddressComponent implements OnInit {

  formTitle: string;
  addresses: UserAddress[];

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private alertService: ToastrService) { }

  ngOnInit() {
    this.loadAddress();
  }
  loadAddress() {
    this.route.data.subscribe(data => {
      this.addresses = data.address;
    });
  }
  onCreate() {
    this.formTitle = 'افزودن آدرس جدید';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditUserAddressComponent, dialogConfig);

    const sub = dialogRef.componentInstance.newAddress.subscribe((data) => {
      this.insertAddress(data);
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });

  }
  insertAddress(address: UserAddress) {
    this.addresses.push({
      id: address.id,
      address: address.address,
      addressName: address.addressName,
    });
  }

  removeAddress(address: UserAddress) {
    this.addresses.splice(this.addresses.indexOf(address), 1);
  }
}
