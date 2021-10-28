import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB8PHD3KZltIani_2WuGafXy3NouqUZ_JA",
    authDomain: "crown-clothing-3837f.firebaseapp.com",
    projectId: "crown-clothing-3837f",
    storageBucket: "crown-clothing-3837f.appspot.com",
    messagingSenderId: "395168388624",
    appId: "1:395168388624:web:bd7f2c9a111b6155cf1c95",
    measurementId: "G-2TS874ZQGN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;