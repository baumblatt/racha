import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Racha } from '../../models/rachas.model';
import { DeselectRacha, EditRacha } from '../../store/actions/racha.action';
import { RachaState } from '../../store/reducers/racha.reducer';
import { getRacha } from '../../store/selectors/racha.selectors';

@Component({
	selector: 'app-racha',
	templateUrl: './racha.component.html',
	styleUrls: ['./racha.component.scss']
})
export class RachaComponent implements OnInit {

	/**
	 * Referência para o racha selecionado.
	 */
	racha$: Observable<Racha>;

	constructor(private store: Store<RachaState>) {
	}

	/**
	 * Start listening store values.
	 */
	ngOnInit(): void {
		this.racha$ = this.store.pipe(select(getRacha));
	}

	/**
	 * Emit the Deselect Racha action.
	 */
	back() {
		this.store.dispatch(new DeselectRacha());
	}

	/**
	 * Emit the Admin Racha action.
	 */
	admin(racha: Racha) {
		this.store.dispatch(new EditRacha(racha));
	}

}
