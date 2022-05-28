// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqvGUtenY-VoRpSTThipuREN9iQ_srvbY",
    authDomain: "clone-6682f.firebaseapp.com",
    projectId: "clone-6682f",
    storageBucket: "clone-6682f.appspot.com",
    messagingSenderId: "799913598180",
    appId: "1:799913598180:web:22d8ed6e7f185c187360f1",
    measurementId: "G-XYMV5PCXGE"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth();
  export {db, auth} ;