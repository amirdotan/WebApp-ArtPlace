import  {motion} from "framer-motion";
import React, { useState } from "react";
import '../styles/BackDrop.css'
import SinglePost from './SinglePost'
import BackDrop from "./BackDrop";
import GetInTouch from "./GetInToch"
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import data from '../data/db.json'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


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

const modal = ({handleClose}) => {
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
                <Alert severity="success" sx={{height: "30%"}}>
                    <div>
                    {data.users[0].Email.map((Email) => (<Chip label={Email} color="primary"/>))}
                    </div>
                    <button sx={{position: 'absolute', border: 'none', padding: '15px 32px'}}>copy</button>
                    <button sx={{position: 'absolute', border: 'none', padding: '15px 32px'}}>DONE</button>
                </Alert>
            </motion.div>
        </BackDrop>

    );
}

export default modal;