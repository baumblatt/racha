import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './containers/login/login.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'racha' },
			{ path: 'racha', canActivate: [AuthenticationGuard], loadChildren: '../racha/racha.module#RachaModule' },
			{ path: 'login', component: LoginComponent, data: { view: 'Login' } }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule {}
