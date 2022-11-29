// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBaYIFx3b0oTG2jfkqEGyyE0e0HiPaWufg",
  authDomain: "e-commerce-a-de-coco.firebaseapp.com",
  projectId: "e-commerce-a-de-coco",
  storageBucket: "e-commerce-a-de-coco.appspot.com",
  messagingSenderId: "569235133713",
  appId: "1:569235133713:web:3e57fec488b7b6ff4de8b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);