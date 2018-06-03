import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Jogador } from '../../models/jogador.model';
import { ObserveJogadoresSubscribe, ObserveJogadoresUnsubscribe } from '../../store/actions/jogador.action';
import { RachaAbelState } from '../../store/reducers/global.reducers';
import { getJogadores } from '../../store/selectors/jogador.selectors';

@Component({
	selector: 'app-jogadores',
	templateUrl: './jogadores.component.html',
	styleUrls: ['./jogadores.component.scss']
})
export class JogadoresComponent implements OnInit, OnDestroy {

	jogadores: Observable<Jogador[]>;

	constructor(private store: Store<RachaAbelState>) {
	}

	ngOnInit() {
		this.store.dispatch(new ObserveJogadoresSubscribe());

		this.jogadores = this.store.pipe(
			select(getJogadores),
		);
	}

	ngOnDestroy(): void {
		this.store.dispatch(new ObserveJogadoresUnsubscribe());
	}


}
