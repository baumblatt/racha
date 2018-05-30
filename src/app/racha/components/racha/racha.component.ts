import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Racha } from '../../models/rachas.model';

@Component({
	selector: 'app-racha',
	templateUrl: './racha.component.html',
	styleUrls: ['./racha.component.scss']
})
export class RachaComponent {

	constructor(private bottomSheetRef: MatBottomSheetRef<RachaComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: { racha: Racha }) {
	}

}
