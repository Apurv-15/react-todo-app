// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDLy_6UOn4GERksWMnTxIC1uq8JdJXAOTc',
  authDomain: 'todo-app-cp-d3000.firebaseapp.com',
  projectId: 'todo-app-cp-d3000',
  storageBucket: 'todo-app-cp-d3000.appspot.com',
  messagingSenderId: '649271171176',
  appId: '1:649271171176:web:f598269fd9aaa45f4703dd',
  measurementId: 'G-LGXNDHBZFK',
};

// firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export default db;
