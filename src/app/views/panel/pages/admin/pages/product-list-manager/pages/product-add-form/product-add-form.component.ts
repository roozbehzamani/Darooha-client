import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AdminProductService } from 'src/app/core/_services/panel/admin/admin-product/admin-product.service';
import { AddProduct } from 'src/app/data/models/adminPanel/product/add-product';
import { Brand } from 'src/app/data/models/adminPanel/Brand/brand';
import { BrandService } from 'src/app/core/_services/panel/admin/brand/brand.service';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.css']
})
export class ProductAddFormComponent implements OnInit, OnDestroy {

  productForCreate: AddProduct;
  subManager = new Subscription();
  brandList: Brand[];

  constructor(
    private adminProductService: AdminProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private brandService: BrandService
  ) { }

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
    subMenuId: ['', [Validators.required]],
    brandId: ['', [Validators.required]],
    discount: ['', [Validators.required]],
  });

  ngOnInit() {
    this.loadBrands();
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadBrands() {
    this.subManager.add(
      this.brandService.getAllBrand().subscribe(data => {
        this.brandList = data;
      })
    );
  }

  onCreateProduct() {
    this.productForCreate = this.productForm.value;
    this.subManager.add(
      this.adminProductService.createNewProduct(this.productForCreate).subscribe(data => {
        this.router.navigate(['panel/admin/productList']);
      })
    );
  }

}
