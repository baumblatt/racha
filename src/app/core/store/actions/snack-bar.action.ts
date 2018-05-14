import { Action } from '@ngrx/store';
import { SnackBarMessage } from '../../models/snack-bar-message.model';

export const SHOW_SNACK_BAR = '[Snack Bar] Show snack bar message.';

export class ShowSnackBar implements Action {
	readonly type = SHOW_SNACK_BAR;

	constructor(public payload: SnackBarMessage) {}
}

export type SnackBarAction = ShowSnackBar;
