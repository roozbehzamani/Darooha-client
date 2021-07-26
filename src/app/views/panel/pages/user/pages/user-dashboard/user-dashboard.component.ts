import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/reducers/users.reducer';
import * as fromStore from 'src/app/store';
import { User } from 'src/app/data/models/userPanel/user';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  users$: Observable<any>;
  selectedUser$: Observable<any>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<string>;
  title: string;

  constructor(private store: Store<fromStore.InfoState>) { }

  ngOnInit() {
    this.loading$ = this.store.select(fromStore.getUsersLoading);
    this.loaded$ = this.store.select(fromStore.getUsersLoaded);
    this.error$ = this.store.select(fromStore.getUsersError);
    this.users$ = this.store.select(fromStore.getAllUsers);
    this.selectedUser$ = this.store.select(fromStore.getSelectedUser);

    this.store.dispatch(new fromStore.LoadUsers());
  }

  adduser() {
    const user = null;
    this.store.dispatch(new fromStore.CreateUser(user));
  }
  updateuser(user: User) {
    this.store.dispatch(new fromStore.UpdateUser(user));
  }
  deleteuser(user: User) {
    this.store.dispatch(new fromStore.DeleteUser(user.id));
  }
}
