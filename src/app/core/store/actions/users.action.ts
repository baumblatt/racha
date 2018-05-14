import { Action } from '@ngrx/store';
import { UserInfo } from 'firebase';

export const GET_USER = '[User] Get the firebase authenticated user.';
export const GET_USER_SUCCESS = '[User] Get the firebase authenticated user (Success).';
export const GET_USER_FAIL = '[User] Get the firebase authenticated user (Fail).';

export class GetUser implements Action {
	readonly type = GET_USER;
}

export class GetUserSuccess implements Action {
	readonly type = GET_USER_SUCCESS;

	constructor(public payload: UserInfo) {}
}

export class GetUserFail implements Action {
	readonly type = GET_USER_FAIL;

	constructor(public payload: any) {}
}

export type UsersAction = GetUser | GetUserSuccess | GetUserFail;
