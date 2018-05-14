import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { pluck, tap } from 'rxjs/operators';
import { SnackBarMessage } from '../../models/snack-bar-message.model';
import { SHOW_SNACK_BAR } from '../actions/snack-bar.action';

@Injectable()
export class SnackBarEffects {
	constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

	@Effect({ dispatch: false })
	showShackBar = this.actions$.pipe(
		ofType(SHOW_SNACK_BAR),
		pluck('payload'),
		tap((message: SnackBarMessage) => this.snackBar.open(message.message, message.action, message.config))
	);
}
