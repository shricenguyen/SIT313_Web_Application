// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6JA1Ovp3AcU7Wy7q9e2eCPYQEMBRWU10",
  authDomain: "devlinkapp-73d6d.firebaseapp.com",
  projectId: "devlinkapp-73d6d",
  storageBucket: "devlinkapp-73d6d.appspot.com",
  messagingSenderId: "374678026662",
  appId: "1:374678026662:web:51203e7dad4d3c4184f767",
  measurementId: "G-FZ3ZX6280Y",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const manualLogin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const firestore = getFirestore(app);
export const auth = getAuth(app);

export const createUserDocument = async (userAuth, additionalData = {}) => {
  if (!userAuth.email) return;
  const userRef = doc(firestore, "users", userAuth.uid);
  const snapshot = await getDoc(userRef);
  console.log(snapshot);
  console.log(snapshot.exists());

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }

    return userRef;
  }
};

export const manualRegister = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const createJob = async (job) => {
  try {
    const docRef = await addDoc(collection(firestore, "jobs"), job);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
