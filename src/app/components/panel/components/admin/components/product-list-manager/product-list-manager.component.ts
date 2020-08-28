import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductList } from 'src/app/models/panel/admin/product/product-list';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list-manager',
  templateUrl: './product-list-manager.component.html',
  styleUrls: ['./product-list-manager.component.css']
})
export class ProductListManagerComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  products: ProductList[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadProducts() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.products = data.products;
      })
    );
  }

  counter(point: number, count: number) {
    if (count > 0) {
      return Math.floor(point / count);
    } else {
      return count;
    }
  }

  onEditProduct(productId: string) {
    this.router.navigate(['panel/admin/editProduct', productId]);
  }
}
