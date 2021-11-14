import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminProductService } from 'src/app/core/_services/panel/admin/admin-product/admin-product.service';
import { AddProduct } from 'src/app/data/models/adminPanel/product/add-product';

@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.css']
})
export class ProductUpdateFormComponent implements OnInit, OnDestroy {

  constructor(
    private adminProductService: AdminProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  productForCreate: AddProduct;
  product: AddProduct = null;
  subManager = new Subscription();

  productForm: FormGroup = this.formBuilder.group({
    productName: [this.product.productName, [Validators.required]],
    productPrice: [this.product.productPrice, [Validators.required]],
    productCount: [this.product.productCount, [Validators.required]],
    isEnable: [this.product.isEnable],
    size: [this.product.size, [Validators.required]],
    code: [this.product.code, [Validators.required]],
    genderOfConsumer: [this.product.genderOfConsumer, [Validators.required]],
    enclosureType: [this.product.enclosureType, [Validators.required]],
    manufacturingCountry: [this.product.manufacturingCountry, [Validators.required]],
    manufacturerCompany: [this.product.manufacturerCompany, [Validators.required]],
    webAddress: [this.product.webAddress, [Validators.required]],
    features: [this.product.features, [Validators.required]],
    methodUse: [this.product.methodUse, [Validators.required]],
    indications: [this.product.indications, [Validators.required]],
    warnings: [this.product.warnings, [Validators.required]],
    maintenance: [this.product.maintenance, [Validators.required]],
    isSpecial: [this.product.isSpecial],
    scientificName: [this.product.scientificName, [Validators.required]]
  });

  ngOnInit() {
    this.loadProduct();
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

  onCreateProduct() {
    this.productForCreate = this.productForm.value;
    this.subManager.add(
      this.adminProductService.createNewProduct(this.productForCreate).subscribe(data => {
        this.router.navigate(['panel/admin/productList']);
      })
    );
  }

}
