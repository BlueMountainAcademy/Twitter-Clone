import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFpIkSKkWjrahcLNJPZ71NrU0bgMpVM28",
  authDomain: "twitter-clone-37c90.firebaseapp.com",
  projectId: "twitter-clone-37c90",
  storageBucket: "twitter-clone-37c90.appspot.com",
  messagingSenderId: "912688552301",
  appId: "1:912688552301:web:c457b46ae8fa13b3462264",
  measurementId: "G-RDXZVMW5W5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

