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
// Actions to select and unselect Racha.
// ----------------------------------------
export const SELECT_RACHA = '[Racha] Select Racha';
export const DESELECT_RACHA = '[Racha] Deselect Racha';

export class SelectRacha implements Action {
	readonly type = SELECT_RACHA;

	constructor(public payload: Racha) {
	}
}

export class DeselectRacha implements Action {
	readonly type = DESELECT_RACHA;
}

export type RachaAction =
	| ObserveRachasSubscribe
	| ObserveRachasNext
	| ObserveRachasError
	| ObserveRachasUnsubscribe
	| SelectRacha
	| DeselectRacha;
