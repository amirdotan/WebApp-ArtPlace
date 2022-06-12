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
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import data from '../data/posts.json'



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

export default function RecipeReviewCard({img, first_name, last_name,field_of_study, short_description, long_description, title}) {


const navigate = useNavigate();
const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/Home');} 

  return (
    <Card className= 'singlepost' sx={{ maxWidth: '80%',margin: 5}}>
        

    <CardHeader textAlign="left"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title= {first_name +" "+ last_name}
        subheader= {field_of_study}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="We're having trouble loading the image"
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
