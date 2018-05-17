import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { from, of } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import {
	SIGN_OUT_USER,
	SIGN_OUT_USER_SUCCESS,
	SignOutUserFail,
	SignOutUserSuccess, SING_IN_USER, SING_IN_USER_FAIL, SING_IN_USER_SUCCESS, SingInUserFail, SingInUserSuccess
} from '../actions/auth.action';
import { Go } from '../actions/router.action';
import { ShowSnackBar } from '../actions/snack-bar.action';

@Injectable()
export class AuthEffects {

	@Effect()
	authUser$ = this.actions$.pipe(
		ofType(SING_IN_USER),
		pluck('payload'),
		switchMap(() =>
			from(this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())).pipe(
				map((result) => new SingInUserSuccess(result)),
				catchError((error) => of(new SingInUserFail(error)))
			))
	);

	@Effect()
	authUserSuccess$ = this.actions$.pipe(
		ofType(SING_IN_USER_SUCCESS),
		pluck('payload'),
		switchMap(() => from([new Go({ path: ['core', 'racha', 'home'] }), new ShowSnackBar({
				message: 'Bem vindo ao Racha do Abel',
				config: { duration: 3000, panelClass: ['mat-snack-bar-primary'] }
			})])
		));

	@Effect()
	authUserFail$ = this.actions$.pipe(
		ofType(SING_IN_USER_FAIL),
		pluck('payload'),
		map(() => new ShowSnackBar({
			message: 'Ops, ocorreu um problema ao processar sua requisição.',
			config: { duration: 6000, panelClass: ['mat-snack-bar-warn'] }
		}))
	);

	@Effect()
	signOutUser$ = this.actions$.pipe(
		ofType(SIGN_OUT_USER),
		switchMap(() => from(this.fireAuth.auth.signOut()).pipe(
			map((result) => new SignOutUserSuccess(result)),
			catchError((error) => of(new SignOutUserFail(error)))
		))
	);

	@Effect()
	signOutUserSuccess$ = this.actions$.pipe(
		ofType(SIGN_OUT_USER_SUCCESS),
		pluck('payload'),
		switchMap(() => from([new Go({ path: ['core', 'login'] }), new ShowSnackBar({
			message: 'Obrigado pela vista e até o próximo racha!',
			config: { duration: 3000, panelClass: ['mat-snack-bar-primary'] }
		})]))
	);

	constructor(private actions$: Actions, private fireAuth: AngularFireAuth) {
	}

}
