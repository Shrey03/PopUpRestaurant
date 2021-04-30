import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyALTVDtzFvWUgHcu3ad-ZYKQ0Lu47iqO1M",
    authDomain: "popup-restaurant.firebaseapp.com",
    projectId: "popup-restaurant",
    storageBucket: "popup-restaurant.appspot.com",
    messagingSenderId: "630511243049",
    appId: "1:630511243049:web:8a1dc5cbc689ce8206b138",
    measurementId: "G-YD7E7DDC7H"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };