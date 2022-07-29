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
// import useCopy from "use-copy";
import { CopyToClipboard } from "react-copy-to-clipboard";


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
                        <p>Congratulations!</p> 
                        <p>Here are 3 animals we at PARTAKE love,
                        pick one and tell the user why:
                        <br/>
                        </p>    
                        <div> 
                        🦏 - Rhino
                        🦡 - Honey Budger
                        🐦 - Bird
                        </div>
                    </div >
                    <br/>     
                    <div className="App">
                        <CopyToClipboard
                        text="Amiros"
                        onCopy={() => alert("Copied")}>
                        <Button variant="outlined" size="medium">
                        copy Email
                        </Button>
                        </CopyToClipboard>
                    </div>
                </Alert>
            </motion.div>
        </BackDrop>
    );
}

export default modal;