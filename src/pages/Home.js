import AppBar from '../components/AppBar'
import BottomNavigation from '../components/BottomNavigation.js';
import MasonryImageList from '../components/Posts.js'
import '../styles/Home.css'
import SwipeLeft from '../components/SwipeLeft'

import SinglePostV2 from '../components/SinglePostV2'
import GetInTouch from '../components/GetInToch'
import * as React from 'react';
import Modal from '../components/Modal'

import { useState, useEffect } from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// This is the Home page where there is a view of all the cards

export default function Home() {
    // const [posts, setHome] = React.useState([])

    // React.useEffect(() => {
    //     // you can watch this vid https://www.youtube.com/watch?v=MnIEJMgvuvc&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=9
    //     // this is a request to the server for the data in db.json
    //     fetch( 'http://localhost:8000/posts')
    //     // then take the response object and parse it to js arrat
    //     .then(response => response.json())
    //     // data is the array outputed from response.json(), we send that array to setHome
    //     .then(data => setHome(data))
    // }, [])

    
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true);


    return(
        <div className='HomeContainer' sx={{height:'100%'}}>
            <SinglePostV2 
            user_name={"ben"} 
            field_of_study={"Industrial design @ Bezalell"}
            project_title={"New chairs for campus"}
            short_description="this is the palce foa a short description"
            />
            <SwipeLeft />
            <Fab
                className='swiperight' 
                color="primary" 
                aria-label="add" 
                sx={{ position: 'absolute', bottom : 200, right: 60 }}
                onClick={() => (modalOpen ? close() : open())}
                >
                <AddIcon />
            </Fab>

            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </div>
    )
}


