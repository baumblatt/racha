import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AuthenticationGuard } from './authentication.guard';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
	imports: [CoreRoutingModule, SharedModule, AngularFireModule.initializeApp(environment.firebase)],
	declarations: [LayoutComponent, HomeComponent, LoginComponent],
	providers: [AuthenticationGuard]
})
export class CoreModule {}
