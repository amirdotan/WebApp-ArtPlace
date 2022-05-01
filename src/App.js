import './App.css';
// import to switch pages 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import sign in page
import SignIn from './pages/SignIn.js'
// import sign up page
import SignUp from './pages/SignUp.js'
// import Home page
import Home from './pages/Home.js'
import SinglePost from './components/SinglePost'
import AddPost from './components/AddPost';
import AboutPage from './pages/AboutPage';
import TestButton from './components/TestButton';
// import SimpleMap from './pages/Map'
import Map from './pages/Map.tsx'
 


// const locations = require("./data/locations.json");

// function Mapfunc() {
//   return (
//     <div className="Map">
//       <SimpleMap locations={locations} />
//     </div>
//   );
// }


function App() {

  return (
    // sx={{height: '100%'}}
    <div className="App" sx ={{width: '100%', right: '0%' }}>
      <head>
        {/* the meta tag here is for resizing on phones */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Router>
        <Routes>
            {/* <Route path="/post/example_1" element={<MainWindow />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/addpost" element={<AddPost/>}/> */}
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            {/* this is a test route */}
            <Route path="/test" element={<TestButton />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
