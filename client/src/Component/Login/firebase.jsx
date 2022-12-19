import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDB8JOfMGYAYre-IcvC5hAZgyuaaD_Zbs0",
  authDomain: "skinny-leg-3425.firebaseapp.com",
  projectId: "skinny-leg-3425",
  storageBucket: "skinny-leg-3425.appspot.com",
  messagingSenderId: "707792336756",
  appId: "1:707792336756:web:bcc2268ccc564543711e21",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);