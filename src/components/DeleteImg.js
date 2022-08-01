import { storage } from '../firebase';
import { ref, deleteObject } from "firebase/storage";


const deleteImg = (img) => {

    // Create a reference to the file to delete
    const desertRef = ref(storage, img);
    // Delete the file
    deleteObject(desertRef).then(() => {
        console.log("Succesfully deleted a file")
        // File deleted successfully
    }).catch((error) => {
        console.log(error);
        // Uh-oh, an error occurred!
    });
}

export default deleteImg;
