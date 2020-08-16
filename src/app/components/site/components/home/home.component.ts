import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/Services/site/home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Slider } from 'src/app/models/slider';
import { Product } from 'src/app/models/product';
import { Menu } from 'src/app/models/menu';
import { SpecialProduct } from 'src/app/models/special-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  sliderItems: Slider[];
  products: Product[];
  menu: Menu[];
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
    manufacturerCompany: null
  };

  constructor(private router: Router, private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    this.loadSlider();
    this.loadSingleProduct();
    this.loadNewMenus();
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
    console.log(this.singleProduct);
  }
  loadNewMenus() {
    this.subManager.add(
      this.homeService.getNewMenus().subscribe(data => {
        this.menu = data;
      })
    );
  }
  onClickProduct(productId: string) {
    this.router.navigate(['Home/Product', productId]);
  }
  onClickMenu(menuId: string) {
    this.router.navigate(['Home/List', menuId]);
  }
}
