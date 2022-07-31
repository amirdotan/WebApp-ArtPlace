import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/SinglePost.css'
import { maxHeight } from '@mui/system';
import { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import data from '../data/posts.json'
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({img, first_name, last_name,field_of_study, short_description, long_description, title, imgUrl, setImgURL}) {

const handleAvatarClick = (event) => {
  event.preventDefault();
  navigate('/profile');} 

const navigate = useNavigate();

const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/Home');} 

useEffect(() => {
  const loadImg = async() => {
    const imgRef = ref(storage, `${img}`);
    getDownloadURL(imgRef)
    .then((url) => {
      setImgURL(url)
    }).catch((error) => console.log(error))
  }
  loadImg();
})

  return (
    <Card className= 'singlepost' sx={{ maxWidth: '80%',margin: 5}}>
        

    <CardHeader textAlign="left"
        avatar={
          <Avatar onClick = {handleAvatarClick} sx={{ bgcolor: red[400] }} aria-label="recipe">
            {first_name[0]}
          </Avatar>
        }
        title= {first_name +" "+ last_name}
        subheader= {field_of_study}
      />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="No more relevent posts for you, please try again later"
      />
      <CardContent>
        
        <Typography variant="title" >
        {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {short_description}
          </Typography>
        </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {long_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}
