import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { CommentService } from 'src/app/core/_services/site/comment/comment.service';
import { ProductService } from 'src/app/core/_services/site/product/product.service';
import { Bascket } from 'src/app/data/models/site/bascket';
import { CommentForSend } from 'src/app/data/models/site/comment-for-send';
import { Product } from 'src/app/data/models/site/product';
import { ProductImage } from 'src/app/data/models/site/product-image';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  product: Product;
  productImages: ProductImage[];
  loggedIn: boolean;
  allComments: Comment[] = [];
  point: number;
  bascket: Bascket = {
    productCount: null,
    productID: null,
    productImage: null,
    productName: null,
    productPrice: null,
    productTotalPrice: null
  };
  bascketList: Bascket[] = [];
  selectedRate: number = Number(0);
  commentForAdd: CommentForSend = {
    commentPoint: null,
    commentText: null
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
    private commentService: CommentService,
    private formBuilder: FormBuilder,
    private alertService: ToastrService) {
  }

  commentForm: FormGroup = this.formBuilder.group({
    commentText: ['1', [Validators.required]]
  });

  ngOnInit() {
    window.scroll(0, 0);
    this.loggedIn = this.authService.loggedIn();
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
      this.point = (Math.floor(this.product.sumPoint / this.product.commentCount));
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
    const testBascket: Bascket[] = JSON.parse(localStorage.getItem('bascket'));
    if (testBascket) {
      this.bascketList = JSON.parse(localStorage.getItem('bascket'));
      const existBascket: Bascket = this.bascketList.find(x => x.productID === this.product.id);
      if (existBascket) {
        const index = this.bascketList.indexOf(existBascket);
        // tslint:disable-next-line:max-line-length
        existBascket.productCount = Number((document.getElementById('productCountId') as HTMLInputElement).value) + existBascket.productCount;
        existBascket.productTotalPrice = existBascket.productCount * this.product.productPrice;
        this.bascketList[index] = existBascket;
      }
      else {
        this.bascket.productID = this.product.id;
        this.bascket.productCount = Number((document.getElementById('productCountId') as HTMLInputElement).value);
        this.bascket.productName = this.product.productName;
        this.bascket.productPrice = Number(this.product.productPrice);
        this.bascket.productImage = this.productImages[0].imageUrl;
        this.bascket.productTotalPrice = this.bascket.productCount * this.product.productPrice;
        this.bascketList.push(this.bascket);
      }
    }
    else {
      this.bascket.productID = this.product.id;
      this.bascket.productCount = Number((document.getElementById('productCountId') as HTMLInputElement).value);
      this.bascket.productName = this.product.productName;
      this.bascket.productPrice = Number(this.product.productPrice);
      this.bascket.productImage = this.productImages[0].imageUrl;
      this.bascket.productTotalPrice = this.bascket.productCount * this.product.productPrice;
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
  rating(rate: number) {
    this.selectedRate = rate;
  }
  onAddComment() {
    if (this.commentForm.valid) {
      this.commentForAdd.commentText = this.commentForm.get('commentText').value;
      this.commentForAdd.commentPoint = this.selectedRate;
      this.commentService.addComment(this.product.id, this.authService.decodedToken.nameid, this.commentForAdd).subscribe(data => {
        if (data) {
          this.alertService.success('نظر با موفقیت ثبت شد', 'موفق');
          this.allComments.push(data);
        }
      });
    } else {
      this.alertService.warning('خطایی رخ داده. لطفا مجددا تلاش نمایید', 'خطا');
    }
  }

  activeDiscount(discount: string, price: number) {
    return (1 - (Number(discount) / 100)) * price;
  }
}
