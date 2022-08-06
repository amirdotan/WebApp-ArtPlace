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

const GetPostsData = async () => {
    const postsRef = collection(db, "posts");
    const postsRaw = await getDocs(postsRef);
    const posts = postsRaw.docs.map((doc) => doc.data());
    return posts;
};
export default GetPostsData;
               