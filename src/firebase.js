// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDLy_6UOn4GERksWMnTxIC1uq8JdJXAOTc',
  authDomain: 'todo-app-cp-d3000.firebaseapp.com',
  projectId: 'todo-app-cp-d3000',
  storageBucket: 'todo-app-cp-d3000.appspot.com',
  messagingSenderId: '649271171176',
  appId: '1:649271171176:web:f598269fd9aaa45f4703dd',
  measurementId: 'G-LGXNDHBZFK',
});

const db = firebaseApp.firestore();

export default db;
