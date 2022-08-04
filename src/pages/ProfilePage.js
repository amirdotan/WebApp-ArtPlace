import ProfileInfo from '../components/ProfileInfo'
import ProfileSkills from '../components/ProfileSkills'
import ProfilePortfolio from '../components/ProfilePortfolio'
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { AuthContextProvider } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

// const user = auth.currentUser
// const docRef = doc(db, "users", "user_" + user.uid);
// const docSnap = await getDoc(docRef);



export default function Profile() {
    // const navigate = useNavigate();
    // // if (docSnap.exists()) {
    // //     console.log("Document data:", docSnap.data());
    // //   } else {
    // //     // doc.data() will be undefined in this case
    // //     console.log("No such document!");
    // //   }
    
    // const [profileDb, setProfileDb] = useState([]);
    // const auth = getAuth();
    // const curr_user = auth.currentUser

    // useEffect(() => {
    //   const getProfile = async () => {
    //     const usersDocRef = doc(db, "users", "user_"+curr_user.uid);
    //     const docSnap = await getDoc(usersDocRef);
    //     if (docSnap.exists()) {
    //       console.log("Document data:", docSnap.data());
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //     setProfileDb(docSnap.data())
    //   };
    //   getProfile()
    // }, []);
    


    return(
        <>
            <ProfileInfo/>
            {/* <ProfileSkills skills = {profileDb}/> */}
            {/* <ProfilePortfolio /> */}
        </>

    )
}
