// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrHLB9FreoOJbhNASlp7BZzb_oC9jGMJY",
  authDomain: "myfirstapp-e4c19.firebaseapp.com",
  projectId: "myfirstapp-e4c19",
  storageBucket: "myfirstapp-e4c19.appspot.com",
  messagingSenderId: "821504263096",
  appId: "1:821504263096:web:b0a1ba4c49032d729f854d",
  measurementId: "G-XDQPJ9MQ5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app)
const auth = getAuth(app);

export {fireDB,auth} 