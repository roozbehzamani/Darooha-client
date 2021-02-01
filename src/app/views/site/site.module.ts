import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HomeSliderResolver } from 'src/app/core/_base/resolvers/site/homeSlider.resolver';
import { ProductResolver } from 'src/app/core/_base/resolvers/site/product.resolver';
import { ProductListResolver } from 'src/app/core/_base/resolvers/site/productList.resolver';
import { HomeService } from 'src/app/core/_services/site/home/home.service';
import { ProductService } from 'src/app/core/_services/site/product/product.service';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductComponent } from './pages/product/product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { FaMatPaginatorIntl } from 'src/app/shared/material/FaMatPaginatorIntl';
import { MatPaginatorIntl } from '@angular/material/paginator';

@NgModule({
  imports: [
    SiteRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    SiteComponent,
    // Header
    HeaderComponent,
    // Footer
    FooterComponent,
    // Home
    HomeComponent,
    // product list
    ProductListComponent,
    // product
    ProductComponent,
    //
    ShoppingCartComponent
  ],
  providers: [
    // slider
    HomeSliderResolver,
    HomeService,
    // Product
    ProductService,
    ProductListResolver,
    ProductResolver
  ]
})
export class SiteModule { }
