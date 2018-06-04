import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AngularFirestore } from 'angularfire2/firestore';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, pluck, switchMapTo, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { Go } from '../../../core/store/actions/router.action';
import { AtuacaoDialogComponent } from '../../components/atuacao-dialog/atuacao-dialog.component';
import { Jogador } from '../../models/jogador.model';
import { Racha } from '../../models/rachas.model';
import {
	ADD_ATUACAO_RACHA,
	DESELECT_RACHA,
	EDIT_RACHA,
	EditRacha,
	OBSERVE_RACHAS_SUBSCRIBE,
	OBSERVE_RACHAS_UNSUBSCRIBE,
	ObserveRachasError,
	ObserveRachasNext,
	SELECT_RACHA
} from '../actions/racha.action';
import { RachaState } from '../reducers/racha.reducer';
import { getJogadores } from '../selectors/jogador.selectors';

@Injectable()
export class RachaEffects {

	constructor(private actions$: Actions, private db: AngularFirestore, public dialog: MatDialog, private store: Store<RachaState>) {
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
	editRacha$ = this.actions$.pipe(
		ofType(EDIT_RACHA),
		pluck<EditRacha, Racha>('payload'),
		map((racha) => new Go({ path: ['core', 'racha', 'edit-racha', racha.nome] }))
	);

	@Effect({ dispatch: false })
	addAtuacaoRacha$ = this.actions$.pipe(
		ofType(ADD_ATUACAO_RACHA),
		pluck('payload'),
		withLatestFrom(this.store.pipe(select(getJogadores))),
		exhaustMap(([racha, jogadores]: [Racha, Jogador[]]) => this.dialog.open(AtuacaoDialogComponent, {
			width: '90vw',
			data: { racha: racha, jogadores: jogadores }
		}).afterClosed()),
		tap(teste => console.log(teste))
	);

}
