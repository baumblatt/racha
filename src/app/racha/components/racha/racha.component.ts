import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Racha } from '../../models/rachas.model';
import { DeselectRacha } from '../../store/actions/racha.action';

@Component({
	selector: 'app-racha',
	templateUrl: './racha.component.html',
	styleUrls: ['./racha.component.scss']
})
export class RachaComponent {

	/**
	 * Referência para o racha selecionado.
	 */
	@Input()
	racha: Racha;

	@Output()
	deselectRacha: EventEmitter<DeselectRacha> = new EventEmitter<DeselectRacha>();

	back() {
		this.deselectRacha.emit(new DeselectRacha());
	}

}
