import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBEOMf1b0Qo3ZFWX6qJyqAgojmDbewNbN8",
    authDomain: "contributingtoopensorceproject.firebaseapp.com",
    projectId: "contributingtoopensorceproject",
    storageBucket: "contributingtoopensorceproject.appspot.com",
    messagingSenderId: "859566310748",
    appId: "1:859566310748:web:63bcc581e3346c7119ed99"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();