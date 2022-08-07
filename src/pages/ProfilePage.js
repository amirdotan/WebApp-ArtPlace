import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import data from '../data/db.json'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { db, storage } from '../firebase';
import { getAuth } from 'firebase/auth';
import Chip from '@mui/material/Chip';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PortfolioPresenter from '../components/PorfolioPresenter'
import AddPortfolioPresenter from '../components/AddPortfolioPresenter';
import { getDownloadURL, ref } from 'firebase/storage';
import '../styles/AddPortfolio.css'
import getUserData from '../components/GetUserData';
import GetPostsData from '../components/GetPostsData';
import DeletePost from '../components/DeletePost';
import { doc, getDoc } from "firebase/firestore";
import { element } from 'prop-types';
import Paper from '@mui/material/Paper';


export default function Profile() {
    const user_name = data.users[0].first_name + " " + data.users[0].last_name //this is the name of the firat object at db.json  
    const field_of_study = data.users[0].field_of_study
    const current_year = data.users[0].current_year
    const subheader = field_of_study + ", " + current_year + " year"
    const [expanded, setExpanded] = React.useState(false);

    const [profileDb, setProfileDb] = useState([]);
    const auth = getAuth();
    const curr_user = auth.currentUser

    const [avatar_letter, setAvatarLetter] = useState([]);
    const [portfolio_link, setPorfolioLink] = useState(false);
    const [portfolioPics, setPortfolioPics] = useState([]);
    const [firstName, setFirstName] = useState(" ");
    const [postsList, setPostsList] = useState([]);
    const [postsListTitles, setPostsListTitles] = useState([]);
    const [postsListObjects, setPostsListObjects] = useState([]);
    const [users, setUsers] = useState("")
    const [deletedFlag, setDeletedFlag] = useState("false")

    const navigate = useNavigate();
    // Loads Users
    useEffect(() => {
        const loadUsers = async () => {

            const tempUsers = await getUserData();
            setUsers(tempUsers);
        }
        loadUsers()
    }, [])
    // load images
    useLayoutEffect(() => {
        if (users) {
            getSpecificUser()
        }
    }, [users])
    
    const getSpecificUser = async () => {
        users?.forEach(async (user) => {
            if (user.uid == curr_user?.uid) {
                setProfileDb(user)

                if (user?.uportfolio && user?.uportfolio != []) {
                    const tempList = await downloadImgRef(user)
                    setPortfolioPics(tempList)

                    return user.uportfolio
                }

            }
        })
    }
    // define if portfolio exists
    useEffect(() => {
        if (profileDb?.portfolio) {
            setPorfolioLink(true)
        }
    }, [portfolioPics])

    // download all images in url format
    const downloadImgRef = async (user) => {
        var tempList = []
        for (var i = 0; i < 6; ++i) {
            const imgRef = await ref(storage, `${user.uportfolio[i]}`)

            await getDownloadURL(imgRef)
                .then((url) => {
                    if (i == 0) {
                    }
                    tempList.push(url)
                })
                .catch((error) => console.log(error))
        }
        return tempList
    }

    // update user name and all users posts
    useEffect(() => {
        const getUserData1 = async () => {
                    users?.forEach((user) => {
                        if (user.uid == curr_user?.uid) {
                            setFirstName(user.first_name)
                            setPostsList(user.uposts);
                        }
                    })
        };
        if (users) {
            getUserData1();
        }
    }, [users])

    // Rerender after delete
    useEffect(() => {

        if (deletedFlag == false) {
            return
        }
        setDeletedFlag(false)
        getPostsTitles()
    }, [deletedFlag])

    const getPostsTitles = async () => {
        const curr_titles = []
        const curr_Objects = []
        for (var element_ind = 0; element_ind < postsList.length; element_ind++) {
            const docRef = doc(db, "posts", postsList[element_ind]);
            const docSnap = await getDoc(docRef);

            if (docSnap.data() && docSnap.data()?.title) {
                curr_titles.push(docSnap.data().title)
                curr_Objects.push(docSnap.data())
            }

        }
        setPostsListTitles(curr_titles)
        setPostsListObjects(curr_Objects)
    };
    // Get post titles
    useEffect(() => {
        getPostsTitles();
    },[postsList])

    return (
        <div style={{height: '100vh'}}>
            <Card variant="outlined" color="primary" sx={{ position: 'static' }}>
                <Button onClick={() => navigate("/EditProfile")} color="primary" sx={{ display: 'flex', flexdirection: 'row', justifyContent: 'right', right: '-80%' }}>Edit</Button>
                <CardHeader textAlign="center" sx={{ display: 'flex', 'text-align': 'left', float: 'left' }}
                    avatar={
                        <Avatar sx={{ bgcolor: 'primary' }} aria-label="recipe">
                            {firstName[0]}
                        </Avatar>
                    }
                    title={(profileDb?.first_name ?? "") + " " + (profileDb?.last_name ?? "")}
                    subheader={profileDb?.field ?? ""}
                />
            </Card>


            <Stack direction="row" spacing={3} sx={{ margin: 2 }}>
                {profileDb.skills?.map((skill) => (<Chip label={skill} color="primary" />))}
            </Stack>

            <PortfolioPresenter portfolio_link={portfolio_link}>
                <ImageList sx={{ width: '100%'}} cols={2} rowHeight={164} variant="quilted">
                    {portfolioPics.map((item) => (
                        <ImageListItem key={item} >
                            <img
                                src={`${item}?w=248&fit=crop&auto=format&object-fit=cover`}
                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </PortfolioPresenter>


            <AddPortfolioPresenter portfolio_link={portfolio_link}  >

                <Card sx={{ maxWidth: 345 }} className="addportfoliocard" sx={{ position: 'absolute' }} > 
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Hey There :)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is the spot for you to showcase your creativity. Adding a
                            portfolio helps find better fitting partners, give it a try!
                        </Typography>
                    </CardContent>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/UploadPortfolio')}
                        sx={{}}>
                        Get Started
                    </Button>
                </Card>
            </AddPortfolioPresenter>

            <Stack style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: !portfolio_link ? '85vh' : '10vh',
                position: 'flex'
            }} >
                {postsListTitles?.map((post, i) => (DeletePost(post, postsListObjects[i], setDeletedFlag)))}
            </Stack>
            <br/>
            <p style={{ color: "gray" }}>Partake © {new Date().getFullYear()}</p>
            <br/>
            <br/>
            <br/>
        </div>        
    );
}


