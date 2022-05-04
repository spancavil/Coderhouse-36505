// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, initializeAuth } from "firebase/auth";

// Solución async storage
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPNmLKTcYtSlZJkutsl0IwZCn2pBc7urw",
  authDomain: "interbanking-react.firebaseapp.com",
  projectId: "interbanking-react",
  storageBucket: "interbanking-react.appspot.com",
  messagingSenderId: "288953224143",
  appId: "1:288953224143:web:3251134f1b42dbc2bf60ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const auth = initializeAuth(app, {

  persistence: getReactNativePersistence(AsyncStorage),

});
