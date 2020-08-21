import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBLMtGRF31fZxZSSI6leItBBdvEoWI-DMA",
    authDomain: "wibi-wibi.firebaseapp.com",
    databaseURL: "https://wibi-wibi.firebaseio.com",
    projectId: "wibi-wibi",
    storageBucket: "wibi-wibi.appspot.com",
    messagingSenderId: "359508489496",
    appId: "1:359508489496:web:8fa190cf8b9a3fcd0b9a6d"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };