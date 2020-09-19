import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBnIKuThIrrEdVxPLzB48IXtwurWIvBy7Q",
    authDomain: "clone-ca173.firebaseapp.com",
    databaseURL: "https://clone-ca173.firebaseio.com",
    projectId: "clone-ca173",
    storageBucket: "clone-ca173.appspot.com",
    messagingSenderId: "556843565753",
    appId: "1:556843565753:web:23d33ef6e871172ae5d168",
    measurementId: "G-TMEGJHJR54"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};