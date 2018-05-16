import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { from, of } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { AUTH_USER, AUTH_USER_FAIL, AUTH_USER_SUCCESS, AuthUserFail, AuthUserSuccess } from '../actions/auth.action';
import { Go } from '../actions/router.action';
import { ShowSnackBar } from '../actions/snack-bar.action';

@Injectable()
export class AuthEffects {

	constructor(private actions$: Actions, private fireAuth: AngularFireAuth) {
	}

	@Effect()
	authUser$ = this.actions$.pipe(
		ofType(AUTH_USER),
		pluck('payload'),
		switchMap(() =>
			from(this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())).pipe(
				map((result) => new AuthUserSuccess(result)),
				catchError((error) => of(new AuthUserFail(error)))
			))
	);


	@Effect()
	authUserSuccess$ = this.actions$.pipe(
		ofType(AUTH_USER_SUCCESS),
		pluck('payload'),
		switchMap(() => from([new Go({path: ['core', 'racha', 'home']}), new ShowSnackBar({
				message: 'Bem vindo ao Racha do Abel',
				config: { duration: 6000, panelClass: ['mat-snack-bar-primary'] }
			})])
		));

	@Effect()
	authUserFail$ = this.actions$.pipe(
		ofType(AUTH_USER_FAIL),
		pluck('payload'),
		map(() => new ShowSnackBar({
			message: 'Ops, ocorreu um problema ao processar sua requisição.',
			config: { duration: 6000, panelClass: ['mat-snack-bar-warn'] }
		}))
	);

}