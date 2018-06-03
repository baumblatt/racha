import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Racha } from '../../models/rachas.model';
import { RachaAction } from '../../store/actions/racha.action';

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
	dispatch: EventEmitter<RachaAction> = new EventEmitter<RachaAction>();
}
