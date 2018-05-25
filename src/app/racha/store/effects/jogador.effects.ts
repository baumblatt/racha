import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFirestore } from 'angularfire2/firestore';
import { of } from 'rxjs';
import { catchError, map, pluck, switchMapTo, takeUntil } from 'rxjs/operators';
import { LOAD_JOGADORES, LOAD_JOGADORES_STOP, LoadJogadoresFail, LoadJogadoresSuccess } from '../actions/jogador.action';

@Injectable()
export class JogadorEffects {
	constructor(private actions$: Actions, private db: AngularFirestore) {
	}

	@Effect()
	loadJogadores$ = this.actions$.pipe(
		ofType(LOAD_JOGADORES),
		pluck('payload'),
		switchMapTo(this.db.collection<Jogador>('jogadores').valueChanges().pipe(
			map((jogadores) => new LoadJogadoresSuccess(jogadores)),
			catchError(error => of(new LoadJogadoresFail(error))),
			takeUntil(this.actions$.pipe(ofType(LOAD_JOGADORES_STOP)))
		))
	);


}
