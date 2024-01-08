import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDXJXd5N9wIqepiLGeOSRSVMK1nQS2PLC0",
  authDomain: "mibiblioteca8-212a0.firebaseapp.com",
  projectId: "mibiblioteca8-212a0",
  storageBucket: "mibiblioteca8-212a0.appspot.com",
  messagingSenderId: "48051035870",
  appId: "1:48051035870:web:ff60a4acbc98f577ceec4f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


export const saveLibro = (titulo, autor, editorial, isbn, fecha) =>
    addDoc(collection(db, "libros"), { titulo, autor, editorial, isbn, fecha });
