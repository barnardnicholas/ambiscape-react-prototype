import * as firebase from "firebase/app";
import * as app from "../App";
import "firebase/auth/";
//------------------------
// DEVELOPMENT ONLY - LOCALLY-STORED API KEY FOR FIREBASE
// import firebaseLocalConfig from "../auth_ignore/firebase-config";
// firebase.initializeApp(firebaseLocalConfig);
//------------------------
// PRODUCTION ONLY - NETLIFY ENV VARIABLES
const envConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_CLIENTID,
  appId: process.env.REACT_APP_APPID
};
firebase.initializeApp(envConfig);
//------------------------

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
      return response.user;
    });
};

export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(response => {
      console.log(response);
    });
};

export const createUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log(response);
    });
};
