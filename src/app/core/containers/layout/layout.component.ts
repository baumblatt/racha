import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SignOutUser } from '../../store/actions/auth.action';
import { UsersState } from '../../store/reducers/users.reducer';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
	/**
	 * Verifica se trata-se é Handset para ajustar o menu.
	 */
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	/**
	 * Referencia para o input de pesquisa.
	 */
	@ViewChild('drawer')
	drawer: any;


	constructor(private breakpointObserver: BreakpointObserver, private store: Store<UsersState>) {
	}

	/**
	 * Dispatch a SignOutUser action to store.
	 */
	signOut() {
		this.store.dispatch(new SignOutUser());
		this.drawer.toggle();
	}
}
