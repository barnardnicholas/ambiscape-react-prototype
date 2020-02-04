import * as firebase from "firebase/app";
import "firebase/auth/";
// import firebaseLocalConfig from "../auth_ignore/firebase-config";

const envConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_CLIENTID,
  appId: process.env.REACT_APP_APPID
};

// const firebaseConfig =
//   process.env.NODE_ENV === "production" ? envConfig : firebaseLocalConfig;

firebase.initializeApp(envConfig);

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
