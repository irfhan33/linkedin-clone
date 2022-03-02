import firebase from "firebase";
import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import "firebase/firestore";
// import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC9IRp4OxOvHCeH9WkZYRKV62fq0MojHpo",
  authDomain: "linkedin-clone-2d8a4.firebaseapp.com",
  projectId: "linkedin-clone-2d8a4",
  storageBucket: "linkedin-clone-2d8a4.appspot.com",
  messagingSenderId: "602045899986",
  appId: "1:602045899986:web:173e8c63bf39ab4623f90b",
  measurementId: "G-XVV9ETXKRW",
};

const App = initializeApp(firebaseConfig);
export const db = App.firestore();
export const auth = firebase.auth();
// export const auth = getAuth(firebaseApp);

// export { db };
