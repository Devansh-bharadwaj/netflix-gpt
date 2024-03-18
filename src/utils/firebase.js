// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjvpfWdibv5J5sbWqJK1O6vfE4XEswJEo",
  authDomain: "netflixgpt-2778f.firebaseapp.com",
  projectId: "netflixgpt-2778f",
  storageBucket: "netflixgpt-2778f.appspot.com",
  messagingSenderId: "1092217680387",
  appId: "1:1092217680387:web:1e49b2efe312ae36019436",
  measurementId: "G-21832R884N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
