// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  onesignal: {
    appId: '74a15980-c75a-4155-ba4b-e6761c5f39e1',
    googleProjectNumber: '340660990914'
  },
  firebaseConfig: {
    apiKey: 'AIzaSyA0vI0_ggVVEjCiRDDpgr5f5-lvYzNpocg',
    authDomain: 'dmcpe-mifc.firebaseapp.com',
    projectId: 'dmcpe-mifc',
    storageBucket: 'dmcpe-mifc.appspot.com',
    messagingSenderId: '716134214199',
    appId: '1:716134214199:web:46999638f9d2f8f9adedb2',
    measurementId: 'G-N3K3J9H6SK'
  },
  apiUrl: 'https://us-central1-dmcpe-mifc.cloudfunctions.net'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
