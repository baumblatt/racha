import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AngularFirestore } from 'angularfire2/firestore';
import { of } from 'rxjs';
import { catchError, map, pluck, switchMapTo, takeUntil } from 'rxjs/operators';
import { Go } from '../../../core/store/actions/router.action';
import { Racha } from '../../models/rachas.model';
import {
	ADMIN_RACHA,
	AdminRacha,
	DESELECT_RACHA,
	OBSERVE_RACHAS_SUBSCRIBE,
	OBSERVE_RACHAS_UNSUBSCRIBE,
	ObserveRachasError,
	ObserveRachasNext,
	SELECT_RACHA
} from '../actions/racha.action';
import { RachaState } from '../reducers/racha.reducer';

@Injectable()
export class RachaEffects {

	constructor(private actions$: Actions, private db: AngularFirestore, private store: Store<RachaState>) {
	}

	@Effect()
	loadRachas$ = this.actions$.pipe(
		ofType(OBSERVE_RACHAS_SUBSCRIBE),
		pluck('payload'),
		switchMapTo(this.db.collection<Racha>('rachas').valueChanges().pipe(
			map((rachas) => new ObserveRachasNext(rachas)),
			catchError(error => of(new ObserveRachasError(error))),
			takeUntil(this.actions$.pipe(ofType(OBSERVE_RACHAS_UNSUBSCRIBE)))
		))
	);

	@Effect()
	selectRacha$ = this.actions$.pipe(
		ofType(SELECT_RACHA),
		pluck('payload'),
		map((racha: Racha) => new Go({ path: ['core', 'racha', 'racha', racha.nome] }))
	);

	@Effect()
	deselectRacha$ = this.actions$.pipe(
		ofType(DESELECT_RACHA),
		pluck('payload'),
		map(() => new Go({ path: ['core', 'racha', 'rachas'] }))
	);

	@Effect()
	adminRacha$ = this.actions$.pipe(
		ofType(ADMIN_RACHA),
		pluck<AdminRacha, Racha>('payload'),
		map((racha) => new Go({ path: ['core', 'racha', 'edit-racha', racha.nome] }))
	);

}
