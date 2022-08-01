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



const addPost = async (newPost, url) => {
    const postCollectionRef = collection(db, url);

    const docRef = await addDoc(postCollectionRef, newPost)
        .then((docRef) => updateDoc(docRef, {
            doc_id: docRef
        }));
};


export default addPost;