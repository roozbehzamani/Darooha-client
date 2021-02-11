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

  users$: Observable<User[]>;
  title: string;

  constructor(private store: Store<fromStore.InfoState>) { }

  ngOnInit() {
    this.users$ = this.store.select(fromStore.getAllUsers);
    this.store.dispatch(new fromStore.LoadUsers());
  }
}
