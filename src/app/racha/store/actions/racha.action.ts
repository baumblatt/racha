import { Action } from '@ngrx/store';
import { Racha } from '../../models/rachas.model';

// ----------------------------------------
// Actions to observe Rachas from Firebase.
// ----------------------------------------

export const OBSERVE_RACHAS_SUBSCRIBE = '[Racha] Observe Rachas (Subscribe).';
export const OBSERVE_RACHAS_NEXT = '[Racha] Observe Rachas (Next).';
export const OBSERVE_RACHAS_ERROR = '[Racha] Observe Rachas (Error).';
export const OBSERVE_RACHAS_UNSUBSCRIBE = '[Racha] Observe Rachas (Unsubscribe).';

export class ObserveRachasSubscribe implements Action {
	readonly type = OBSERVE_RACHAS_SUBSCRIBE;
}

export class ObserveRachasNext implements Action {
	readonly type = OBSERVE_RACHAS_NEXT;

	constructor(public payload: Racha[]) {
	}
}

export class ObserveRachasError implements Action {
	readonly type = OBSERVE_RACHAS_ERROR;

	constructor(public payload: any) {
	}
}

export class ObserveRachasUnsubscribe implements Action {
	readonly type = OBSERVE_RACHAS_UNSUBSCRIBE;
}

// ----------------------------------------
// Actions to select and deselect Racha.
// ----------------------------------------
export const SELECT_RACHA = '[Racha] Select Racha';
export const EDIT_RACHA = '[Racha] Edit Racha';
export const DESELECT_RACHA = '[Racha] Deselect Racha';

export class SelectRacha implements Action {
	readonly type = SELECT_RACHA;

	constructor(public payload: Racha) {
	}
}

export class EditRacha implements Action {
	readonly type = EDIT_RACHA;

	constructor(public payload: Racha) {
	}
}

export class DeselectRacha implements Action {
	readonly type = DESELECT_RACHA;
}

// ----------------------------------------
// Actions to select and deselect Racha.
// ----------------------------------------
export const ADD_ATUACAO_RACHA = '[Racha] Adicionar atuação';

export class AddAtuacaoRacha implements Action {
	readonly type = ADD_ATUACAO_RACHA;

	constructor(public payload: Racha) {
	}
}

export const UPDATE_RACHA = '[Racha] Atualizar Racha.';
export const UPDATE_RACHA_SUCCESS = '[Racha] Atualizar Racha (Success).';
export const UPDATE_RACHA_FAIL = '[Racha] Atualizar Racha (Fail).';

export class UpdateRacha implements Action {
	readonly type = UPDATE_RACHA;

	constructor(public payload: Racha) {
	}
}

export class UpdateRachaSuccess implements Action {
	readonly type = UPDATE_RACHA_SUCCESS;

	constructor(public payload: Racha) {
	}
}

export class UpdateRachaFail implements Action {
	readonly type = UPDATE_RACHA_FAIL;

	constructor(public payload: any) {
	}
}

export type RachaAction =
	| ObserveRachasSubscribe
	| ObserveRachasNext
	| ObserveRachasError
	| ObserveRachasUnsubscribe
	| SelectRacha
	| EditRacha
	| DeselectRacha
	| AddAtuacaoRacha
	| UpdateRacha
	| UpdateRachaSuccess
	| UpdateRachaFail;
