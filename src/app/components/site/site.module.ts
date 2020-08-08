import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { MenuItemComponent } from './menu/components/menu-item/menu-item.component';
import { SubMenuComponent } from './menu/components/sub-menu/sub-menu.component';
import { SubMenuTitleComponent } from './menu/components/sub-menu-title/sub-menu-title.component';
import { SubMenuItemComponent } from './menu/components/sub-menu-item/sub-menu-item.component';
import { HomeSliderResolver } from 'src/app/resolvers/homeSlider.resolver';
import { HomeService } from 'src/app/Services/site/home/home.service';
import { MenuService } from 'src/app/Services/site/menu/menu.service';
import { ProductService } from 'src/app/Services/site/product/product.service';
import { ProductListResolver } from 'src/app/resolvers/productList.resolver';
import { ProductResolver } from 'src/app/resolvers/product.resolver';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [
    SiteRoutingModule,
    CommonModule
  ],
  declarations: [
    SiteComponent,
    // MENU
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    SubMenuTitleComponent,
    SubMenuItemComponent,
    // Header
    HeaderComponent,
    // Footer
    FooterComponent,
    // Home
    HomeComponent,
    // product list
    ProductListComponent,
    // product
    ProductComponent
  ],
  providers: [
    // slider
    HomeSliderResolver,
    HomeService,
    // Menu
    MenuService,
    // Product
    ProductService,
    ProductListResolver,
    ProductResolver
  ]
})
export class SiteModule { }
