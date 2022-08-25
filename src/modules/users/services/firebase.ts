// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr8QvCNivaTLtnSeVsDYpGeMfUCMISUXg",
  authDomain: "teppa-fullstack.firebaseapp.com",
  projectId: "teppa-fullstack",
  storageBucket: "teppa-fullstack.appspot.com",
  messagingSenderId: "204089160680",
  appId: "1:204089160680:web:6f92e2723df6e41afeea5d",
  measurementId: "G-GTZXXD2JSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }