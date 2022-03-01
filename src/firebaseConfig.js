// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC9IRp4OxOvHCeH9WkZYRKV62fq0MojHpo",
  authDomain: "linkedin-clone-2d8a4.firebaseapp.com",
  projectId: "linkedin-clone-2d8a4",
  storageBucket: "linkedin-clone-2d8a4.appspot.com",
  messagingSenderId: "602045899986",
  appId: "1:602045899986:web:173e8c63bf39ab4623f90b",
  measurementId: "G-XVV9ETXKRW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
// const auth = firebase.auth;

// export { db };
