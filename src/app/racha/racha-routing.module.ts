import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogadoresComponent } from './containers/jogadores/jogadores.component';
import { RachasComponent } from './containers/rachas/rachas.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'rachas' },
	{ path: 'rachas', component: RachasComponent, data: { view: 'Rachas' } },
	{ path: 'jogadores', component: JogadoresComponent, data: { view: 'Jogadores' } }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RachaRoutingModule {}
