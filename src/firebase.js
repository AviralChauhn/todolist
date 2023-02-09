import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADDwoX98XgoGbYXKsm3CzTImMvWthQJtM",
  authDomain: "authenticationapp-aaf72.firebaseapp.com",
  projectId: "authenticationapp-aaf72",
  storageBucket: "authenticationapp-aaf72.appspot.com",
  messagingSenderId: "932814185099",
  appId: "1:932814185099:web:11d3f9415a42d0e9f1ea8e",
  measurementId: "G-V1FQ74Q6Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
 export {app,auth}