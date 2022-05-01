import { Button } from "@mui/material";
import  {motion} from "framer-motion";
import React from "react";
import '../styles/BackDrop.css'
import SinglePost from './SinglePost'
import BackDrop from "./BackDrop";

const dropIn = {
    hidden: {
        y:"-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }

    },
    exit: {
        y: "100vh",
        opacity: 0,
    }

}

const modal = ({handleClose, text}) => {
    return(
        <BackDrop onClick = {handleClose}>
            <motion.div
                onClick= {(e) => e.stopPropagation()}
                className = "modal orange-gradient"
                variants = {dropIn}
                initial = "hidden"
                animate = "visible"
                exit = "exit"
                >
                <p> {text} </p>
            </motion.div>
        </BackDrop>

    );
}

export default modal;