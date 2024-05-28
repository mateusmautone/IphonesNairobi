// Import the functions you need from the SDKs you need
import 'firebase/app'
import { initializeApp } from "firebase/app";
import * as firebaseAuth from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore';

// import * as firebaseAuth from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBblnLin5pMpiiusCu6DX3VOdLVwGGJERw",
  authDomain: "iphones-nairobi.firebaseapp.com",
  projectId: "iphones-nairobi",
  storageBucket: "iphones-nairobi.appspot.com",
  messagingSenderId: "1087449307496",
  appId: "1:1087449307496:web:50279199b5304d12e35edd",
  measurementId: "G-QMBG8N6CD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

export const auth = firebaseAuth.initializeAuth(app);
// firebaseAuth.signInWithEmailAndPassword(
//   auth, 'renaniomes10@gmail.com', 'renan123'
// ).then(user => console.log(user)).catch(error => console.log('error',error));