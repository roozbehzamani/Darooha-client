import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { ProductListManagerComponent } from './components/product-list-manager/product-list-manager.component';
import { AdminProductListResolver } from 'src/app/resolvers/panel/admin/adminProductList.resolver';
import { ProductUpdateFormComponent } from './components/product-list-manager/components/product-update-form/product-update-form.component';
import { ProductAddFormComponent } from './components/product-list-manager/components/product-add-form/product-add-form.component';

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
        data: { roles: ['Admin'],
        title: ['مدیریت محصولات'] }
      }
      ,
      //
      {
        path: 'editProduct',
        canActivate: [AuthGuard],
        component: ProductUpdateFormComponent,
        // resolve: { products: AdminProductListResolver },
        data: { roles: ['Admin'],
        title: ['ویرایش محصول'] }
      }
      ,
      //
      {
        path: 'addProduct',
        canActivate: [AuthGuard],
        component: ProductAddFormComponent,
        // resolve: { products: AdminProductListResolver },
        data: { roles: ['Admin'],
        title: ['افزودن محصول'] }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
