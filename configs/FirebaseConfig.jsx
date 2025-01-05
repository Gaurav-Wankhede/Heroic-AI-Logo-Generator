// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "heroic-ai-logo-generator.firebaseapp.com",
  projectId: "heroic-ai-logo-generator",
  storageBucket: "heroic-ai-logo-generator.firebasestorage.app",
  messagingSenderId: "524355155678",
  appId: "1:524355155678:web:6e7eb54cec5919e8c9744f",
  measurementId: "G-25EVEETSER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
