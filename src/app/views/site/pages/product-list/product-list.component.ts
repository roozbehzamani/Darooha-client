import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/_services/site/product/product.service';
import { Pagination } from 'src/app/data/models/common/pagination';
import { Product } from 'src/app/data/models/site/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  products: Product[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pagination: Pagination;

  constructor(private route: ActivatedRoute, private productService: ProductService, private alertService: ToastrService) { }

  ngOnInit() {
    this.loadProducts();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadProducts() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.products = data.productList.result;
        this.pagination = data.productList.pagination;
      })
    );
  }

  paginatorEvent(event: any) {
    console.log(event);
    this.subManager.add(
      this.productService.getProductList('1', event.pageIndex, event.pageSize)
        .subscribe((data) => {
          this.products = data.result;
          this.pagination = data.pagination;
        }, error => {
            this.alertService.error(error);
        })
    );
  }
}
