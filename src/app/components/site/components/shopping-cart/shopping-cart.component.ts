import { Component, OnInit } from '@angular/core';
import { Bascket } from 'src/app/models/bascket';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  bascketList: Bascket[] = [] ;
  totalPrice: number;

  constructor(private alertService: ToastrService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.bascketList = JSON.parse(localStorage.getItem('bascket'));
    if (this.bascketList !== null) {
      this.bascketList.forEach(element => {
        this.totalPrice += element.productTotalPrice;
      });
    }else {
      this.alertService.warning('سبد خرید شما خالی است','توجه');
    }
  }
}
