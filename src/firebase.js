// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//testando...
//import { getFirestore } from "firebase/firestore";
import {initializeFirestore} from 'firebase/firestore';
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFs3fHfO8aIi-isSCdQE68e56V9yurBfQ",
  authDomain: "testefbandroid-998fd.firebaseapp.com",
  projectId: "testefbandroid-998fd",
  storageBucket: "testefbandroid-998fd.appspot.com",
  messagingSenderId: "886879977268",
  appId: "1:886879977268:web:b9b41546ce293715c9af61"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
//const db = getFirestore();
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { app, db, auth }


