import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDt2_f4C-fWS-9WL0KQWwlW8O26nxaUa9Q",
  authDomain: "vue-music-app-92181.firebaseapp.com",
  projectId: "vue-music-app-92181",
  storageBucket: "vue-music-app-92181.appspot.com",
  messagingSenderId: "223176597050",
  appId: "1:223176597050:web:8d8b0ba85ccf99e477df03",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

//for persisting storage in db due to slow internet connections
db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  db,
  auth,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
