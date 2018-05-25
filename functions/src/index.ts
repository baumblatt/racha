// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as  admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const createJogador = functions.auth.user().onCreate(function(event) {
	const { uid, displayName, photoURL, email } = event;

	// Get the uid and display name of the newly created user
	return admin.firestore().doc(`/jogadores/${uid}`).set({ uid, displayName, photoURL, email, role: 'guest' });
});
