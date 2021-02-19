import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { AdminProductListResolver } from 'src/app/core/_base/resolvers/adminPanel/adminProductList.resolver';
import { EditProductResolver } from 'src/app/core/_base/resolvers/adminPanel/editProduct.resolver';
import { AdminProductService } from 'src/app/core/_services/panel/admin/admin-product/admin-product.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductAddFormComponent } from './pages/product-list-manager/pages/product-add-form/product-add-form.component';
import { ProductUpdateFormComponent } from './pages/product-list-manager/pages/product-update-form/product-update-form.component';
import { ProductListManagerComponent } from './pages/product-list-manager/product-list-manager.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { BrandListComponent } from './pages/brand-list/brand-list.component';
import { AdminBrandListResolver } from 'src/app/core/_base/resolvers/adminPanel/adminBrandList.resolver';
import { AddBrandComponent } from './pages/brand-list/pages/add-brand/add-brand.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MaterialModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersManagementComponent,
    ProductListManagerComponent,
    ProductAddFormComponent,
    ProductUpdateFormComponent,
    BrandListComponent,
    AddBrandComponent
  ],
  providers: [
    // ProductList
    AdminProductService,
    AdminProductListResolver,
    EditProductResolver,
    AdminBrandListResolver
  ],
})
export class AdminModule { }
