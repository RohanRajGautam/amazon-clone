import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBqpkqL4jGDeJwgzSQkpDn5IAi1oQE3j-g',
  authDomain: 'clone-77ec1.firebaseapp.com',
  databaseURL: 'https://clone-77ec1.firebaseio.com',
  projectId: 'clone-77ec1',
  storageBucket: 'clone-77ec1.appspot.com',
  messagingSenderId: '364536771859',
  appId: '1:364536771859:web:0a002dca5c384766e0d6e6',
  measurementId: 'G-P6TZZNF6C0',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
