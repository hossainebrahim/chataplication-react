import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCr-D5dy28_ufwzGZNPQR9BDP8hzXydgE",
  authDomain: "chataplication-59560.firebaseapp.com",
  projectId: "chataplication-59560",
  storageBucket: "chataplication-59560.appspot.com",
  messagingSenderId: "352321000441",
  appId: "1:352321000441:web:11a9d5f0f09a2f940a2328",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
