import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AngularFirestore } from 'angularfire2/firestore';
import { from, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, pluck, switchMap, switchMapTo, takeUntil, withLatestFrom } from 'rxjs/operators';
import { Go } from '../../../core/store/actions/router.action';
import { ShowSnackBar } from '../../../core/store/actions/snack-bar.action';
import { AtuacaoDialogComponent } from '../../components/atuacao-dialog/atuacao-dialog.component';
import { Atuacao } from '../../models/atuacao.model';
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
	SELECT_RACHA,
	UPDATE_RACHA,
	UPDATE_RACHA_FAIL,
	UPDATE_RACHA_SUCCESS,
	UpdateRacha,
	UpdateRachaFail,
	UpdateRachaSuccess
} from '../actions/racha.action';
import { RachaState } from '../reducers/racha.reducer';
import { getJogadores } from '../selectors/jogador.selectors';
import { getRacha } from '../selectors/racha.selectors';

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

	@Effect()
	addAtuacaoRacha$ = this.actions$.pipe(
		ofType(ADD_ATUACAO_RACHA),
		pluck('payload'),
		withLatestFrom(this.store.pipe(select(getJogadores))),
		exhaustMap(([racha, jogadores]: [Racha, Jogador[]]) => this.dialog.open(AtuacaoDialogComponent, {
			width: '90vw',
			data: { racha: racha, jogadores: jogadores }
		}).afterClosed().pipe(
			filter((atuacao) => !!atuacao)
		)),
		withLatestFrom(this.store.pipe(select(getRacha))),
		map(([atuacao, racha]: [Atuacao, Racha]) => new UpdateRacha({
			...racha,
			presentes: { ...racha.presentes, [atuacao.jogador.uid]: atuacao }
		}))
	);

	@Effect()
	updateRacha$ = this.actions$.pipe(
		ofType(UPDATE_RACHA),
		pluck('payload'),
		switchMap((racha: Racha) => from(this.db.collection<Racha>('rachas').doc(racha.nome).set({ ...racha })).pipe(
			map(() => new UpdateRachaSuccess(racha)),
			catchError((error) => of(new UpdateRachaFail(error)))
		))
	);

	@Effect()
	updateRachaSuccess$ = this.actions$.pipe(
		ofType(UPDATE_RACHA_SUCCESS),
		map(() => new ShowSnackBar({
			message: 'Racha atualizado com sucesso.',
			config: { duration: 6000, panelClass: ['mat-snack-bar-primary'] }
		}))
	);

	@Effect()
	updateRachaFail$ = this.actions$.pipe(
		ofType(UPDATE_RACHA_FAIL),
		map(() => new ShowSnackBar({
			message: 'Ops, não foi possível atualizar o racha.',
			config: { duration: 6000, panelClass: ['mat-snack-bar-warn'] }
		}))
	);

}
