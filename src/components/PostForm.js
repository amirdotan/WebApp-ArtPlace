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


const SkillList = ["Video Editing", "Photography", "Animation", "Programming"];



export default function PostForm({ images, setImages, imageURLs, setImageURLs,
    setTitle, setShortDescription, setLongDescription, setSkillList}) {

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImageURLs(newImageURLs);
    }, [images]);

    function handleImageChange(e) {
        setImages([...e.target.files]);
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Your partners are right around the corner
            </Typography>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="PostTitle"
                        name="PostTitle"
                        label="Project in one word"
                        fullWidth
                        variant="standard"
                        onChange={event => setTitle(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="Short Description"
                        name="Short Description"
                        label="Brief Description"
                        fullWidth
                        variant="standard"
                        onChange={event => setShortDescription(event.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="Long Description"
                        name="Long Description"
                        label="Extensive Description"
                        multiline
                        fullWidth
                        rows={4}
                        onChange={event => setLongDescription(event.target.value)}
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
                        defaultValue={[]}
                        filterSelectedOptions
                        onChange={(event, value) => setSkillList(value)}

                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Necessary Skills"
                                placeholder="Skills"
                            />
                        )}
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