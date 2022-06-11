import { storage } from '../firebase';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid'


const uploadImage =   (imageUpload, url) => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${url}/${imageUpload.name + v4()}`);
     uploadBytes(imageRef, imageUpload).then(() => {
        alert(`Image Uploaded`)
    })
    return `${imageUpload.name + v4()}`
};


export default uploadImage;
