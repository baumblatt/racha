import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AuthenticationGuard } from './authentication.guard';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
	imports: [
		AngularFireModule.initializeApp(environment.firebase),
		CoreRoutingModule,
		SharedModule,
		EffectsModule.forRoot([]),
		StoreModule.forRoot({router: routerReducer}),
		StoreDevtoolsModule.instrument({
			name: 'Racha do Abel',
			maxAge: 25,
			logOnly: environment.production
		}),
		StoreRouterConnectingModule.forRoot({
			stateKey: 'router', // name of reducer key
		})
	],
	declarations: [LayoutComponent, HomeComponent, LoginComponent],
	providers: [AuthenticationGuard]
})
export class CoreModule {}
