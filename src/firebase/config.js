import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDfoE3CJrAFtox4ogU0f61zvlcNURJj5WU",
    authDomain: "firegram-project-b7fbf.firebaseapp.com",
    databaseURL: "https://firegram-project-b7fbf.firebaseio.com",
    projectId: "firegram-project-b7fbf",
    storageBucket: "firegram-project-b7fbf.appspot.com",
    messagingSenderId: "576575852994",
    appId: "1:576575852994:web:5376c9a9e859c3bd5c865b",
    measurementId: "G-TMV9C34RLR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectStorage, projectFirestore, timeStamp};