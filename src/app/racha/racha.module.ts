import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './containers/home/home.component';

import { RachaRoutingModule } from './racha-routing.module';

@NgModule({
	imports: [SharedModule, EffectsModule.forFeature([]), StoreModule.forFeature('racha', {}), RachaRoutingModule],
	declarations: [HomeComponent]
})
export class RachaModule {}
