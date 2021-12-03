import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyARg-wbxK7Csf5G6YHhYIqdK6dCm9cVm6c',
  authDomain: 'crwn-db-a7183.firebaseapp.com',
  projectId: 'crwn-db-a7183',
  storageBucket: 'crwn-db-a7183.appspot.com',
  messagingSenderId: '264966975593',
  appId: '1:264966975593:web:b1b7d6971fe6f7fe09f2f8',
  measurementId: 'G-43XZKJM9PD',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
