import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor(private fireAuth: AngularFireAuth) {}

	ngOnInit() {}

	/**
	 * Autentica com o Google.
	 */
	google() {
		this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch();
	}
}
