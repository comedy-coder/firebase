// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC14SF6NNAodutvOM7b6V2n7-R7othFdYY",
    authDomain: "fir-demo-ec22d.firebaseapp.com",
    databaseURL: "https://fir-demo-ec22d-default-rtdb.firebaseio.com",
    projectId: "fir-demo-ec22d",
    storageBucket: "fir-demo-ec22d.appspot.com",
    messagingSenderId: "1075282611978",
    appId: "1:1075282611978:web:6ac16a1c35c36d5aabf4f3",
    measurementId: "G-Q3K49BVEVW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);