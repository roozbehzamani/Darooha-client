import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { BrandService } from 'src/app/core/_services/panel/admin/brand/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  addBrandForm: FormGroup;
  slectedLogoFile: File;
  defaultLogoUrl = '../../../../../../../../../../assets/img/profilepic.png';

  constructor(private formBuilder: FormBuilder, private brandService: BrandService,
    private authService: AuthService, private alertService: ToastrService) { }

  ngOnInit() {
    this.addBrandForm = this.formBuilder.group({
      brandName: ['', [Validators.required, Validators.maxLength(100)]],
      file: [null, [Validators.required]],
    });
  }

  onFileSelect(file) {
    if (file.target.files[0]) {
      this.slectedLogoFile = file.target.files[0] as File;
      const reader = new FileReader();
      reader.readAsDataURL(this.slectedLogoFile);
      reader.onload = (event: any) => {
        this.defaultLogoUrl = event.target.result;
      };
    }
  }
  onSubmit() {
    const brand = new FormData();
    brand.append('file', this.slectedLogoFile, this.slectedLogoFile.name);
    brand.append('brandName', this.addBrandForm.get('brandName').value);


    this.brandService.addBrand(this.authService.decodedToken.nameid, brand).subscribe((data) => {
      this.alertService.success('مدارک شما با موفقیت ارسال شد', 'موفق');
      this.addBrandForm.reset();
    }, error => {
      this.alertService.error(error, 'خطا');
    });
  }

}
