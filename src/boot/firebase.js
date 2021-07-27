import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDAQ-cNdgeUY_78TlXQ0ZyAonJy3lpFYlg",
  authDomain: "qwathsapp.firebaseapp.com",
  projectId: "qwathsapp",
  storageBucket: "qwathsapp.appspot.com",
  messagingSenderId: "218457037277",
  appId: "1:218457037277:web:810354ae21280093a47e34"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }