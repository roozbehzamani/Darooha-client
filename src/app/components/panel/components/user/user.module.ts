import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FileUploadModule } from 'ng2-file-upload';
import { UserService } from 'src/app/Services/panel/user.service';
import { UserProfileResolver } from 'src/app/resolvers/userprofile.resolver';
import { PreventUnsavedGuard } from 'src/app/guards/prevent-unsaved.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/SharedModule/material/material.module';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationResolver } from 'src/app/resolvers/notification.resolver';
import { ManageUserAddressComponent } from './components/manage-user-address/manage-user-address.component';
import { UserAddressComponent } from './components/manage-user-address/user-address/user-address.component';
import { NotificationService } from 'src/app/Services/panel/notification/notification.service';
import { AddressService } from 'src/app/Services/panel/address/address.service';
import { EditUserAddressComponent } from './components/manage-user-address/edit-user-address/edit-user-address.component';
import { AddressResolver } from 'src/app/resolvers/address.resolver';
import { WalletResolver } from 'src/app/resolvers/wallet.resolver';
import { WalletService } from 'src/app/Services/panel/wallet/wallet.service';
import { ManageTicketComponent } from './components/manage-ticket/manage-ticket.component';
import { TicketComponent } from './components/manage-ticket/components/list-ticket/components/ticket/ticket.component';
import { ChatTicketComponent } from './components/manage-ticket/components/detail-ticket/components/chat-ticket/chat-ticket.component';
import { ListTicketComponent } from './components/manage-ticket/components/list-ticket/list-ticket.component';
import { DetailTicketComponent } from './components/manage-ticket/components/detail-ticket/detail-ticket.component';
import { TicketResolver } from 'src/app/resolvers/ticket.resolver';
import { TicketOverviewResolver } from 'src/app/resolvers/ticketOverview.resolver';
import { ChatMessageTicketComponent } from './components/manage-ticket/components/detail-ticket/components/chat-ticket/components/chat-message-ticket/chat-message-ticket.component';
import { CreateFormTicketComponent } from './components/manage-ticket/components/list-ticket/components/create-form-ticket/create-form-ticket.component';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { OrdersComponent } from './components/manage-order/components/orders/orders.component';
import { OrderItemsComponent } from './components/manage-order/components/order-items/order-items.component';
import { ItemsComponent } from './components/manage-order/components/order-items/components/items/items.component';
import { OrderResolver } from 'src/app/resolvers/order.resolver';
import { OrderService } from 'src/app/Services/panel/order/order.service';
import { OrderItemResolver } from 'src/app/resolvers/orderItem.resolver';

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
    //WalletFormComponent,
    CreateFormTicketComponent
  ]
})
export class UserModule { }
