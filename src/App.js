import './App.css';
// import to switch pages 
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { createTheme, colors, ThemeProvider } from "@mui/material";
import { Container } from '@mui/material';


import AppBar from "./components/AppBar"
import AppPages from "./pages/AppPages"
import BottomNavigation from "./components/BottomNavigation"

import { AuthContextProvider } from './context/Authcontext';
import BottomNavPresenter from './components/BottomNavPresenter';
import { useState, useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#679E84',
     }
    }
  });


function App() {

    const [signedIn, setSignedIn] = useState(true)
    const [signedUp, setSignedUp] = useState(true)

  return (
    <AuthContextProvider> 
      <ThemeProvider theme={theme}>
        <div className="App" sx ={{width: '100%', right: '0%'}}>
          <head>
            {/* the meta tag here is for resizing on phones */}
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </head>
                  <BrowserRouter>
                      <AppBar signedIn={signedIn} signedUp={signedUp}  />
                      <AppPages signedIn={signedIn} setSignedIn={setSignedIn } signedUp={signedUp} setSignedUp={setSignedUp } />
              <BottomNavPresenter> <BottomNavigation /> </BottomNavPresenter>
            </BrowserRouter>
        </div>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
