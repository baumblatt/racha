import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './containers/home/home.component';

import { RachaRoutingModule } from './racha-routing.module';

@NgModule({
	imports: [SharedModule, RachaRoutingModule],
	declarations: [HomeComponent]
})
export class RachaModule {}
