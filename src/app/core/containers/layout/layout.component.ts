import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { SignOutUser } from '../../store/actions/auth.action';
import { UsersState } from '../../store/reducers/users.reducer';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
	/**
	 * Verifica se trata-se é Handset para ajustar o menu.
	 */
	isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

	/**
	 * Referencia para o input de pesquisa.
	 */
	@ViewChild('drawer')
	drawer: any;


	constructor(private breakpointObserver: BreakpointObserver, private store: Store<UsersState>, db: AngularFirestore) {
		db.firestore.settings({ timestampsInSnapshots: true });
	}

	/**
	 * Dispatch a SignOutUser action to store.
	 */
	signOut() {
		this.store.dispatch(new SignOutUser());
		this.drawer.toggle();
	}
}
