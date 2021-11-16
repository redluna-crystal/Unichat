import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCnoHFBGsPVGuldH8Yeowb7gLXSlC3cjHc",
    authDomain: "unichat-33f99.firebaseapp.com",
    projectId: "unichat-33f99",
    storageBucket: "unichat-33f99.appspot.com",
    messagingSenderId: "554318184365",
    appId: "1:554318184365:web:bceebf45d8601da82feb24",
  })
  .auth();
