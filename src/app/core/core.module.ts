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
import { LoginComponent } from './containers/login/login.component';
import { SnackBarEffects } from './store/effects/snack-bar.effects';
import { UsersEffects } from './store/effects/users.effects';
import { usersReducer } from './store/reducers/users.reducer';

@NgModule({
	imports: [
		AngularFireModule.initializeApp(environment.firebase),
		CoreRoutingModule,
		SharedModule,
		EffectsModule.forRoot([SnackBarEffects, UsersEffects]),
		StoreModule.forRoot({ router: routerReducer, users: usersReducer }),
		StoreDevtoolsModule.instrument({
			name: 'Racha do Abel',
			maxAge: 25,
			logOnly: environment.production
		}),
		StoreRouterConnectingModule.forRoot({
			stateKey: 'router' // name of reducer key
		})
	],
	declarations: [LayoutComponent, LoginComponent],
	providers: [AuthenticationGuard]
})
export class CoreModule {}
