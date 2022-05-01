import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// This is the bottom navigation bar, offering the user the ability to navigate between three main pages, Home, Favorites and locations
// source: https://mui.com/material-ui/react-bottom-navigation/

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#679E84',
     }
    }
  });


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newvalue) =>{
    setValue(newvalue)
  }
  const handleAboutClick = (event) => {
    event.preventDefault();
    navigate('/about');}

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/Home');} 

    const handleMapClick = (event) => {
      event.preventDefault();
      navigate('/map');} 
  

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%', position: 'fixed',zIndex:2000,  bottom:0 }}>
      <BottomNavigation
        showLabels
        value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        onChange= {(event, newvalue) => handleChange(event, newvalue)}
      >
        {/* TODO: organize the hrefs and  */}
        <BottomNavigationAction label="About" icon={<InfoIcon />} onTouchStart={handleAboutClick}/>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} onTouchStart={handleHomeClick}/>
        <BottomNavigationAction label="Locations" icon={<LocationOnIcon />} onTouchStart={handleMapClick}/>
      </BottomNavigation>
    </Box>
    </ThemeProvider>
  );
}
// 