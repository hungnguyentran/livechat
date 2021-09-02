import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAZbUwtGWFtbsdeKuHOp08qkCSgrWp07PM",
  authDomain: "livechat-73af2.firebaseapp.com",
  projectId: "livechat-73af2",
  storageBucket: "livechat-73af2.appspot.com",
  messagingSenderId: "258161758167",
  appId: "1:258161758167:web:8a20e7a64beb779f438592",
  measurementId: "G-YDYRQY1NMJ"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();

  export {db, auth};
  export default firebase;
