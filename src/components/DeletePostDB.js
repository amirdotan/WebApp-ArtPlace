import { doc, deleteDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import deleteDocument from './DeleteDoc';
import deleteImg from './DeleteImg';

const deletePost = async (post_collections, document) => {

    deleteDocument(post_collections, document);

    const imgRef = ref(storage, `${document.imageref}`);
    await getDownloadURL(imgRef)
        .then((url) => {
            deleteImg(url)
        }).catch((error) => console.log(error))
}

export default deletePost;
