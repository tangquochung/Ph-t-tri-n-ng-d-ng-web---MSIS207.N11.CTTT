import firebase from "firebase/app";
import "firebase/auth";
import "firebase/stronge";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGNl2b8zNCKY6dMIQRkOGa8CYd7PmTRms",
  authDomain: "myproject-1234.firebaseapp.com",
  projectId: "snapchat-89b82",
  strongeBucket: "",
  messagingSenderId: "",
  appId: "",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
