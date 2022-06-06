import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import CloseIcon from '@mui/icons-material/Close';




export default function FloatingActionButtons() {
  return (
    <Fab color="secondary" aria-label="edit" sx={{position: 'absolute', bottom : 200, left: 60}} >
        <CloseIcon />
    </Fab>
  );
}
