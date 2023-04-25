// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBguky8X6PjK7_vlFq-QWa67y_4ausEaA",
  authDomain: "pcdrop-dc8de.firebaseapp.com",
  projectId: "pcdrop-dc8de",
  storageBucket: "pcdrop-dc8de.appspot.com",
  messagingSenderId: "826489173459",
  appId: "1:826489173459:web:6fbaaa1ccd757fb55aeb26",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
