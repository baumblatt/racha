import { Action } from '@ngrx/store';
import { Jogador } from '../../models/jogador.model';

export const LOAD_JOGADORES = '[Jogadores] Load Jogadores.';
export const LOAD_JOGADORES_SUCCESS = '[Jogadores] Load Jogadores (Success).';
export const LOAD_JOGADORES_FAIL = '[Jogadores] Load Jogadores (Fail).';
export const LOAD_JOGADORES_STOP = '[Jogadores] Load Jogadores (Stop)';

export class LoadJogadores implements Action {
	readonly type = LOAD_JOGADORES;
}

export class LoadJogadoresSuccess implements Action {
	readonly type = LOAD_JOGADORES_SUCCESS;

	constructor(public payload: Jogador[]) {
	}
}

export class LoadJogadoresFail implements Action {
	readonly type = LOAD_JOGADORES_FAIL;

	constructor(public payload: any) {
	}
}

export class LoadJogadoresStop implements Action {
	readonly type = LOAD_JOGADORES_STOP;
}


export type JogadorAction = LoadJogadores | LoadJogadoresSuccess | LoadJogadoresFail | LoadJogadoresStop;
