import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/site/product/product.service';
import { ProductImage } from 'src/app/models/product-image';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { CommentService } from 'src/app/Services/site/comment/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bascket } from 'src/app/models/bascket';
import { ToastrService } from 'ngx-toastr';

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
  point: number;
  bascket: Bascket = {productCount: null, productID: null};
  bascketList: Bascket[] = [] ;

  constructor(private route: ActivatedRoute, private productService: ProductService, private authServeice: AuthService,
              private commentService: CommentService, private formBuilder: FormBuilder, private alertService: ToastrService) {
              }

  bascketForm: FormGroup = this.formBuilder.group({
    productCount: ['', [Validators.required]]
  });

  ngOnInit() {
    this.loggedIn = this.authServeice.loggedIn();
    this.loadProduct();
    this.calculatePoint();
    this.loadProductImages();
    this.loadComments();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }
  calculatePoint() {
    if (this.product.commentCount > 0) {
      this.point = (this.product.sumPoint / this.product.commentCount);
    } else {
      this.point = 0;
    }
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
  onAddToBascket() {
    if (this.bascketForm.valid) {
      this.bascket.productID = this.product.id;
      this.bascket.productCount = this.bascketForm.get('productCount').value;
      console.log(this.bascket);
      this.bascketList = JSON.parse(localStorage.getItem('bascket'));
      this.bascketList.push(this.bascket);
      localStorage.setItem('bascket', JSON.stringify(this.bascketList));
    }else {
      this.alertService.warning('خطایی رخ داده', 'خطا');
    }
  }
}
