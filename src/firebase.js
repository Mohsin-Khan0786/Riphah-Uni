import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore"; // Import Firestore module

const firebaseConfig = {
  apiKey: "AIzaSyDL_QcCDufw7_CmYZoCrcpdOZqHut0Vr84",
  authDomain: "riphah-invoseg.firebaseapp.com",
  projectId: "riphah-invoseg",
  storageBucket: "riphah-invoseg.appspot.com",
  messagingSenderId: "376246751167",
  appId: "1:376246751167:web:4453bfc2d84e9dee41db0a",
  measurementId: "G-9P4RLP4Z5P"
};

const configapp = firebase.initializeApp(firebaseConfig);

const auth = configapp.auth();
const firestore = firebase.firestore(); // Initialize Firestore

export { configapp, auth, firestore }; // Exporting firestore


