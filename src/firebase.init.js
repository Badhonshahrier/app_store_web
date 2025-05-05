// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB19X8LuZEVfrtX0V0WYnOTyNV9rS0_VU",
  authDomain: "app-store-auth-4ae22.firebaseapp.com",
  projectId: "app-store-auth-4ae22",
  storageBucket: "app-store-auth-4ae22.firebasestorage.app",
  messagingSenderId: "526637510708",
  appId: "1:526637510708:web:cbddb711ce95beea65da61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);