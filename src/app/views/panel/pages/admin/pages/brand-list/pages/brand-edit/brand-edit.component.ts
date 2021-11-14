import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { BrandService } from 'src/app/core/_services/panel/admin/brand/brand.service';
import { Brand } from 'src/app/data/models/adminPanel/Brand/brand';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit, OnDestroy {

  constructor(
    private brandService: BrandService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertService: ToastrService,
  ) { }

  brand: Brand;
  subManager = new Subscription();
  slectedLogoFile: File;


  brandForm: FormGroup;

  ngOnInit() {
    this.loadBrand();
    this.brandForm = this.formBuilder.group({
      brandName: [this.brand.brandName, [Validators.required]],
      file: [null, [Validators.required]],
    });
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadBrand() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.brand = data.brand;
      })
    );
  }

  onFileSelect(file) {
    if (file.target.files[0]) {
      this.slectedLogoFile = file.target.files[0] as File;
      const reader = new FileReader();
      reader.readAsDataURL(this.slectedLogoFile);
      reader.onload = (event: any) => {
        this.brand.brandLogoUrl = event.target.result;
      };
    }
  }

  onSubmit() {
    const brand = new FormData();
    brand.append('file', this.slectedLogoFile, this.slectedLogoFile.name);
    brand.append('brandName', this.brandForm.get('brandName').value);


    this.brandService.editBrand(brand, this.brand.id).subscribe((data) => {
      this.alertService.success('مدارک شما با موفقیت ارسال شد', 'موفق');
      this.brandForm.reset();
    }, error => {
      this.alertService.error(error, 'خطا');
    });
  }
}
