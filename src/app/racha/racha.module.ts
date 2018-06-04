import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { AtuacaoDialogComponent } from './components/atuacao-dialog/atuacao-dialog.component';
import { ListaJogadoresComponent } from './components/lista-jogadores/lista-jogadores.component';
import { ListaRachasItemComponent } from './components/lista-rachas-item/lista-rachas-item.component';
import { ListaRachasComponent } from './components/lista-rachas/lista-rachas.component';
import { EditRachaComponent } from './containers/edit-racha/edit-racha.component';
import { JogadoresComponent } from './containers/jogadores/jogadores.component';
import { RachaComponent } from './containers/racha/racha.component';
import { RachasComponent } from './containers/rachas/rachas.component';
import { RachaRoutingModule } from './racha-routing.module';
import { JogadorEffects } from './store/effects/jogador.effects';
import { RachaEffects } from './store/effects/racha.effects';
import { reducers } from './store/reducers/global.reducers';

@NgModule({
	imports: [
		SharedModule,
		EffectsModule.forFeature([JogadorEffects, RachaEffects]),
		StoreModule.forFeature('racha-abel', reducers),
		RachaRoutingModule
	],
	declarations: [
		RachasComponent,
		ListaRachasComponent,
		JogadoresComponent,
		ListaJogadoresComponent,
		RachaComponent,
		ListaRachasItemComponent,
		EditRachaComponent,
		AtuacaoDialogComponent
	],
	entryComponents: [AtuacaoDialogComponent]
})
export class RachaModule {
}
