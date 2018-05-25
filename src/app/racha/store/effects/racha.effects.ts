import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFirestore } from 'angularfire2/firestore';
import { of } from 'rxjs';
import { catchError, map, pluck, switchMapTo, takeUntil } from 'rxjs/operators';
import { Racha } from '../../models/rachas.model';
import { LOAD_RACHAS, LOAD_RACHAS_STOP, LoadRachasFail, LoadRachasSuccess } from '../actions/racha.action';

@Injectable()
export class RachaEffects {

	constructor(private actions$: Actions, private db: AngularFirestore) {
	}

	@Effect()
	loadRachas$ = this.actions$.pipe(
		ofType(LOAD_RACHAS),
		pluck('payload'),
		switchMapTo(this.db.collection<Racha>('rachas').valueChanges().pipe(
			map((rachas) => new LoadRachasSuccess(rachas)),
			catchError(error => of(new LoadRachasFail(error))),
			takeUntil(this.actions$.pipe(ofType(LOAD_RACHAS_STOP)))
		))
	);


}
