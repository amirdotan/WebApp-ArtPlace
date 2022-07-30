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
// import data from '../data/posts.json'
import posts from "../firebase";

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
    
    const [postsDb, setPostsDb] = useState([]);
    useEffect(() => {

        // Get data
        const getPosts = async () => {
            const postsRef = collection(db, "posts");
            const postRaw = await getDocs(postsRef);
            const posts = postRaw.docs.map((doc) => doc.data());
            console.log(posts);
            setPostsDb(posts);

        };
        getPosts()
    }, []);

    const data = postsDb;

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true);
    const [skillList, setSkillList] = useState([])
    const [i, setCount] = useState(0);
    const [imgUrl, setImgURL] = useState("");
    const handleUnlikeButton = () => {
        var to_skip = 1;
        setImgURL("");
        // User has no skills to filter then get the next post
        if (skillList.length == 0) {
            setCount(i + to_skip);
            return;
        }

        // Get the next relevant post upon user's filtered list
        var flag = true;
        while(flag == true && (i+to_skip) < data.length){
            var next_post_skills = data[(i+to_skip)]?.skilllist;
            for(var filter_ind = 0; filter_ind < skillList.length; filter_ind++){
                for(var post_ind = 0; post_ind < next_post_skills.length; post_ind++)
                {
                    console.log(skillList[filter_ind], next_post_skills[post_ind])

                    // Find match between post's necessary skills and skills filtered by user
                    if (skillList[filter_ind] == next_post_skills[post_ind])
                    {
                        setCount(i+to_skip);
                        flag = false;
                    }
                }
            }
            if (flag == true){
            to_skip++; 
            }
        }
        if (flag == true){

        setCount(i+to_skip);
        }
    }

    const handleLikeButton = () => { 
        modalOpen ? close() : open()
    }

    const necessarySkills = (value) => {
        setSkillList(value);
        setCount(0);
    }

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
                    onChange={(event, value) => necessarySkills(value)}
                
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Necessary Skills"
                            placeholder="Skills"
                        />
                    )}
                />
            <Button variant="contained" sx={{position: 'absolute', bottom : 790,right: 50}}>Search</Button>
            {/* <SinglePost
            first_name={data.posts[i].first_name}
            last_name={data.posts[i].last_name}
            field_of_study={data.posts[i].field_of_study}
            title={data.posts[i].title}
            short_description={data.posts[i].short_description}
            long_description={data.posts[i].long_description}
            img = {data.posts[i].img}
            /> */}
            {data.length > 0 && <SinglePost
                first_name={postsDb[i]?.first_name ?? ""}
                last_name={postsDb[i]?.last_name ?? ""}
                field_of_study={postsDb[i]?.field_of_study ?? ""}
                title={postsDb[i]?.title ?? ""}
                short_description={postsDb[i]?.short_description ?? ""}
                long_description={postsDb[i]?.long_description ?? ""}
                img={postsDb[i]?.imageref ?? ""}
                imgUrl={imgUrl}
                setImgURL={setImgURL}
            />}
            <Fab
                className='swiperight' 
                color="primary" 
                aria-label="add" 
                sx={{ position: 'absolute', bottom : 200, left: 60 }}
                onClick={handleUnlikeButton}
                >
                <CancelIcon/>
            </Fab>
            <Fab
                className='swiperight' 
                color="primary" 
                aria-label="add" 
                sx={{ position: 'absolute', bottom : 200, right: 60 }}
                onClick={handleLikeButton}
                >
                <FavoriteBorderIcon />
            </Fab>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} uid={postsDb[i]?.user } />}
        </div>
    )
}


