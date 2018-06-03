import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as moment from 'moment';
import { Racha } from '../../models/rachas.model';
import { DESELECT_RACHA, OBSERVE_RACHAS_NEXT, RachaAction, SELECT_RACHA } from '../actions/racha.action';

export const adapter: EntityAdapter<Racha> = createEntityAdapter<Racha>({
	selectId: model => model.nome,
	sortComparer: (a, b) => moment(a.nome, 'dd/MM/yyyy').isBefore(moment(b.nome, 'dd/MM/yyyy')) ? 1 : -1
});

export interface RachaState extends EntityState<Racha> {
	selectedRacha?: string;
	loaded: boolean;
}

export const initialState: RachaState = adapter.getInitialState({ loaded: false });

export function rachaReducer(state = initialState, action: RachaAction): RachaState {

	switch (action.type) {
		case OBSERVE_RACHAS_NEXT: {
			return adapter.addAll(action.payload, { ...state, loaded: true });
		}

		case SELECT_RACHA: {
			const selectedRacha = action.payload.nome;

			return {
				...state,
				selectedRacha
			};
		}

		case DESELECT_RACHA: {
			const { selectedRacha, ...rest } = state;

			return {
				...rest
			};
		}

		default: {
			return state;
		}
	}
}
