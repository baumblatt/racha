import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as _ from 'lodash';
import { Atuacao } from '../../models/atuacao.model';
import { Jogador } from '../../models/jogador.model';
import { Racha } from '../../models/rachas.model';

@Component({
	selector: 'app-atuacao-dialog',
	templateUrl: './atuacao-dialog.component.html',
	styleUrls: ['./atuacao-dialog.component.scss']
})
export class AtuacaoDialogComponent {

	/**
	 * Atuação forms.
	 */
	form: FormGroup;

	/**
	 * Modo
	 */
	mode = 'new';

	/**
	 * Jogadores que ainda não foram registrados.
	 */
	jogadores: Jogador[];

	constructor(public dialogRef: MatDialogRef<AtuacaoDialogComponent>, private fb: FormBuilder,
							@Inject(MAT_DIALOG_DATA) public data: { racha: Racha, jogadores: Jogador[], atuacao?: Atuacao }) {

		const presentes = _.keyBy(data.racha.presentes, atuacao => atuacao.jogador.uid);
		this.jogadores = data.jogadores.filter(jogador => !presentes[jogador.uid]);

		this.form = this.fb.group({
			jogador: [''],
			gols: [0],
			vitorias: [0],
			derrotas: [0],
			empates: [0],
			amarelos: [0],
			vermelhos: [0],
		});
	}

	add(field: string) {
		this.form.get(field).patchValue(this.form.get(field).value + 1);
	}

	remove(field: string) {
		if (this.form.get(field).value > 0) {
			this.form.get(field).patchValue(this.form.get(field).value - 1);
		}
	}

	close() {
		this.dialogRef.close(this.form.value);
	}

}
