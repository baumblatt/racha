import { Action } from '@ngrx/store';
import { Racha } from '../../models/rachas.model';

export const LOAD_RACHAS = '[Rachas] Load Rachas.';
export const LOAD_RACHAS_SUCCESS = '[Rachas] Load Rachas (Success).';
export const LOAD_RACHAS_FAIL = '[Rachas] Load Rachas (Fail).';
export const LOAD_RACHAS_STOP = '[Rachas] Load Rachas (Stop)';

export class LoadRachas implements Action {
	readonly type = LOAD_RACHAS;
}

export class LoadRachasSuccess implements Action {
	readonly type = LOAD_RACHAS_SUCCESS;

	constructor(public payload: Racha[]) {
	}
}

export class LoadRachasFail implements Action {
	readonly type = LOAD_RACHAS_FAIL;

	constructor(public payload: any) {
	}
}

export class LoadRachasStop implements Action {
	readonly type = LOAD_RACHAS_STOP;
}

export type RachaAction = LoadRachas | LoadRachasSuccess | LoadRachasFail | LoadRachasStop;
