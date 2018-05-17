import { Action } from '@ngrx/store';

export const SING_IN_USER = '[Authentication] Sign in user.';
export const SING_IN_USER_SUCCESS = '[Authentication] Sign in user (Success).';
export const SING_IN_USER_FAIL = '[Authentication] Sign in user (Fail).';

export class SingInUser implements Action {
	readonly type = SING_IN_USER;

	constructor(public payload: string) {
	}
}

export class SingInUserSuccess implements Action {
	readonly type = SING_IN_USER_SUCCESS;

	constructor(public payload: any) {
	}
}

export class SingInUserFail implements Action {
	readonly type = SING_IN_USER_FAIL;

	constructor(public payload: any) {
	}
}

export const SIGN_OUT_USER = '[Authentication] Sign out user.';
export const SIGN_OUT_USER_SUCCESS = '[Authentication] Sign out user (Success).';
export const SIGN_OUT_USER_FAIL = '[Authentication] Sign out user (Fail).';

export class SignOutUser implements Action {
	readonly type = SIGN_OUT_USER;
}

export class SignOutUserSuccess implements Action {
	readonly type = SIGN_OUT_USER_SUCCESS;

	constructor(public payload: any) {
	}
}

export class SignOutUserFail implements Action {
	readonly type = SIGN_OUT_USER_FAIL;

	constructor(public payload: any) {
	}
}

export type AuthAction = SingInUser | SingInUserSuccess | SingInUserFail | SignOutUser | SignOutUserSuccess | SignOutUserFail;
