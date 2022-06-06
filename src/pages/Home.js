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
import { Autocomplete } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


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

    
    const user_info_lst = [["ben" , "Industrial design @ Bezalell", "New chairs for campus", "this is the palce foa a short description" ]]
    const user_name="ben" 
    const field_of_study="Industrial design @ Bezalell"
    const project_title="New chairs for campus"
    const short_description="this is the palce foa a short description"

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true);


    return(
        <div className='HomeContainer' sx={{height:'100%'}}>
            {/* Amir please help here <3 */}
        {/* <Autocomplete
                    multiple
                    id="SkillsList"
                    name="Short Description"
                    label="SkillsList"
                    fullWidth
                    variant="standard"
                    options={SkillList}
                    getOptionLabel={option => option}
                    defaultValue={[]}
                    filterSelectedOptions
                    onChange={(event, value) => setSkillList(value)}

                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Necessary Skills"
                            placeholder="Skills"
                        />
                    )}
                /> */}

            <SinglePostV2 
            user_name={user_info_lst[0][0]}
            field_of_study={field_of_study}
            project_title={project_title}
            short_description= {short_description}
            />
            <SwipeLeft />
            
            <Fab
                className='swiperight' 
                color="primary" 
                aria-label="add" 
                sx={{ position: 'absolute', bottom : 200, right: 60 }}
                onClick={() => (modalOpen ? close() : open())}
                >
                <FavoriteBorderIcon />
            </Fab>

            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </div>
    )
}


