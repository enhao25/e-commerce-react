import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdWXQpT3lsFDV5BIf_53qXmvzz0inAIxA",
    authDomain: "crwn-db-796e9.firebaseapp.com",
    databaseURL: "https://crwn-db-796e9.firebaseio.com",
    projectId: "crwn-db-796e9",
    storageBucket: "crwn-db-796e9.appspot.com",
    messagingSenderId: "944733082526",
    appId: "1:944733082526:web:05eb96b726c9cba36bbc8f",
    measurementId: "G-K9XP8GKMFX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;