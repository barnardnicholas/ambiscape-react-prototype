import * as firebase from "firebase/app";
import "firebase/auth/";
import firebaseConfig from "../auth_ignore/firebase-config";

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_CLIENTID,
//   appId: "1:647279773862:web:23437a4f11e27a89b90c67"
// };

console.dir(process.env);

firebase.initializeApp(firebaseConfig);

export const updateAuthState = () => {
  firebase.auth().onAuthStateChanged(user => {
    console.log("updateauthstate", user);
  });
};

export const signIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      const { email, uid } = response.user;
      return uid;
    })
    .catch(err => {
      console.log(err);
    });
};

export const createUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
