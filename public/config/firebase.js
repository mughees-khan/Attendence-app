
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'
import { getFirestore,addDoc, collection,onSnapshot} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js'
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
const storage = getStorage(app)

function signInFirebase(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

function addClassToDb(timings,schedule,teacherName,secName,courseName,batchName) {
  return addDoc(collection(db, "class"), { timings,schedule,teacherName,secName,courseName,batchName })
}
function addStudentToDb(name,fathername,contactNo,rollNo,cnic,courseName,image,selectValue) {
  return addDoc(collection(db, "students"), {name,fathername,contactNo,rollNo,cnic,courseName,image,selectValue})
}
async function uploadImage(image) {
  const storageRef = ref(storage, `image/${image.name}`)
  const snapshot = await uploadBytes(storageRef, image)
  const url = await getDownloadURL(snapshot.ref)
  return url
}
function getRealTime(callback) {
  onSnapshot(collection(db, "class"), (querySnapshot) => {
      const clas = []

      querySnapshot.forEach((doc) => {
          clas.push({ id: doc.id, ...doc.data() })
      });
      callback(clas)
  });
}
export {
  signInFirebase,
  addClassToDb,
  uploadImage,
  addStudentToDb,
  getRealTime
}
