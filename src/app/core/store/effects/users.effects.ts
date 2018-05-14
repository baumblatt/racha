import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { of } from 'rxjs';
import { catchError, map, pluck, switchMap, tap } from 'rxjs/operators';
import { GET_USER, GET_USER_FAIL, GetUserFail, GetUserSuccess } from '../actions/users.action';
import { UsersState } from '../reducers/users.reducer';

@Injectable()
export class UsersEffects {
	constructor(private actions$: Actions, private store: Store<UsersState>, private fireAuth: AngularFireAuth) {}

	@Effect()
	getUser$ = this.actions$.ofType(GET_USER).pipe(
		pluck('payload'),
		switchMap(() =>
			this.fireAuth.authState.pipe(
				map(userInfo => {
					if (userInfo) {
						return new GetUserSuccess(userInfo);
					} else {
						return new GetUserFail({});
					}
				}),
				catchError(error => of(new GetUserFail(error)))
			)
		)
	);

	@Effect({ dispatch: false })
	getUserFail$ = this.actions$.pipe(ofType(GET_USER_FAIL), tap((action: GetUserFail) => console.log(action.payload)));
}
