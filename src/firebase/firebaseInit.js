import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDQyaXMBEl5ijR3Nwd-NtGYX2JIPe4zxC4",
    authDomain: "invoicey-48ce9.firebaseapp.com",
    projectId: "invoicey-48ce9",
    storageBucket: "invoicey-48ce9.appspot.com",
    messagingSenderId: "107556795919",
    appId: "1:107556795919:web:e6b7794c16c8b45b6d957a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

