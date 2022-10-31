// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAuth } from "firebase/auth"
// import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmDGiArmmOdA1iFjMsiD10dGPknJjMs3U",
    authDomain: "react-helmet-72232.firebaseapp.com",
    projectId: "react-helmet-72232",
    storageBucket: "react-helmet-72232.appspot.com",
    messagingSenderId: "1069393661294",
    appId: "1:1069393661294:web:aa03cfbb339fef3392457f"
};

// Initialize Firebase, Fire artinya api, base itu merupakan back end as service
const app = initializeApp(firebaseConfig);

// initialize storage
// export const storage = getStorage(app)

// initialize firestore
export const firestore = getFirestore(app)

// initialize auth
// export const auth = getAuth(app)
