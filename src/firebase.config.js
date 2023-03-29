// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF-tOdBPZNIYtlGjyw2WKrgX1r2_ThBcE",
  authDomain: "vacalotery.firebaseapp.com",
  projectId: "vacalotery",
  storageBucket: "vacalotery.appspot.com",
  messagingSenderId: "810745380391",
  appId: "1:810745380391:web:02c70cf023aab141d6d802",
  measurementId: "G-6BVNGSB4LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);

