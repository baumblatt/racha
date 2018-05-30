import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Action, select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { RachaComponent } from '../../components/racha/racha.component';
import { Racha } from '../../models/rachas.model';
import { DeselectRacha, ObserveRachasSubscribe, ObserveRachasUnsubscribe } from '../../store/actions/racha.action';
import { RachaAbelState } from '../../store/reducers/global.reducers';
import { getRacha, getRachas } from '../../store/selectors/racha.selectors';

@Component({
	selector: 'app-home',
	templateUrl: './rachas.component.html',
	styleUrls: ['./rachas.component.scss']
})
export class RachasComponent implements OnInit, OnDestroy {

	/**
	 * Rachas from store.
	 */
	rachas: Observable<Racha[]>;

	/**
	 * Subscription to handle Racha selections.
	 */
	subscription: Subscription;

	constructor(private store: Store<RachaAbelState>, private bottomSheet: MatBottomSheet) {
	}

	/**
	 * Init the observer of rachas and racha selections.
	 */
	ngOnInit() {
		this.store.dispatch(new ObserveRachasSubscribe());

		this.rachas = this.store.pipe(
			select(getRachas)
		);

		this.subscription = this.store.pipe(
			select(getRacha),
			filter(racha => !!racha),
			concatMap((racha) =>
				this.bottomSheet.open(RachaComponent, { data: { racha: racha } }).afterDismissed()
			)
		).subscribe(
			() => this.dispatch(new DeselectRacha())
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
		if (this.subscription) {
			this.subscription.unsubscribe();
		}

		this.dispatch(new ObserveRachasUnsubscribe());
	}
}
