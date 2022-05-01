import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useEffect, useRef, Fragment, onChange, onFileChange, classes, SvgIcon, UploadIcon } from 'react';
import Button from '@mui/material/Button';
import '../styles/AddPostImg.css';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PostForm() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImageURLs(newImageURLs);
    }, [images]);

    function handleImageChange(e) {
        setImages([...e.target.files]);
    }
    const uploadInputRef = useRef(null);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Contribute art to your local community
            </Typography>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="PostTitle"
                        name="PostTitle"
                        label="Title"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="Short Description"
                        name="Short Description"
                        label="Description"
                        fullWidth
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            hidden
                            onChange={handleImageChange}
                        />
                    </Button>
                    {imageURLs.map(imageSrc => <img src={imageSrc} className="addpostimg" />)}

                </Grid>
            </Grid>
        </React.Fragment>
    );
}