// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as  admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);

// export the endpoint express.
export { endpoint } from './endpoint';

export const createJogador = functions.auth.user().onCreate(function(event) {
	const { uid, displayName, photoURL, email } = event;

	// Get the uid and display name of the newly created user
	return admin.firestore().doc(`/jogadores/${uid}`).set({ uid, displayName, photoURL, email, role: 'Visitante', admin: false });
});
