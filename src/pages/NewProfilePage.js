import * as React from 'react';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { AuthContextProvider } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import data from '../data/db.json'
import {UserAuth} from "../context/Authcontext"



export default function NewProfile(){


    const [profileDb, setProfileDb] = useState([]);
    const auth = getAuth();
    const curr_user = auth.currentUser
    const user = UserAuth();

    useEffect(() => {
      const getProfile = async () => {
        const usersDocRef = doc(db, "users", "user_"+user.uid);
        const docSnap = await getDoc(usersDocRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        setProfileDb(docSnap.data())
      };
      getProfile()
    }, []);
    
    console.log(profileDb)

    const navigate = useNavigate();

    return(
        <>
        <Card variant="outlined" color="primary" sx={{position:'static'}}>
            <Button onClick={() => navigate("/EditProfile")} color="primary" sx={{display: 'flex', flexdirection: 'row', justifyContent:'right', right: '-80%'}}>Edit</Button>
            <CardHeader sx={{}}
                avatar={
                <Avatar sx={{ bgcolor: 'primary'}} aria-label="recipe">
                    M
                </Avatar>
                }
                title={profileDb.first_name}
                subheader= {profileDb.field}
            />
        </Card>
        
        </>

    );
}
