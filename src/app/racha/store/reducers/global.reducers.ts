import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { jogadorReducer, JogadorState } from './jogador.reducer';
import { rachaReducer, RachaState } from './racha.reducer';

export interface RachaAbelState {
	racha: RachaState;
	jogador: JogadorState;
}

export const reducers: ActionReducerMap<RachaAbelState> = {
	racha: rachaReducer,
	jogador: jogadorReducer
};

export const getRachaAbelState = createFeatureSelector<RachaAbelState>(
	'racha-abel'
);
