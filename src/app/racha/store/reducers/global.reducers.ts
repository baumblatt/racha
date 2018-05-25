import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { rachaReducer, RachaState } from './racha.reducer';

export interface RachaAbelState {
	racha: RachaState;
}

export const reducers: ActionReducerMap<RachaAbelState> = {
	racha: rachaReducer
};

export const getRachaAbelState = createFeatureSelector<RachaAbelState>(
	'racha-abel'
);
