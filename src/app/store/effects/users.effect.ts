import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as userActions from '../actions/users.action';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/core/_services/panel/user/user.service';


@Injectable()
export class UsersEffects {
    constructor(private action$: Actions, private userService: UserService) { }

    @Effect()
    loadUsers$ = this.action$.pipe(ofType(userActions.LOAD_USERS))
        .pipe(
            switchMap(() => {
                return this.userService.getUsers().pipe(
                    map(users => new userActions.LoadUsersSuccess(users)),
                    catchError(error => of(new userActions.LoadUsersFail(error)))
                );
            })
        );
}
