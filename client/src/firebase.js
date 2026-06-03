// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
<<<<<<< HEAD
  authDomain: "mern-project-f8f22.firebaseapp.com",
  projectId: "mern-project-f8f22",
  storageBucket: "mern-project-f8f22.firebasestorage.app",
  messagingSenderId: "667054018067",
  appId: "1:667054018067:web:65d3089e99cc7458a0b9e6"
=======
  authDomain: "mern-estate-6ecce.firebaseapp.com",
  projectId: "mern-estate-6ecce",
  storageBucket: "mern-estate-6ecce.firebasestorage.app",
  messagingSenderId: "503604469649",
  appId: "1:503604469649:web:4b75997f26c40e958f0430"
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);