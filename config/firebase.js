
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'
import { getFirestore, setDoc, doc, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfA3GIDkIx1A_Yh6xvzGOXMuZ4YDKr92s",
  authDomain: "attendence-app-ffd0a.firebaseapp.com",
  projectId: "attendence-app-ffd0a",
  storageBucket: "attendence-app-ffd0a.appspot.com",
  messagingSenderId: "57914891498",
  appId: "1:57914891498:web:80cf5c9075e05b83000b93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)


function signInFirebase(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

function addClassToDb(timings,schedule,teacherName,secName,courseName,batchName) {
  return addDoc(collection(db, "class"), { timings,schedule,teacherName,secName,courseName,batchName })
}
export {
  signInFirebase,
  addClassToDb
}
