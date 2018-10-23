import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyCqK9_2rSgPBxfORmSdy3iirvcnxiplHHk",
  authDomain: "reactclientpanel-e2e3d.firebaseapp.com",
  databaseURL: "https://reactclientpanel-e2e3d.firebaseio.com",
  projectId: "reactclientpanel-e2e3d",
  storageBucket: "reactclientpanel-e2e3d.appspot.com",
  messagingSenderId: "1088532330801"
};

const rrfCOnfig = {
  userProfile: 'users',
  useFirestoreForProfile: true //Firestore for Profile isntead of Realtime DB
}

