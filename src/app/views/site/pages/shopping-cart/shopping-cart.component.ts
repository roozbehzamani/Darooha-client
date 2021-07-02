import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Bascket } from 'src/app/data/models/site/bascket';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  bascketList: Bascket[] = [];
  totalPrice: number;
  currentVal: number;

  bascket: Bascket = {
    productCount: null,
    productID: null,
    productImage: null,
    productName: null,
    productPrice: null,
    productTotalPrice: null
  };

  constructor(private alertService: ToastrService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.bascketList = JSON.parse(localStorage.getItem('bascket'));
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    this.totalPrice = 0;
    if (this.bascketList !== null) {
      this.bascketList.forEach(element => {
        this.totalPrice += Number(element.productTotalPrice);
      });
    } else {
      this.alertService.warning('سبد خرید شما خالی است', 'توجه');
    }
  }

  btnAdd(id: string) {
    this.currentVal = Number((document.getElementById(id) as HTMLInputElement).value);
    (document.getElementById(id) as HTMLInputElement).value = (this.currentVal + 1).toString();
    this.updateBascket(id);
  }

  btnMines(id: string) {
    this.currentVal = Number((document.getElementById(id) as HTMLInputElement).value);
    if (this.currentVal > 1) {
      (document.getElementById(id) as HTMLInputElement).value = (this.currentVal - 1).toString();
      this.updateBascket(id);
    }
  }
  updateBascket(id: string) {
    const testBascket: Bascket[] = JSON.parse(localStorage.getItem('bascket'));
    this.bascketList = JSON.parse(localStorage.getItem('bascket'));
    const existBascket: Bascket = this.bascketList.find(x => x.productID === id);
    if (existBascket) {
      const index = this.bascketList.indexOf(existBascket);
      existBascket.productCount = Number((document.getElementById(id) as HTMLInputElement).value);
      existBascket.productTotalPrice = existBascket.productCount * existBascket.productPrice;
      this.bascketList[index] = existBascket;
    }
    localStorage.setItem('bascket', JSON.stringify(this.bascketList));
    this.calculateTotalPrice();
  }
}
