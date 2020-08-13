import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/site/product/product.service';
import { ProductImage } from 'src/app/models/product-image';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { CommentService } from 'src/app/Services/site/comment/comment.service';

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
  allComments: Comment[];

  constructor(private route: ActivatedRoute, private productService: ProductService, private authServeice: AuthService,
              private commentService: CommentService) { }

  ngOnInit() {
    this.loggedIn = this.authServeice.loggedIn();
    this.loadProduct();
    this.loadProductImages();
    this.loadComments();
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

  loadComments() {
    this.subManager.add(
      this.commentService.getAllComments(this.product.id).subscribe(data => {
        this.allComments = data;
      })
    );
  }

}
