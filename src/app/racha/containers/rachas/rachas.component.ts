import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Racha } from '../../models/rachas.model';
import { ObserveRachasSubscribe, ObserveRachasUnsubscribe } from '../../store/actions/racha.action';
import { RachaAbelState } from '../../store/reducers/global.reducers';
import { getRacha, getRachas } from '../../store/selectors/racha.selectors';

@Component({
	selector: 'app-home',
	templateUrl: './rachas.component.html',
	styleUrls: ['./rachas.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RachasComponent implements OnInit, OnDestroy {

	/**
	 * Rachas from store.
	 */
	rachas$: Observable<Racha[]>;

	/**
	 * Selected racha
	 */
	racha$: Observable<Racha>;

	constructor(private store: Store<RachaAbelState>) {
	}

	/**
	 * Init the observer of rachas and racha selections.
	 */
	ngOnInit() {
		this.store.dispatch(new ObserveRachasSubscribe());

		this.rachas$ = this.store.pipe(
			select(getRachas)
		);

		this.racha$ = this.store.pipe(
			select(getRacha),
		);
	}

	/**
	 * Dispatch some action to the store.
	 * @param action action to be dispatched.
	 */
	dispatch(action: Action) {
		this.store.dispatch(action);
	}

	/**
	 * Unsubscribe from rachas and racha selection.
	 */
	ngOnDestroy(): void {
		this.dispatch(new ObserveRachasUnsubscribe());
	}
}
