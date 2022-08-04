import * as React from 'react';
import { useState, useEffect } from 'react';
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import data from '../data/db.json'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getAuth } from 'firebase/auth';
import Chip from '@mui/material/Chip';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PortfolioPresenter from './PorfolioPresenter'
import AddPortfolioPresenter from './AddPortfolioPresenter';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { getDownloadURL, ref } from 'firebase/storage';
import '../styles/AddPortfolio.css'
import { Grid } from '@mui/material';
import { UserAuth } from '../context/Authcontext';
import {
    addDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import getUserData from './GetUserData';


export default function RecipeReviewCard() {
  const user_name=data.users[0].first_name + " "+  data.users[0].last_name //this is the name of the firat object at db.json  
  const field_of_study=data.users[0].field_of_study
  const current_year = data.users[0].current_year 
  const subheader = field_of_study + ", " + current_year + " year"
  const [expanded, setExpanded] = React.useState(false);


  const [profileDb, setProfileDb] = useState([]);
  const auth = getAuth();
  const curr_user = auth.currentUser


  const [avatar_letter, setAvatarLetter] = useState([]);
  const [portfolio_link, setPorfolioLink] = useState(false);
  const [portfolioPics, setPortfolioPics] = useState([]);
  
  var img = document.createElement("img");  
  img.src = "../images/portfolio1.jpg"; 

  useEffect(() => {
    const getProfile = async () => {
      const usersDocRef = doc(db, "users", "user_"+curr_user.uid);
      const docSnap = await getDoc(usersDocRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        // portfolio link is a flag representing wether the user uploaded a portfolio or not
        setPorfolioLink(docSnap.data().portfolio)
        
        // if user uploaded a portofolio loop through it and load the relevant images
        if (docSnap.data().portfolio == true ){ 
          docSnap.data().uportfolio.forEach((pic_link) => {
            var tempPortfolioPics = [...portfolioPics];
            tempPortfolioPics.push(pic_link);
            console.log(tempPortfolioPics)
            setPortfolioPics(tempPortfolioPics);
            console.log(portfolioPics)
          })
          console.log(portfolioPics)
        } 
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      // set the profileDb variable to the user data
      setProfileDb(docSnap.data())
    };
    getProfile()
    .then(() => {
      console.log(portfolioPics)
      portfolioPics.forEach((pic) => {
        loadImg(pic)
      })
    })


  }, []);



  // this function should load the pictures and add them to a list to later present in image list react object
    const loadImg = async(img) => {
      const imgRef = ref(storage, `${img}`);
      getDownloadURL(imgRef)
      .then((url) => {
        const t = [...portfolioPics]
        t.push(url)
        console.log(t)
        setPortfolioPics(t)
        console.log(portfolioPics)
      }).catch((error) => console.log(error))}

  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(" ");

  useEffect(() => {
    const getUserData1 = async () => {
      getUserData()
      .then((users) => {
        users.forEach((user) => {
        if (user.uid == curr_user.uid) {
          setFirstName(user.first_name)
        }
      })})
    };
    getUserData1();
    })
  

  return (
    <>
    <Card variant="outlined" color="primary" sx={{position:'static'}}>
    <Button onClick={() => navigate("/EditProfile")} color="primary" sx={{display: 'flex', flexdirection: 'row', justifyContent:'right', right: '-80%'}}>Edit</Button>
      <CardHeader sx={{}}
        avatar={
          <Avatar sx={{ bgcolor: 'primary'}} aria-label="recipe">
            {firstName[0]}
          </Avatar>
        }
        title={profileDb.first_name + " " + profileDb.last_name}
        subheader= {profileDb.field}
      />
    </Card>
    
    
    <Stack direction="row" spacing={3} sx={{margin: 2}}>
    {profileDb.skills?.map((skill) => (<Chip label={skill} color="primary" />))}
    </Stack>
    
    <PortfolioPresenter portfolio_link={portfolio_link}>
      <ImageList sx={{ width: '100%', height: '100%' }} cols={2} rowHeight={164}>
        {portfolioPics.map((item) => (
          <ImageListItem key={item}>
            <img
              src={item}
              srcSet={item}
              alt={item}
              loading="lazy"
              
            />
          </ImageListItem>
        ))}
      </ImageList>
    </PortfolioPresenter>
    {/* <AddPortfolioPresenter>
      <Button onClick={() => navigate("/Requests")} color="primary" >Requests</Button>
    </AddPortfolioPresenter> */}

    {/* now create a presenter for adding portfolio images  */}
    {/* create an object that alows uploading pics to the portfolio */}
    {/* fuck me right? */}
    <AddPortfolioPresenter portfolio_link={portfolio_link}>
      {/* // this needs to be centerd try using css locator  */}
      {/* const { classes } = props; */}
      <Card sx={{ maxWidth: 345 }} class="addportfoliocard">
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Hey There :)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is the spot for you to showcase your creativity.
            Adding a portfolio helps find better fitting partners, give it a try!
          </Typography>
        </CardContent>
        <Button variant="contained" onClick={() => navigate("/UploadPortfolio") } sx={{}} >Get Started</Button>
      </Card>
    </AddPortfolioPresenter>
    </>
  );
}


const itemData = [
  {
    img: "https://www.artmajeur.com/medias/hd/b/u/bunner/artwork/11062765_grafitti-1.jpg"
  },
  {
    img: 'https://static.wixstatic.com/media/029590_f913efa3afe7489794796d67143842f0~mv2.jpg/v1/fill/w_292,h_709,al_c,q_80,enc_auto/029590_f913efa3afe7489794796d67143842f0~mv2.jpg',
    title: 'Burger',
  },
  {
    img: 'https://i.ytimg.com/vi/LXjukR09HrI/maxresdefault.jpg',
    title: 'Camera',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Selfie_art.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT9ilQCW7ac42tK1dgaAc_BeN1rP5pIscyQ&usqp=CAU',
    title: 'Hats',
  },
  {
    img: 'https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg',
    title: 'Honey',
  },
];


