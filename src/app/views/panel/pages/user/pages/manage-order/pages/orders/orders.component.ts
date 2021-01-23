import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/data/models/userPanel/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input() order: Order;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick(orderId: string) {
    this.router.navigate(['panel/user/manageOrders/items', orderId]);
  }
}
