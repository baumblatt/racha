import { createSelector } from '@ngrx/store';
import { getRachaAbelState, RachaAbelState } from '../reducers/global.reducers';
import { adapter } from '../reducers/racha.reducer';

export const getRachaState = createSelector(
	getRachaAbelState,
	(state: RachaAbelState) => state.racha
);

export const getRachas = createSelector(
	getRachaState,
	adapter.getSelectors().selectAll
);
