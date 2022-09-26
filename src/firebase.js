// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9XIRPK04RbFMo2v7pBScmZirhccstxW0",
  authDomain: "coderhouse-ecommerce-437f2.firebaseapp.com",
  projectId: "coderhouse-ecommerce-437f2",
  storageBucket: "coderhouse-ecommerce-437f2.appspot.com",
  messagingSenderId: "969237174257",
  appId: "1:969237174257:web:3465d8be5b797038609650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;