import { createSelector } from '@ngrx/store';
import { getRachaAbelState, RachaAbelState } from '../reducers/global.reducers';
import { adapter } from '../reducers/jogador.reducer';

export const getJogadorState = createSelector(
	getRachaAbelState,
	(state: RachaAbelState) => state.jogador
);

export const getJogadores = createSelector(
	getJogadorState,
	adapter.getSelectors().selectAll
);
