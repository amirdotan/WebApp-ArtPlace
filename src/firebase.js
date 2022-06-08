// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP4ykBfJN2ViWda4uCdl8XG6Gq2-A1HX0",
  authDomain: "art-place-server.firebaseapp.com",
  projectId: "art-place-server",
  storageBucket: "art-place-server.appspot.com",
  messagingSenderId: "492408729067",
  appId: "1:492408729067:web:0fae3d01d6730ec3acbdae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app
