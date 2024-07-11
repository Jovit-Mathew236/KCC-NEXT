import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCycFbzihXVBYAbeVWwbNGlm7fFGeOicb8",
  authDomain: "kcc24-277a5.firebaseapp.com",
  projectId: "kcc24-277a5",
  storageBucket: "kcc24-277a5.appspot.com",
  messagingSenderId: "980169847772",
  appId: "1:980169847772:web:a22c48a18a068014859519",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
