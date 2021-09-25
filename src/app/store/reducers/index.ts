import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { RouterStateUrl } from '../_model/routerStateUrl';
import { AuthTokenState } from '../_model/authTokenState';
import { authTokenReducer } from './authToken.reducers';
import { loggedUserReducer } from './loggedUser.reducers';
import { User } from 'src/app/data/models/userPanel/user';

export interface State {
    router: fromRouter.RouterReducerState<RouterStateUrl>;
    authToken: AuthTokenState;
    loggedUser: User;
}
export const reducers: ActionReducerMap<State> = {
    router: fromRouter.routerReducer,
    authToken: authTokenReducer,
    loggedUser: loggedUserReducer
};
