import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/SinglePost.css'
import { maxHeight } from '@mui/system';
import { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import data from '../data/posts.json'
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase';
import getUserData from './GetUserData';
import { getAuth } from 'firebase/auth';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const auth = getAuth();

export default function RecipeReviewCard({img, first_name, last_name,skilllist, short_description, long_description, title, imgUrl, setImgURL, expanded, setExpanded, postUserId}) {

    const curr_user = auth.currentUser;
    const [relevantSkills, setRelevantSkills] = useState([])
    const [nonRelevantSkills, setNonRelevantSkills] = useState([])
    const [relSkillsTitle, setRelSkillsTitle] = useState("Your Relevant Skills: ")
    const [nonRelSkillsTitle, setNonRelSkillsTitle] = useState("Other Relevant Skills: ")
    const [imgAlt, setImgAlt] = useState("");
    const [projDescTitle, setProjDescTitle] = useState("Project Description: ");

const handleExpandClick = () => {
  setExpanded(!expanded);
};

const handleAvatarClick = (event) => {
  event.preventDefault();
  console.log(postUserId)
  navigate('/NotMe', {state: {profileId: postUserId}});} 

const navigate = useNavigate();

const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/Home');} 

useEffect(() => {
  const loadImg = async() => {
    const imgRef = ref(storage, `${img}`);
    getDownloadURL(imgRef)
    .then((url) => {
      setImgURL(url)
    }).catch((error) => console.log(error))
  }
  loadImg();
})
    // This Use effect updates relevant and nonRelevant List and their titles
    useEffect(() => {
        getUserData()
            .then((users) => {
                var tempRelSkills = [];
                var tempNonRelSkills = [];
                users.forEach((user) => {
                    // find active user
                    if (user.uid == curr_user.uid) {
                        // Map skills to relevant and non relevant
                        skilllist.forEach((skill) => {
                            if (user.skills.includes(skill)) {
                                tempRelSkills.push(skill);
                            }
                            else {
                                tempNonRelSkills.push(skill);
                            }
                        })
                        var counter = 1;
                        var tempRelWithCommas = [];
                        var tempNonRelWithCommas = [];
                        // Add commas to rel list
                        tempRelSkills.forEach((skill) => {
                            if (counter < tempRelSkills.length)
                            {
                                tempRelWithCommas.push(skill + ",");
                                counter++;
                            }
                            else { tempRelWithCommas.push(skill) }
                        })
                        // Add commas to NonRel list
                        counter = 1;
                        tempNonRelSkills.forEach((skill) => {
                            if (counter < tempNonRelSkills.length) {
                                tempNonRelWithCommas.push(skill + ",");
                                counter++;
                            }
                            else { tempNonRelWithCommas.push(skill) }
                        })
                        // Set rel and nonRel with commas 
                        setNonRelevantSkills(tempNonRelWithCommas);
                        setRelevantSkills(tempRelWithCommas);
                        return;
}
                })
            })
 
    }, [skilllist])
    // Updates Relevant Skill title according to Relevant skills
    useEffect(() => {
        if (relevantSkills.length == 0) {
            setRelSkillsTitle("");
        }
        else {
            setRelSkillsTitle("Your Relevant Skills: ");
        }
    }, [relevantSkills])
        // Updates NonRelevant Skill title according to Relevant skills and Non Relevant skills
    useEffect(() => {
        if (nonRelevantSkills.length != 0 && relevantSkills.length == 0) {
            setNonRelSkillsTitle("Necessary Skills: ");
        }
        else if (nonRelevantSkills.length == 0) {
            setNonRelSkillsTitle("");
        }
        else {
            setNonRelSkillsTitle("Other Necessary Skills: ");
        }
    }, [relevantSkills, nonRelevantSkills])
    // Sets State when out of posts
    useEffect(() => {
        if (img) {
            setImgAlt("Loading...")
            setProjDescTitle("Project Description: ")
        }
        else {
            setImgAlt("Out of posts, try again later")
            setProjDescTitle("")
        }
    })

  return (
    <Card className= 'singlepost' sx={{ maxWidth: '80%',margin: 5}}>
  
          <CardHeader textAlign="center" sx={{  display: 'flex', 'text-align': 'left', float: 'left' }}
              avatar={
                  <Avatar onClick={handleAvatarClick} sx={{ bgcolor: red[400]}} aria-label="recipe">
                      {first_name[0]}
                  </Avatar>
              }

              title={title}
              subheader={first_name + " " + last_name}
      />
      <CardMedia
              component="img"
              height="194"
              image={imgUrl}
              alt={ imgAlt }
      />
      <CardContent>
        <Typography paragraph variant="h6">
          {short_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
      <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

                  <Typography paragraph variant="h6" align="left">{projDescTitle }</Typography>
            <Typography paragraph align="left">
                {long_description}
                  </Typography>

                  <Typography paragraph variant="h6" align="left">{relSkillsTitle}</Typography>
                  <Typography paragraph align="left">
                      {relevantSkills.map((skill) => <b> {skill}</b>)}
                  </Typography>

                  <Typography paragraph variant="h6" align="left">{nonRelSkillsTitle}</Typography>
                  <Typography paragraph align="left">
                      {nonRelevantSkills.map((skill) => " " + skill)}
                  </Typography>

              </CardContent>
      </Collapse>
    </Card>
  );
}
