import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/data/models/userPanel/order';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit , OnDestroy {

  order: Order[];
  subManager = new Subscription();

  constructor(private route: ActivatedRoute, private alertService: ToastrService) { }

  ngOnInit() {
    this.loadOrders();
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadOrders() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.order = data.orders;
      })
    );
  }
}
