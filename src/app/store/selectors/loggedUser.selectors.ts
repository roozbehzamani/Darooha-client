import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/data/models/userPanel/user';


export const selectLoggedUserName = (state: User) => state.mobPhone;
export const selectLoggedUserPhotoUrl = (state: User) => state.imageURL;
export const selectLoggedUserId = (state: User) => state.id;

export const getLoggedUserState = createFeatureSelector<User>('loggedUser');
export const getLoggedUserId = createSelector(getLoggedUserState, selectLoggedUserId);
export const getLoggedUserName = createSelector(getLoggedUserState, selectLoggedUserName);
export const getLoggedUserPhotoUrl = createSelector(getLoggedUserState, selectLoggedUserPhotoUrl);
