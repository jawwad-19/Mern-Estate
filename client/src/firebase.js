// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-f8f22.firebaseapp.com",
  projectId: "mern-project-f8f22",
  storageBucket: "mern-project-f8f22.firebasestorage.app",
  messagingSenderId: "667054018067",
  appId: "1:667054018067:web:65d3089e99cc7458a0b9e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);