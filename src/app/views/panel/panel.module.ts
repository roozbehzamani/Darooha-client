import { NgModule } from '@angular/core';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from 'src/app/core/_base/directives/hasRole.directive';
import { AuthGuard } from 'src/app/core/_base/guards/auth.guard';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    PanelRoutingModule,
    CommonModule,
    StoreModule.forRoot({}),
    environment.development ? StoreDevtoolsModule.instrument({ maxAge: 10 }) : []
  ],
  declarations: [
    PanelComponent,
    NavbarComponent,
    SidebarComponent,
    HasRoleDirective
  ],
  providers: [
    AuthGuard
  ]
})

export class PanelModule { }
