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



// whats up
function Pages() {
    return (
      <Routes>
            <Route path="/" element={<SignIn />} />
            
            <Route path="/home" element={<Home />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/signup2" element={<SignUp2 />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/UploadFile" element={<UploadImage />} />
      </Routes>
    );
  }
  
  export default Pages;
  

