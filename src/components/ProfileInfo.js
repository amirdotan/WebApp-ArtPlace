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


export default function RecipeReviewCard() {
  const user_name="Ayelet"
  const field_of_study="Industrial Design"
  const current_year = "second"
  // const subheader = '${field_of_study}' + 'at' + '${current_year}' + 'year';
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined" sx={{ }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary' }} aria-label="recipe">
            M
          </Avatar>
        }
        title={user_name}
        subheader= {field_of_study}      
      />
    </Card>
  );
}