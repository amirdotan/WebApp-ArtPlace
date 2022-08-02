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
import uploadImage from '../pages/UploadImage';
import { v4 } from 'uuid'
import getUserData from './GetUserData';
import deletePortfolio from './DeletePortfolio';

const auth = getAuth();

const UpdatePortfolio = async (imgList) => {
    const curr_user = auth.currentUser;


    const UploadPortfolioImages = async (users) => {
        const imageref1 = uploadImage(imgList[0], `users/user_${curr_user.uid}`);
        const imageref2 = uploadImage(imgList[1], `users/user_${curr_user.uid}`);
        const imageref3 = uploadImage(imgList[2], `users/user_${curr_user.uid}`);
        const imageref4 = uploadImage(imgList[3], `users/user_${curr_user.uid}`);
        const imageref5 = uploadImage(imgList[4], `users/user_${curr_user.uid}`);
        const imageref6 = uploadImage(imgList[5], `users/user_${curr_user.uid}`);

        return [users, [imageref1, imageref2, imageref3, imageref4, imageref5, imageref6]];
    }


    // This function Updates users post list after post is added to posts collection
    // Assumes there are no images to delete
    const UpdatePortfolioImages = async (usersAndImgArr) => {
        const users = usersAndImgArr[0];
        const imgArr = usersAndImgArr[1];
        // Iterate over users 
        users.forEach((user) => {
            // find the current user
            if (user.uid == curr_user.uid) {

                const portfolioArr = imgArr;
                // define user_ref 
                var user_key = `user_${curr_user.uid}`;
                const user_ref = doc(db, "users", user_key);
                // add post to post arr in users doc
                updateDoc(user_ref, { uportfolio: portfolioArr });
                return;
            }
        })
    };

    // This function returns users collection and the new post ref
/*    const getUserData = async () => {
        const usersRef = collection(db, "users");
        const usersRaw = await getDocs(usersRef);
        const users = usersRaw.docs.map((doc) => doc.data());
        return users;
    };*/
    deletePortfolio()
        .then(() => getUserData())
        .then((users) => UploadPortfolioImages(users))
        .then((usersAndImgArr) => UpdatePortfolioImages(usersAndImgArr))
};


export default UpdatePortfolio;