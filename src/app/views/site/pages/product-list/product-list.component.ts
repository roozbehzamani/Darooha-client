import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
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
  id: string;
  searchKey: string;

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

    if (this.searchKey === undefined || this.searchKey == null) {
      this.searchKey = '';
    }

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.menuId;
        }
      );
    this.subManager.add(
      this.productService.getProductList(this.id, event.pageIndex, event.pageSize, this.searchKey.trim())
        .subscribe((data) => {
          this.products = data.result;
          this.pagination = data.pagination;
        }, error => {
            this.alertService.error(error);
        })
    );
  }

  activeDiscount(discount: string, price: number) {
    return (1 - (Number(discount) / 100)) * price;
  }

  /* onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  } */

  applyFilter() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.menuId;
        }
      );
    if (this.searchKey === undefined || this.searchKey == null) {
      this.searchKey = '';
    }
    this.subManager.add(
      this.productService.getProductList(this.id, this.pagination.currentPage, this.pagination.itemsPerPage, this.searchKey.trim())
        .subscribe((data) => {
          this.products = data.result;
          this.pagination = data.pagination;
        }, error => {
            this.alertService.error(error);
        })
    );
  }

}
