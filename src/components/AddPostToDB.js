import { db } from "../firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";



const addPost = (newPost, url) => {
    const postCollectionRef = collection(db, url);

    return addDoc(postCollectionRef, newPost);
};


export default addPost;