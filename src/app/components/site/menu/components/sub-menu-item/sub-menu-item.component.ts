import { Component, OnInit, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/models/sub-menu-item';

@Component({
  selector: 'app-sub-menu-item',
  templateUrl: './sub-menu-item.component.html',
  styleUrls: ['./sub-menu-item.component.css']
})
export class SubMenuItemComponent implements OnInit {

  @Input() item: SubMenuItem;

  constructor() { }

  ngOnInit() {
  }
}
