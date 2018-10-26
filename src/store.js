import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// @todo

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCqK9_2rSgPBxfORmSdy3iirvcnxiplHHk",
  authDomain: "reactclientpanel-e2e3d.firebaseapp.com",
  databaseURL: "https://reactclientpanel-e2e3d.firebaseio.com",
  projectId: "reactclientpanel-e2e3d",
  storageBucket: "reactclientpanel-e2e3d.appspot.com",
  messagingSenderId: "1088532330801"
};


// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true //Firestore for Profile isntead of Realtime DB
}

// init firebase instance
firebase.initializeApp(firebaseConfig);
// init firestore
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);


// add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
  )(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

// Create initial state
const initialState = {};

// Cretae store 
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

export default store;

