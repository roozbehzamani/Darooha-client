import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { TitleMenu } from 'src/app/models/title-menu';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/Services/site/menu/menu.service';
import { SubMenu } from 'src/app/models/sub-menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit, OnDestroy {

  subMenus: SubMenu[];
  subManager = new Subscription();
  @Input() menu: Menu;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadSubMenus();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadSubMenus() {
    this.subManager.add(
      this.menuService.getAllSubMenu(this.menu.id).subscribe(data => {
        this.subMenus = data;
      })
    );
  }
}
