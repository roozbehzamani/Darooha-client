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
    imageURL: '../../../assets/img/default-profile.png'
};
export function loggedUserReducer(state = initLoggedUserState, action: LoggedUserActions) {
    switch (action.type) {
        case loggedUserAction.LoggedUserActionTypes.LOADLOGGEDUSER:
            return state;
        case loggedUserAction.LoggedUserActionTypes.LOADLOGGEDUSER_SUCCESS:
            return {
                ...state, id: action.payload.id,
                age: action.payload.age,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                mobPhone: action.payload.mobPhone,
                email: action.payload.email,
                imageURL: action.payload.imageURL
            };
        case loggedUserAction.LoggedUserActionTypes.LOADLOGGEDUSER_FAIL:
            return state;
        case loggedUserAction.LoggedUserActionTypes.EDIT_LOGGEDUSER:
            return {
                ...state, id: action.payload.id,
                age: action.payload.age,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                mobPhone: action.payload.mobPhone,
                email: action.payload.email,
                imageURL: action.payload.imageURL
            };
        case loggedUserAction.LoggedUserActionTypes.RESET_LOGGEDUSER:
            return initLoggedUserState;
        case loggedUserAction.LoggedUserActionTypes.EDIT_LOGGEDUSERNAME:
            return { ...state, name: action.payload };
        case loggedUserAction.LoggedUserActionTypes.EDIT_LOGGEDUSERPHOTOURL:
            return { ...state, photoUrl: action.payload };
        case loggedUserAction.LoggedUserActionTypes.UPDATEINFO_LOGGEDUSER:
            return {
                ...state,
                age: action.payload.age,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                mobPhone: action.payload.mobPhone,
                email: action.payload.email,
                imageURL: action.payload.imageURL
            };
        default:
            return state;
    }
}
