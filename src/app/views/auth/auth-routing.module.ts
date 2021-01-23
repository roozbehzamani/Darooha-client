import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRedirectGuard } from 'src/app/core/_base/guards/login-redirect.guard';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'login', canActivate: [LoginRedirectGuard], component: LoginComponent, data: { title: ['ورود / ثبت نام'] }}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
