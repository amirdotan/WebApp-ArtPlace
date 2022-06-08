import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn"
import Home from "./Home";
import AddPost from "../components/AddPost";
import AboutPage from "../pages/AboutPage"
import ProfilePage from "./ProfilePage"
import SignUp2 from "./SignUPNEW"
import EditProfile from "./EditProfile"
import UploadImage from "./UploadImage"

import ProtectedRoute from "../components/ProtectedRoute";


// TODO: protect pages if your no logged in by wrapping components like this : <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute> } />
// whats up
function Pages() {
    return (
      <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute> } />
            <Route path="/addpost" element={ <AddPost />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup2" element={<SignUp2 />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/UploadFile" element={<UploadImage />} />
      </Routes>
    );
  }
  
  export default Pages;
  

