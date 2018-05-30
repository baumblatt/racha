import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as moment from 'moment';
import { Racha } from '../../models/rachas.model';
import { OBSERVE_RACHAS_NEXT, RachaAction } from '../actions/racha.action';

export const adapter: EntityAdapter<Racha> = createEntityAdapter<Racha>({
	selectId: model => model.nome,
	sortComparer: (a, b) => moment(a.nome, 'dd/MM/yyyy').isBefore(moment(b.nome, 'dd/MM/yyyy')) ? 1 : -1
});

export interface RachaState extends EntityState<Racha> {
}

export const initialState: RachaState = {
	ids: [],
	entities: {}
};

export function rachaReducer(state = initialState, action: RachaAction): RachaState {

	switch (action.type) {
		case OBSERVE_RACHAS_NEXT: {
			return adapter.addAll(action.payload, state);
		}

		default: {
			return state;
		}
	}
}
