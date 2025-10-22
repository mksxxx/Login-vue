import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAQvhdjkE_XRCyTh6gVF0uZbHMtDmWWb2o",
  authDomain: "topvideos-b9bf3.firebaseapp.com",
  projectId: "topvideos-b9bf3",
  storageBucket: "topvideos-b9bf3.firebasestorage.app",
  messagingSenderId: "33248689209",
  appId: "1:33248689209:web:98f202f45aac9fa55e61e8"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }