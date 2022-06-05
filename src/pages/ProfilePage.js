import ProfileInfo from '../components/ProfileInfo'
import ProfileSkills from '../components/ProfileSkills'
import ProfilePortfolio from '../components/ProfilePortfolio'

export default function Profile() {

    return(
        <div className='ProfileContainer' sx={{height:'100%'}}>
            {/* <ProfileInfo />
            <ProfileSkills /> */}
            <ProfilePortfolio />
        </div>
    )
}
