import  {motion} from "framer-motion";
import React, { useState, useEffect } from "react";
import '../styles/BackDrop.css'
import SinglePost from './SinglePost'
import BackDrop from "./BackDrop";
import GetInTouch from "./GetInToch"
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import data from '../data/db.json'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import TextFieldd from './TextFieldd'
import { TextField } from "@mui/material";
// import Dialog from "@material-ui/core/Dialog";
import { CopyToClipboard } from "react-copy-to-clipboard";
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

const dropIn = {
    hidden: {
        y:"-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration:0.15,
            type: "spring",
            damping: 40,
            stiffness: 200,
        }

    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}


const Modal = ({modalOpen, handleClose, uid}) => {
    const [email, setEmail] = useState("No given contact email :(");
    useEffect(() => {
        // Get data
        const getEmail = async () => {
            const usersRef = collection(db, "users");
            const usersRaw = await getDocs(usersRef);
            const users = usersRaw.docs.map((doc) => doc.data());

            users.forEach(user => {
                if (user?.uid == uid){

                    setEmail(user?.email);
                    return;
                } 
            });

        };
        getEmail()
    });

    return(
        
        <BackDrop onClick = {handleClose}>
            <motion.div
                onClick= {(e) => e.stopPropagation()}
                className = "modal"
                variants = {dropIn}
                initial = "hidden"
                animate = "visible"
                Text = "aaaaa"
                exit = "exit"
                >
                <Alert severity="success" sx={{height: "80%"}}>
                    <div>
                    <p><b>Congratulations!</b></p> 
                        <p>How exciting, you have found an interesting project to join!
                        <br/>
                        </p>    
                        <div> 
                        Write an email to the project creator and tell them why you are the perfect match for this project
                        {/* <p>Congratulations!</p> 
                        <p>Here are 3 animals we at PARTAKE love,
                        pick one and tell the user why:
                        <br/>
                        </p>    
                        <div> 
                        🦏 - Rhino
                        🦡 - Honey Budger
                        🐦 - Bird */}
                        </div>
                    </div >
                    <br/>     
                    <div className="App">
                        <CopyToClipboard
                        text={email}
                        onCopy={() => alert("Copied")}>
                        <Button variant="outlined" size="medium" onClick={handleClose}>
                        copy Email
                        </Button>
                        </CopyToClipboard>
                    </div>
                </Alert>
            </motion.div>
        </BackDrop>
    );
}

export default Modal;