import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Router } from '@angular/router';

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
