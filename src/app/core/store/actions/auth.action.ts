import { Action } from '@ngrx/store';

export const AUTH_USER = '[Authentication] Authenticate user.';
export const AUTH_USER_SUCCESS = '[Authentication] Authenticate user (Success).';
export const AUTH_USER_FAIL = '[Authentication] Authenticate user (Fail).';

export class AuthUser implements Action {
	readonly type = AUTH_USER;
}

export class AuthUserSuccess implements Action {
	readonly type = AUTH_USER_SUCCESS;

	constructor(public payload: any) {
	}
}

export class AuthUserFail implements Action {
	readonly type = AUTH_USER_FAIL;

	constructor(public payload: any) {
	}
}

export type AuthAction = AuthUser | AuthUserSuccess | AuthUserFail;