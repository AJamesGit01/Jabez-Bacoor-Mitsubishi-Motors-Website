// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDNXRmx54dswbeOWUlgkbCjNV2_DHhW4w",
  authDomain: "jabez-bacoor-authentication.firebaseapp.com",
  projectId: "jabez-bacoor-authentication",
  storageBucket: "jabez-bacoor-authentication.firebasestorage.app",
  messagingSenderId: "681270310740",
  appId: "1:681270310740:web:c490554acb63269c4a3ac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;