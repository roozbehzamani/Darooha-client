import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent,
        data: { roles: ['Admin'], title: ['میز کار'] }
      },
      {
        path: 'usersmanagement', canActivate: [AuthGuard], component: UsersManagementComponent,
        data: { roles: ['Admin'], title: ['مدیریت کاربران'] }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
