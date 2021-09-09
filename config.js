import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDqYulq4wWNkeJ6dMjzUWObCAcmLfMh_9Y",
  authDomain: "tuteamigo-dfc59.firebaseapp.com",
  projectId: "tuteamigo-dfc59",
  storageBucket: "tuteamigo-dfc59.appspot.com",
  messagingSenderId: "1024496573903",
  appId: "1:1024496573903:web:d8edd80ea4d943205786ba",
  measurementId: "G-2CTF87EJKF"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
