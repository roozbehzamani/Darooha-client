import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginRedirectGuard } from 'src/app/core/_base/guards/login-redirect.guard';

@NgModule({
  imports: [
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCheckboxModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  providers: [LoginRedirectGuard],
})
export class AuthModule { }
