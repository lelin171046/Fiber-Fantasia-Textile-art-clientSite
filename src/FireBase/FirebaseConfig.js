
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKpRMnnHK6uKIwXktRRLLv3r9M_1-aINY",
  authDomain: "fiberfantasia-auth.firebaseapp.com",
  projectId: "fiberfantasia-auth",
  storageBucket: "fiberfantasia-auth.appspot.com",
  messagingSenderId: "1000474572764",
  appId: "1:1000474572764:web:63d2ec3f66d916858a8119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;