// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ4_jyUvijl35rDiqUM4ZTGb1-mll0AIs",
  authDomain: "contact-app-e3818.firebaseapp.com",
  projectId: "contact-app-e3818",
  storageBucket: "contact-app-e3818.firebasestorage.app",
  messagingSenderId: "390529501737",
  appId: "1:390529501737:web:d1f7e56ebec787cfccea38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);