import { createSelector } from '@ngrx/store';
import { getRachaAbelState, RachaAbelState } from '../reducers/global.reducers';
import { adapter, RachaState } from '../reducers/racha.reducer';

export const getRachaState = createSelector(
	getRachaAbelState,
	(state: RachaAbelState) => state.racha
);

export const isRachaLoaded = createSelector(
	getRachaState,
	(state: RachaState) => state.loaded
);

export const getRachas = createSelector(
	getRachaState,
	adapter.getSelectors().selectAll
);

export const getRacha = createSelector(
	getRachaState,
	(state: RachaState) => state.entities[state.selectedRacha]
);
