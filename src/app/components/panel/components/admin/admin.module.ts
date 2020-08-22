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

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersManagementComponent,
    ProductListManagerComponent
  ],
  providers: [
    // ProductList
    AdminProductService,
    AdminProductListResolver
  ],
})
export class AdminModule { }
