import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase';
import getUserData from './GetUserData';
import { getAuth } from 'firebase/auth';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';  
import DeletePostDB from '../components/DeletePostDB';
  


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));



export default function DeletePost(postName, postObj, setDeletedFlag) {
    const handleDeleteClick = async() => {
        await DeletePostDB(postObj);
         setDeletedFlag(true);
  };
  return (
    <Box sx={{ width: '100%' }} onClick={handleDeleteClick}>
      <Stack spacing={2}  margin='2%' marginLeft='10%' marginRight='10%'>
            <Fab variant="extended" size="small" color="primary">
            <DeleteIcon sx={{ mr: 1 }} />
             Delete  {postName}  Post 
            </Fab>
      </Stack>
    </Box>
  );
}
