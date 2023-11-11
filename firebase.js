// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS-NZX1d2P-4UhgVIpKv_je_AW_KAK5y4",
  authDomain: "myapp-todoapp.firebaseapp.com",
  projectId: "myapp-todoapp",
  storageBucket: "myapp-todoapp.appspot.com",
  messagingSenderId: "54776457397",
  appId: "1:54776457397:web:e7f322a99a995ddca276fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;