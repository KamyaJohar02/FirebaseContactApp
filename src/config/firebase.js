// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApf7A_rJP457cg8uY06QcNSAF18wpnfVE",
  authDomain: "vite-contact-02.firebaseapp.com",
  projectId: "vite-contact-02",
  storageBucket: "vite-contact-02.appspot.com",
  messagingSenderId: "381242934423",
  appId: "1:381242934423:web:502833f5a8094ea2d6d5d2",
  measurementId: "G-TE3T6X2D57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
