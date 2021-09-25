import { User } from 'src/app/data/models/userPanel/user';
import * as loggedUserAction from '../actions';

export type LoggedUserActions = loggedUserAction.AllLoggedUserAction;

export const initLoggedUserState: User = {
    id: '',
    age: 0,
    firstName: '',
    lastName: '',
    mobPhone: '',
    email: '',
    imageURL: ''
};
export function loggedUserReducer(state = initLoggedUserState, action: LoggedUserActions) {
    switch (action.type) {
        case loggedUserAction.LoggedUserActionTypes.EDIT_LOGGEDUSER:
            return { ...state, user: action.payload };
        case loggedUserAction.LoggedUserActionTypes.RESET_LOGGEDUSER:
            return initLoggedUserState;
        case loggedUserAction.LoggedUserActionTypes.EDIT_LOGGEDUSERNAME:
            return { ...state, name: action.payload };
        case loggedUserAction.LoggedUserActionTypes.EDIT_LOGGEDUSERPHOTOURL:
            return { ...state, photoUrl: action.payload };
        default:
            return state;
    }
}
