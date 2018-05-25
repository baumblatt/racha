import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { RachasComponent } from './components/rachas/rachas.component';
import { HomeComponent } from './containers/home/home.component';

import { RachaRoutingModule } from './racha-routing.module';
import { RachaEffects } from './store/effects/racha.effects';
import { reducers } from './store/reducers/global.reducers';

@NgModule({
	imports: [
		SharedModule,
		EffectsModule.forFeature([RachaEffects]),
		StoreModule.forFeature('racha-abel', reducers),
		RachaRoutingModule
	],
	declarations: [HomeComponent, RachasComponent]
})
export class RachaModule {
}
