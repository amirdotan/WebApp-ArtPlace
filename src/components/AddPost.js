import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PostForm from './PostForm';
import PostPreview from './PostPreview';
import { Navigate } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import BottomNavigation from '../components/BottomNavigation'
import { height } from '@mui/system';
import { useState, useEffect } from 'react';
import uploadImage from '../pages/UploadImage';
import addPost from './AddPostToDB';



const steps = ['Create Post', 'Preview Post'];

const theme = createTheme();

export default function AddPost() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
        
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const navigate = useNavigate();

    const useHomeButton = (event) => {
        event.preventDefault();
        navigate("/Home");
    }
    const [image, setImage] = useState(null);
    const [imageURLs, setImageURLs] = useState([]);
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("")
    const [longDescription, setLongDescription] = useState("")
    const [skillList, setSkillList] = useState([])

    useEffect(() => {
        /*Checks if user pressed done by checking on which step we are stated*/
        if (activeStep < 2) {
            return;
        }
        /*Calls upload image and passes it the image and a file to save it in firebase storage*/
        const imageref = uploadImage(image, "temp");
        /*Create new post by the diffrent states*/
        const newpost =
        {
            title: title,
            short: shortDescription,
            long: longDescription,
            imageref: imageref,
        };
        /*addpost to firestore db post*/
        addPost(newpost, "posts");
    });


    function getStepContent(step) {
        switch (step) {
            case 0:
                return <PostForm image={image} setImage={setImage} imageURLs={imageURLs} setImageURLs={setImageURLs}
                    setTitle={setTitle} setShortDescription={setShortDescription} setLongDescription={setLongDescription}
                    setSkillList={setSkillList} />;
            case 1:
                return <PostPreview imageURLs={imageURLs} title={title} shortDescription={shortDescription}
                    longDescription={longDescription} skillList={skillList} />;
            default:
                throw new Error('Unknown step');
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Add Post
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="subtitle1">
                                    All done! 
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', alignContent: 'left'}}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1}}>
                                            Back
                                        </Button>
                                    )}
                                </Box>
                                <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 , marginBottom: 4}}
                                    >
                                        {activeStep === steps.length - 1 ? 'Post' : 'Next'}
                                    </Button>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>

    );
}