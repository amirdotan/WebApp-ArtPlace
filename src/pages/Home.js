import AppBar from '../components/AppBar'
import BottomNavigation from '../components/BottomNavigation.js';
import MasonryImageList from '../components/Posts.js'
import '../styles/Home.css'
import SwipeLeft from '../components/SwipeLeft'
import TextField from '@mui/material/TextField';
import SinglePostV2 from '../components/SinglePostV2'
import GetInTouch from '../components/GetInToch'
import * as React from 'react';
import Modal from '../components/Modal' 
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Autocomplete } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CenterFocusStrong } from '@mui/icons-material';
import SinglePost from '../components/SinglePost';
import CancelIcon from '@mui/icons-material/Cancel';
import data from '../data/posts.json'


const SkillList = ["Video Editing", "Photography", "Animation", "Programming"];
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
    const [skillList, setSkillList] = useState([])
    const [i, setCount] = useState(0);

    return(
        <div className='HomeContainer' sx={{height:'100%'}}>

        <Autocomplete sx={{width: 1/2 ,ml: 5, mt:1}}
                    multiple
                    id="SkillsList"
                    name="Short Description"
                    label="SkillsList"
                
                    variant="standard"
                    options={SkillList}
                    getOptionLabel={option => option}
                    defaultValue={[]}
                    filterSelectedOptions
                    fullWidth={false}
                    onChange={(event, value) => setSkillList(value)}
                
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Necessary Skills"
                            placeholder="Skills"
                        />
                    )}
                />
            <Button variant="contained" sx={{position: 'absolute', bottom : 790,right: 50}}>Search</Button>
            <SinglePost
            first_name={data.posts[i].first_name}
            last_name={data.posts[i].last_name}
            field_of_study={data.posts[i].field_of_study}
            title={data.posts[i].title}
            short_description={data.posts[i].short_description}
            long_description={data.posts[i].long_description}

            />
           
            <Fab
                className='swiperight' 
                color="primary" 
                aria-label="add" 
                sx={{ position: 'absolute', bottom : 200, left: 60 }}
                onClick={() => (setCount(i + 1))}
                >
                <CancelIcon/>
            </Fab>
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


