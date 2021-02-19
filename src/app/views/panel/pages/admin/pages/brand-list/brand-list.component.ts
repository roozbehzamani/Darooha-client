import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { BrandService } from 'src/app/core/_services/panel/admin/brand/brand.service';
import { Brand } from 'src/app/data/models/adminPanel/Brand/brand';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit, OnDestroy {

  subManager = new Subscription();
  brands: Brand[];

  constructor(
    private route: ActivatedRoute, private brandService: BrandService, private authService: AuthService,
    private alertService: ToastrService) { }

  ngOnInit() {
    this.loadBrands();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  loadBrands() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.brands = data.brands;
      })
    );
  }

  onDeleteBrand(id: string) {
    this.brandService.deleteBrand(id, this.authService.decodedToken.nameid).subscribe(() => {
      this.alertService.success('برند مورد نظر  شما با موفقیت حذف شد', 'موفق');
      window.location.reload();
    }, error => {
      this.alertService.error(error, 'خطا در حذف برند');
    });
  }
}
