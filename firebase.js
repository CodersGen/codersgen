// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ_snYHEKpNbLNojRwz_G3Oa73MXsHjJE",
    authDomain: "codersgen-ac6d6.firebaseapp.com",
    projectId: "codersgen-ac6d6",
    storageBucket: "codersgen-ac6d6.appspot.com",
    messagingSenderId: "720590163815",
    appId: "1:720590163815:web:dcb4bc61ab961b2402e9c2",
    measurementId: "G-5NJGD39F7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };

