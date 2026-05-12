// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6ecce.firebaseapp.com",
  projectId: "mern-estate-6ecce",
  storageBucket: "mern-estate-6ecce.firebasestorage.app",
  messagingSenderId: "503604469649",
  appId: "1:503604469649:web:4b75997f26c40e958f0430"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);