import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/_services/site/product/product.service';
import { FilterSortOrderBy } from 'src/app/data/models/common/filterSortOrderBy';
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
  filterSortOrderBy: FilterSortOrderBy = {
    sortDirection: '',
    sortHeader: '',
    searchKey: ''
  };

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

  paginatorEvent(filter: any) {

    let { searchKey, sortDirection, sortHeader } = this.filterSortOrderBy;

    if (searchKey === undefined || searchKey == null) {
      searchKey = '';
    }
    if (sortDirection === undefined || sortDirection == null) {
      sortDirection = '';
    }
    if (sortHeader === undefined || sortHeader == null) {
      sortHeader = '';
    }

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.menuId;
        }
      );
    this.subManager.add(
      this.productService.getProductList(this.id, filter.pageIndex, filter.pageSize,
        searchKey.trim(), sortHeader, sortDirection)
        .subscribe((data) => {
          this.products = data.result;
          this.pagination = data.pagination;
        }, error => {
            this.alertService.error(error);
        })
    );
  }

  sortDataEvent(activation: string, direction: string) {
    this.filterSortOrderBy.sortHeader = activation;
    this.filterSortOrderBy.sortDirection = direction;
    this.applyFilter();
  }

  activeDiscount(discount: string, price: number) {
    return (1 - (Number(discount) / 100)) * price;
  }

  /* onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  } */

  applyFilter() {

    let { searchKey, sortDirection, sortHeader } = this.filterSortOrderBy;
    if (searchKey === undefined || searchKey == null) {
      searchKey = '';
    }
    if (sortDirection === undefined || sortDirection == null) {
      sortDirection = '';
    }
    if (sortHeader === undefined || sortHeader == null) {
      sortHeader = '';
    }

    console.log(searchKey);
    console.log(sortDirection);
    console.log(sortHeader);

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.menuId;
        }
      );
    this.subManager.add(
      this.productService.getProductList(this.id, this.pagination.currentPage, this.pagination.itemsPerPage,
        searchKey.trim(), sortHeader, sortDirection)
        .subscribe((data) => {
          this.products = data.result;
          this.pagination = data.pagination;
        }, error => {
            this.alertService.error(error);
        })
    );
  }

}
