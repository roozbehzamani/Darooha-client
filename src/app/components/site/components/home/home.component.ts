import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/Services/site/home/home.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Slider } from 'src/app/models/slider';
import { Product } from 'src/app/models/product';
import { RightBar } from 'src/app/models/right-bar';
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
  rightBarItems: RightBar[];
  menu: Menu[];
  singleProduct: SpecialProduct;

  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    this.loadSlider();
    this.loadRightBar();
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
  loadRightBar() {
    this.subManager.add(
      this.homeService.getRightBar().subscribe(data => {
        this.rightBarItems = data;
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
  loadNewMenus() {
    this.subManager.add(
      this.homeService.getNewMenus().subscribe(data => {
        this.menu = data;
      })
    );
  }

}
