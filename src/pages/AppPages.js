import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn"
import Home from "./Home";
import AddPost from "../components/AddPost";
import AboutPage from "../pages/AboutPage"
import ProfilePage from "./ProfilePage"
import SignUp2 from "./SignUPNEW"
import EditProfile from "./EditProfile"
import UploadImage from "./UploadImage"
import Requests from './Requests'
import NewProfile from "./NewProfilePage";
import UploadPortfolio from "./UploadPortfolio"
import NotMyProfile from "./NotMyProfile";
import GuestProfilePage from './GuestProfilePage';
import ProtectedRoute from "../components/ProtectedRoute";


function Pages({ signedIn, setSignedIn, signedUp, setSignedUp}) {
    return (
      <Routes>
            <Route path="/" element={<SignIn setSignedIn={setSignedIn } signedIn={signedIn}/>} />
            <Route path="/home" element={<ProtectedRoute> <Home  setSignedIn={setSignedIn } signedIn={signedIn} 
            setSignedUp={setSignedUp } signedUp={signedUp}/> </ProtectedRoute> } />
            <Route path="/addpost" element={ <AddPost />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/guestProfile" element={<GuestProfilePage />} />
            <Route path="/signup2" element={<SignUp2  setSignedUp={setSignedUp } signedUp={signedUp} />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/UploadFile" element={<UploadImage />} />
            <Route path="/Requests" element={<Requests />} />
            <Route path="/UploadPortfolio" element={<UploadPortfolio />} />
            <Route path="/test" element={<NewProfile/>} />
      </Routes>
    );
  }
  
  export default Pages;
  

