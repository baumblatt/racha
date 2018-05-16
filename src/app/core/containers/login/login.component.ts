import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthUser } from '../../store/actions/auth.action';
import { UsersState } from '../../store/reducers/users.reducer';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor(private store: Store<UsersState>) {}

	ngOnInit() {}

	/**
	 */
	google() {
		this.store.dispatch(new AuthUser());
	}
}
