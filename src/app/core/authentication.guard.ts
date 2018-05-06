import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationGuard implements CanActivate {
	constructor(private fireAuth: AngularFireAuth, private router: Router) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
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
