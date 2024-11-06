
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBslBknP5NK3pFjYWconneggYf1tE6_VgM",
  authDomain: "sri-lakshmi-industrial.firebaseapp.com",
  projectId: "sri-lakshmi-industrial",
  storageBucket: "sri-lakshmi-industrial.appspot.com",
  messagingSenderId: "435697256414",
  appId: "1:435697256414:web:e024e9015998d866377f4f",
  measurementId: "G-HSW9KNXJ7J"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 

export { db }; 