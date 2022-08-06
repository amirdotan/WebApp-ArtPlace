import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import data from '../data/db.json'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { Autocomplete } from '@mui/material';
import GetSkills from '../data/GetSkills';
import { uploadString } from 'firebase/storage';






//const SkillList = ["Video Editing", "Photography", "Animation", "Programming"];

// This is the sign up page 
// Source: https://github.com/mui/material-ui/tree/v5.6.3/docs/data/material/getting-started/templates/sign-up

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#679E84',
     }
    }
  });

export default function SignUp() {
    const [skillList, setSkillList] = useState([])
    const [usersDocRef, setUsersDocRef] = useState("")
const SkillList = GetSkills();


const auth = getAuth();
const curr_user = auth.currentUser



const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try{
      const user_details = {
        first_name : data.get("firstName"),
        last_name : data.get("lastName"),
        short_description : data.get("description"),
        skills : skillList,
        field : data.get("study"),
      }
      const usersDocRef = doc(db, "users", "user_"+curr_user.uid);
      await updateDoc(usersDocRef,{ user_details })
      navigate('/profile')
      console.log('data updated :)')
    }catch(e){
      console.log(e.message)
    }
  };

  const [profileDb, setProfileDb] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
        const usersDocR = doc(db, "users", "user_" + curr_user.uid);
        setUsersDocRef(usersDocR);
        const docSnap = await getDoc(usersDocR);
      if (docSnap.exists()) {
        setProfileDb(docSnap.data())   
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getProfile()
  }, []);



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#679E84' }}>
                        <EditIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Edit your profile
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} key={profileDb}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                  autoComplete="given-name"
                                  name="firstName"
                                  required
                                  fullWidth
                                  id="firstName"
                                  label="First Name"
                                  defaultValue= {profileDb.first_name}
                                  // autoFocus
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    defaultValue= {profileDb.last_name}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="study"
                                    label= "Field of Study"
                                    defaultValue= {profileDb.field}
                                    name="study"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="current year"
                                    label="current year"
                                    defaultValue= "DATA NOT GATHERD"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                     multiple
                                     id="SkillsList"
                                     name="Short Description"
                                     label="SkillsList"
                                     fullWidth
                                     variant="standard"
                                     options={SkillList}
                                     getOptionLabel={option => option}
                                     defaultValue={profileDb.skills}
                                     filterSelectedOptions
                                     onChange={(event, value) => setSkillList(value)}
                                
                                     renderInput={(params) => (
                                         <TextField
                                             {...params}
                                             label="Skills"
                                             placeholder="Skills"
                                         />
                                     )}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label = "short description"
                                    defaultValue= {profileDb.short_description} 
                                    name="description"
                                    autoComplete="description"
                                    multiline
                                    rows={4}
                                />
                            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick = {navigate("/Profile")}
            >
              Update Changes
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}