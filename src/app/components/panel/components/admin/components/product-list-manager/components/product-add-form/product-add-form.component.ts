import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { AddProduct } from 'src/app/models/panel/admin/product/add-product';
import { AdminProductService } from 'src/app/Services/panel/admin/admin-product/admin-product.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.css']
})
export class ProductAddFormComponent implements OnInit {

  productForCreate: AddProduct;
  subManager = new Subscription();

  constructor(private adminProductService: AdminProductService, private authService: AuthService,
              private formBuilder: FormBuilder, private alertService: ToastrService, private router: Router,) { }

  productForm: FormGroup = this.formBuilder.group({
    productName: ['', [Validators.required]],
    productPrice: ['', [Validators.required]],
    productCount: ['', [Validators.required]],
    isEnable: [true],
    size: ['', [Validators.required]],
    code: ['', [Validators.required]],
    genderOfConsumer: ['', [Validators.required]],
    enclosureType: ['', [Validators.required]],
    manufacturingCountry: ['', [Validators.required]],
    manufacturerCompany: ['', [Validators.required]],
    webAddress: ['', [Validators.required]],
    features: ['', [Validators.required]],
    methodUse: ['', [Validators.required]],
    indications: ['', [Validators.required]],
    warnings: ['', [Validators.required]],
    maintenance: ['', [Validators.required]],
    isSpecial: [false],
    scientificName: ['', [Validators.required]],
    subMenuId: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  onCreateProduct() {
    this.productForCreate = this.productForm.value;
    this.subManager.add(
      this.adminProductService.createNewProduct(this.productForCreate, this.authService.decodedToken.nameid).subscribe(data => {
        this.router.navigate(['panel/admin/productList']);
      })
    );
  }

}
