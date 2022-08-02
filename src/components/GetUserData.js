import { storage, db } from '../firebase';
import { ref, deleteObject } from "firebase/storage";
import { getAuth } from 'firebase/auth'
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const getUserData = async () => {
    const usersRef = collection(db, "users");
    const usersRaw = await getDocs(usersRef);
    const users = usersRaw.docs.map((doc) => doc.data());
    return users;
};
export default getUserData;
