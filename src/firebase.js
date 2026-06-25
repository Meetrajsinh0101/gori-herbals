import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCo9bSefNU8O2jeFI6VB4hGRfgfm3rbXKA",
  authDomain: "gori-herbals.firebaseapp.com",
  projectId: "gori-herbals",
  storageBucket: "gori-herbals.firebasestorage.app",
  messagingSenderId: "254150496338",
  appId: "1:254150496338:web:f670789426c0ebcf5acf8b",
  measurementId: "G-YSNS0WGPJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);
