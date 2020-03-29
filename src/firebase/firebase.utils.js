import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCDNlohZAv1kEGViTMN1p5QkXYkswIpvoA",
  authDomain: "miragetrade-7d6a1.firebaseapp.com",
  databaseURL: "https://miragetrade-7d6a1.firebaseio.com",
  projectId: "miragetrade-7d6a1",
  storageBucket: "miragetrade-7d6a1.appspot.com",
  messagingSenderId: "537815951175",
  appId: "1:537815951175:web:dbb652424c4d3d6ca6ce62",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
