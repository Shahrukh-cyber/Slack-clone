import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
 apiKey: "AIzaSyDENpQYDIlVAdwHmHk8RI5XkTR6qkwTRw4",
 authDomain: "slack-clone-484be.firebaseapp.com",
 projectId: "slack-clone-484be",
 storageBucket: "slack-clone-484be.appspot.com",
 messagingSenderId: "598385154502",
 appId: "1:598385154502:web:95fd16a2d726256eca7ac7"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { firebaseApp, auth, db, provider }