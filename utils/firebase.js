// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUxO-2goTBTjaKyHVluRZUR5blR9djcvg",
  authDomain: "netflix-gpt-ec172.firebaseapp.com",
  projectId: "netflix-gpt-ec172",
  storageBucket: "netflix-gpt-ec172.appspot.com",
  messagingSenderId: "1079862069005",
  appId: "1:1079862069005:web:b76ccfd40d509af7601244",
  measurementId: "G-Z53VLYM3MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();