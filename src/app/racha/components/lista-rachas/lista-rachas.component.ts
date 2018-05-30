import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Racha } from '../../models/rachas.model';
import { SelectRacha } from '../../store/actions/racha.action';

@Component({
	selector: 'app-lista-rachas',
	templateUrl: './lista-rachas.component.html',
	styleUrls: ['./lista-rachas.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaRachasComponent {

	/**
	 * The list of Rachas to be presented.
	 */
	@Input()
	rachas: Racha[];

	/**
	 * The Racha selection emitter.
	 */
	@Output()
	selectRacha: EventEmitter<SelectRacha> = new EventEmitter<SelectRacha>();

	/**
	 * Emits the racha selection action.
	 * @param racha the racha selected.
	 */
	open(racha: Racha) {
		this.selectRacha.emit(new SelectRacha(racha));
	}
}
