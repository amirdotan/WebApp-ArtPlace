import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';

// This is the bottom navigation bar, offering the user the ability to navigate between three main pages, Home, Favorites and locations
// source: https://mui.com/material-ui/react-bottom-navigation/

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newvalue) =>{
    setValue(newvalue)
  }

  return (
    <Box sx={{ width: '100%', bottom:0, position: 'fixed'}}>
      <BottomNavigation
        showLabels
        value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        onChange= {(event, newvalue) => handleChange(event, newvalue)}
      >
        {/* TODO: organize the hrefs and  */}
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} href='/Home'/>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} href='/Home'/>
        <BottomNavigationAction label="Locations" icon={<LocationOnIcon />} href='/map'/>
      </BottomNavigation>
    </Box>
  );
}
// 