import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TitleMenu } from 'src/app/models/title-menu';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/Services/site/menu/menu.service';
import { SubMenuItem } from 'src/app/models/sub-menu-item';

@Component({
  selector: 'app-sub-menu-title',
  templateUrl: './sub-menu-title.component.html',
  styleUrls: ['./sub-menu-title.component.css']
})
export class SubMenuTitleComponent implements OnInit, OnDestroy {

  @Input() title: TitleMenu;
  subMenuItems: SubMenuItem[];
  subManager = new Subscription();

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadSubMenuItems();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadSubMenuItems() {
    this.subManager.add(
      this.menuService.getAllSubMenuItem(this.title.id).subscribe(data => {
        this.subMenuItems = data;
      })
    );
  }
}
