// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxT1089nnjgSBpOe39Opwgpe42gOrCD5Q",
  authDomain: "teste-do-fb-7c46f.firebaseapp.com",
  projectId: "teste-do-fb-7c46f",
  storageBucket: "teste-do-fb-7c46f.appspot.com",
  messagingSenderId: "1024666144835",
  appId: "1:1024666144835:web:c42deba7381b684d9644f6",
  measurementId: "G-VF8N6ZHJNR"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, db, auth }


