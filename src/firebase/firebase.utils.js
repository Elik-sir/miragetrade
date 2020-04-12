import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCDNlohZAv1kEGViTMN1p5QkXYkswIpvoA',
  authDomain: 'miragetrade-7d6a1.firebaseapp.com',
  databaseURL: 'https://miragetrade-7d6a1.firebaseio.com',
  projectId: 'miragetrade-7d6a1',
  storageBucket: 'miragetrade-7d6a1.appspot.com',
  messagingSenderId: '537815951175',
  appId: '1:537815951175:web:dbb652424c4d3d6ca6ce62',
};
const app = firebase.initializeApp(config);
export const firestore = firebase.firestore(app);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user');
    }
  }
  return userRef;
};

export const getData = async (page) => {
  const collectionRef = firestore.collection('reviews');
  const collectionSnapShot = await collectionRef.get();

  const first = firestore
    .collection('reviews')
    .orderBy('id', 'desc')
    .startAt(collectionSnapShot.size - page * 4 + 4)
    .limit(4);
  return first.get().then((documentSnapshots) => {
    return documentSnapshots.docs.map((doc) => {
      const {
        photoURL,
        comment,
        displayName,
        value,
        createdAt,
        id,
      } = doc.data();
      return {
        photoURL,
        comment,
        displayName,
        value,
        createdAt,
        id,
      };
    });
  });
};
export const changeAvatarandDisplayName = ({ id, displayName, photoURL }) => {
  const sfDocRef = firestore.collection('users').doc(id);
  if (photoURL && displayName) {
    sfDocRef.update({ displayName, photoURL });
  }
  if (photoURL) {
    sfDocRef.update({ photoURL });
  }
  if (displayName) {
    sfDocRef.update({ displayName });
  }
};
export const getCountpage = async () => {
  const collectionRef = firestore.collection('reviews');
  const collectionSnapShot = await collectionRef.get();

  return collectionSnapShot.size;
};
export const addReview = async (collectionKey, review) => {
  const collectionRef = firestore.collection(collectionKey);
  const lastid = firestore.collection('reviews');
  await lastid.get().then((documentSnapshots) => {
    review.id = documentSnapshots.docs.length + 1;
  });
  console.log(review.id);
  const batch = firestore.batch();
  const newDocRef = collectionRef.doc();
  batch.set(newDocRef, review);
  return await batch.commit();
};

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
