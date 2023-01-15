import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import {getAuth} from 'firebase/auth'
import { collection, getDocs, getFirestore, } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
import { initializeApp } from "firebase/app";




firebase.initializeApp({
  apiKey: "AIzaSyDTfbqkW1f5wMOZNpY51QVCAD1Cb5O4Vjs",
  authDomain: "invoice-2ae46.firebaseapp.com",
  projectId: "invoice-2ae46",
  storageBucket: "invoice-2ae46.appspot.com",
  messagingSenderId: "751520541924",
  appId: "1:751520541924:web:2423e8fbf108ffafb690f1"
}).firestore();


let DatabaseDetails = firebase.firestore();

  // const auth = getAuth(app)
export let db = getFirestore();
export const auth = getAuth()
export const storage = getStorage();
export default DatabaseDetails


