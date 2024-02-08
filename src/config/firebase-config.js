import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAge9whgyzEvftK_y-F3glWsoyVwHzrPjw",
  authDomain: "online-cinema-8cce0.firebaseapp.com",
  projectId: "online-cinema-8cce0",
  storageBucket: "online-cinema-8cce0.appspot.com",
  messagingSenderId: "881895457113",
  appId: "1:881895457113:web:6983b6b649af5d0b84cc48"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
