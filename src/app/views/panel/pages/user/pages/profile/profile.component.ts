import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../../store';
import { Observable, from } from 'rxjs';
import { User } from 'src/app/data/models/userPanel/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.State>
  ) { }

  user: User;
  photoUrl$: Observable<string>;

  ngOnInit() {
    this.loadUser();
    this.photoUrl$ = this.store.select(fromStore.getLoggedUserPhotoUrl);
  }

  loadUser() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }
}
