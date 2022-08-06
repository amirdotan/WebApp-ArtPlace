import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";


const deleteDocument = async (post_collections, document) => {
    await deleteDoc(doc(db, `${post_collections}`, `${document.doc_id?.id}`))
}

export default deleteDocument;
