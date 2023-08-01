// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8vbcIS---a4Rvz5HSKLu-xGRHX0kKVJU",
  authDomain: "jasambritravel-d5db6.firebaseapp.com",
  projectId: "jasambritravel-d5db6",
  storageBucket: "jasambritravel-d5db6.appspot.com",
  messagingSenderId: "957042165414",
  appId: "1:957042165414:web:4c5026d9bf4b2d7b67d667",
  measurementId: "G-3Z7878EFW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app) 
// const analytics = getAnalytics(app);
//gs://jasambritravel-d5db6.appspot.com