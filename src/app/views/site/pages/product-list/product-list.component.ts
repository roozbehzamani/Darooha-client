import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/data/models/site/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  products: Product[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadProducts();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadProducts() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.products = data.productList;
      })
    );
  }
}
