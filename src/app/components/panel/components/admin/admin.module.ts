import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListManagerComponent } from './components/product-list-manager/product-list-manager.component';
import { AdminProductService } from 'src/app/Services/panel/admin/admin-product/admin-product.service';
import { AdminProductListResolver } from 'src/app/resolvers/panel/admin/adminProductList.resolver';
import { ProductAddFormComponent } from './components/product-list-manager/components/product-add-form/product-add-form.component';
import { ProductUpdateFormComponent } from './components/product-list-manager/components/product-update-form/product-update-form.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { MaterialModule } from 'src/app/SharedModule/material/material.module';
import { EditProductResolver } from 'src/app/resolvers/panel/admin/editProduct.resolver';

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
    ProductUpdateFormComponent
  ],
  providers: [
    // ProductList
    AdminProductService,
    AdminProductListResolver,
    EditProductResolver
  ],
})
export class AdminModule { }
