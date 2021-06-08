import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/_base/guards/auth.guard';
import { PreventUnsavedGuard } from 'src/app/core/_base/guards/prevent-unsaved.guard';
import { OrderResolver } from 'src/app/core/_base/resolvers/site/order.resolver';
import { OrderItemResolver } from 'src/app/core/_base/resolvers/site/orderItem.resolver';
import { AddressResolver } from 'src/app/core/_base/resolvers/userPanel/address.resolver';
import { NotificationResolver } from 'src/app/core/_base/resolvers/userPanel/notification.resolver';
import { TicketResolver } from 'src/app/core/_base/resolvers/userPanel/ticket.resolver';
import { TicketOverviewResolver } from 'src/app/core/_base/resolvers/userPanel/ticketOverview.resolver';
import { UserProfileResolver } from 'src/app/core/_base/resolvers/userPanel/userprofile.resolver';
import { WalletResolver } from 'src/app/core/_base/resolvers/userPanel/wallet.resolver';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ManageOrderComponent } from './pages/manage-order/manage-order.component';
import { OrderItemsComponent } from './pages/manage-order/pages/order-items/order-items.component';
import { ManageTicketComponent } from './pages/manage-ticket/manage-ticket.component';
import { DetailTicketComponent } from './pages/manage-ticket/pages/detail-ticket/detail-ticket.component';
import { ManageUserAddressComponent } from './pages/manage-user-address/manage-user-address.component';
import { ManageWalletComponent } from './pages/manage-wallet/manage-wallet.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';

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
        data: { roles: ['User'], title: ['مدیریت آدرس ها'] },
        resolve: { address: AddressResolver }
      },
      {
        path: 'manageOrders/items/:orderId',
        component: OrderItemsComponent,
        resolve: { items: OrderItemResolver },
        data: { roles: ['User'], title: ['لیست محصولات'] }
      },
      //
      {
        path: 'manageOrders',
        canActivate: [AuthGuard],
        component: ManageOrderComponent,
        data: { roles: ['User'], title: ['مدیریت سفارش ها'] },
        resolve: { orders: OrderResolver }
      },
      //
      {
        path: 'wallet',
        canActivate: [AuthGuard],
        component: ManageWalletComponent,
        data: { roles: ['User'], title: ['مدیریت کیف پول ها'] },
        resolve: { wallet: WalletResolver }
      },
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
