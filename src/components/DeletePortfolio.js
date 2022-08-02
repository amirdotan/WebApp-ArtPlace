import { storage } from '../firebase';
import { ref, deleteObject, getDownloadURL } from "firebase/storage";
import { getAuth } from 'firebase/auth'

import getUserData from './GetUserData';
import deleteImg from './DeleteImg';


const auth = getAuth();

const deletePortfolio = async() => {
    const curr_user = auth.currentUser;

    const deleteAllImagesInPortfolio = async (user) => {

        if (user.uportfolio && user.uportfolio.length > 0) {
            user.uportfolio.forEach((img) => {

                const imgRef = ref(storage, `${img}`);
                getDownloadURL(imgRef)
                    .then((url) => {
                        deleteImg(url)
                    }).catch((error) => console.log(error))
                deleteImg(img);
            })
        }
    }
    getUserData()
        .then((users) => {
            users.forEach((user) => {
                // find the current user
                if (user.uid == curr_user.uid) {

                    deleteAllImagesInPortfolio(user);
                }
            })

        });



}

export default deletePortfolio;
