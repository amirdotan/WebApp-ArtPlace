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
import { getAuth } from 'firebase/auth'


const auth = getAuth();

const addPost = async (newPost, url) => {
    const curr_user = await auth.currentUser;

    // This function Updates users post list after post is added to posts collection
    const UpdateUserPostList = async (postDocRefAndUsers) => {
        var postDocRef = postDocRefAndUsers[0];
        var users = postDocRefAndUsers[1];

        // Iterate over users 
        users.forEach((user) => {
            // find the current user
            if (user.uid == curr_user.uid) {
                // handle non empty post 
                if (user.uposts && user.uposts.length > 0) {
                    var user_posts = [];
                    user.uposts.forEach((user_post) => {
                        user_posts.push(user_post);
                    })
                    user_posts.push(postDocRef.id);

                }
                // handle empty post arr
                else {
                    var user_posts = [postDocRef.id];
                }
                // define user_ref 
                var user_key = `user_${curr_user.uid}`;
                const user_ref = doc(db, "users", user_key);
                // add post to post arr in users doc
                updateDoc(user_ref, { uposts: user_posts });
                return;
            }
        })
    };

    // This function returns users collection and the new post ref
    const getUserData = async (postDocRef) => {
        const usersRef = collection(db, "users");
        const usersRaw = await getDocs(usersRef);
        const users = usersRaw.docs.map((doc) => doc.data());
        return [postDocRef, users];
    };

    // This function Adds the post identifier to its values
    const AddPostIdToPostValues = async (postDocRef) => {

        await updateDoc(postDocRef, { doc_id: postDocRef })
        return postDocRef
    }
    // Get posts collection
    const postCollectionRef = collection(db, url);

    const postDocRef = await addDoc(postCollectionRef, newPost)
        .then((postDocRef) => AddPostIdToPostValues(postDocRef))
        .then((postDocRef) => getUserData(postDocRef))
        .then((postDocRefAndUsers) => UpdateUserPostList(postDocRefAndUsers))

    
};


export default addPost;