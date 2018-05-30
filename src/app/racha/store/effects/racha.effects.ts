import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFirestore } from 'angularfire2/firestore';
import { of } from 'rxjs';
import { catchError, map, pluck, switchMapTo, takeUntil } from 'rxjs/operators';
import { Racha } from '../../models/rachas.model';
import { OBSERVE_RACHAS_SUBSCRIBE, OBSERVE_RACHAS_UNSUBSCRIBE, ObserveRachasError, ObserveRachasNext } from '../actions/racha.action';

@Injectable()
export class RachaEffects {

	constructor(private actions$: Actions, private db: AngularFirestore) {
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


}
