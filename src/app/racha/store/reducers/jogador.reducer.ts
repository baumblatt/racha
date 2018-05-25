import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Jogador } from '../../models/jogador.model';
import { JogadorAction, LOAD_JOGADORES_SUCCESS } from '../actions/jogador.action';

export const adapter: EntityAdapter<Jogador> = createEntityAdapter<Jogador>({
	selectId: model => model.uid,
	sortComparer: (a, b) => a.displayName.localeCompare(b.displayName)
});

export interface JogadorState extends EntityState<Jogador> {
}

export const initialState: JogadorState = {
	ids: [],
	entities: {}
};

export function jogadorReducer(state = initialState, action: JogadorAction): JogadorState {

	switch (action.type) {
		case LOAD_JOGADORES_SUCCESS: {
			return adapter.addAll(action.payload, state);
		}

		default: {
			return state;
		}
	}
}
