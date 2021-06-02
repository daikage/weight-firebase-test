import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhz9iJ00npEOf3DSi4UrfIdP6FkIoYQqI",
  authDomain: "weight-tracker-bbb48.firebaseapp.com",
  databaseURL:"https://weight-tracker-bbb48.firebaseio.com/",
  projectId: "weight-tracker-bbb48",
  storageBucket: "weight-tracker-bbb48.appspot.com",
  messagingSenderId: "250610624428",
  appId: "1:250610624428:web:6b8ac7e76c9f0a67603c09"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
