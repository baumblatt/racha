import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Racha } from '../../models/rachas.model';
import { RachaAction, SelectRacha } from '../../store/actions/racha.action';

@Component({
	selector: 'app-lista-rachas-item',
	templateUrl: './lista-rachas-item.component.html',
	styleUrls: ['./lista-rachas-item.component.scss']
})
export class ListaRachasItemComponent {

	/**
	 * The Racha to be listed.
	 */
	@Input()
	racha: Racha;

	/**
	 * Actions dispatched from the component.
	 */
	@Output()
	dispatch: EventEmitter<RachaAction> = new EventEmitter<RachaAction>();

	/**
	 * Emits the racha selection action.
	 * @param racha the racha selected.
	 */
	select(racha: Racha) {
		this.dispatch.emit(new SelectRacha(racha));
	}

}
