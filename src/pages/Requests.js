import * as React from 'react';
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

export default function RecipeReviewCard() {
  const user_name=data.users[0].first_name + " "+  data.users[0].last_name //this is the name of the firat object at db.json  
  const field_of_study=data.users[0].field_of_study
  const current_year = data.users[0].current_year 
  const subheader = field_of_study + ", " + current_year + " year"
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  return (
    <>
    <Card variant="outlined" color="primary" sx={{position:'static'}}>
    <Button onClick={() => navigate("/EditProfile")} color="primary" sx={{display: 'flex', flexdirection: 'row', justifyContent:'right', right: '-80%'}}>Edit</Button>
      <CardHeader sx={{}}
        avatar={
          <Avatar sx={{ bgcolor: 'primary'}} aria-label="recipe">
            M
          </Avatar>
        }
        title={user_name}
        subheader= {subheader}
      />
    </Card>
    </>
  );
}