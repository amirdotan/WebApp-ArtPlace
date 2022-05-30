import './App.css';
// import to switch pages 
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestButton from './components/TestButton';
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { Container } from '@mui/material';


import AppBar from "./components/AppBar"
import AppPages from "./pages/AppPages"
import BottomNavigation from "./components/BottomNavigation"


 


function App() {

  return (
    // sx={{height: '100%'}}
    <div className="App" sx ={{width: '100%', right: '0%' }}>
      <head>
        {/* the meta tag here is for resizing on phones */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Container>
        <BrowserRouter>
          <AppBar />
          <AppPages />
          <BottomNavigation />
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
