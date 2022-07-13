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
import Button from '@mui/material/Button';
import TextFieldd from './TextFieldd'
import { TextField } from "@mui/material";


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
                <Alert severity="success" sx={{height: "70%"}}>
                    {/* <div>
                    {data.users[0].Email.map((Email) => (<Chip label={Email} color="primary"/>))}
                    </div>
                    <Button variant="outlined" size="medium">
                         copy
                    </Button>
                    <Button variant="outlined" size="medium">
                        done
                    </Button>  */}
                    {/* <TextFieldd/> */}
                    <div>
                        Add some words about yourself or just send. The project creator will be able to see your profile and will contact you by mail if you fit.
                    </div >
                    <TextField
                                    
                                    name="firstName"
                                    fullWidth
                                    id="firstName"
                                    multiline
                                    maxRows={2}
                                />
                                
                    <Button variant="outlined" size="medium">
                        Send
                    </Button>
                </Alert>
            </motion.div>
        </BackDrop>
    );
}

export default modal;