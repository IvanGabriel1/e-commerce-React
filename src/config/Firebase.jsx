// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKnMfVfh8ptSHyRs6e7G6geFQlpOTWri4",
  authDomain: "coderhouse-ecommerce-8394a.firebaseapp.com",
  projectId: "coderhouse-ecommerce-8394a",
  storageBucket: "coderhouse-ecommerce-8394a.appspot.com",
  messagingSenderId: "339163031222",
  appId: "1:339163031222:web:5940ccb02e7120ee7b2817",
  measurementId: "G-L4H7MNZ2CE",
};

console.log("Se contecto");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
