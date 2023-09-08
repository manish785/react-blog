// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJqHVGWvJfkwTb1RsaAuBTEJAaQ2PjZss",
  authDomain: "react-blog-bc8e4.firebaseapp.com",
  projectId: "react-blog-bc8e4",
  storageBucket: "react-blog-bc8e4.appspot.com",
  messagingSenderId: "840318182077",
  appId: "1:840318182077:web:7f3b36f06e96003c5f8dd4"
};

// Initialize Firebase
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = firebase.firestore();

export const storage = getStorage();

export const auth = getAuth();