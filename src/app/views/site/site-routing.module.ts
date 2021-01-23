import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SiteComponent } from './site.component';
import { HomeSliderResolver } from 'src/app/core/_base/resolvers/site/homeSlider.resolver';
import { ProductResolver } from 'src/app/core/_base/resolvers/site/product.resolver';
import { ProductListResolver } from 'src/app/core/_base/resolvers/site/productList.resolver';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductComponent } from './pages/product/product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';


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
      {
        path: 'Home/ShoppingCart',
        component: ShoppingCartComponent,
        data: { title: ['سبد خرید'] } // ,
        // resolve: { sliderItem: HomeSliderResolver }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
