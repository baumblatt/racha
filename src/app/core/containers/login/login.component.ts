import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SingInUser } from '../../store/actions/auth.action';
import { UsersState } from '../../store/reducers/users.reducer';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	constructor(private store: Store<UsersState>) {
	}

	/**
	 * Dispatch SignInUser action to store with the given provider id as payload.
	 * @param {string} providerId the provider id that should be used in sign in process.
	 */
	signIn(providerId: string) {
		this.store.dispatch(new SingInUser(providerId));
	}
}
