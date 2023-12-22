import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDfN6YVltId62Pm8njJGGUHaWXawuORa_M",
  authDomain: "threads-6f005.firebaseapp.com",
  projectId: "threads-6f005",
  storageBucket: "threads-6f005.appspot.com",
  messagingSenderId: "245947460178",
  appId: "1:245947460178:web:209e4835152ad0e2760d8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
