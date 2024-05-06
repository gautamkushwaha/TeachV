// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoL662DAd9k5ZcWcavR-P-8l43fa45Ito",
  authDomain: "edpark-426dc.firebaseapp.com",
  projectId: "edpark-426dc",
  storageBucket: "edpark-426dc.appspot.com",
  messagingSenderId: "486062447432",
  appId: "1:486062447432:web:51379f0b2ffd7f3834f17d",
  measurementId: "G-RC2BRZLLH5"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;



// const analytics = getAnalytics(app);