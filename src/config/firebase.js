// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCewSAyY1x1rRdDnp818uD0evVL_T_GoTE",
  authDomain: "tiktok-jornada-dev.firebaseapp.com",
  projectId: "tiktok-jornada-dev",
  storageBucket: "tiktok-jornada-dev.appspot.com",
  messagingSenderId: "903936591651",
  appId: "1:903936591651:web:e3f05753cba21958bf2e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;