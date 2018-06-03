import { createSelector } from '@ngrx/store';
import { UserInfo } from 'firebase';
import { getUserinfo } from '../../../core/store/selectors/users.selectors';
import { Jogador } from '../../models/jogador.model';
import { getRachaAbelState, RachaAbelState } from '../reducers/global.reducers';
import { adapter, JogadorState } from '../reducers/jogador.reducer';

export const getJogadorState = createSelector(
	getRachaAbelState,
	(state: RachaAbelState) => state.jogador
);

export const getJogadores = createSelector(
	getJogadorState,
	adapter.getSelectors().selectAll
);

export const getJogadorLogado = createSelector(
	getJogadorState,
	getUserinfo,
	(state: JogadorState, userInfo: UserInfo) => state.entities[userInfo.uid]
);

export const isAdminitrator = createSelector(
	getJogadorLogado,
	(jogador: Jogador) => jogador.admin
);
