import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFirestore } from 'angularfire2/firestore';
import { of } from 'rxjs';
import { catchError, map, pluck, switchMapTo, takeUntil } from 'rxjs/operators';
import { Jogador } from '../../models/jogador.model';
import { ObserveJogadoresNext } from '../actions/jogador.action';
import { OBSERVE_RACHAS_SUBSCRIBE, OBSERVE_RACHAS_UNSUBSCRIBE, ObserveRachasError } from '../actions/racha.action';

@Injectable()
export class JogadorEffects {
	constructor(private actions$: Actions, private db: AngularFirestore) {
	}

	@Effect()
	observeRachasSubscribe$ = this.actions$.pipe(
		ofType(OBSERVE_RACHAS_SUBSCRIBE),
		pluck('payload'),
		switchMapTo(this.db.collection<Jogador>('jogadores').valueChanges().pipe(
			map((jogadores) => new ObserveJogadoresNext(jogadores)),
			catchError(error => of(new ObserveRachasError(error))),
			takeUntil(this.actions$.pipe(ofType(OBSERVE_RACHAS_UNSUBSCRIBE)))
		))
	);
}
