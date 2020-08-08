import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/site/product/product.service';
import { ProductImage } from 'src/app/models/product-image';
import { AuthService } from 'src/app/Services/auth/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  product: Product;
  productImages: ProductImage[];
  loggedIn; boolean;

  constructor(private route: ActivatedRoute, private productService: ProductService, private authServeice: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authServeice.loggedIn();
    console.log(this.loggedIn);
    this.loadProduct();
    this.loadProductImages();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadProduct() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.product = data.product;
      })
    );
  }

  loadProductImages() {
    this.subManager.add(
      this.productService.getSingleProductImages(this.product.id).subscribe(data => {
        this.productImages = data;
      })
    );
  }

}
