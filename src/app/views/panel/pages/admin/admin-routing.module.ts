import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/_base/guards/auth.guard';
import { AdminBrandListResolver } from 'src/app/core/_base/resolvers/adminPanel/adminBrandList.resolver';
import { AdminProductListResolver } from 'src/app/core/_base/resolvers/adminPanel/adminProductList.resolver';
import { EditProductResolver } from 'src/app/core/_base/resolvers/adminPanel/editProduct.resolver';
import { AdminComponent } from './admin.component';
import { BrandListComponent } from './pages/brand-list/brand-list.component';
import { AddBrandComponent } from './pages/brand-list/pages/add-brand/add-brand.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductAddFormComponent } from './pages/product-list-manager/pages/product-add-form/product-add-form.component';
import { ProductUpdateFormComponent } from './pages/product-list-manager/pages/product-update-form/product-update-form.component';
import { ProductListManagerComponent } from './pages/product-list-manager/product-list-manager.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent,
        data: { roles: ['Admin'], title: ['میز کار'] }
      },
      //
      {
        path: 'usersmanagement', canActivate: [AuthGuard], component: UsersManagementComponent,
        data: { roles: ['Admin'], title: ['مدیریت کاربران'] }
      },
      //
      {
        path: 'productList',
        canActivate: [AuthGuard],
        component: ProductListManagerComponent,
        resolve: { products: AdminProductListResolver },
        data: {
          roles: ['Admin'],
          title: ['مدیریت محصولات']
        }
      }
      ,
      //
      {
        path: 'editProduct',
        canActivate: [AuthGuard],
        component: ProductUpdateFormComponent,
        // resolve: { products: AdminProductListResolver },
        data: {
          roles: ['Admin'],
          title: ['ویرایش محصول']
        }
      }
      ,
      //
      {
        path: 'addProduct',
        canActivate: [AuthGuard],
        component: ProductAddFormComponent,
        data: {
          roles: ['Admin'],
          title: ['افزودن محصول']
        }
      },
      //
      {
        path: 'editProduct/:productId',
        canActivate: [AuthGuard],
        component: ProductUpdateFormComponent,
        resolve: { product: EditProductResolver },
        data: {
          roles: ['Admin'],
          title: ['ویرایش محصول']
        }
      },
      //
      {
        path: 'brandList',
        canActivate: [AuthGuard],
        component: BrandListComponent,
        resolve: { brands: AdminBrandListResolver },
        data: {
          roles: ['Admin'],
          title: ['مدیریت برندها']
        }
      },
      //
      {
        path: 'addBrand',
        canActivate: [AuthGuard],
        component: AddBrandComponent,
        resolve: { brands: AdminBrandListResolver },
        data: {
          roles: ['Admin'],
          title: ['افزودن برند']
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
