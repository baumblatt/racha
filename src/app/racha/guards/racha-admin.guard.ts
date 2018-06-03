import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RachaState } from '../store/reducers/racha.reducer';
import { isAdminitrator } from '../store/selectors/jogador.selectors';

@Injectable({
	providedIn: 'root'
})
export class RachaAdminGuard implements CanActivate {

	constructor(private store: Store<RachaState>) {
	}

	/**
	 * Enable activation of route if the user is administrator.
	 */
	canActivate(): Observable<boolean> {
		return this.store.pipe(select(isAdminitrator));
	}
}
