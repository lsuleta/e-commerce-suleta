// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9r0X79sI_cNAOAdRlAOjJCxhm1AFu0D4",
  authDomain: "e-commerce-suleta-coder.firebaseapp.com",
  projectId: "e-commerce-suleta-coder",
  storageBucket: "e-commerce-suleta-coder.appspot.com",
  messagingSenderId: "221624456067",
  appId: "1:221624456067:web:95d9541963a0ead0101cb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);