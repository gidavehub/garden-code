// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTuSrECmRszemkgLoY4ToM0-7sFcEJLJE",
  authDomain: "garden-ac5ac.firebaseapp.com",
  databaseURL: "https://garden-ac5ac-default-rtdb.firebaseio.com",
  projectId: "garden-ac5ac",
  storageBucket: "garden-ac5ac.firebasestorage.app",
  messagingSenderId: "580994457092",
  appId: "1:580994457092:web:a75886f6b07a3bd78c5f51",
  measurementId: "G-CSBHZ8HN0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { app, auth, firestore };

