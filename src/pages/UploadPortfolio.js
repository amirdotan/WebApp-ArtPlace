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
import updatePortfolioInDB from '../components/UpdatePortfolioInDB';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';

export default function UploadPorfolio(){

    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [imageURLs, setImageURLs] = useState([]);
    const [imageList, setImageList] = useState([]);
    const auth = getAuth();
    const curr_user = auth.currentUser;
    const usersRef = doc(db, 'users', 'user_'+curr_user.uid)



    useEffect(() => {
        if (image == null) return;
        if (imageURLs.length == 6) {
            alert("Only 6 images are Allowed");
            return;
        }
        // Add to imageURLs for presenting
        const newImageURL = URL.createObjectURL(image);
        const tempURLs = [...imageURLs];
        tempURLs.push(newImageURL)
        setImageURLs(tempURLs);
        console.log(tempURLs)
        // Add to imagesList to pass to db
        const tempImageList = [...imageList];
        tempImageList.push(image);
        setImageList(tempImageList);
    }, [image]);

    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

    async function updateImagesClick (e)  {
        if (imageList.length != 6) {
            alert("You Have to upload 6 images to your portfolio");
            return;
        }
        await updatePortfolioInDB(imageList);
        // maybe needs to ne async?
        await updateDoc(usersRef, {
            portfolio: true
          });
        navigate('/profile')
    }

return(
    <>
        <Typography sx={{'padding-top': '15px' } } variant="h6">
    Add six photos to your portfolio
    </Typography>
        <ImageList sx={{ width: '100%', height: '100%' }} cols={2} rowHeight={164} variant="quilted">
        {imageURLs.map(item => (
          <ImageListItem key={item} >
            <img
              src={item}
              srcSet={item}
              alt={item}
              loading="lazy"
              
            />
          </ImageListItem>
        ))}
    </ImageList>
    <Button onClick={updateImagesClick}>
            Done
    </Button>
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
    {/* {imageURLs.map(imageSrc => <img src={imageSrc} className="addpostimg" />)} */}
    </>
);
}