import { User } from 'src/app/data/models/userPanel/user';
import * as UserAction from '../actions/users.action';

export type Action = UserAction.All;

export interface UserState {
    data: User[];
    loaded: boolean;
    loading: boolean;
}

export const defaultState: UserState = {
    data: [{
        id: '1',
        firstName: 'Freida Simmons',
        lastName: 'Eunice Kim',
        mobPhone: '+98 (820) 524-3364',
        email: 'jodiepayne@quotezart.com',
        age: 15,
        imageURL: 'asdasdasdasdasd'
    }],
    loaded: false,
    loading: false
};

const newState = (state, newData) => {
    return { ...state, newData };
    // return Object.assign({}, state, newData);
};

export function userReducer(state = defaultState, action: Action) {
    switch (action.type) {
        case UserAction.LOAD_USERS:
            return newState(state, { loading: true });
        case UserAction.LOAD_USERS_SUCCESS:
            return newState(state, { loading: false, loaded: true });
        case UserAction.LOAD_USERS_FAIL:
            return newState(state, { loading: false, loaded: false });
        default:
            return state;
    }
}
