// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLy_6UOn4GERksWMnTxIC1uq8JdJXAOTc",
  authDomain: "todo-app-cp-d3000.firebaseapp.com",
  projectId: "todo-app-cp-d3000",
  storageBucket: "todo-app-cp-d3000.appspot.com",
  messagingSenderId: "649271171176",
  appId: "1:649271171176:web:f598269fd9aaa45f4703dd",
  measurementId: "G-LGXNDHBZFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
