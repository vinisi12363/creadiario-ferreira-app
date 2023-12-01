// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQlGlmiMoQHXXKVsXZgh7t1HmOiDpLGRE",
  authDomain: "cred-ferreira.firebaseapp.com",
  projectId: "cred-ferreira",
  storageBucket: "cred-ferreira.appspot.com",
  messagingSenderId: "111514083688",
  appId: "1:111514083688:web:3ae54eb0793eeece00f6dd",
  measurementId: "G-LV6SDQZVV2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);