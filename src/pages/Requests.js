import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import data from '../data/db.json'
import { useNavigate } from 'react-router-dom';

export default function OneRequest() {
  const user_name=data.users[0].first_name + " "+  data.users[0].last_name //this is the name of the firat object at db.json  
  const subheader = "I am a great photographer and I think I fit perfectly to your project"
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  return (
    <>
    <Card variant="outlined" color="primary" sx={{position:'static'}}>
      <CardHeader sx={{}}
        avatar={
          <Avatar sx={{ bgcolor: 'primary'}} aria-label="recipe">
            A
          </Avatar>
        }
        title={user_name}
        subheader= {subheader}
      />
    </Card>
    </>
  );
}