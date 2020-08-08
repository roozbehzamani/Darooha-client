import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SiteComponent } from './site.component';
import { HomeSliderResolver } from 'src/app/resolvers/homeSlider.resolver';
import { ProductListResolver } from 'src/app/resolvers/productList.resolver';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductResolver } from 'src/app/resolvers/product.resolver';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: ['صفحه اصلی'] },
        resolve: { sliderItem: HomeSliderResolver }
      },
      //
      {
        path: 'Home/List/:menuId',
        component: ProductListComponent,
        data: { title: ['لیست محصولات'] },
        resolve: { productList: ProductListResolver }
      },
      //
      {
        path: 'Home/Product/:productId',
        component: ProductComponent,
        data: { title: ['جزییات محصول'] },
        resolve: { product: ProductResolver }
      },
      //
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
