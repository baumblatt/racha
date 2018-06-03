import { Action } from '@ngrx/store';
import { Jogador } from '../../models/jogador.model';

export const OBSERVE_JOGADORES_SUBSCRIBE = '[Jogadores] Observe Jogadores (Subscribe).';
export const OBSERVE_JOGADORES_NEXT = '[Jogadores] Observe Jogadores (Next).';
export const OBSERVE_JOGADORES_ERROR = '[Jogadores] Observe Jogadores (Error).';
export const OBSERVE_JOGADORES_UNSUBSCRIBE = '[Jogadores] Observe Jogadores (Unsubscribe).';

export class ObserveJogadoresSubscribe implements Action {
	readonly type = OBSERVE_JOGADORES_SUBSCRIBE;
}

export class ObserveJogadoresNext implements Action {
	readonly type = OBSERVE_JOGADORES_NEXT;

	constructor(public payload: Jogador[]) {
	}
}

export class ObserveJogadoresError implements Action {
	readonly type = OBSERVE_JOGADORES_ERROR;

	constructor(public payload: any) {
	}
}

export class ObserveJogadoresUnsubscribe implements Action {
	readonly type = OBSERVE_JOGADORES_UNSUBSCRIBE;
}


export type JogadorAction = | ObserveJogadoresSubscribe | ObserveJogadoresNext | ObserveJogadoresError | ObserveJogadoresUnsubscribe ;
