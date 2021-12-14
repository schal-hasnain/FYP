import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyDXGvlS0RQK_Vc38EnvyzpWT56KJb2aJko",
    authDomain: "medicnet-schal123.firebaseapp.com",
    projectId: "medicnet-schal123",
    storageBucket: "medicnet-schal123.appspot.com",
    messagingSenderId: "776701666463",
    appId: "1:776701666463:web:933bf7e8f380f4fea52eaa",
    measurementId: "G-D34F9ELY1K"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

  export {app,auth, db};