import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useEffect, useRef, Fragment, onChange, onFileChange, classes, SvgIcon, UploadIcon } from 'react';
import Button from '@mui/material/Button';
import '../styles/AddPostImg.css';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import GetSkills from '../data/GetSkills';
import uploadImage from '../pages/UploadImage';
import { getAuth} from 'firebase/auth'



export default function UploadPorfolio(){

    const [image, setImage] = useState(null);
    const [imageURLs, setImageURLs] = useState([]);

    const auth = getAuth();
    const curr_user = auth.currentUser;

    const imageref = uploadImage(image, "post_images");

    useEffect(() => {
        if (image == null) return;
        const newImageURL = URL.createObjectURL(image);
        const temp = [...imageURLs];
        temp.push(newImageURL)
        setImageURLs(temp);
    }, [image]);

    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

return(
    <>
    <Button
        variant="contained"
        component="label"
        >
        Upload Picture
        <input
            type="file"
            hidden
            onChange={handleImageChange}
            />
    </Button>
    {imageURLs.map(imageSrc => <img src={imageSrc} className="addpostimg" />)}
    <Button>
        send
    </Button>
    </>
);
}