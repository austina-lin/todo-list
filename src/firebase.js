import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBqqJ32mnlnkrwIL_SfafM92IyuKQ3Bi_0",
  authDomain: "todo-list-9d1ed.firebaseapp.com",
  databaseURL: "https://todo-list-9d1ed.firebaseio.com",
  projectId: "todo-list-9d1ed",
  storageBucket: "todo-list-9d1ed.appspot.com",
  messagingSenderId: "1046654472690",
  appId: "1:1046654472690:web:114371a285e4d09d335b6b"
});

export {firebaseConfig as firebase};