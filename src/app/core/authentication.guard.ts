import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetUser } from './store/actions/users.action';
import { UsersState } from './store/reducers/users.reducer';

@Injectable()
export class AuthenticationGuard implements CanActivate {
	constructor(private fireAuth: AngularFireAuth, private store: Store<UsersState>, private router: Router) {}

	private can() {
		this.store.dispatch(new GetUser());
	}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		this.can();

		return this.fireAuth.authState.pipe(
			map(auth => auth != null),
			tap(auth => {
				if (!auth) {
					this.router.navigate(['core', 'login']).catch();
				}
				return auth;
			})
		);
	}
}
