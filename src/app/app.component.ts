import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { TitleService } from './core/_services/common/title.service';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jwtHelper = new JwtHelperService();

  constructor(
    private titleService: TitleService,
    private store: Store<fromStore.State>) {
    this.getDecodedToken();
  }


  ngOnInit() {
    this.titleService.init();
  }

  getDecodedToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.store.dispatch(new fromStore.EditDecodedToken(decodedToken));
    }
  }
}
