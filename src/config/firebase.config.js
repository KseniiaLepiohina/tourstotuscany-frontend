import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig={
  apiKey: "AIzaSyAgkpIw_bgIH-R3dbYNDodgTbMB1PGnBro",
  authDomain: "tuscany-6d07c.firebaseapp.com",
  projectId: "tuscany-6d07c",
  storageBucket: "tuscany-6d07c.appspot.com",
  messagingSenderId: "752958196815",
  appId: "1:752958196815:web:3a7ab9f5f09a577810ee3a",
  measurementId: "G-R1634WCEBW"
};
const app= initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth, provider, signInWithPopup};