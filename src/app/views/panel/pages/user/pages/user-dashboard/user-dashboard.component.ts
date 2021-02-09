import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/reducers/users.reducer';
import * as fromStore from 'src/app/store';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  users$: Observable<UserState>;
  title: string;

  constructor(private store: Store<fromStore.InfoState>) { }

  ngOnInit() {
    this.store.select<any>('info').subscribe(state => {
      console.log(state);
    });
  }

  resetCounter() {
    // this.store.dispatch(new TitleCounterAction.ResetCounter());
  }
}
