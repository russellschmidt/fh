import firebase from 'firebase';

var config = {
  apiKey: process.env.PREACT_APP_FIREBASE_API_KEY,
  authDomain: "farmhausapp20180923.firebaseapp.com",
  databaseURL: "https://farmhausapp20180923.firebaseio.com",
  projectId: "farmhausapp20180923",
  storageBucket: "",
  messagingSenderId: "1096591295207"
};
firebase.initializeApp(config);

export default firebase;