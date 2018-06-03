import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../reducers/users.reducer';

export const getUsersState = createFeatureSelector('users');

export const getUserinfo = createSelector(
	getUsersState,
	(state: UsersState) => state.user
);
