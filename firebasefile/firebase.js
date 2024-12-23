// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3aUKwPUlqWmlMQH7E__gzcFqECshJMZE",
  authDomain: "nutrigen-5a799.firebaseapp.com",
  projectId: "nutrigen-5a799",
  storageBucket: "nutrigen-5a799.firebasestorage.app",
  messagingSenderId: "88146310673",
  appId: "1:88146310673:web:52e0bbf433727d5fdd63b0",
  measurementId: "G-FBL817H359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {app , auth , firestore};