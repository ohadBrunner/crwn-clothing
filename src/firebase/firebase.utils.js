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

export const createUserProfileDocument = async (userAuth, addiotionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addiotionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
