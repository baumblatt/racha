import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
	imports: [CoreRoutingModule, SharedModule],
	declarations: [LayoutComponent, HomeComponent]
})
export class CoreModule {}
