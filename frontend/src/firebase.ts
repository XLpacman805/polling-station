import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';

firebase.default.initializeApp({
    apiKey: "AIzaSyAwoRn3xb-CihQIUvyC3w0fSNI5cr8tXuE",
    appId: "polling-station-488",
    projectId: "polling-station-488",
    authDomain: "polling-station-488.firebaseapp.com", 
    databaseURL: "https://polling-station-488.firebaseio.com",
    storageBucket: "polling-station-488.appspot.com",
    messagingSenderId: "648718681435"
  });

 // FirebaseUI config.
 const uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.default.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '/terms-of-service',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('/privacy-policy');
  }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.default.auth());

// This adds firebaseui to the page
// It does everything else on its own
const startFirebaseUI = function (elementId : any) {
    ui.start(elementId, uiConfig)
}

export default startFirebaseUI;