import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKrWp34Ece-PKv4A2RN-iJ8gubFYoCeL4",
  authDomain: "linkedin-clone-3035f.firebaseapp.com",
  projectId: "linkedin-clone-3035f",
  storageBucket: "linkedin-clone-3035f.appspot.com",
  messagingSenderId: "324120611630",
  appId: "1:324120611630:web:1a90088c5330caccff88bf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
// const db = getFirestore(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = getStorage(firebaseApp);

export { auth, provider };
export const storage = firebase.storage();

export default firebase;
