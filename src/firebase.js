import firebase from 'firebase/compat/app'
import { getAuth } from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import app from './App'



var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAjJwNAxY0KwR-5i_6K8pwOHN7bVHEgwp4",
    authDomain: "hannabel-c7206.firebaseapp.com",
    projectId: "hannabel-c7206",
    storageBucket: "hannabel-c7206.appspot.com",
    messagingSenderId: "356015903811",
    appId: "1:356015903811:web:d767feac8453e2c8dfb0f6"


});
var db = firebaseApp.firestore();
export { db };
export const auth = getAuth(app);

export default app;
