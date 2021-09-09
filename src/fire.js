
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
import firebase from '@firebase/app';
require('firebase/auth');   // Yeh add krna hoota hai 

var firebaseConfig = {
  apiKey: "AIzaSyCc6fhMtZWfE6Bmgtuu0mNo8kD3VyFkvCw",
  authDomain: "auth-basic-e3f2b.firebaseapp.com",
  projectId: "auth-basic-e3f2b",
  storageBucket: "auth-basic-e3f2b.appspot.com",
  messagingSenderId: "381106110383",
  appId: "1:381106110383:web:3f97ce346010ff4dd1b95a",
  measurementId: "G-DV0EY7SRFR"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;

 