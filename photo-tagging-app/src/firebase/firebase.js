// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlPHfOFsORr7nvG6ItGdVXInHM-cF5W24",
    authDomain: "where-s-waldo-cf908.firebaseapp.com",
    databaseURL: "https://where-s-waldo-cf908.firebaseio.com",
    projectId: "where-s-waldo-cf908",
    storageBucket: "where-s-waldo-cf908.appspot.com",
    messagingSenderId: "107357266680",
    appId: "1:107357266680:web:5605b980a497175b1a110d",
    measurementId: "G-1069RY7NQF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const hiScores = db.collection('hi-scores')

  export {
    db,
    hiScores
  }