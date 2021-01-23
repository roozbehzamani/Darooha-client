import { Component, OnInit, Input } from '@angular/core';
import { Orderitem } from 'src/app/data/models/userPanel/orderitem';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() item: Orderitem;

  constructor() { }

  ngOnInit() {
  }

}
