import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/_services/site/home/home.service';
import { Bascket } from 'src/app/data/models/site/bascket';
import { Product } from 'src/app/data/models/site/product';
import { Slider } from 'src/app/data/models/site/slider';
import { SpecialProduct } from 'src/app/data/models/site/special-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  sliderItems: Slider[];
  products: Product[];
  singleProduct: SpecialProduct = {
    id: null,
    productName: null,
    productPrice: null,
    firstImageUrl: null,
    secendImageUrl: null,
    scientificName: null,
    sumPoint: null,
    commentCount: null,
    manufacturingCountry: null,
    manufacturerCompany: null,
    discount: null
  };
  bascket: Bascket = {
    productCount: null,
    productID: null,
    productImage: null,
    productName: null,
    productPrice: null,
    productTotalPrice: null
  };
  bascketList: Bascket[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private alertService: ToastrService
  ) { }

  ngOnInit() {
    this.loadSlider();
    this.loadSingleProduct();
    this.loadProduct();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadSlider() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.sliderItems = data.sliderItem;
      })
    );
  }
  loadProduct() {
    this.subManager.add(
      this.homeService.getNewProduct().subscribe(data => {
        this.products = data;
      })
    );
  }
  loadSingleProduct() {
    this.subManager.add(
      this.homeService.getSingleProduct().subscribe(data => {
        this.singleProduct = data;
      })
    );
  }
  onClickProduct(productId: string) {
    this.router.navigate(['Home/Product', productId]);
  }
  onClickMenu(menuId: string) {
    this.router.navigate(['Home/List', menuId]);
  }
  onAddToBascket() {
    const testBascket: Bascket[] = JSON.parse(localStorage.getItem('bascket'));
    if (testBascket) {
      this.bascketList = JSON.parse(localStorage.getItem('bascket'));
      const existBascket: Bascket = this.bascketList.find(x => x.productID === this.singleProduct.id);
      if (existBascket) {
        const index = this.bascketList.indexOf(existBascket);
        existBascket.productCount += Number(1);
        existBascket.productTotalPrice = existBascket.productCount * this.singleProduct.productPrice;
        this.bascketList[index] = existBascket;
      }
    } else {
      this.bascket.productID = this.singleProduct.id;
      this.bascket.productCount = 1;
      this.bascket.productName = this.singleProduct.productName;
      this.bascket.productPrice = this.singleProduct.productPrice;
      this.bascket.productImage = this.singleProduct.firstImageUrl;
      this.bascket.productTotalPrice = this.bascket.productCount * this.singleProduct.productPrice;
      this.bascketList.push(this.bascket);
    }
    localStorage.setItem('bascket', JSON.stringify(this.bascketList));
    this.alertService.success('محصول با موفقیت به سبد خرید اضافه شد', 'موفق');
  }
  counter(point: number, count: number) {
    if (count > 0) {
      return new Array(Math.floor(point / count));
    } else {
      return new Array(count);
    }
  }
  activeDiscount(discount: string, price: number) {
    return (1 - (Number(discount) / 100)) * price;
  }
}
