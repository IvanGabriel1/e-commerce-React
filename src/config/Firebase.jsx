// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, process } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import productos from "../asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_APIKEY,
  authDomain: process.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECTID,
  storageBucket: process.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VITE_FIREBASE_APID,
};

console.log("Se contecto");

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

productos.forEach((producto) => {
  addDoc(collection(db, "productos"), producto)
    .then((docRef) => {
      console.log(`Se agrego el documento con id: ${docRef.id}`);
    })
    .catch((error) => console.log(error));
});
