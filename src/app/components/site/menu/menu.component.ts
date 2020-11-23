import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/Services/site/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  menus: Menu[];
  subManager = new Subscription();

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadMenu();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadMenu() {
    this.subManager.add(
      this.menuService.getAllMenu().subscribe(data => {
        this.menus = data;
      })
    );
  }
}
