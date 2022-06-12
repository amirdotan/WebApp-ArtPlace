import ProfileInfo from '../components/ProfileInfo'
import ProfileSkills from '../components/ProfileSkills'
import ProfilePortfolio from '../components/ProfilePortfolio'
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { AuthContextProvider } from '../context/Authcontext';





export default function Profile() {

    return(
        <>
            <ProfileInfo />
            <ProfileSkills />
            <ProfilePortfolio />
        </>

    )
}
