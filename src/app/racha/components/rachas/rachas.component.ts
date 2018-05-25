import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Racha } from '../../models/rachas.model';

@Component({
	selector: 'app-rachas',
	templateUrl: './rachas.component.html',
	styleUrls: ['./rachas.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RachasComponent {

	@Input()
	rachas: Racha[];

	constructor() {
	}

}
