// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZcWqrvZBGeZGPOIQe5sI_7btNzoaZdBY",
  authDomain: "fir-4a178.firebaseapp.com",
  projectId: "fir-4a178",
  storageBucket: "fir-4a178.appspot.com",
  messagingSenderId: "974031321821",
  appId: "1:974031321821:web:e6c468d6385c264c107934",
  measurementId: "G-F6X3BZZJSW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };
export default db;
