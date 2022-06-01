import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


// This is the bottom navigation bar, offering the user the ability to navigate between three main pages, Home, Favorites and locations
// source: https://mui.com/material-ui/react-bottom-navigation/


export default function SimpleBottomNavigation() {


  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newvalue) =>{
    setValue(newvalue)
  }
  const handleProfileClick = (event) => {
    event.preventDefault();
    navigate('/profile');}

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/Home');} 

    const handleMapClick = (event) => {
      event.preventDefault();
      navigate('/map');} 


    
  

  return (
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
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} onClick={handleProfileClick}/>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={handleHomeClick}/>
        <BottomNavigationAction label="Add Post" icon={<ControlPointIcon />} onClick={handleMapClick}/>
      </BottomNavigation>
    </Box>
  );
}
// 