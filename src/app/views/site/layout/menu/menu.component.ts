import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService } from 'src/app/core/_services/site/menu/menu.service';
import { AllMenu } from 'src/app/data/models/site/allMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  menuList: AllMenu[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService,
    private alertService: ToastrService
  ) { }

  ngOnInit() {
    this.loadAllMenu();
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadAllMenu() {
    this.subManager.add(
      this.menuService.getAllMenu().subscribe(data => {
        this.menuList = data;
      })
    );
  }

}
