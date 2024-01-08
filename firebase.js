import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  
        apiKey: "AIzaSyA9rI_SaTMh-PqSrtHBc9b6QAWgZAhBueI",
        authDomain: "advance-time-tracking-app.firebaseapp.com",
        projectId: "advance-time-tracking-app",
        storageBucket: "advance-time-tracking-app.appspot.com",
        messagingSenderId: "280212004494",
        appId: "1:280212004494:web:e96f1f360e689ca6a673df"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;


