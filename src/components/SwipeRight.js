import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function SwipeRightButton() {
  return (
      <Fab color="primary" aria-label="add" sx={{ position: 'absolute', bottom : 200, right: 60 }}>
        <AddIcon />
      </Fab>

  );
}
