import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDCpm3i64pyXEdhhxVKEREbPbz58zHYIKQ",
  authDomain: "star-middle-3447-8cf94.firebaseapp.com",
  databaseURL: "https://star-middle-3447-8cf94-default-rtdb.firebaseio.com",
  projectId: "star-middle-3447-8cf94",
  storageBucket: "star-middle-3447-8cf94.appspot.com",
  messagingSenderId: "1042219954133",
  appId: "1:1042219954133:web:7382914d2d8598d631175c",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
