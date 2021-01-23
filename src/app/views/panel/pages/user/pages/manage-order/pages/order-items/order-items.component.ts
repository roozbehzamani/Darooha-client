import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Orderitem } from 'src/app/data/models/userPanel/orderitem';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit , OnDestroy {

  items: Orderitem[];
  subManager = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadItems();
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadItems() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.items = data.items;
      })
    );
  }
}
