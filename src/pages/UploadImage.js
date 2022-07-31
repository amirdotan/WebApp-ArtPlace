import { storage } from '../firebase';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid'


const uploadImage =   (imageUpload, url) => {
    if (imageUpload == null) return;
    const imageName = `${url}/${imageUpload.name + v4()}`
    const imageRef = ref(storage, imageName);
     uploadBytes(imageRef, imageUpload).then(() => {
        alert(`Image Uploaded`)
    })
    return `${imageName}`
};


export default uploadImage;
