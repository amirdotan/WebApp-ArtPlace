import { doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import deleteDocument from './DeleteDoc';
import deleteImg from './DeleteImg';

const deletePost = async (document, post_collections="posts") => {

    await deleteDocument(post_collections, document);
    const usersRef = doc(db, 'users', 'user_' + `${document.user}`)
    const docSnap = await getDoc(usersRef);
    if (docSnap.exists()) {
        const tempPosts = docSnap.data()?.uposts;

        try {
            for (var i = 0; i < tempPosts.length; i++) {
                if ((tempPosts[i]) == document.doc_id?.id) {

                    tempPosts.splice(i, 1);
                    await updateDoc(usersRef, {
                        uposts: tempPosts
                    });
                    break;
                }
            }

        } catch (e) {
            console.log(e);
        }
}

    const imgRef = ref(storage, `${document.imageref}`);
    await getDownloadURL(imgRef)
        .then((url) => {
            deleteImg(url)
        }).catch((error) => console.log(error))
}

export default deletePost;
