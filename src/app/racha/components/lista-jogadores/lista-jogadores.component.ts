import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Jogador } from '../../models/jogador.model';

@Component({
	selector: 'app-lista-jogadores',
	templateUrl: './lista-jogadores.component.html',
	styleUrls: ['./lista-jogadores.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaJogadoresComponent {

	@Input()
	jogadores: Jogador[];
}
