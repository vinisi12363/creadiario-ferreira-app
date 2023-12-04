import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBQlGlmiMoQHXXKVsXZgh7t1HmOiDpLGRE",
    authDomain: "cred-ferreira.firebaseapp.com",
    projectId: "cred-ferreira",
    storageBucket: "cred-ferreira.appspot.com",
    messagingSenderId: "111514083688",
    appId: "1:111514083688:web:3ae54eb0793eeece00f6dd",
    measurementId: "G-LV6SDQZVV2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
