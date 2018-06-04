import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRachaComponent } from './containers/edit-racha/edit-racha.component';
import { JogadoresComponent } from './containers/jogadores/jogadores.component';
import { RachaComponent } from './containers/racha/racha.component';
import { RachasComponent } from './containers/rachas/rachas.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'rachas' },
	{ path: 'rachas', component: RachasComponent, data: { view: 'Rachas' } },
	{ path: 'racha/:nome', component: RachaComponent, data: { view: 'Racha' } },
	{ path: 'edit-racha/:nome', component: EditRachaComponent, data: { view: 'Administrar Racha' } },
	{ path: 'jogadores', component: JogadoresComponent, data: { view: 'Jogadores' } }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RachaRoutingModule {}
