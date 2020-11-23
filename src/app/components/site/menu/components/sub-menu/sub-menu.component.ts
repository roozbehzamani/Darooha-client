import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TitleMenu } from 'src/app/models/title-menu';
import { SubMenu } from 'src/app/models/sub-menu';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/Services/site/menu/menu.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit, OnDestroy {

  @Input() subMenu: SubMenu;
  titles: TitleMenu[];
  subManager = new Subscription();

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadSubMenuTitles();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadSubMenuTitles() {
    this.subManager.add(
      this.menuService.getAllSubMenuTitle(this.subMenu.id).subscribe(data => {
        this.titles = data;
      })
    );
  }
}
