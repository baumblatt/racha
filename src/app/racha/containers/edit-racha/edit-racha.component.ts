import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Jogador } from '../../models/jogador.model';
import { Racha } from '../../models/rachas.model';
import { AddAtuacaoRacha, RachaAction, SelectRacha } from '../../store/actions/racha.action';
import { RachaState } from '../../store/reducers/racha.reducer';
import { getJogadores } from '../../store/selectors/jogador.selectors';
import { getRacha } from '../../store/selectors/racha.selectors';

@Component({
	selector: 'app-racha-admin',
	templateUrl: './edit-racha.component.html',
	styleUrls: ['./edit-racha.component.scss']
})
export class EditRachaComponent implements OnInit {

	/**
	 * Referência para o racha selecionado.
	 */
	racha$: Observable<Racha>;

	/**
	 * Lista de Jogadores.
	 */
	jogadores$: Observable<Jogador[]>;

	constructor(private store: Store<RachaState>) {
	}

	/**
	 * Start listening store values.
	 */
	ngOnInit(): void {
		this.racha$ = this.store.pipe(select(getRacha));
		this.jogadores$ = this.store.pipe(select(getJogadores));
	}

	/**
	 * Add a performance to Racha.
	 */
	add(racha: Racha) {
		this.dispatch(new AddAtuacaoRacha(racha));
	}

	/**
	 * Back to Racha on Rachas route.
	 */
	back(racha: Racha) {
		this.dispatch(new SelectRacha(racha));
	}

	/**
	 * Dispatch actions to store.
	 * @param action
	 */
	dispatch(action: RachaAction) {
		this.store.dispatch(action);
	}

}
