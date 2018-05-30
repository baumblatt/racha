import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Racha } from '../../models/rachas.model';
import { ObserveRachasSubscribe, ObserveRachasUnsubscribe } from '../../store/actions/racha.action';
import { RachaAbelState } from '../../store/reducers/global.reducers';
import { getRachas } from '../../store/selectors/racha.selectors';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

	rachas: Observable<Racha[]>;

	constructor(private store: Store<RachaAbelState>) {
	}

	ngOnInit() {
		this.store.dispatch(new ObserveRachasSubscribe());

		this.rachas = this.store.pipe(
			select(getRachas)
		);
	}

	ngOnDestroy(): void {
		this.store.dispatch(new ObserveRachasUnsubscribe());
	}
}
