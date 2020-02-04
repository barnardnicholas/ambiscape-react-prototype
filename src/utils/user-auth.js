import * as firebase from 'firebase/app'
import 'firebase/auth/'
import firebaseConfig from '../auth_ignore/firebase-config'

firebase.initializeApp(firebaseConfig);

export const updateAuthState = () => {
    firebase.auth().onAuthStateChanged((user) => {
        console.log('updateauthstate', user)
    })
}

export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
        const {email, uid} = response.user;
        return uid;
    }).catch(err => {
        console.log(err)
    })
}

export const createUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
}
