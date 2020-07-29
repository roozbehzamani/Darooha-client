import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileResolver } from 'src/app/resolvers/userprofile.resolver';
import { PreventUnsavedGuard } from 'src/app/guards/prevent-unsaved.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationResolver } from 'src/app/resolvers/notification.resolver';
import { ManageUserAddressComponent } from './components/manage-user-address/manage-user-address.component';
import { AddressResolver } from 'src/app/resolvers/address.resolver';
import { WalletResolver } from 'src/app/resolvers/wallet.resolver';
import { ManageTicketComponent } from './components/manage-ticket/manage-ticket.component';
import { TicketResolver } from 'src/app/resolvers/ticket.resolver';
import { DetailTicketComponent } from './components/manage-ticket/components/detail-ticket/detail-ticket.component';
import { TicketOverviewResolver } from 'src/app/resolvers/ticketOverview.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'dashboard', canActivate: [AuthGuard], component: UserDashboardComponent,
        data: { roles: ['User'], title: ['میز کار'] }
      },
      // userinfo
      {
        path: 'profile', canActivate: [AuthGuard], component: ProfileComponent,
        data: { roles: ['User', 'Admin', 'Blog', 'Accountant'], title: ['پروفایل کاربری'] },
        resolve: { user: UserProfileResolver }
      },
      {
        path: 'editProfile', canActivate: [AuthGuard], component: EditProfileComponent,
        data: { roles: ['User', 'Admin', 'Blog', 'Accountant'], title: ['ویرایش پروفایل'] },
        resolve: { user: UserProfileResolver },
        canDeactivate: [PreventUnsavedGuard]
      },
      //
      {
        path: 'notification', canActivate: [AuthGuard], component: NotificationComponent,
        data: { roles: ['User'], title: ['مدیریت اعلان ها'] },
        resolve: { notify: NotificationResolver },
        canDeactivate: [PreventUnsavedGuard]
      },
      //
      {
        path: 'manageuseraddress',
        canActivate: [AuthGuard],
        component: ManageUserAddressComponent,
        data: { roles: ['User'], title: ['مدیریت آدرس ها']},
        resolve: { address: AddressResolver }
      },
      //
      /*{
        path: 'wallet',
        canActivate: [AuthGuard],
        component: ManageWalletComponent,
        data: { roles: ['User'], title: ['مدیریت کیف پول ها']},
        resolve: { wallet: WalletResolver }
      },*/
      //
      {
        path: 'tickets', canActivate: [AuthGuard],
        resolve: { tickets: TicketResolver }, component: ManageTicketComponent,
        data: { roles: ['User'], title: ['پشتیبانی'] },
        children: [
          {
            path: 'overview/:ticketId',
            component: DetailTicketComponent,
            resolve: { ticket: TicketOverviewResolver },
            data: { roles: ['User'], title: ['مشاهده ی تیکت'] }
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
