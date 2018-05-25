import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { JogadoresComponent } from './containers/jogadores/jogadores.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: HomeComponent, data: { view: 'Home' } },
	{ path: 'jogadores', component: JogadoresComponent, data: { view: 'Jogadores' } }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RachaRoutingModule {}
