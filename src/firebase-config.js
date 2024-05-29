import { initializeApp } from "firebase/app";
import * as firebaseAuth from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBblnLin5pMpiiusCu6DX3VOdLVwGGJERw",
  authDomain: "iphones-nairobi.firebaseapp.com",
  projectId: "iphones-nairobi",
  storageBucket: "iphones-nairobi.appspot.com",
  messagingSenderId: "1087449307496",
  appId: "1:1087449307496:web:50279199b5304d12e35edd",
  measurementId: "G-QMBG8N6CD3"
};

const app = initializeApp(firebaseConfig);

// Inicializando Auth e Firestore e exportando como named exports
export const auth = firebaseAuth.initializeAuth(app);
export const db = getFirestore(app);
