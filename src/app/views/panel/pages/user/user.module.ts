import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FileUploadModule } from 'ng2-file-upload';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreventUnsavedGuard } from 'src/app/core/_base/guards/prevent-unsaved.guard';
import { OrderResolver } from 'src/app/core/_base/resolvers/site/order.resolver';
import { OrderItemResolver } from 'src/app/core/_base/resolvers/site/orderItem.resolver';
import { AddressResolver } from 'src/app/core/_base/resolvers/userPanel/address.resolver';
import { NotificationResolver } from 'src/app/core/_base/resolvers/userPanel/notification.resolver';
import { TicketResolver } from 'src/app/core/_base/resolvers/userPanel/ticket.resolver';
import { TicketOverviewResolver } from 'src/app/core/_base/resolvers/userPanel/ticketOverview.resolver';
import { UserProfileResolver } from 'src/app/core/_base/resolvers/userPanel/userprofile.resolver';
import { WalletResolver } from 'src/app/core/_base/resolvers/userPanel/wallet.resolver';
import { AddressService } from 'src/app/core/_services/panel/address/address.service';
import { NotificationService } from 'src/app/core/_services/panel/notification/notification.service';
import { OrderService } from 'src/app/core/_services/panel/order/order.service';
import { UserService } from 'src/app/core/_services/panel/user/user.service';
import { WalletService } from 'src/app/core/_services/panel/wallet/wallet.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ManageOrderComponent } from './pages/manage-order/manage-order.component';
import { ItemsComponent } from './pages/manage-order/pages/order-items/pages/items/items.component';
import { OrderItemsComponent } from './pages/manage-order/pages/order-items/order-items.component';
import { OrdersComponent } from './pages/manage-order/pages/orders/orders.component';
import { ManageTicketComponent } from './pages/manage-ticket/manage-ticket.component';
import { ChatTicketComponent } from './pages/manage-ticket/pages/detail-ticket/components/chat-ticket/chat-ticket.component';
import { ChatMessageTicketComponent } from './pages/manage-ticket/pages/detail-ticket/components/chat-ticket/components/chat-message-ticket/chat-message-ticket.component';
import { DetailTicketComponent } from './pages/manage-ticket/pages/detail-ticket/detail-ticket.component';
import { CreateFormTicketComponent } from './pages/manage-ticket/pages/list-ticket/components/create-form-ticket/create-form-ticket.component';
import { TicketComponent } from './pages/manage-ticket/pages/list-ticket/components/ticket/ticket.component';
import { ListTicketComponent } from './pages/manage-ticket/pages/list-ticket/list-ticket.component';
import { ManageUserAddressComponent } from './pages/manage-user-address/manage-user-address.component';
import { EditUserAddressComponent } from './pages/manage-user-address/pages/edit-user-address/edit-user-address.component';
import { UserAddressComponent } from './pages/manage-user-address/pages/user-address/user-address.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    UserRoutingModule,
    FileUploadModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    // user
    UserComponent,
    // dashboard
    UserDashboardComponent,
    // profile
    ProfileComponent,
    EditProfileComponent,
    // notification
    NotificationComponent,
    // address
    UserAddressComponent,
    ManageUserAddressComponent,
    EditUserAddressComponent,
    // wallet
    /*ManageWalletComponent,
    WalletComponent,
    WalletFormComponent,*/
    // ticket
    TicketComponent,
    ManageTicketComponent,
    ListTicketComponent,
    DetailTicketComponent,
    ChatTicketComponent,
    ChatMessageTicketComponent,
    CreateFormTicketComponent,
    // orders
    ManageOrderComponent,
    OrdersComponent,
    OrderItemsComponent,
    ItemsComponent
    // glodal
  ],
  providers: [
    // user
    UserService,
    UserProfileResolver,
    // notification
    NotificationService,
    NotificationResolver,
    // address
    AddressService,
    AddressResolver,
    // wallet
    WalletService,
    WalletResolver,
    // ticket
    TicketResolver,
    TicketOverviewResolver,
    // order
    OrderResolver,
    OrderService,
    OrderItemResolver,
    // common
    PreventUnsavedGuard
  ],
  entryComponents: [
    EditUserAddressComponent,
    // WalletFormComponent,
    CreateFormTicketComponent
  ]
})
export class UserModule { }
