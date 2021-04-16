import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA7b15an9y8wWdXPt0Oxl7QPJBIQCAfMj0",
    authDomain: "pruevaclassicburger.firebaseapp.com",
    projectId: "pruevaclassicburger",
    storageBucket: "pruevaclassicburger.appspot.com",
    messagingSenderId: "1013792010215",
    appId: "1:1013792010215:web:97b8c09c955ee8f064d742"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()  

export default {
    firebase,
    db
}
