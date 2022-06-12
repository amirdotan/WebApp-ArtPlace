import ProfileInfo from '../components/ProfileInfo'
import ProfileSkills from '../components/ProfileSkills'
import ProfilePortfolio from '../components/ProfilePortfolio'
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { AuthContextProvider } from '../context/Authcontext';



// const user = auth.currentUser
// const docRef = doc(db, "users", "user_" + user.uid);
// const docSnap = await getDoc(docRef);



export default function Profile() {

    // if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }

    return(
        <>
            <ProfileInfo />
            <ProfileSkills />
            <ProfilePortfolio />
        </>

    )
}
