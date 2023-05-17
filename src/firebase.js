// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9IDpR55V5fk1cjbZt7qFtK8zTNddhwRE",
  authDomain: "react-chat-797a2.firebaseapp.com",
  projectId: "react-chat-797a2",
  storageBucket: "react-chat-797a2.appspot.com",
  messagingSenderId: "925529092694",
  appId: "1:925529092694:web:6b55f51745996d475dc1f7",
  measurementId: "G-MC0D3VHMW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);


