import  {motion} from "framer-motion";
import React, { useState } from "react";
import '../styles/BackDrop.css'
import SinglePost from './SinglePost'
import BackDrop from "./BackDrop";
import GetInTouch from "./GetInToch"

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
                exit = "exit"
                >
                <GetInTouch/>
            </motion.div>
        </BackDrop>

    );
}

export default modal;