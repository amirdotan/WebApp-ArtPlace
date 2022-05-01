import { Button } from "@mui/material";
import  {motion} from "framer-motion";
import React, { useState } from "react";
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
            stiffness: 200,
        }

    },
    exit: {
        y: "100vh",
        opacity: 0,
    }

}

const modal = ({handleClose, title, img}) => {
    return(
        <BackDrop onClick = {handleClose}>
            <motion.div
                onClick= {(e) => e.stopPropagation()}
                className = "modal"
                variants = {dropIn}
                initial = "hidden"
                animate = "visible"
                exit = "exit"
                >
                <SinglePost title={title} img={img} handleClose={handleClose}/>
            </motion.div>
        </BackDrop>

    );
}

export default modal;