// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: 'AIzaSyApHrcjksV2xkRwgyk3Awxxcz4QPM-h2e4',
		authDomain: 'racha-abel.firebaseapp.com',
		databaseURL: 'https://racha-abel.firebaseio.com',
		projectId: 'racha-abel',
		storageBucket: 'racha-abel.appspot.com',
		messagingSenderId: '575485113140'
	}
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
