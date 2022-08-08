// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyCP4ykBfJN2ViWda4uCdl8XG6Gq2-A1HX0",
  authDomain: "art-place-server.firebaseapp.com",
  projectId: "art-place-server",
  storageBucket: "art-place-server.appspot.com",
  messagingSenderId: "492408729067",
  appId: "1:492408729067:web:0fae3d01d6730ec3acbdae"
};
*/

// Temp config
const firebaseConfig = {
  apiKey: "AIzaSyCBGDxANdv0JYj0AQmbBBU-zvmDzue_RWM",
  authDomain: "art-place-2.firebaseapp.com",
  projectId: "art-place-2",
  storageBucket: "art-place-2.appspot.com",
  messagingSenderId: "949914312431",
  appId: "1:949914312431:web:24a5f25418c664caf2851a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app


// authentication tutorial on youtube https://www.youtube.com/watch?v=x62aBvnRCKw&t=2206s

// get and upload tutorial on youtube https://www.youtube.com/watch?v=cXWDQhzC3do

// apiKey: "AIzaSyB_OmJDo1eEttvgQTCHS_rD7yj6ATPg5Po",
// authDomain: "art-place-demo.firebaseapp.com",
// projectId: "art-place-demo",
// storageBucket: "art-place-demo.appspot.com",
// messagingSenderId: "1005356225851",
// appId: "1:1005356225851:web:7861fefa6f43566102931e"