import * as  admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as moment from 'moment';

const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

/**
 * Endpoint to create rachas to a given mouth.
 */
app.get('/rachas/:month', (req, res) => {
	const friday = moment(req.params.month, 'YYYY-MM').startOf('month').day('Friday');

	if (friday.date() > 7) friday.add(7, 'd');

	const fridays = [];

	for (let month = friday.month(); month === friday.month(); friday.add(7, 'day')) {

		// add or reset document on firestore.
		admin.firestore().doc(`/rachas/${friday.format('YYYY-MM-DD')}`).set({
			nome: friday.format('YYYY-MM-DD'),
			mes: friday.format('YYYY-MM'),
			mensalistas: [],
			convidados: []
		}).catch(error => console.error(error));

		fridays.push(friday.clone());
		month = friday.month();
	}


	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ fridays: fridays.map(day => day.format('YYYY-MM-DD')) }));
});

// Expose Express API as a single Cloud Function:
export const endpoint = functions.https.onRequest(app);
